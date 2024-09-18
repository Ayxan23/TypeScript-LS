import { db } from "./db";
// POST
export const addTodo = (req, res) => {
    const body = req.body;
    const todoitem = {
        id: Math.random().toString(),
        text: "s",
        isDone: false,
    };
    db.push(todoitem);
    res.status(200).send({ msg: "Added successfully" });
};
/*
export const addTodo0 = (req: Request, res: Response) => {
  res.send("buradan todo add olunacaq"); // yol2
};
export const addTodo: Handler = (req, res) => {
  res.send("buradan todo add olunacaq"); //yol 1
};
*/
