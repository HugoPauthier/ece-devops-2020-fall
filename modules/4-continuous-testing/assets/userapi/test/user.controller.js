const { expect } = require('chai')
const users = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('avoid creating an existing user', (done)=> {
      // TODO create this test
      // Warning: the user already exists
      done()
    })
  })

  describe('Get', ()=> {
    it('should return error when username are not provided', (done) => {
      users.get(null, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

    it('get a user by username', (done) => {
      const user = {
        username: 'vhardouin',
        firstname: 'Vincent',
        lastname: 'Hardouin'
      }
      users.create(user, (err, result) => {
      })

      users.get(user.username, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result.firstname).to.deep.equal(user.firstname)
        expect(result.lastname).to.deep.equal(user.lastname)
        done()
      })
    })
  })
})
