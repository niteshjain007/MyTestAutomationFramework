let CryptoJsUtil = require("crypto-js");

const SALT = process.env.SALT || "defaultSalt";

// encryption

export function encrypt(text: string)
{
    const cipherText = CryptoJsUtil.AES.encrypt(text,SALT).toString();
     return cipherText;
}

// decryption

export function decrypt(cipherText: string)
{
    const bytes = CryptoJsUtil.AES.decrypt(cipherText, SALT);
    const originalText = bytes.toString(CryptoJsUtil.enc.Utf8);
    return originalText;
}