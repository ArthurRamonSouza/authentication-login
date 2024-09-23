import express, { NextFunction, Request, Response } from "express";
import session from "express-session";
import helmet from "helmet";

export class App {
  public app: express.Application;
  public port: number;

  constructor(appPort: number) {
    this.app = express();
    this.port = appPort;
    this.middlewares();
    this.routes();
  }

  routes(): void {
    this.app.get("/login", (req: Request, res: Response) => {
      res.sendFile(
        "/home/inovatec-10/Documentos/GitHub/authentication-login/template/login.html"
      );
    });

    this.app.post("/login", (req: Request, res: Response) => {
      const { username, password } = req.body;
      console.log(req.body);

      if (username === "admin" && password === "password") {
        req.session.userId = username;
        res.redirect("/dashboard");
      } else {
        res.sendFile(
          "/home/inovatec-10/Documentos/GitHub/authentication-login/template/login.html",
          {
            headers: { error: "Invalid username or password" },
          }
        );
      }
    });

    this.app.get("/logout", (req: Request, res: Response) => {
      req.session.destroy((err) => {
        if (err) {
          return res.redirect("/login");
        }
        res.redirect("/login");
      });
    });

    this.app.get(
      "/dashboard",
      this.requireAuth,
      (req: Request, res: Response) => {
        res.send(`Welcome to your dashboard, ${req.session.userId}!`);
      }
    );
  }

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(
      session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: false, // Set to true only if you are using HTTPS
          httpOnly: true,
          maxAge: 1000 * 60 * 60, // 1 hour
        },
      })
    );
  }

  requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.session.userId) {
      next();
    } else {
      res.redirect("/login");
    }
  };
}

export default new App(3000).app;
