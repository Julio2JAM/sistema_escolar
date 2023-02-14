import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
    console.log("Hello World " + new Date().toLocaleDateString());
    res.send("Hellow World")
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
}); 