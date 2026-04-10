from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Registration, Login
from rest_framework.response import Response
import os
from dotenv import load_dotenv


# 🔹 REGISTER API
@api_view(['POST'])
def register(request):
    data = request.data

    try:
        # ✅ Required fields
        required_fields = ['full_name', 'email', 'age', 'gender', 'phone_number', 'password']
        for field in required_fields:
            if field not in data or data[field] == "":
                return Response({"error": f"{field} is required"}, status=400)

        # ✅ Duplicate check
        if Registration.objects.filter(email=data['email']).exists():
            return Response({"error": "Email already exists"}, status=400)

        if Registration.objects.filter(phone_number=data['phone_number']).exists():
            return Response({"error": "Phone number already exists"}, status=400)

        # ✅ Gender validation
        if data['gender'] not in ['Male', 'Female', 'Other']:
            return Response({"error": "Invalid gender"}, status=400)

        # ✅ Create user
        user = Registration.objects.create(
            full_name=data['full_name'],
            email=data['email'],
            age=int(data['age']),  # 🔥 FIX
            gender=data['gender'],
            phone_number=data['phone_number'],
            password=data['password']
        )

        return Response({
            "message": "User Registered Successfully",
            "user": user.full_name
        }, status=201)

    except Exception as e:
        return Response({"error": str(e)}, status=500)


# 🔹 LOGIN API
@api_view(['POST'])
def login(request):
    data = request.data

    try:
        if 'email' not in data or 'password' not in data:
            return Response({"error": "Email and Password required"}, status=400)

        user = Registration.objects.filter(email=data['email']).first()

        if not user:
            return Response({"error": "User not found"}, status=404)

        if data['password']!= user.password:
            return Response({"error": "Invalid password"}, status=401)

        Login.objects.create(
            username=user.full_name,
            email=user.email,
            password=user.password,
        )

        return Response({
            "message": "Login Successful",
            "user": user.full_name
        }, status=200)

    except Exception as e:
        return Response({"error": str(e)}, status=500)
    

from google import genai
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def chat(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            user_message = body.get("message")

            client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

            response = client.models.generate_content(
                model="gemini-2.0-flash",   # ✅ FIXED MODEL
                contents=user_message
            )

            return JsonResponse({
                "reply": response.text
            })

        except Exception as e:
            print("🔥 REAL ERROR:", str(e))
            return JsonResponse({"error": str(e)}, status=500)