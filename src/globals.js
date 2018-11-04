var USER = "tejashah";
const host = "http://1a7e2489.ngrok.io"
export const path = {
    search: host + "/search?q=",
    posting: host+ "/posting" // id username quantity
}

const getUser = () => {
    return USER;
}

const setUser = (username) => {
    USER = username;
}

export {getUser, setUser};