/**
 * Created by jk on 2019/1/14.
 */
import Vue from  'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

// 设置状态
const state = {
  isAuthenticated: false,
  user: null
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
