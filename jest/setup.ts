import fetchMock from "jest-fetch-mock";

fetchMock.doMock();

jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn());
