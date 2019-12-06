import { buildRouter } from '@moneybutton/express-paymail'
import express from 'express'
const API_REST_PORT = 5443

const BASE_URL = 'sought.info' // The library needs to know the actual url where the app is going to work

const paymailRouter = buildRouter(BASE_URL, {
  basePath: '/api/bsvalias',
  getIdentityKey: async (name, domain) => {
    // A paymail has the form `name@domain`. You can find the appropiate
    // key using paymail data.
    return '0335e5e7b86c12a4b5df082acb43ca7805382b58c805172bdef20ced310df845aa' // Some public key
  },
  getPaymentDestination: async (name, domain, body, helpers) => {
    // This method have to return a valid bitcoin outputs. The third parameter is the
    // body of the request and the fourth parameter is a js object containing handful
    // methods to create outputs.
    return helpers.p2pkhFromAddress('1FJJkRqyxTKAVX3dGFpddERt9XRbiSRZkL')
  },
  verifyPublicKeyOwner: async (name, domain, publicKeyToCheck) => {
    // Returns true if the public key belongs to the user owning `name@domain`, false in
    // any other case.
    return publicKeyToCheck === '0335e5e7b86c12a4b5df082acb43ca7805382b58c805172bdef20ced310df845aa'
  }
})

const app = express()
app.use(paymailRouter)

app.listen(API_REST_PORT, () => {
  console.log(`Listening on port ${API_REST_PORT}.`)
})
