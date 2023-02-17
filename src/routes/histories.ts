import express from "express";

const router = express.Router();

router.get('/history', (req, res) => {
    console.log(req);
    res.send("Get history");
})

export const historiesRouter = router;