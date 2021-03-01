import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

// controller
const handleHome = (req, res) => {
  res.send("hellow from home!!");
};

// cookie Parser
const cookieParserTest = (req, res, next) => {
  // Cookies that have not been signed
  console.log("🍪🍪🍪Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("🍪🍪🍪Signed Cookies: ", req.signedCookies);
  next();
};

// helmet
app.use(
  helmet((req, res) => {
    console.log(`⛑⛑⛑helmet request : ${req}`);
    console.log(`⛑⛑⛑helmet resposive : ${res}`);
  })
);

// body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//cookie Parser
app.use(cookieParser());

// margan
app.use(morgan("combined"));

app.get("/", cookieParserTest, handleHome);

// app valirable을 전부 변수 명으로 하는 객체를 하나로 취급하고 export함.
class TestClass {}

class UserStorage {
  loginUser = (id, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("not found"));
        }
      }, 1000);
    });
  }
}
