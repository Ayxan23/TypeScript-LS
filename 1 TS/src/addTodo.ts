import { Request, Response, Handler } from "express";
import { TodoItem, TodoRequestBody, SuccessResponse } from "./types";
import { db } from "./db";

// POST
export const addTodo: Handler = (req, res) => {
  const body: TodoRequestBody = req.body;

  const todoitem: TodoItem = {
    id: Math.random().toString(),
    text: "s",
    isDone: false,
  };

  db.push(todoitem);
  res.status(200).send({ msg: "Added successfully" } as SuccessResponse);
};

/*
export const addTodo0 = (req: Request, res: Response) => {
  res.send("buradan todo add olunacaq"); // yol2
};
export const addTodo: Handler = (req, res) => {
  res.send("buradan todo add olunacaq"); //yol 1
};
*/
