# VibeFlow
## Project Overview
This project is a web music application allowing users to register, log in, upload songs, create playlists, and search for music using AI recommendation technology. The project is divided into two main parts: the backend and the frontend.
## Features
1. User Authentication (Registration and Login)
2. JWT Authentication
3. Song Management (Upload, View)
4. Playlist Management (Create, View, Add Songs)
5. Music Playback
6. Search Functionality
7. Responsive Design
## Technologies Used
1. Backend: Node.js, Express.js, MongoDB, Mongoose, Passport.js, JWT
2. Frontend: React, Tailwind CSS, Howler.js, Cloudinary, React Router, React Cookie
## Prerequisites
1. Node.js and npm installed
2. MongoDB Atlas account
3. Cloudinary account
## Setup Instructions
### Clone the Repository
```
git clone https://github.com/yourusername/VibeFlow-Music-Player.git
cd VibeFlow-Music-Player
```
### Set Up MongoDB Atlas
 1. Go to MongoDB Atlas and sign up for an account.
 2. Create a new cluster.
 3. In the cluster, create a new database user with a username and password.
 4. Whitelist your IP address.
 5. Get the connection string for your cluster. It should look something like this:
    ```
    mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    ```
### Set Up Cloudinary
 1. Go to Cloudinary and sign up for an account.
 2. Get your Cloudinary cloud name, API key, and API secret from the Cloudinary dashboard.
### Configure Environment Variables
Create a .env file in the backend directories with the following content:
```
MONGO_PASSWORD=your_mongo_password
SECRET_KEY=your_jwt_secret
```
### Create a config.js file in the src of the spotify_backend directories with the following content:
```
export const cloudinary_cloud_name = "your_cloud_name";
export const cloudinary_upload_preset = "your_upload_preset";
```
### Install Dependencies
Backend
```
cd backend
npm install
```

Frontend
```
cd ../frontend
npm install
```
### Run the Backend Server
```
cd backend
node index.js
```
### Run the Frontend Server
```
cd ../frontend
npm start
```
This will start the frontend development server. Open http://localhost:3000 to view it in your browser.

## Usage
### Register a New User
1. Open the application in your browser.
2. Click on "Sign Up" and fill in the registration form.
3. Submit the form to create a new user account.
### Log In
1. Click on "Log In" and enter your email and password.
2. Submit the form to log in.
### Upload a Song
1. After logging in, navigate to the "Upload Song" page.
2. Fill in the song details and upload the song file.
3. Submit the form to upload the song.
### Create a Playlist
1. Navigate to the "My Music" page.
2. Click on "Create Playlist" and fill in the playlist details.
3. Submit the form to create the playlist.
### Search for Songs
1. Navigate to the "Search" page.
2.Enter the song name in the search bar and press Enter.
3. View the search results.
### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
## Author 
Name: Vanshaj
Email: vanshajsen16@gmail.com
