import express from "express";
import QuotesController from "./controllers/QuotesController";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/quote", QuotesController.getDailyQuote);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
