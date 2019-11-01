import HOME from './modules/home'
import COMMON from './modules/common'

/**
 *  公用ajax请求方法
 */
const apis = {
    ...COMMON,
    ...HOME
}
export default apis
