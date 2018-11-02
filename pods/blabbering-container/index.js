/*eslint-disable semi */
setInterval(() => {
  console.log('Hi! I\'m a blabbering container!')
}, 3000)

setInterval(() => {
  console.error('I\'m a random error!')
}, 30000)

setInterval(() => {
  let structuredError = { type: 'structured', message: 'I\'m a structured error' } 
  console.error(JSON.stringify(structuredError))
}, 50000)

process.stdin.resume()
process.stdin.on('data',function(chunk) { 
  let line = chunk.toString()
  console.log('Yes, I totally agree with you regarding: ' + line)
})