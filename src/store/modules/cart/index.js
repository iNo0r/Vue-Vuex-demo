import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  getters,
  mutations,
  actions
};
