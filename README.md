# _Portland Trail Blazers_

#### _Mock website for the Blazers. 1.27.16_

#### By _**Jonathan Thom**_

## Setup/Installation Requirements

##### Install CORS Chrome Extension

* Navigate to [https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en](The Chrome Store) and install the Google Chrome CORS extension. Make sure it is on. This is necessary for the API to work in both local and deployed settings.

* View at [https://trailblazers-e4317.firebaseapp.com/](https://trailblazers-e4317.firebaseapp.com/). This is much easier! But if you would like to run the program locally, this is what you have to do:

##### Create project

* _In the command line, run:_
```
git clone https://github.com/JonathanWThom/trail-blazers.git
cd trail-blazers
npm install
bower install
touch src/app/api-keys.ts
```

##### Set Up API Key

* Navigate to [http://developer.sportradar.com/](http://developer.sportradar.com/) and create an account.
* Retrieve a sample API Key for the NBA.
* Insert that key into the src/app/api-keys.ts file in the following format:

```
export var nbaKey = {
  apiKey: {your-api-key}
}
```

##### Set Up Firebase

* Navigate to [https://console.firebase.google.com/](https://console.firebase.google.com/) and create a new project.

* Click "Add Firebase to Web App" and copy the given information into the src/app/api-keys.ts file for this program. The format should be this (filling in your own information):

```
export var masterFirebaseConfig = {
  apiKey: XXXXXXXX,
  authDomain: XXXXXXXX,
  databaseURL: XXXXXXXXX,
  storageBucket: XXXXXXXX,
  messagingSenderId: XXXXXXX
};
```

* In your Firebase Database, import the file "players.json" from this directory.

* In your Firebase Database > Rules, paste and save as public:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

##### Serve and View

* In the command line, run: `ng serve`
* Navigate to [http://localhost:4200](http://localhost:4200).

## Support and Contact Details

_Contact Jonathan at: jonathan.thom1990@gmail.com_

## Technologies Used

_Angular 2, TypeScript, CSS, HTML, SportRader API_

### License

*MIT*

Copyright (c) 2016 **_Jonathan Thom_**
