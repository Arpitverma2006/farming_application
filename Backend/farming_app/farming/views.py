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
    

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

@csrf_exempt
def chat(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            message = data.get("message")

            if not message:
                return JsonResponse({"error": "No message provided"}, status=400)

            response = client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[
                    {"role": "system", "content": "You are a helpful farming assistant AI."},
                    {"role": "user", "content": message}
                ]
            )

            reply = response.choices[0].message.content

            return JsonResponse({"reply": reply})

        except Exception as e:
            print("🔥 GROQ ERROR:", str(e))
            return JsonResponse({"error": str(e)}, status=500)