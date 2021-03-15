import express from "express";

// Router url
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// NPM package
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

console.log(process.cwd());
console.log(`__dirname`, __dirname);

app.set("views", process.cwd() + "/views");
app.set("view engin", "pug");
/* .html 사용할 때
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
*/
// Cookie Parser
const cookieParserTest = (req, res, next) => {
  // Cookies that have not been signed
  console.log("🍪🍪🍪Cookies: ", req.cookies);
  // Cookies that have been signed
  console.log("🍪🍪🍪Signed Cookies: ", req.signedCookies);
  next();
};
// Helmet
app.use(
  helmet((req, res) => {
    console.log(`⛑⛑⛑helmet request : ${req}`);
    console.log(`⛑⛑⛑helmet resposive : ${res}`);
  })
);
// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
//cookie parser
app.use(cookieParser());
// Morgan
app.use(morgan("combined"));

//Routers
app.use("/", globalRouter);
app.use(routes.users, cookieParserTest, userRouter);
app.use(routes.videos, videoRouter);

export default app;
