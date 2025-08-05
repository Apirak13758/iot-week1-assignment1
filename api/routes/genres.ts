// Fun Assignment, Implement this.
import { Hono } from "hono";
import drizzle from "../db/drizzle.js";
import { Users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import dayjs from "dayjs";

const UsersRouter = new Hono();

export default UsersRouter;