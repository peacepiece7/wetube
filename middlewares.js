import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "wetube";
  res.locals.routes = routes;
  next();
};
