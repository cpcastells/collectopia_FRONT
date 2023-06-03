import { rest } from "msw";
import { tokenMock } from "../user/userMocks";
import paths from "../../routers/paths";
import { boardGamesMock } from "../boardgames/boardgamesMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}user/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: tokenMock,
      })
    );
  }),

  rest.get(`${apiUrl}${paths.boardgames}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        boardgames: boardGamesMock,
      })
    );
  }),
];
