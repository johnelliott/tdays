const test = require('tape')
const tdays = require('./') 

test('module', function(t) {
  t.plan(2)
  t.true(tdays instanceof Function)
  t.equal(typeof tdays, 'function')
})

test('result', function(t) {
  t.plan(1)
  t.equal(typeof tdays(), 'number')
})
