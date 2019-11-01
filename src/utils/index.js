/**
 * 属性挂载到全局的属性上
 * @param {*} args
 */
exports.windowBind = (...args) => {
    let windowKey = null; let obj = {}
    if (args.length === 1) {
        obj = args[0]
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                window[key] = obj[key]
            }
        }
    } else {
        windowKey = args[0]
        obj = args[1]
        window[windowKey] = obj
    }
}
