const client = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Save to DB
    client.hmset(user.username, userObj, (err, res) => {
      if (err) return callback(err, null)
      callback(null, res) // Return callback
    })
  },
  
  get: (username, callback) => {
    if(!username)
      return callback(new Error("You should pass username"), null)

    client.hgetall(username, (err, res) => {
      if (err) return callback(err, null)
      return callback(null, res)
    })
  }
}
