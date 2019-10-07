const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "I'll be back"
  },
  {
    name: "Robert DeNiro",
    occupation: "Actor",
    catchPhrase: "Are you talking to me?"
  },
  {
    name: "Marlon Brando",
    occupation: "Actor",
    catchPhrase: "I'm gonna make him an offer he can't refuse"
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();  
});