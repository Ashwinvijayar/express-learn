// cross  origin resource sharing
const whiteList=['https://www.yoursite.com',
                 'http://127.0.0.1:5500',
                 'http://localhost:3500']
const corsOption ={
    origin:(origin,callback)=>{
        if (whiteList.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        } else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionSucessstatus:200
}
