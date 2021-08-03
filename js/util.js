/**
 * 工具类
 */

/**
* 字符串格式化辅助
*/
String.prototype.format = function (args) {
    let result = this;
    if (arguments.length > 0) {
        if (arguments.length === 1 && typeof (args) == "object") {
            for (let key in args) {
                if (args.key !== undefined) {
                    let reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args.key);
                }
            }
        } else {
            for (let i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    let reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};


// 生成随机数
function rand() {
    return randInt(1, 3);
}

//生成从minNum到maxNum的随机数
function randInt(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}


// 洗牌算法
function shuffle(arr) {
    if (!Array.isArray(arr) && arr.length) {
        return []
    }
    const res = []
    for (let i = arr.length; i > 0; i--) {
        const idx = Math.floor(Math.random() * i)
        res.push(arr[idx])
        arr.splice(idx, 1)
    }
    return res
}