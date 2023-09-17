const express =require("express")
const app =express();
const cors=require('cors')
const mongoose =require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const User= require("./models/User.js")
const CookieParser=require("cookie-parser")
// emitter.setMaxListeners(15); // Increase the limit to 15 (or the number you need)

const bcryptSalt=bcrypt.genSaltSync(10)
const jwtSecret="fhdofhorbuaojhdasfhouuw"
mongoose.connect("mongodb://localhost:27017/UserDB").then(()=>{
        console.log(`mongodb connected with server: 27017`);
    }).catch((err)=>{
        console.log(err)
    })

app.use(express.json())

app.use(CookieParser())
app.use(cors({
    credentials:true,
    origin:"http://127.0.0.1:5173"
}))

app.get("/test",(req,res)=>{
    res.json("okay")
})
app.post("/register",async (req,res)=>{
    const {name,email,password}=req.body
    try{
        const userDoc=await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
        })
        res.json(userDoc)
    }catch(e){
        res.status(422).json(e)
    }
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
        const userDoc=await User.findOne({email})
        if(userDoc){
            const passOk=bcrypt.compareSync(password,userDoc.password)
            if(passOk){
                // res.json("passOk")
                jwt.sign({email:userDoc.email,_id:userDoc._id,name:userDoc.name,
                   }, jwtSecret ,{ },(err,token)=>{
                    if(err) throw  err;
                    res.cookie('token',token).json(userDoc )                
                })
          }
          else{
                res.status(422).json("pass not okay")
          }
        }
      })
 app.get("/profile",(req,res)=>{
    const {token}=req.cookies
    if(token){
         jwt.verify(token,jwtSecret,{},async(err,userData)=>{
        if (err) throw err;
        // const {name,email,_id}=await User.findById(userData.id)
        res.json(userData)    
        });
    }
    else{
        res.json(null)
    }
 })


app.post("/logout",(req,res)=>{
    res.cookie('token',"").json(true)
})


//Pd7D3LuxQEcDG41w
app.listen(4000);