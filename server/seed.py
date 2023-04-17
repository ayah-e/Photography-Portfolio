from random import choice as rc

from app import app
from models import db, FilmSimulation, Photo, FilmSimPhoto, Camera, ShootIdea, User

with app.app_context():

    print("Deleting data...")
    Photo.query.delete()
    FilmSimulation.query.delete()
    FilmSimPhoto.query.delete()
    Camera.query.delete()

    print("Starting seed...")

    #want to filter by type eventually
    #types include: Nature, Duke Farms, Egypt, Portrait, Event, Grad, Everyday

    print("Creating Photos...")

    # add .jpeg to end of imgur link works great!
    
    nature1 = Photo(description = "Lily of the Valley", location = "Deep Cut Gardens Middletown, NJ", film = "Kodachrome 64", cinebloom_10 = False, type = "Nature", image = "https://imgur.com/0SeSPpO.jpeg")
    nature2 = Photo(description = "Tall Tree", location = "Deep Cut Gardens Middletown, NJ", film = "Kodachrome 64", cinebloom_10 = False, type = "Nature", image = "https://imgur.com/MGZMNPF.jpeg")
    nature3 = Photo(description = "purple flower", location = "Deep Cut Gardens Middletown, NJ", film = "", cinebloom_10 = False, type = "Nature", image = "https://imgur.com/kK2Ki8x.jpeg")
    nature4 = Photo(description = "Landscape shot", location = "Deep Cut Gardens Middletown, NJ", film = "Kodachrome 64", cinebloom_10 = False, type = "Nature", image = "https://imgur.com/qOTLV3G.jpeg")
    nature5 = Photo(description = "Bench", location = "Deep Cut Gardens Middletown, NJ", film = "Kodachrome 64", cinebloom_10 = False, type = "Nature", image = "https://imgur.com/cOSoBz8.jpeg")

    dukefarm1 = Photo(description = "Bike Riding", location = "Duke Farms", film = "Kodachrome64", cinebloom_10 = False, type = "Duke Farms", image = "https://imgur.com/Dl5tRrK.jpeg")
    dukefarm2 = Photo(description = "In the shade", location = "Duke Farms", film = "Kodachrome64", cinebloom_10 = False, type = "Duke Farms", image = "https://imgur.com/pR9lfSs.jpeg")
    dukefarm3 = Photo(description = "call me by your name", location = "Duke Farms", film  = "Kodachrome64", cinebloom_10 = False, type = "Duke Farms", image = "https://imgur.com/c2OznBk.jpeg")
    dukefarm4 = Photo(description = "jasmine portrait", location = "Duke Farms", film = "Kodachrome64", cinebloom_10 = False, type = "Duke Farms", image = "https://imgur.com/hj1QUSA.jpeg") 
    dukefarm5 = Photo(description = "jasmine again", location = "Duke Farms", film = "Kodachrome64", cinebloom_10 = False, type = "Duke Farms", image = "https://imgur.com/fsyCCV1.jpeg")

    egypt1 = Photo(description = "inside restaurant", location = "", film = "", cinebloom_10 = False, type = "Egypt", image = "https://i.imgur.com/vopdtro.jpg")
    egypt2= Photo(type = "Egypt", image = "https://i.imgur.com/Mn8yJxy.jpg")
    egypt3 = Photo(type="Egypt", image="https://i.imgur.com/JJ6O5mR.jpg")
    egypt4 = Photo(type="Egypt", image="https://i.imgur.com/VPHuBbK.jpg")
    egypt5 = Photo(type="Egypt", image="https://i.imgur.com/uJJLSFx.jpg")
    egypt6 = Photo(type="Egypt", image="https://i.imgur.com/01XM3Cd.jpg")
    egypt7 = Photo(type="Egypt", image="https://i.imgur.com/YmcysXD.jpg")
    egypt8 = Photo(type="Egypt", image="https://i.imgur.com/biqHSs4.jpg")
    egypt9 = Photo(type="Egypt", image="https://i.imgur.com/Z87JcNG.jpg")
    egypt10 = Photo(type="Egypt", image="https://i.imgur.com/rkYGewe.jpg")
    egypt11 = Photo(type="Egypt", image="https://i.imgur.com/2SUconD.jpg")
    egypt12 = Photo(type="Egypt", image="https://i.imgur.com/KliQ3EK.jpg")
    egypt13 = Photo(type="Egypt", image="https://i.imgur.com/Sm5KscM.jpg")
    egypt14 = Photo(type="Egypt", image="https://i.imgur.com/B39Ov7H.jpg")
    egypt15 = Photo(type="Egypt", image="https://i.imgur.com/YcXlXRu.jpg")
    egypt16 = Photo(type="Egypt", image="https://i.imgur.com/MnT10SB.jpg")
    egypt17 = Photo(type="Egypt", image="https://i.imgur.com/ch8uHKb.jpg")
    egypt18 = Photo(type="Egypt", image="https://i.imgur.com/tlLoxCh.jpg")
    egypt19 = Photo(type="Egypt", image="https://i.imgur.com/LUKq04E.jpg")

 

    portrait1 = Photo(description = "", location = "", film = "", cinebloom_10 = False, type = "Portrait", image = "")


    event1 = Photo(description = "", location = "", film = "", cinebloom_10 = False, type = "Event", image = "")


    grad1 = Photo(description = "", location = "", film = "", cinebloom_10 = False, type = "Grad", image = "")


    everyday1 = Photo(description = "", location = "", film = "", cinebloom_10 = False, type = "Everyday", image = "")

    euphoric1 = Photo(description = "2013 Girl's Night Core", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/L2we1qL.jpg")
    euphoric2 = Photo(description = "In focus", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/t7h27RV.jpg")
    euphoric3 = Photo(description = "Hair roller", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/nbTq9Ut.jpg")
    euphoric4 = Photo(description = "2013 Girl's Night Core", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/ndHNvzG.jpg")
    euphoric5 = Photo(description = "Are you a Harry fan?", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/xhqdDvH.jpg")
    euphoric6 = Photo(description = "2013 Girl's Night Core", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/qsTP9TP.jpg")
    euphoric7 = Photo(description = "2013 Girl's Night Core", location = "", film = "point & shoot", cinebloom_10 = True, type = "Euphoric", image = "https://i.imgur.com/XY1yonP.jpg")


    photos = [nature1, nature2, nature3, nature4, nature5, dukefarm1, dukefarm2, dukefarm3, dukefarm4, dukefarm5, egypt1, egypt2, egypt3, egypt4, egypt5, egypt6, egypt7, egypt8, egypt9, egypt10, egypt11, egypt12, egypt13, egypt14, egypt15, egypt16, egypt17, egypt18, egypt19, portrait1, event1, grad1, everyday1, euphoric1, euphoric2, euphoric3, euphoric4, euphoric5, euphoric6, euphoric7]
    

    print("Creating Film Simulations...")

    kodachrome64 = FilmSimulation(
        film = "Classic Chrome",
        dynam_range = "DR400",
        highlight = "0",
        shadow = "0",
        color = "+2",
        noise_reduction = "-4",
        sharpening = "+1",
        clarity = "+3",
        grain = "Weak, Small",
        color_chrome = "Strong",
        color_chrome_blue = "Weak",
        white_balance = "Daylight, +2 Red, -5 Blue",
        iso = "Auto, up to ISO 6400",
        exposure = "0 to +2/3 (typically)"
    )

    superia100 = FilmSimulation(
        film = "Classic Negative",
        dynam_range = "DR-Auto",
        highlight = "-1",
        shadow = "-2",
        color = "+1",
        noise_reduction = "-4",
        sharpening = "-2",
        clarity = "-2",
        grain = "Weak, Small",
        color_chrome = "Strong",
        white_balance = "Daylight, 0 Red, -1 Blue",
        iso = "Auto, up to ISO 6400",
        exposure = "+1/3 to +2/3 (typically)",
    )

    point_and_shoot = FilmSimulation(
        film = "Classic Negative",
        dynam_range = "DR200",
        highlight = "+1",
        shadow = "0",
        color = "+3",
        noise_reduction = "-4",
        sharpening = "-4",
        clarity = "0",
        grain = "Strong, Large",
        color_chrome = "Off",
        color_chrome_blue = "Weak",
        white_balance = "Auto",
        iso = "Auto, up to ISO 6400",
        exposure = "0 (typically use flash with this film simulation)"
    )

    film_simulations = [kodachrome64, superia100, point_and_shoot]



    db.session.add_all(photos)
    db.session.add_all(film_simulations)

    db.session.commit()

    print("Seeding done!...")