export default function authHeader() {
    let accessToken = localStorage.getItem('personal_access_token');

    if (accessToken) {
        return {Authorization: 'Bearer ' + accessToken};
    } else {
        return {};
    }
}