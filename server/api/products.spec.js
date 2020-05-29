// /* eslint-disable no-unused-expressions */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const User = db.model('user')

// describe('Product routes', () => {
//     //clear the database before each test
//     beforeEach(() => {
//       return db.sync({force: true})
//     })

//     describe('/api/users/', () => {
//       const codysEmail = 'cody@puppybook.com'

//       //create a couple of products in the database before each test
//       beforeEach(() => {
//         return User.create({
//           email: codysEmail
//         })
//       })

//       it('GET /api/products', async () => {
//         const res = await request(app)
//           .get('/api/products')
//           .expect(200)

//         expect(res.body).to.be.an('array')
//         expect(res.body[0].email).to.be.equal(codysEmail)
//       })

//       it('GET /api/products/:id', async () => {
//         const res = await request(app)
//           .get('/api/products/1')
//           .expect(200)

//         expect(res.body).to.be.an('object')
//         expect(res.body[0].email).to.be.equal(codysEmail)
//       })
//     })
//   })
