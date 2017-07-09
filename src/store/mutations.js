/**
 * 改变状态的方法
 * @type {{add: ((state, num)), jian: ((state))}}
 */
const mutations = {
  add (state, num) {
    state.count += num
  },
  jian (state) {
    state.count --
  },
  saveUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default mutations
