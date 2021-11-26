import AuthService from '../services/authService'

const accessToken = localStorage.getItem('personal_access_token');
const initialState = {
    status: { loggedIn: !!accessToken }
}

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, credentials) {
            return AuthService.login(credentials).then(
                response => {
                    commit('loginSuccess', response);
                    return Promise.resolve(response);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
    },
    mutations: {
        loginSuccess(state) {
            state.status.loggedIn = true;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
        },
        logout(state) {
            state.status.loggedIn = false;
        }
    }
}

