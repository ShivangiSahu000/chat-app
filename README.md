Chat Application

Overview

This is a real-time chat application built using Node.js, Express, and Socket.io.It allows multiple users to connect, exchange messages, and see when others join or leave the chat in real-time.

Table of Contents

--->Running the Server and Client Applications

--->Application Architecture

--->Concurrency Handling

--->Assumptions and Design Choices

1> Running the Server and Client Applications
#Prerequisites
Node.js installed on your machine
A code editor like Visual Studio Code

#Steps to Run the Application
Clone the Repository
git clone <repository-url>
cd chat-app

#Install Dependencies
npm install

#Build Tailwind CSS
npm run build:css

#Start the Server
npm start

#Access the Application
Open your browser and navigate to http://localhost:8080

2> Application Architecture

Overview
The application consists of a Node.js server built with Express and Socket.io for real-time communication. The server serves static files (HTML, CSS, JavaScript) and handles WebSocket connections to manage real-time data exchange between clients.

#Components
    1.Server (server.js):
    Handles HTTP requests using Express.
    Manages WebSocket connections with Socket.io.
    Broadcasts messages to all connected clients.
    Sends notifications when clients join or leave the chat.

    2.Client (index.html, script.js):
    HTML: Provides the basic structure for the chat interface.
    CSS: Styles the chat interface using Tailwind CSS.
    JavaScript: Manages WebSocket connections and updates the DOM based on server messages.

3> Concurrency Handling

The application handles multiple concurrent client connections using asynchronous event-driven architecture. Here’s how it works:

    Event Loop: Node.js handles asynchronous operations via the event loop, ensuring non-blocking behavior.

    WebSocket Connections: Socket.io manages WebSocket connections, allowing real-time communication between the server and multiple clients.

    Message Broadcasting: Messages sent by any client are broadcasted to all connected clients using the io.emit() function.

4> Assumptions and Design Choices

#Assumptions
    All clients have a modern web browser that supports WebSocket.
    Users will provide a unique username upon joining the chat.
    The application will run on a single server instance.

#Design Choices
    Express for Server: Chosen for its simplicity in setting up a web server and serving static files.

    Socket.io for Real-Time Communication: Selected for its ease of use and ability to handle real-time WebSocket connections efficiently.

    Tailwind CSS for Styling: Used for quick and consistent styling of the chat interface with a modern look.

    Event-Driven Architecture: Ensures efficient handling of multiple concurrent connections without blocking the main thread.