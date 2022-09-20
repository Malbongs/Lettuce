const express = require('express'); 
const cookieParser = require('cookie-parser');
const morgan  = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');
const {sequelize} = require("./models");
const port = 8000;
const db = require("./models");
dotenv.config();//환경 변수용
app.use("/static", express.static(__dirname + "/static"));
const app = express();
app.set("view engine", "ejs");
app.use(morgan("dev")); // 패킷 정보 공개
app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads"));

app.use(express.json());//json파싱
app.use(express.urlencoded({extended:false}));//인코딩된 url파싱
app.use(cookieParser(process.env.COOKIE_SECRET));//쿠키에 암호 넣고 파싱함
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge:1000000,
    }, 
})); // 세션객체 설정

sequelize.sync({force:false})
    .then(()=>{
        console.log("데이터베이스 연결 성공");
    })
    .catch((err)=>{
        console.error(err);
    }); // DB연결

app.get("/", (req, res) => {
  res.render("login");
});

app.use((err,req,res,next)=>{
    res.render('error',{error:err.message});
});
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

