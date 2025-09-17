from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .models import db, User

api = Blueprint("api", __name__)

@api.post("/signup")
def signup():
    data = request.json
    if not data.get("email") or not data.get("password"):
        return jsonify({"msg": "Faltan campos"}), 400

    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"msg": "Usuario ya existe"}), 400

    user = User(
        email=data["email"],
        password=generate_password_hash(data["password"])
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado"}), 201

@api.post("/login")
def login():
    data = request.json
    user = User.query.filter_by(email=data.get("email")).first()
    if not user or not check_password_hash(user.password, data.get("password")):
        return jsonify({"msg": "Credenciales incorrectas"}), 401

    token = create_access_token(identity=user.id)
    return jsonify({"token": token, "email": user.email})

@api.get("/private")
@jwt_required()
def private():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"email": user.email})

@api.get("/hello")
def hello():
    return {"message": "ok"}
