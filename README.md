# t-days
![](https://img.shields.io/npm/v/tdays.svg)
![](https://img.shields.io/npm/dt/tdays.svg)

get number of days of Trump presidency
## install
`$ npm install -g tdays`
## cli
`$ tdays` 84
## module
```javascript
const tdays = require('tdays')
tdays() // 84
```
## about
📆 get "Trump day x"
## source

```js
function tDays () {
  var inauguration = new Date(2017, 0, 20)
  var now = new Date()
  return Math.floor((now - inauguration) / (1000 * 60 * 60 * 24)) + 1
}
```
