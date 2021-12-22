/* 判断是否object类型 */
function isObject(value) {
  const isFlag = value !== null && typeof value === 'object'
  return isFlag
}

function deepClone(obj, map = new WeakMap()) {
  /* Set类型 */
  if (obj instanceof Set) {
    return new Set([...obj])
  }
  /* Map类型 */
  if (obj instanceof Map) {
    return new Map([...obj])
  }
  /* Symbol类型 */
  if (typeof obj === 'symbol') {
    return Symbol(obj.description)
  }
  /* Function类型 */
  if (typeof obj === 'function') {
    return obj
  }
  /* Object类型 */
  if (!isObject(obj)) {
    return obj
  }
  /* 引用类型 */
  if (map.has(obj)) {
    return map.get(obj)
  }
  /* Array类型 */
  const newObj = Array.isArray(obj) ? [] : {}
  map.set(obj, newObj)
  for (const key in obj) {
    newObj[key] = deepClone(obj[key], map)
  }

  // 对Symbol的key进行特殊的处理
  const symbolKeys = Object.getOwnPropertySymbols(obj)
  for (const sKey of symbolKeys) {
    // const newSKey = Symbol(sKey.description) //进行深拷贝
    newObj[sKey] = deepClone(obj[sKey], map)
  }

  return newObj
}

export default deepClone