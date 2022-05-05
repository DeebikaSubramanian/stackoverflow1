// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//   }


const express=require('express');
const cors=require('cors');
const path=require('path')
const app=express();
const db=require('./database')
const bodyParser=require('body-parser')
const router=require('./routers')
const PORT=process.env.PORT || 80

//db connection


db.connect();




//middlewatre

app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}))

app.use(express.json())

//headers
// app.use((req,res,next)=>
// {
    // res.header('Access-Control-Allow-Origin', "*")
    // res.header('Access-Control-Allow-Headers', "*") 
    // next();

    app.use((req, response, next) => {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        
        next();
      });
    
//     next();
// })

//api
app.use('/api',router)




//static resources



app.use('/upload',express.static(path.join(__dirname,'/../uploads')))
app.use(express.static(path.join(__dirname,'/../frontend/build')))


app.get('*',(req,res)=>
{
    try{
    res.sendFile(path.join(`${__dirname}/..frontend/build/index.html`))
    }catch(e){
        res.send('Oops!error occurred')
    }
})

// cors
// app.use(cors())
app.use(cors({
    origin: '*'
}));


//server listen
{
    app.listen(PORT,()=>
    {
        console.log(`StackOverflow clone is running on PORT No-${PORT}`)
    })
}