const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const dialogflow = require('@google-cloud/dialogflow');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    client_email: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON).client_email,
    private_key: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON).private_key
  },
  projectId: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON).project_id
});

app.post('/webhook', async (req, res) => {
  const message = req.body.Body;
  const sender = req.body.From;

  const sessionPath = sessionClient.projectAgentSessionPath(
    process.env.DF_PROJECT_ID,
    sender.replace("whatsapp:", "")
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en', //'sw'
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const reply = responses[0].queryResult.fulfillmentText;

  const twiml = new MessagingResponse();
  twiml.message(reply);
  res.set('Content-Type', 'text/xml');
  res.send(twiml.toString());
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    console.log("Menu toggled:", menu.classList.contains("show"));
  });
});
