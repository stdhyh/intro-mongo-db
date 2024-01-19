const mongoose = require('mongoose')
// mongoose.Promise = global.Promise

const connect = (url) => {
  return mongoose.connect(url).catch(err => {
    console.error(`mongoDB connect failed: ${err}`)
  })
}

module.exports = connect
