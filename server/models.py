from config import db, bcrypt
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})


######### Models Start Here #########

#User
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-photos.user', '-_password_hash',)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String)


    photos = db.relationship('Photo', backref='user')

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f'<User {self.username}>'


#Photo
class Photo(db.Model, SerializerMixin):
    __tablename__ = 'photos'
    
    serialize_rules = ('-photo_simulations', '-created_at', '-updated_at', "-user_id", "-user", "-camera_id")
    
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String)
    film = db.Column(db.String)
    location = db.Column(db.String)
    type = db.Column(db.String)
    image = db.Column(db.String)
    cinebloom_10 = db.Column(db.Boolean)
    
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())
    #relationship
    photo_simulations = db.relationship('FilmSimPhoto', backref = 'photo')
    #association proxy
    film_simulations = association_proxy('photo_simulations', 'film_simulation')
    #foreign key
    camera_id = db.Column(db.Integer, db.ForeignKey("cameras.id"))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    
#Film Simulation
class FilmSimulation(db.Model, SerializerMixin):
    __tablename__ = 'film_simulations'

    serialize_rules = ('-photo_simulations', '-created_at', '-updated_at')

    id = db.Column(db.Integer, primary_key=True)
    film = db.Column(db.String)
    dynam_range = db.Column(db.String)
    highlight = db.Column(db.String)
    shadow = db.Column(db.String)
    color = db.Column(db.String)
    noise_reduction = db.Column(db.String)
    sharpening = db.Column(db.String)
    clarity = db.Column(db.String)
    grain = db.Column(db.String)
    color_chrome = db.Column(db.String)
    color_chrome_blue = db.Column(db.String)
    white_balance = db.Column(db.String)
    iso = db.Column(db.String)
    exposure = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())
    #relationship
    photo_simulations = db.relationship('FilmSimPhoto', backref = 'film_simulation')
    #association proxy
    photos = association_proxy('photo_simulations', 'photo')
    
    
#Film Sim Photo
class FilmSimPhoto(db.Model, SerializerMixin):
    __tablename__ = 'film_simulation_photos'

    serialize_rules = ('-photo.photo_simulations', '-film_simulation.photo_simulations', '-created_at', '-updated_at')
    
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    #foreign keys
    photo_id = db.Column(db.Integer, db.ForeignKey("photos.id"))
    film_simulation_id = db.Column(db.Integer, db.ForeignKey("film_simulations.id"))

#extra Model for CAMERA

class Camera(db.Model, SerializerMixin):
    __tablename__ = "cameras"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

#Client Contact Model

class ShootIdea(db.Model, SerializerMixin):
    __tablename__ = "shoot_ideas"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    models = db.Column(db.String)
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())


#validations
    @validates("name")
    def validate_price(self, key, name):
        if len(name) >= 1 and len(name) <= 30:
            return name
        raise ValueError("invalid name")


