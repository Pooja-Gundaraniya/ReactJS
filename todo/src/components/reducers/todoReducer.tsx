interface Itodo {
    id: string,
    data: string
}

const initialData: { list: string[] } = {
    list: []
}

const TodoReducer = (state = initialData, action:any): any => {
    switch (action.type) {

        case "add_todo":
            const { id, data }: Itodo = action.payload;
            return {
                ...state,
                list: [...state.list,
                {
                    id: id,
                    data: data
                }
                ]

            }

        case "delete_todo":
            const newList = state.list.filter((elem: any) => elem.id !== action.id);
            return {
                ...state,
                list: newList
            };
        default:
            return state;
    }

}

export default TodoReducer