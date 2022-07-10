import DashboardService from '../service/dashboard';

export const state = () => ({
  data: {},
  loading: false,
});

export const mutations = {
  SET_DATA(state, { data }) {
    state.data = data;
  },
  SET_LOADING(state, value) {
    state.loading = value;
  },
};

export const actions = {
  async fetchAll({ commit }, tableId) {
    commit('SET_LOADING', true);

    try {
      const { data } = await DashboardService(this.$client).fetchAll(tableId);
      commit('SET_DATA', data);
    } catch (error) {
      throw error;
    } finally {
        commit('SET_LOADING', false);
    }
  },
};

export const getters = {
  isLoaded(state) {
    return !state.loading;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
