import { FastifyInstance } from "fastify";
import { todoController } from "../controller/index";
import { isAuthenticated } from "../middleware/authMiddleware";
export default async function (app: FastifyInstance) {
  app.post("/insert", { preHandler: isAuthenticated }, todoController.insert);
  app.post("/fetch", { preHandler: isAuthenticated }, todoController.fetch);
}