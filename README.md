# _Portland Trail Blazers_

#### _Mock website for the Blazers. 1.27.16_

#### By _**Jonathan Thom**_

## Setup/Installation Requirements

* View at [https://trailblazers-e4317.firebaseapp.com/](https://trailblazers-e4317.firebaseapp.com/), or to run locally, do the following.

* _In the command line, run:_
```
git clone https://github.com/JonathanWThom/trail-blazers.git
cd trail-blazers
npm install
bower install
touch src/app/api-keys.ts
```

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
* In the command line, run: `ng serve`
* Navigate to [http://localhost:4200](http://localhost:4200).

## Support and Contact Details

_Contact Jonathan at: jonathan.thom1990@gmail.com_

## Technologies Used

_Angular 2, TypeScript, CSS, HTML_

### License

*MIT*

Copyright (c) 2016 **_Jonathan Thom_**
