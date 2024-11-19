# Christmas Calendar

This project is a Christmas calendar featuring 24 doors. Behind each door, you will find a beautiful message and a Christmas song that plays from Spotify.

## Overview

- The calendar consists of 24 doors, each represented as a component.
- Opening a door displays a festive message and starts a Christmas song via the Spotify API link stored in a JSON file.
- The calendar is built with React and designed as a single-page application with individual components.

## Design & Technology

- Designed in Figma for prototyping and layout visualization.
- Implemented using React components and styled using custom CSS.
- Data for the messages and songs is fetched from a JSON file, while music playback is handled using Spotify embed links.

## Features

- **Main Menu**: The application is presented as a single-page calendar view with 24 doors.
- **Component-Based Structure**: Each door is a React component styled uniformly, with content fetched dynamically from a JSON file.
- **Overlay Window**: Clicking on a door triggers an overlay with a message and embedded Spotify music playback.

## Easter Egg

- There is a hidden Easter egg in the calendar: find the day when no Christmas song is displayed!

## Setup & Installation

### Prerequisites

- Make sure you have Node.js installed on your system.

### Running the Application

1. Clone the repository or navigate to the project folder.
2. Open a terminal and navigate to the `christmas-calender` directory:
    cd christmas-calender
3. Install the project dependencies:
    npm install
4. Start the application:
    npm start
    (The app should open automatically in your default web browser. If not, visit http://localhost:3000.)

### Running the JSON Server
1. Open a new terminal.
2. Navigate to the `christmas-calender` directory:
    cd christmas-calender
3. Start the JSON server on port 8000:
    json-server --watch data/db-music.json --port 8000
    (Ensure the JSON server is running to provide the data for the calendar.)

## Learn More
For additional resources and learning, refer to the following links:

- React Documentation (https://reactjs.org/)
- Spotify API Documentation (https://developer.spotify.com/documentation/web-api/)

## Author

This project was created by [Melina Kiefer]. Feel free to reach out at [melinakiefer@hotmail.de].
