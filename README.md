# t-days
![](https://img.shields.io/npm/v/tdays.svg)
![](https://img.shields.io/npm/dt/tdays.svg)

get days since Trump was elected
## about
📆 get "Trump day x"
## source
```js
function tDays () {
  var election = new Date(2016, 10, 8)
  var now = new Date()
  return Math.floor((now - election) / (1000 * 60 * 60 * 24))
}
```
