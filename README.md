# fear_not


Technologies used:
Backend: Node.js, MongoDB, Express.js

Frontend: ReactJS, Redux, VictoryJS (used for creating the "Cardiogram" component)

Project description:
This project is being developed for a Ukrainian blogger who is currently at the frontlines fighting. The purpose of this project is to monitor and analyze the psychoemotional state of Ukrainian civilians, Ukrainian military personnel, and Russians during the ongoing conflict.

The Cardiogram component displays the approximate emotional state of Ukrainians each day since the start of the full-scale invasion, with arrows at the bottom of each day indicating the names of the psychoemotional states. The blue arrow represents military personnel, the yellow arrow represents civilians, and the red arrow represents Russians.

Each day is clickable, and clicking on it will bring up a pop-up with a video from Taras Bilka about that day's events, a brief description of the day, and a summary of the psychoemotional states. The pop-up also allows users to navigate to other days.

The data is pulled from a database, and there is an admin panel that is connected to MongoDB, allowing data to be added and edited in the future.

The "Russoisolation" page is currently in development, and a "donations" page is planned.

How to use:
To use the project, you need to clone the repository and install dependencies. Follow these steps:

1. Clone the repository:

git clone https://github.com/aedra313/fear_not.git


2. Install dependencies for the backend and frontend:

cd fear-not/server
npm install

cd ../
npm install


3. Start the backend and frontend:


cd fear-not/server
node app.js

cd ../
npm start


4.Open your web browser.
