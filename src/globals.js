var USER = "";
const host = "http://1a855200.ngrok.io"
export const path = {
    search: host + "/search?q="
}

const getUser = () => {
    return USER;
}

const setUser = (username) => {
    USER = username;
}

export {getUser, setUser};