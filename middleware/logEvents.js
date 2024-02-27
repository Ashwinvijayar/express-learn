 const { format } =require('date-fns')
const {v4:uuid} = require('uuid')
console.log(format(new Date(),'ddMMyyyy\tHH:mm:ss'))

console.log(uuid())

const fs=require('fs')
const fspromises= require('fs').promises
const path = require( 'path')


const logEvents = async(message,logName) =>{
    //console.log(`log events filename ${filename}`)
    const datetime= `${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItem=`${datetime}\t${uuid()}\t${message}\n`
    console.log(logItem)

try{
     if(!fs.existsSync(path.join(__dirname,'..','logs'))){
         await fspromises.mkdir(path.join(__dirname,'..','logs'))
     }
     await fspromises.appendFile(path.join(__dirname,'..','logs',logName),logItem)
}
catch(err){
    console.error(err)

}

}

const logger= (req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t ${req.url}`,'reqlog.txt')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = {logger,logEvents} 
/* const os = require('os');
const path= require('path')
console.log(os.type());
console.log(__dirname);
const fs = require('fs');
fs.readFile('./files/bigfile.txt','utf8',(err,data)=>{
    if(err)
    throw(err);
    console.log(data);
})
fs.writeFile(path.join(__dirname,'files','masini.txt'),'hi masini',(err)=>{
    if (err) throw err
    console.log("write complete")
}) */

