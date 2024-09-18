import { Handler } from "express";
import { db } from "./db";
import { SuccessResponse } from "./types";

//deleteTodo/:id
export const deleteTodo: Handler = (req, res) => {
  const id = req.params.id;
  const todoIndex = db.findIndex((todo) => todo.id === id);
  if (todoIndex >= 0) {
    db.splice(todoIndex, 1);
  }
  return res.status(200).send({
    msg: "Deleted Successfully",
  } as SuccessResponse);
};
