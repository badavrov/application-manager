#Run the project

**-Install all dependencies**
`$ npm install `

**-Run the project**
`$ npm start `

**-Used dependencies**
```
    "axios": "^0.18.0",
    "react": "^16.5.2",
    "react-dom": "^16.5.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.5",
    "react-validation": "^3.0.7"
```

#Front
**-Home page**
```
A simple homepage.
```
![](https://i.imgur.com/1UEsSi8.png)

**-Create page**
```
POST:
*Fill the form
*Simple validation check if name value is longer than 5 symbols, if email contains '@ and .' If Age is younger than 100 and older than 12. By default radio button is giving telephone preference of communication.
*Data is created in localstorage
*Get the data with ref from HTML code
*Push all the data in one array of data
*JSON it
*Push it in the current localstorage data
```
![](https://i.imgur.com/kNNmPaG.png)

**-View page**
```
GET:
*Get all the information from localstorage
*Sort all the information in html list
*Added buttons for delete and edit
DELETE:
*Get the choosen item index from localstorage data and remove it
EDIT:
*Get the choosen item index
*Relocate your url to /edit/:index
*Get the index from url
*Get all the information about the choosen application using the index
*OnClick we find the index delete it and replace it with the new information in local storage
```
![](https://i.imgur.com/2ONGycu.png)


                
----
###End