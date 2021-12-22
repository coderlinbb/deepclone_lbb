## deepclone_lbb

快速实现深拷贝（Really Fast Deep Clone）

## 使用方式（Usage）

```shell
npm install deepclone_lbb
```

```js
const deepClone = require('deepclone_lbb')

let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
  name: "why",
  age: 18,
  friend: {
    name: "james",
    address: {
      city: "广州"
    }
  },
  // 数组类型
  hobbies: ["abc", "cba", "nba"],
  // 函数类型
  foo: function (m, n) {
    console.log("foo function")
    console.log("100代码逻辑")
    return 123
  },
  // Symbol作为key和value
  [s1]: "abc",
  s2: s2,
  // Set/Map
  set: new Set(["aaa", "bbb", "ccc"]),
  map: new Map([["aaa", "abc"], ["bbb", "cba"]])
}
//引用类型
obj.info = obj

const cloneObj = deepClone(obj)//简单实现深拷贝
```



