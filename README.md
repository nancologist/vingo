# Vingo
Start the [app](https://nuxt-blog-a2eb4.web.app/)!   
Etymology: Video Conference Bingo => Vingo  
Author: Morteza Jalilifar

## 0. Hosting:

* Client:
    * Open on: https://nuxt-blog-a2eb4.web.app/
    * Deployed on Firebase

* Server:
    * Deployed on Heroku.com
    * Open on: https://vingo-server.herokuapp.com/ (__But__ you will get an "Cannot GET /" error because the server is supposed to only support websocket connections with client.)
    * Env. Vars:
        * ``CLIENT_SERVER`` : Allowing CORS for connection with client in Socket.io v3 initializer.
        * ``PORT`` : Not set.

## 1. Run Project
0. ``git clone https://github.com/nancologist/vingo.git``
1. ``cd server/``
2. ``npm install``
3. ``npm start``
4. Open a second terminal.
5. ``cd client/``
6. ``npm install``
7. ``npm start``

___

## 2. Dependencies

### 2.1. Client
* Core Boilerplate: ``create-react-app . --template typescript``
* Websocket (client-side): ``socket.io-client``

### 2.2. Server
* Server: ``nodejs`` + ``express``
* Websocket (server-side): ``socket.io``

### 2.3. Deployment
* Securing Response Headers: ``helmet``
* Logging: ``morgan`` + ``@types/morgan``

___

## 3. Author Notes
* __State Manager:__ Because of the app size using Redux and Thunk would be unnecessary and an overkill. So for the state management the trivial hook ``useState()`` has been implemented.


## 4. Sources
* Purple Family Color: https://www.schemecolor.com/the-purple-family.php