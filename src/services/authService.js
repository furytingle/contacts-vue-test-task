import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL

class AuthService {
    login(credentials) {
        return axios.post(API_URL + 'login', {
            email: credentials.email,
            password: credentials.password
        }).then(response => {
            console.log(response)
            if (response.data.data.access_token) {
                localStorage.setItem('personal_access_token', response.data.data.access_token)
            }

            return response.data;
        })
    }

    logout() {
        localStorage.removeItem('personal_access_token')
    }
}

export default new AuthService();