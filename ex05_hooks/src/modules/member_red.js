const initialState = {
    login: { id: "", pwd: "" },
    register: { id: "", pwd: "", name: "", addr: "" },
    data: null,
    loading: false,
    error: null
}
export const initialLogin = { id: "", pwd: "" }
export const initialReg = { id: "", pwd: "", name: "", addr: "" }
export const initialData = { data: null }

// { type: "CHANGE_INPUT", value: e.target.value, name: e.target.value, form: "Login" }
const reducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        // case "LOGIN_INPUT": return { ...state, [action.name]: action.value };
        // case "REG_INPUT": return { ...state, [action.name]: action.value };
        case "LIST": return { data: action.data }
        case "CHANGE_INPUT":
            console.log("action:", action)
            return {
                ...state,
                [action.form]: {
                    ...state[action.form],
                    [action.name]: action.value
                }
            }
        case "LOADING": return {...state, loading: true, error:null};
        case "FINISHED": return {...state, loading: false, error:null};
        case "ERROR": return {...state, loading: false, error:action.msg};
        default: return state;
    }
}
export { reducer, initialState }