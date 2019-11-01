/**
 * x秒格式化为00:0x显示
 * @param {Number} time 秒数
 */
export const formatSecond = function (time = 0) {
    time = Number(time) && Math.round(time)
    if (time) {
        let m = Math.floor(time / 60)
        let s = time % 60
        return `${PrefixInteger(m, 2)}:${PrefixInteger(s, 2)}`
    } else {
        return '00:00'
    }
}

/**
 * 例如我们希望输出的数字长度是固定的，假设length为10，如果数字为123，则输出0000000123，不够位数就在之前补足*
 * @param {Number} num 需转化的数字
 * @param {Number} length 转化长度
 */
const PrefixInteger = function (num, length) {
    return (Array(length).join('0') + num).slice(-length)
}
