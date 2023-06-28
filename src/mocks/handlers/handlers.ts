import { rest } from "msw";
import { tokenMock } from "../user/userMocks";
import paths from "../../routers/paths";
import { boardGamesMock } from "../boardgames/boardgamesMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.loginEndpoint}`, (_req, res, ctx) => {
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
        totalBoardgames: boardGamesMock.length,
      })
    );
  }),

  rest.delete(`${apiUrl}${paths.boardgames}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Boardgame deleted!",
      })
    );
  }),

  rest.put(
    `${apiUrl}${paths.boardgames}/${paths.updateEndpoint}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Boardgame was succesfully updated",
        })
      );
    }
  ),

  rest.post(`${apiUrl}${paths.createEndpoint}`, (_req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        boardgame: boardGamesMock[1],
      })
    );
  }),

  rest.get(`${apiUrl}${paths.boardgames}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        boardgame: boardGamesMock[0],
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${paths.boardgames}`, (_req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: "Error with the server" }));
  }),

  rest.post(`${apiUrl}${paths.loginEndpoint}`, (_req, res, ctx) => {
    return res(
      ctx.status(401),
      ctx.json({
        message: "Wrong credentials",
      })
    );
  }),

  rest.post(`${apiUrl}${paths.createEndpoint}`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "Error: no boardgame was created",
      })
    );
  }),

  rest.delete(`${apiUrl}${paths.boardgames}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "Boardgame not found!",
      })
    );
  }),

  rest.put(
    `${apiUrl}${paths.boardgames}/${paths.updateEndpoint}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          message: "Error with the server",
        })
      );
    }
  ),

  rest.get(`${apiUrl}${paths.boardgames}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "Boardgame not found!",
      })
    );
  }),
];

export const PaginationHandlers = [
  rest.get(`${apiUrl}${paths.boardgames}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        boardgames: boardGamesMock,
        totalBoardgames: 10,
      })
    );
  }),
];
