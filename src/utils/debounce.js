/**
 * 自定义防抖
 * @param {Function} fn 函数
 * @param {Number} wait 延迟时间，默认500ms
 * @param {boolean} immediate 是否立即执行一次 默认true
 * @author hehuan
 */
let debounce
const Debounce = (fn, wait = 500, immediate = true) => {
    if (typeof fn === 'boolean') {
        debounce && clearTimeout(debounce)
    } else {
        Debounce(true)
        if (immediate) {
            let callNow = !debounce
            debounce = setTimeout(function () {
                debounce = null
            }, wait)
            if (callNow) fn()
        } else {
            debounce = setTimeout(() => {
                fn()
                debounce = null
            }, wait)
        }
    }
}

module.exports = Debounce
