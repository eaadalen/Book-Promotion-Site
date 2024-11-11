const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Models = require('./models.js')
const cors = require('cors')
const port = process.env.PORT || 4242
let username = null

let allowedOrigins = ['http://localhost:1234', 'https://music-stats.netlify.app']

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) { // If a specific origin isn’t found on the list of allowed origins
      let message = "The CORS policy for this application doesn't allow access from origin " + origin
      return callback(new Error(message), false)
    }
    return callback(null, true)
  }
}))

const userExpletives = Models.userExpletives
//const server_url = 'https://music-stats-eka-950e8c2d4bef.herokuapp.com'
//const client_url = 'https://music-stats.netlify.app'
const server_url = 'http://localhost:4242'
const client_url = 'http://localhost:1234'

mongoose.connect('mongodb+srv://eaadalen112:MPkPu11WwHB7SzDN@the-story-of-us-cluster.hbjo3.mongodb.net/The-Story-Of-Us-Cluster?retryWrites=true&w=majority&appName=The-Story-Of-Us-Cluster', { useNewUrlParser: true, useUnifiedTopology: true })

// Send automated email when Musixmatch daily limit is hit
app.post('/sendemail', async (req, res) => {
  try {
    // Set email parameters
    const params = {
      Destination: {
        ToAddresses: ['eaadalen112@gmail.com'], // Replace with recipient's email address
      },
      Message: {
        Body: {
          Text: { Data: 'The daily limit for Music Stats has just been hit. This is a good sign but goddamn I wish Musixmatch would let me fix this.' },
        },
        Subject: { Data: 'Daily Limit Exceeded' },
      },
      Source: 'eaadalen112@gmail.com', // Replace with your verified email address
    };

    // Create and send the email
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
});

// Create apple music developer token
app.get('/devtoken', bodyParser.json(), (req, res) => {
  const jwt = require('jsonwebtoken')
  const fs = require('fs')
  const path = require('path')
  const teamId = 'PFN384YLAA'
  const keyId = 'UT3NGP759F'
  const privateKeyPath = path.join('./', 'AuthKey_UT3NGP759F.p8')
  const privateKey = fs.readFileSync(privateKeyPath, 'utf8')
  const payload = {
      iss: teamId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 86400 * 180,  // Token valid for 6 months
  }
  const headersV1 = {
      algorithm: 'ES256',
      header: {
          kid: keyId,
      }
  }
  const token = jwt.sign(payload, privateKey, headersV1)
  let formatted_token = {'formatted_token' : token}
  res.send(formatted_token)
})

// Stripe fulfill order
const fulfillOrder = () => {
  console.log('order fulfilled')
  fetch(
    server_url + "/" + username + "/grantaccess",
    {
        method: "PUT"
    }
  )
}

// Stripe payment session
app.post('/:username/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        //price: 'price_1PXVR6RqV1d02JQjw9EHAzZw',  // test priceID 
        price: 'price_1PXmWbRqV1d02JQj6bIUnmQV',  // live priceID
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: client_url + '/spotify',
    cancel_url: client_url + '/payment',
    automatic_tax: {enabled: true},
  })

  username = req.params.username
  res.redirect(303, session.url)
})

// Stripe detect successful payment session
app.post('/webhook', express.raw({type: 'application/json'}), async (request, response) => {
  const payload = request.body
  const sig = request.headers['stripe-signature']
  let event
  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
  } catch (err) {
    console.log('error: ' + err)
    return response.status(400).send('')
  }
  // Handle the checkout.session.completed event
  if ((event.type === 'checkout.session.completed') || (event.type === 'payment_intent.succeeded')) {
    fulfillOrder()
  }
  response.status(200).end()
})

// Greeting message
app.get('/', bodyParser.json(), (req, res) => {
  res.send("Hello")
})

// Fetch Musixmatch song lyrics
app.get('/get_song_lyrics/:song/:artist', bodyParser.json(), (req, res) => {
  fetch(
    "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=" + String(req.params.song)  + "&q_artist=" + String(req.params.artist) + "&apikey=" + '90f516513d6830ee3c1f4a825deca048',
    {
        method: "GET",
    }
  )
  .then((response) => response.json())
  .then((data) => {
    if (data.message.header.status_code == 401) {
      res.status(401).send(data)
    }
    else {
      res.status(200).send(data)
    }
  })
})

// Add a new user expletives score
app.post('/users', bodyParser.json(), async (req, res) => {
  userExpletives.findOne({ Username: req.body.Username }) // Search to see if the username already exists in the database
  .then((Username) => {
    if (Username) { // If the username is found, update the average expletives score
      userExpletives.findOneAndUpdate({ Username: req.body.Username }, { $set: { averageExpletives: req.body.averageExpletives }}, { new: true })
      .then((updatedData) => {
        res.json(updatedData)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send("Error: " + err)
      })
    } 
    else { // If it is a new user, add their username and average expletives score to the database
      userExpletives.create({
        Username: req.body.Username,
        averageExpletives: req.body.averageExpletives,
        advancedAnalyticsAccess: false
      })
      .then((userExpletives) => { res.status(201).json(userExpletives) })
      .catch((error) => {
        console.error(error)
        res.status(500).send('Error: ' + error)
      })
    }
  })
  .catch((error) => {
    console.error(error)
    res.status(500).send('Error: ' + error)
  })
})

// Fetch a user's expletive score percentile
app.get('/:username/percentile', bodyParser.json(), (req, res) => {
  userExpletives.findOne({ 'Username' : req.params.username }).then((user) => {
    userExpletives.count({ averageExpletives : { $lt : user.averageExpletives }})
    .then((expletiveCount) => {
      userExpletives.count().then((totalCount) => {
        res.status(201).json(Math.floor((expletiveCount / (totalCount - 1)) * 100))
      })
    })
  })
  .catch((err) => {
    console.error(err)
    res.status(500).send('Error: ' + err)
  })
})

// Fetch a user's advanced analytics access
app.get('/:username/aaa', bodyParser.json(), (req, res) => {
  userExpletives.findOne({ 'Username' : req.params.username }).then((user) => {
    res.send(user.advancedAnalyticsAccess)
  })
  .catch((err) => {
    res.status(500).send('Error: ' + err)
  })
})

// Update a user's permissions to advanced analytics
app.put('/:username/grantaccess', bodyParser.json(), async (req, res) => {
  userExpletives.findOneAndUpdate({ Username: req.params.username }, { $set: { advancedAnalyticsAccess: true }}, { new: true })
  .then((updatedData) => {
    res.json(updatedData)
  })
  .catch((error) => {
    console.error(error)
    res.status(500).send('Error: ' + error)
  })
})

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// listen for requests
app.listen(port, '0.0.0.0',() => {
  console.log('Listening on Port ' + port)
})

//app.listen(4242, () => console.log('Running on port 4242'))