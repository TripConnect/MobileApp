const io = require('socket.io-client/dist/socket.io');



class SocketIOConnection {
    static socket = null;

    static initializeSocket(accessToken) {
        console.log("Initialize socket connection: " + accessToken);
        this.socket = io(
            process.env.EXPO_PUBLIC_API_URL,
            {
                transports: ['websocket'], // you need to explicitly tell it to use websockets
                auth: {
                    token: accessToken,
                }
            },
        );
        this.socket.on('connect', () => {
            console.log('connected');
        });
        this.socket.on('connect_error', err => {
            console.log(err.message);
        });
    }

    static getSocket() {
        return this.socket;
    }
}

export default SocketIOConnection;
