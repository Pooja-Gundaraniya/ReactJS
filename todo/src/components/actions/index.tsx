export const addTodo = (data:string) => {
    return {
        type: "add_todo",
        payload:{
            id:new Date().getTime().toString(),
            data
        }
    }
}

export const deleteTodo = (id:string) => {
    return {
        type: "delete_todo",
        id:id
    }
}