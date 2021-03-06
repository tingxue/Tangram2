///import baidu.base.Class;

/**
 * @description 创建一个baidu.Class的单例实例，主要用于创建 EventCenter DataCenter等全局唯一对象
 * @author meizz
 * @create 2010-05-13
 * @name baidu.createSingle
 * @function
 * @grammar baidu.createSingle(json)
 * @param {Object} json 直接挂载到这个单例里的预定属性/方法
 * @return {Object} 一个实例
 */
baidu.createSingle = function (json) {
    var c = new baidu.base.Class();

    for (var key in json) {
        c[key] = json[key];
    }
    return c;
};
