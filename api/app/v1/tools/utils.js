const randtoken = require('rand-token');
const crypto = require('crypto');
const algorithm = '';
const password = '';

const utils = {

    generateToken() {
        return randtoken.generate(50);
    },
    
    encrypt(text){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    },
    
    decrypt(text){
        var decipher = crypto.createDecipher(algorithm,password)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }
}

module.exports = utils;