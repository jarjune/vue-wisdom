import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import getters from '@/store/getters'
import actions from '@/store/actions'

Vue.use(Vuex)

/**
 * 状态
 * @type {{count: number}}
 */
const state = {
  count: 1,
  userInfo: null
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
