import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4222;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}
const handleHome = (req, res) => {
  res.send("hellow from home!!");
};

app.use(
  helmet((req, res) => {
    console.log(`⛑⛑⛑helmet request : ${req}`);
    console.log(`⛑⛑⛑helmet resposive : ${res}`);
  })
);
app.use(morgan("combined"));

app.get("/", handleHome);

app.listen(PORT, handleListening);
