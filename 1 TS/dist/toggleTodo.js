import { db } from "./db";
//toggleTodo/:id
export const toggleTodo = (req, res) => {
    const id = req.params.id;
    const todoIndex = db.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
        db[todoIndex].isDone = !db[todoIndex].isDone;
    }
    return res.status(200).send({
        msg: "Toggle Successfully",
    });
};
