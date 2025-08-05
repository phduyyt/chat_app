require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});
