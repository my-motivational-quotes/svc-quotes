import QuotesService, { QUOTES } from "../QuotesService";

describe("QuotesService", () => {
  beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should return a quote from the QUOTES array", () => {
    const quote = QuotesService.getQuote();
    expect(QUOTES).toContain(quote);
  });

  test("should return different quotes on different calls", () => {
    Math.random.mockReturnValueOnce(0.1).mockReturnValueOnce(0.9);
    const quote1 = QuotesService.getQuote();
    const quote2 = QuotesService.getQuote();
    expect(quote1).not.toBe(quote2);
  });
});
