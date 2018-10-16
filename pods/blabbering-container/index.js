/*eslint-disable semi */
setInterval(() => {
  console.log('Hi! I\'m a blabbering container!')
}, 3000)

process.stdin.resume()
process.stdin.on('data',function(chunk) { 
  let line = chunk.toString()
  console.log('Yes, I totally agree with you regarding: ' + line)
})