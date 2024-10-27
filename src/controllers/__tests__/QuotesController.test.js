import QuotesController from "../QuotesController";
import QuotesService from "../../services/QuotesService";

jest.mock("../../services/QuotesService");

describe("QuotesController", () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();

    req = {};
    res = {
      json: jest.fn(),
    };
  });

  it("should return a JSON response with the expected quote", () => {
    const expectedQuote = "This is a test quote.";
    QuotesService.getQuote.mockReturnValue(expectedQuote);

    QuotesController.getDailyQuote(req, res);

    expect(res.json).toHaveBeenCalledWith({ quote: expectedQuote });
  });

  it("should call QuotesService.getQuote once", () => {
    QuotesController.getDailyQuote(req, res);

    expect(QuotesService.getQuote).toHaveBeenCalledTimes(1);
  });
});
