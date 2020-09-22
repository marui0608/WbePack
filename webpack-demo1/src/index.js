import './search'
import add from './search'

console.log('测试打包的index.js能在index.html中使用')

var result = add(30,40)

console.log(result)

const fn = (a,b) => {
    a+b
}