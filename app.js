const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config(); //환경 변수용
const app = express();
app.set("view engine", "ejs");
app.use(morgan("dev")); // 패킷 정보 공개
app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads"));
app.use(express.json()); //json파싱
app.use(express.urlencoded({ extended: false })); //인코딩된 url파싱
app.use(cookieParser(process.env.COOKIE_SECRET)); //쿠키에 암호 넣고 파싱함
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//       maxAge: 1000000,
//     },
//   })
// ); // 세션객체 설정

app.get("/", (req, res) => {
  res.render("login");
});

app.listen(8040);
