import express from "express";
import QuotesController from "./controllers/QuotesController";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/quote", QuotesController.getDailyQuote);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
