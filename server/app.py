#!/usr/bin/env python3

from flask import Flask, make_response, request, jsonify, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError

from models import db, User, Photo, FilmSimulation, FilmSimPhoto, Camera, ShootIdea
# Local imports
from config import app, db, api

#create login page
class Signup(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')

        user = User(
            username=username,

        )

        # the setter will encrypt this
        user.password_hash = password

        print('first')

        try:

            print('here!')

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            print(user.to_dict())

            return user.to_dict(), 201

        except IntegrityError:

            print('no, here!')
            
            return {'error': '422 Unprocessable Entity'}, 422

class CheckSession(Resource):
    
    def get(self):

        if session.get('user_id'):

            user = User.query.filter(User.id == session['user_id']).first()

            return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401

class Login(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')

        user = User.query.filter(User.username == username).first()

        if user:
            if user.authenticate(password):

                session['user_id'] = user.id
                return user.to_dict(), 200

        return {'error': '401 Unauthorized'}, 401

class Logout(Resource):
    
    def delete(self):
        
        if session.get('user_id'):
            
            session['user_id'] = None
            
            return {}, 204
        
        return {'error': '401 Unauthorized'}, 401
    
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')




#build routes

@app.route('/')
def home():
    return ''

#GET and POST for User
#need to make admin only login so only admin can see certain elements/buttons
@app.route('/users', methods=['GET', 'POST'])
def user():
    users = User.query.all()
    if request.method == 'GET':
        users_dict = [user.to_dict() for user in users]

        response = make_response(
            jsonify(users_dict),
            200
        )

        return response
    

    elif request.method == 'POST':

        try:
            new_user = User(
                username = request.get_json()['username'],

            )
            db.session.add(new_user)
            db.session.commit()

            response = make_response(
                jsonify(new_user.to_dict()),
                201
            )

        except ValueError:

            response = make_response(
                {"error": "validation errors"},
                400
            )
    return response


#GET and POST for Photo
#need to make admin only login for me to make posts to my portfolio
@app.route('/photos', methods=['GET', 'POST'])
def photo():
    photos = Photo.query.all()
    if request.method == 'GET':
        photos_dict = [photo.to_dict() for photo in photos]

        response = make_response(
            jsonify(photos_dict),
            200
        )

        return response
    

    elif request.method == 'POST':

        try:
            new_photo = Photo(
                description = request.get_json()['description'],
                film = request.get_json()['film'],
                location = request.get_json()['location'],
                type = request.get_json()['type'],
                image = request.get_json()['image'],
                cinebloom_10 = request.get_json()['cinebloom_10']
            )
            db.session.add(new_photo)
            db.session.commit()

            response = make_response(
                jsonify(new_photo.to_dict()),
                201
            )

        except ValueError:

            response = make_response(
                {"error": "validation errors"},
                400
            )
    return response

#GET DELETE PATCH specific Photo object

@app.route('/photos/<int:id>', methods=['GET', 'DELETE', 'PATCH'])
def photoById(id):
    photo = Photo.query.filter_by(id=id).first()

    if request.method == 'GET':
        if photo:
            photo_dict = photo.to_dict() 

            response = make_response(
                jsonify(photo_dict),
                    200
            )
        else:
            response = make_response(
                {"error": "Photo not fount"},
                404
            )

        return response
    
    elif request.method == 'DELETE':
        photo = Photo.query.filter(Photo.id == id).first()

        if not photo:
            response = make_response(
                {"error": "Photo not fount"},
                404
            )
            return response
        
        db.session.delete(photo)
        db.session.commit()
        return make_response({'success':"DELETED"}, 200)
    
    elif request.method == 'PATCH':
        photo = Photo.query.filter(Photo.id == id).first()

        if not photo:
            response = make_response(
                {"error": "Photo not fount"},
                404
            )
            return response
        
        for attr in request.get_json():
            setattr(photo, attr, request.get_json()[attr])

        db.session.add(photo)
        db.session.commit()

        return make_response(
            photo.to_dict(),
            200
        )


#GET for film simulation
@app.route('/film_simulations', methods=['GET'])
def film_sim():
    film_sims = FilmSimulation.query.all()
    if request.method == 'GET':
        film_sims_dict = [film_sim.to_dict() for film_sim in film_sims]

        response = make_response(
            jsonify(film_sims_dict),
            200
        )

        return response
    

#GET for film sim photo
@app.route('/film_sim_photos/<int:id>', methods=['GET'])
def filmSimPhotos(id):
    filmSim_photos = FilmSimPhoto.query.filter_by(id = id).first()
    filmSim_photos_dict = filmSim_photos.to_dict() 

    response = make_response(
        jsonify(filmSim_photos_dict),
        200
    )

    return response
    


#GET and POST for shoot ideas
@app.route('/shoot_ideas', methods=['GET', 'POST'])
def shoot():
    shoots = ShootIdea.query.all()
    if request.method == 'GET':
        shoots_dict = [shoot.to_dict() for shoot in shoots]

        response = make_response(
            jsonify(shoots_dict),
            200
        )

        return response
    

    elif request.method == 'POST':

        try:
            new_shoot = ShootIdea(
                name = request.get_json()['name'],
                models = request.get_json()['models'],
                description = request.get_json()['description'],
            )
            db.session.add(new_shoot)
            db.session.commit()

            response = make_response(
                jsonify(new_shoot.to_dict()),
                201
            )

        except ValueError:

            response = make_response(
                {"error": "validation errors"},
                400
            )
    return response

@app.route('/shoot_ideas/<int:id>', methods=['DELETE'])
def delete_shoot(id):
    shoot = ShootIdea.query.get(id)
    if not shoot:
        response = make_response(
            {"error": "shoot not found"},
            404
        )
    else:
        db.session.delete(shoot)
        db.session.commit()

        response = make_response(
            {"message": "shoot idea deleted"},
            200
        )

    return response


# Views go here!


if __name__ == '__main__':
    app.run(port=5555, debug=True)
