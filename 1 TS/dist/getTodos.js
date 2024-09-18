import { db } from "./db";
export const getTodos = (req, res) => {
    res.status(200).json(db);
};
