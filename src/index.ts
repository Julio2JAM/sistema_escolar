import express from "express";
import * as routes from "./routes";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
    console.log("Hello World " + new Date().toLocaleDateString());
    res.send("Hellow World")
});

app.use("/api/v1/", routes.diariesRoutes);
app.use("/api/v1/", routes.historiesRouter);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
}); 