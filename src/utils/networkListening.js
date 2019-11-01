/**
 * 网络监听器，断网时显示无网络页面
 */

function network () {
    return window.navigator.onLine
}
function networkListening () {
    return new Promise((resolve, reject) => {
        window.addEventListener('online', resolve(network()))
    })
}
networkListening.install = function (Vue) {
    Vue.prototype.$networkListening = function () {
        return networkListening()
    }
}
export default networkListening
