const EventType = {
    MESSAGE: "message",
}

class EventMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class EventNotifier {
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            console.log("Connected.");
        };
        this.socket.onclose = (event) => {
            console.log("Disconnected.")
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch { console.log("Error."); }
        };
    }

    broadcastEvent(from, type, value) {
        const event = new EventMessage(from, type, value);
        this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
        // console.log("Adding.", this.handlers);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
        // console.log("Removing.", this.handlers);
    }

    receiveEvent(event) {
        // console.log(this.handlers);
        this.handlers.forEach((handler) => {
            handler(event);
        });
    }
}

const Notifier = new EventNotifier();
export { EventType, Notifier };
