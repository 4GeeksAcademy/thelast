import os
from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from .models import db
from .routes import api

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET", "supersecret")

    db.init_app(app)
    Migrate(app, db)
    JWTManager(app)

    app.register_blueprint(api, url_prefix="/api")
    return app

app = create_app()
