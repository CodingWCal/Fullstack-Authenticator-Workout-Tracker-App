# Fullstack App Authenticator: Workout Tracker

A full-stack, Passport-protected workout logger that lets you sign up/in, add workouts (exercise, sets, reps, weight, date), and delete entries.

**Link to project:** https://github.com/CodingWCal/fullstack-auth-app-1-workout-tracker  
![Workout Tracker Screenshot](public/img/workout-tracker-screenshot.png)  
*Screenshot of the profile page listing logged workouts.*

## How It’s Made

**Tech used:**  
- **Backend:** Node.js, Express.js  
- **Auth:** Passport.js (local strategy), express-session, connect-flash  
- **Database:** MongoDB (Atlas), Mongoose  
- **Templating:** EJS  
- **Frontend:** Bootstrap, Font Awesome, HTML, CSS, vanilla JS, method-override  

Built by configuring Passport for local signup/login, then created a `Workout` model with Mongoose. Routes in `routes.js` guard all `/profile` and `/workouts` endpoints with `isLoggedIn`. The list and delete buttons leverage HTML forms + method-override to send DELETE requests.

## Optimizations

- Reusable EJS layout and partials to DRY up templates.  
- Client-side form validation with HTML5 attributes (`required`, `step`).  

## Lessons Learned

- Integrating Passport sessions seamlessly with MongoDB and Express.  
- Handling PUT/DELETE via HTML forms using `method-override`.  
- Organizing route handlers and middleware for clarity at scale.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Inspiration & Credit

Modified from Scotch.io's auth tutorial
