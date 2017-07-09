/**
 * 输出count之前，会进行getters里的count()
 * @type {{}}
 */
const getters = {
  count (state) {
    state.count += 1
    return state.count
  }
}

export default getters
