let data_set = [
    { id: "aaa", pwd: "aaa", name: "홍길동", addr: "산골짜기" },
    { id: "bbb", pwd: "bbb", name: "김개똥", addr: "개똥별" },
    { id: "ccc", pwd: "ccc", name: "고길동", addr: "마포구" },
    { id: "ddd", pwd: "ddd", name: "이말년", addr: "동작구" },
]

export const initialState = {
    join: { id: "", pwd: "", check_pwd: "", name: "", addr: "" },
    login: { id: "", pwd: ""},
    modify: { id: "", pwd: "", check_pwd: "", name: "", addr: "" },
    one: {data: null},
    all: {data: null},
    loading: false,
    error: null
}

export const reducer = (state, action) => {
    console.log("action", action)
    switch (action.type) {
        case "CHANGE_INPUT": return {
            ...state, [action.form]: {
                ...state[action.form], [action.name]: action.value
            }
        }
        case "LIST": return {...state, [action.form]: {...state[action.form], data: action.data}}
        case "LOADING": return {...state, loading: true}
        case "FINISHED": return {...state, loading: false}
        case "ERROR": return {...state, error: action.msg}
        default: return state;
    }
}
const path = "http://localhost:4000/mem";
export const getData = () => {
    return fetch(path)
    // return data_set
}

export const getOne = (id) => {
    return fetch(path + '/' + id)
    // return data_set.filter((mem) => mem.id === id)[0]
}

export const delOne = (id) => {
    return fetch(path + '/delete/' + id)
    // data_set = data_set.filter((mem) => mem.id !== id)
}

export const addOne = (user) => {
    return fetch(path + "/add", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    // data_set = data_set.concat(user)
}

export const modOne = (user) => {
    return fetch(path + "/modify",
        {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
    // data_set = data_set.map(mem => mem.id === user.id ? user : mem)
}
