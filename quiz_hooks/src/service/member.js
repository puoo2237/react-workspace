let data_set = [
    {id: "aaa", pwd: "aaa", name: "홍길동", addr: "산골짜기"},
    {id: "bbb", pwd: "bbb", name: "김개똥", addr: "개똥별"},
    {id: "ccc", pwd: "ccc", name: "고길동", addr: "마포구"},
    {id: "ddd", pwd: "ddd", name: "이말년", addr: "동작구"},
]

const getData = () => {
    return data_set
}

const getOne = (id) => {
    return data_set.filter((mem) => mem.id === id)[0]
}

const delOne = (id) => {
    data_set = data_set.filter((mem) => mem.id !== id)
}
export {getData, getOne, delOne};