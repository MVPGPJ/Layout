const defaultState = {
    detail: {}
}
export const HOME_DETAIL_SAVE = 'HOME_DETAIL_SAVE'
export const homeModule = {
    namespaced: true,
    name: 'home',
    state: defaultState,
    getters: {
        detail: state => state.detail
    },
    actions: {
        [HOME_DETAIL_SAVE] ({ state, commit }, data) {
            commit(HOME_DETAIL_SAVE, data)
        }
    },
    mutations: {
        [HOME_DETAIL_SAVE] (state, data) {
            state.detail = data
        }
    }
}
