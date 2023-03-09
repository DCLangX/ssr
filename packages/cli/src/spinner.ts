const startSpinner = require('ora')('Starting')

interface Message {
  message: 'start' | 'stop'
}

process.on('message', (data: Message) => {
  const { message } = data
  if (message === 'start') {
    startSpinner.start()
  } else {
    startSpinner.stop()
    process.exit()
  }
})
