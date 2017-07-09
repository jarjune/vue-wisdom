/**
 * actions异步修改状态
 * @type {{addAction: (({ commit }:{commit: *}))}}
 */
const actions = {
  addAction ({ commit }) {
    setTimeout(() => commit('add', 100), 2000)
  }
}

export default actions
