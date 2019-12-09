const bsv = require('bsv')
const mnemonic = require('bsv/mnemonic')
const ecies = require('electrum-ecies')

const db = {
  'id': 1,
  'email': 'deggen@probat.us',
  'password': 'thisismypassword'
}

module.exports = {
  // mongodb insert function
  generateAddress: (user) => {
    console.log('do some stuff')
    return '1Hcsns6ceexPL4RgxUgThKmP333QwGBF2Y'
  },

  createHDWallet: (user, encryptedPassword) => {
    const username = Buffer.from('darren@deggen.com')
    const password = Buffer.from('thisismypassword')
    var seed = bsv.crypto.Hash.sha512hmac(username, password).slice(0, 16)
    // generate a new keypair and encrypt it
    const HDPriv = bsv.HDPrivateKey.fromSeed(seed)
    const privKeyEcies = HDPriv.deriveChild(`m/44'/0'/0'`).privateKey
    const encryptedPassword = bsv.util.buffer.bufferToHex(Buffer.from(ecies.encrypt(data, privKeyEcies.publicKey)))


    const encryptedBase = bsv.util.buffer.hexToBuffer(password).toString('base64')
    const responseText = ecies.decrypt(encryptedBase, privK).toString()

    var nemo = mnemonic.fromSeed(seed, mnemonic.Words.ENGLISH)
    console.log(nemo)
    console.log(HDPriv.toString())
    return HDPriv
  }
}
