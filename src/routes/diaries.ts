import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send("fetching all entry diaries...");
});

router.post('/', (_req, res) => {
    res.send('saving all entries');
});

export default router;