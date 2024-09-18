import { Handler } from "express";
import { db } from "./db";

export const getTodos: Handler = (req, res) => {
  res.status(200).json(db);
};
