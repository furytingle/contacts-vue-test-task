export default function authHeader() {
    let accessToken = localStorage.getItem('user');

    if (accessToken) {
        return {Authorization: 'Bearer ' + accessToken};
    } else {
        return {};
    }
}