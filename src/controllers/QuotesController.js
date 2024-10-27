import QuotesService from "../services/QuotesService";

const QuotesController = {
  getDailyQuote: (req, res) => {
    const quote = QuotesService.getQuote();
    res.json({ quote });
  },
};

export { QuotesController as default };
