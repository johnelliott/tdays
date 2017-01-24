# t-days
![](https://img.shields.io/npm/v/tdays.svg)
![](https://img.shields.io/npm/dt/tdays.svg)

get number of days of Trump presidency
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
