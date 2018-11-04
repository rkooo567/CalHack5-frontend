var USER = "tejashah";
const host = "http://b95af64a.ngrok.io"
const path = {
    search: host + "/search?q=",
    posting: host+ "/posting" // id username quantity
}

const getUser = () => {
    return USER;
}

const setUser = (username) => {
    USER = username;
}

export {getUser, setUser, host, path};