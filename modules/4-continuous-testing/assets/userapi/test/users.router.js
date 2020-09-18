const app = require('../src/index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const userController = require('../src/controllers/user')

chai.use(chaiHttp)

describe('Users REST API', () => {
  
  after(()=> {
    app.close(() => {
      console.log('Http server closed.');
    })
  })

  describe('POST /user', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          done()
        })
        .catch((err) => {
           throw err
        })
    })
  })

  describe('GET /user', ()=> {
    let user
    beforeEach(() => {
      user = {
        username: 'vhardouin',
        firstname: 'Vincent',
        lastname: 'Hardouin'
      }
      userController.create(user, () => {})
    })

    it('should get user', (done) => {
      chai.request(app)
          .get('/user/' + user.username)
          .then((res) => {
            chai.expect(res).to.have.status(200)
            done()
          })
          .catch((err) => {
            throw err
          })
    })
  })
})
