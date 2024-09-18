export interface TodoItem {
  text: string;
  id: string;
  isDone: boolean;
}

export interface TodoRequestBody extends Pick<TodoItem, "text"> {}

export interface SuccessResponse {
  msg: string;
}
