#!/usr/bin/env node

function tDays () {
  var inauguration = new Date(2017, 0, 20)
  var now = new Date()
  return Math.floor((now - inauguration) / (1000 * 60 * 60 * 24)) + 1
}

if (require.main === module) {
  console.log(tDays())
}

module.exports = tDays
