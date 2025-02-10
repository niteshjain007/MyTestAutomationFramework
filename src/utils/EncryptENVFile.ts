import { decrypt } from "dotenv";

let CryptoJSUtil = require("crypto-js");
let fs = require("fs");
let path = require("path");

const SALT = process.env.SALT || "defaultsalt";
const currentDir = __dirname;
//src folder
const srcDir = path.resolve(currentDir,"..");
// config folder

const configDir= path.resolve(srcDir,"config");
const envFilePath= `${configDir}\\.env`;

if(process.env.NODE_ENV){
    const envFilePath = `${configDir}\\.env.${process.env.NODE_ENV}`;

}
console.log(envFilePath);

export function encryptEnvFIle(){
    // read .env file

    const envFileCOntent = fs.readFileSync(envFilePath, "utf8");
    const envLine = envFileCOntent.split("\n");

    //encrypt values
    const encryptedLine = envLine.map((line)=>{
        const [key,value] = line.split("=");
        if(value){
            const encryptedValue = CryptoJSUtil.AES.encrypt(value,SALT).toString();
            return `${key}=${encryptedValue}`;
        }
    return line;
    });

    // join line and write nack to .env file
    const updatedEnvCOntent = encryptedLine.join("\n");
    fs.writeFileSync(envFilePath, updatedEnvCOntent,"utf8");
    console.log("encryption copleted, .env file updated");
}

export function decryptEnvFile(){
    // read .env file
    const envFileContent = fs.readFileSync(envFilePath,"utf8");
    const envLines = envFileContent.split("\n");
    
    //devrypt the values and update in array
     const decryptedLines = envLines.map((line)=>{
        const [key,value] = line.split("=");
        if(value){
            const decryptedVAlue = CryptoJSUtil.AES.decrypt(value,SALT).toString(
                            CryptoJSUtil.enc.Utf8
            );
            return `${key}=${decryptedVAlue}`;
        }
        return line;
     });

     // join the lines and write it back to .env file
     const updatedEnvCOntent = decryptedLines.join("\n");
     fs.writeFileSync(envFilePath, updatedEnvCOntent,"utf8");

     console.log("decrption completed, updated .env file");
}




