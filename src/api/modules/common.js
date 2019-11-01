/**
 * 公共使用的接口
 */
import { createAPI } from '../setup'
import hostConfig from '../config'
const COMMON = {
    // 获取我的首页所有数据
    getUserDetail: (data) => createAPI(`${hostConfig.apiHost}/h5/uc/getUserDetail`, 'post', data)
}
export default COMMON
