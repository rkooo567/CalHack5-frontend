var USER = "";
const host = "http://1a7e2489.ngrok.io"

const path = {
    search: host + "/search?q="
}

const getUser = () => {
    return USER;
}

const setUser = (username) => {
    USER = username;
}

export {getUser, setUser, host, path};