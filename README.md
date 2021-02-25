# Vingo
Etymology: Video Conference Bingo => Vingo

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
* Core: ``create-react-app . --template typescript``
* State Management: 
    * ``redux`` (does not need any extra @types package)
    * ``react-redux`` (plus ``@types/react-redux`` )
    * ``redux-thunk`` (A middleware for Redux to add async functionalities)
* Ajax Requests: ``axios``

### 2.2. Server

___