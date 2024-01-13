const express = require('express');
const path = require('path');

// initialization of firestore for firebase
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();

console.log("\nfirestore initialized\n");

// to run the express server
const app = express();
const port = 2637;

const publicPath = path.join(__dirname, '..', 'public');

app.use('/static', express.static(publicPath));
app.get("/", (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`app server is running at localhost:${port}`);
});

