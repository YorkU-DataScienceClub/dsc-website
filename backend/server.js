const express = require('express');// imports the express framework
const bodyParser = require('body-parser');// read data from frontend
const cors = require('cors'); // Cross Region Origin Sharing required as frontend and backend are on different ports
const { SessionsClient } = require('@google-cloud/dialogflow');// from the api library sessionclient is imported
const uuid = require('uuid');// different id created for different users
const dotenv = require('dotenv');// API keys stored from .env file


dotenv.config();// loads the environment variables from .env file


const app = express();// express app object 
const port = process.env.PORT || 5001;//port number for the server to listen on default was 5000 but i changed to 5001


app.use(cors()); // CROSS REGION ORIGIN SHARING is now enabled which facilitates the frontend to send HTTP reqs to backend 
app.use(bodyParser.json()); //parses incoming JSON payloads such as the one on POSTMAN and converts that into JS object






const sessionClient = new SessionsClient();//dialogflow session client ued to communicate with the API of Dialogflow
const projectId = 'databot-eswl';  // when you go to the dashboard you will see the projectID there


app.get('/', (req, res) => {//This is working
    res.send('Guys the server is running');// get route is implemented to ensure that the server is running on http://localhost:5001/ (Backend)
});


app.post('/api/dialogflow', async (req, res) => {//the frontend is supposed to send  a POST request to this route  WITH THE MESSAGE  but aint working
    const { message } = req.body;  // this string is what is inputted by the user in the frontend

    const sessionId = uuid.v4();  // here we implement the uuid library so that every other user out theregets a different id
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);//both projectID and sessionID is combined to form the sessionPath which is used to communicate with the Dialogflow API

    const request = { // this is the request object which is sent to the Dialogflow API
    session: sessionPath,
    queryInput: {// this is the query input which is the message that the user inputs
    text: {
    text: message,
    languageCode: 'en',  // over here we say the lang of user
    },
 },
    };

    try {
        
        const responses = await sessionClient.detectIntent(request);// here wait for the response from the Dialogflow API
        const result = responses[0].queryResult;// the Dialogflow api sends a number of arrays of responses but w take the first one
     console.log("Dialogflow",result);// i tried to do debugging with it
        
        res.json({ reply: result.fulfillmentText });// the chatbot responses sent again back to the frontend but now as a JSON object
    } catch (error) {
        console.error('DialogflowS  API error:', error);
        res.status(500).send('Error  with Dialogflow');
    }
});

// this backend server is running i checked
app.listen(port, () => {// the express server is now listening on port 5001 
    console.log(`Backend server is running on port number ${port}`);// error at first wasnt showing before because of the punctuation
});;
