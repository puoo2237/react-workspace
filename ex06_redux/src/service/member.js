let data_set = [
    { id: "aaa", pwd: "aaa", name: "홍길동", addr: "산골짜기" },
    { id: "bbb", pwd: "bbb", name: "김개똥", addr: "개똥별" },
    { id: "ccc", pwd: "ccc", name: "고길동", addr: "마포구" },
    { id: "ddd", pwd: "ddd", name: "이말년", addr: "동작구" },
]

// export const getList = () => fetch("http://localhost:4000/mem");
export const getList = () => data_set;
export const register = (user) => {
    data_set = data_set.concat(user);
    alert("회원가입 성공")
    return 1 // 회원 가입 성공
}

export const loginCheck = (id, pwd) => {
    const data = data_set.filter(d => d.id === id)
    if (data[0].length !== 0) {
        if(data[0].pwd === pwd){
            return 0; // 인증 성공
        }else{
            return 1; // 비밀번호 틀림
        }
    }
    return -1; // 존재하지 않는 id
}