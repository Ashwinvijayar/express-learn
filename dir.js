const fs = require('fs')
if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if (err) throw err
        console.log('directory created')
     
     })

}
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if (err) throw err
        console.log('directory created')
     
     })

}

//to display the error
process.on('uncaughtException',err=>{
    console.error(`there was an uncauht error: ${err}`)
})