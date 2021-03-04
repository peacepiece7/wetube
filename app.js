import express from "express";

// Router url
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

// NPM package
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

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
