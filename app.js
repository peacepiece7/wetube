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

export default app;
