import { db } from "./db";
//deleteTodo/:id
export const deleteTodo = (req, res) => {
    const id = req.params.id;
    const todoIndex = db.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
        db.splice(todoIndex, 1);
    }
    return res.status(200).send({
        msg: "Deleted Successfully",
    });
};
