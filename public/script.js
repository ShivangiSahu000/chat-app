
const socket = io();    // Initialize a socket.io connection

// Get DOM elements
const usernameInput = document.getElementById('username');
const usernameHeader = document.getElementById('username-header');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

// Event listener for username input
usernameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const username = usernameInput.value;
        socket.emit('setUsername', username);   // Emit username to the server
        usernameHeader.textContent = `Hello, ${username}`;  // Display username in header
        usernameInput.style.display = 'none';
        messageInput.style.display = 'block';   // Show message input field
    }
});

// Event listener for incoming messages
socket.on('message', (message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    
    // Add a special class for system messages
    if (message.includes('has left the chat') || message.includes('has joined the chat')) {
        messageElement.classList.add('system');
    }
    
    chatBox.appendChild(messageElement);    // Append message to chat box
    chatBox.scrollTop = chatBox.scrollHeight;   // Scroll to the bottom
});

// Event listener for message input
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const message = messageInput.value;
        socket.emit('message', message);    // Emit message to the server
        messageInput.value = '';    // Clear input field
    }
});
