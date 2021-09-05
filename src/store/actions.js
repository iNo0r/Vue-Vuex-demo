export default {
  login(context) {
    console.log('hi');
    context.commit('login');
  },
  logout(context) {
    console.log('hi');
    context.commit('logout');
  }
};
