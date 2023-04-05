from random import choice as rc
# from faker import Faker
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, FilmSimulation, Photo, FilmSimPhoto

with app.app_context():

    print("Deleting data...")
    Photo.query.delete()
    FilmSimulation.query.delete()
    FilmSimPhoto.query.delete()

    print("Starting seed...")

    print("Creating Photos...")
    portrait1 = Photo(description = "", location = "", film_simulation = "", cinebloom_10 = "", type = "", image = "")


    nature1 = Photo(description = "", location = "", film_simulation = "", cinebloom_10 = "", type = "", image = "")



    street1 = Photo(description = "", location = "", film_simulation = "", cinebloom_10 = "", type = "", image = "")


    event1 = Photo(description = "", location = "", film_simulation = "", cinebloom_10 = "", type = "", image = "")


    grad1 = Photo(description = "", location = "", film_simulation = "", cinebloom_10 = "", type = "", image = "")



    print("Creating Film Simulations...")

    kodachrome64 = FilmSimulation(
        film = "Kodachrome 64"
        dynam_range = ""
        highlight = ""
        shadow = ""
        color = ""
        noise_reduction = ""
        sharpening = ""
        clarity = ""
        grain = ""
        color_chrome = ""
        white_balance = ""
        iso = ""
        exposure = ""
    )

    superia100 = FilmSimulation(
        film = "Kodachrome 64"
        dynam_range = ""
        highlight = ""
        shadow = ""
        color = ""
        noise_reduction = ""
        sharpening = ""
        clarity = ""
        grain = ""
        color_chrome = ""
        white_balance = ""
        iso = ""
        exposure = ""
    )

    point_and_shoot = FilmSimulation(
        film = "Kodachrome 64"
        dynam_range = ""
        highlight = ""
        shadow = ""
        color = ""
        noise_reduction = ""
        sharpening = ""
        clarity = ""
        grain = ""
        color_chrome = ""
        white_balance = ""
        iso = ""
        exposure = ""
    )