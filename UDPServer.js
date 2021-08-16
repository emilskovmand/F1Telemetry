const { F1TelemetryClient, constants } = require('f1-telemetry-client');
const { PACKETS } = constants;
const F1EventHandlers = require('./F1events/F1events')
const JSONread = require('./json/read')

const express = require('express');
const F1eventHandlers = require('./F1events/F1events');
const app = express();

function editClientState(newState) {
    state = newState;
}

/*
*   'port' is optional, defaults to 20777
*   'bigintEnabled' is optional, setting it to false makes the parser skip bigint values,
*                   defaults to true
*   'forwardAddresses' is optional, it's an array of Address objects to forward unparsed telemetry to. each address object is comprised of a port and an optional ip address
*                   defaults to undefined
*   'skipParsing' is optional, setting it to true will make the client not parse and emit content. You can consume telemetry data using forwardAddresses instead.
*                   defaults to false
*/
const client = new F1TelemetryClient({ port: 20777 });

client.on(PACKETS.event, (mes) => {
    F1eventHandlers.event(mes);
});
client.on(PACKETS.motion, (mes) => {

});
client.on(PACKETS.carSetups, (mes) => {

});
client.on(PACKETS.lapData, (mes) => {

});
client.on(PACKETS.session, (mes) => {

});
client.on(PACKETS.participants, (mes) => {

});
client.on(PACKETS.carTelemetry, (mes) => {

});
client.on(PACKETS.carStatus, (mes) => {

});
client.on(PACKETS.finalClassification, (mes) => {

});
client.on(PACKETS.lobbyInfo, (mes) => {
    console.log(mes);
});

app.get('/', (req, res) => {
    var state = JSONread();
    res.send(state);
});

// to start listening:
client.start();

app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:8080`);
})