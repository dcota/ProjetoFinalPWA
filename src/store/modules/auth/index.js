import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

export default {
    namespaced: true,
    state() {
        return{
            token: '',
            firstname: '',
            lastname: '',
            level: '',
            expiresIn: 'sss',
            autoLogout: false
        }
    },
    mutations,
    getters,
    actions
}