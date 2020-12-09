import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataCategories: [],
        items: [],
    },
    mutations: {
        SET_ITEMS (state, items) {
            state.items = items;
        },
        SET_CATEGORIES (state, categories) {
            state.dataCategories = categories
        },
        ADD_ITEM (state, item) {
            state.items.push(item)
        }
    },
    actions: {
        setItems(context, items) {
            context.commit('SET_ITEMS', items)
        },
        addItem(context, item) {
            context.commit('ADD_ITEM', item)
        },
    },
    getters: {
        items: state => {return state.items}
    }
})