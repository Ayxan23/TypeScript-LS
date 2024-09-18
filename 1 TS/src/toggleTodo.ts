import { Handler } from "express";
import { db } from "./db";
import { SuccessResponse } from "./types";

//toggleTodo/:id
export const toggleTodo: Handler = (req, res) => {
  const id = req.params.id;
  const todoIndex = db.findIndex((todo) => todo.id === id);
  if (todoIndex >= 0) {
    db[todoIndex].isDone = !db[todoIndex].isDone;
  }
  return res.status(200).send({
    msg: "Toggle Successfully",
  } as SuccessResponse);
};
