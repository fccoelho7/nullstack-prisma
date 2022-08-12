import Nullstack from "nullstack";
import { PrismaClient } from "@prisma/client";
import Application from "./src/Application";

const context = Nullstack.start(Application);
const db = new PrismaClient();

context.start = async function start() {
  context.db = db;
};

export default context;
