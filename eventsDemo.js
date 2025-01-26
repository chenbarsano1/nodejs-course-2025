import {EventEmitter} from 'events'

const myEmitter = new EventEmitter()

function greetHandler(name) {
    console.log('hello ' + name)
}

function goodbyeHandler(name) {
    console.log('goodbye ' + name)
}

// register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodbyeHandler)

// emit events
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'John')

// error handling
myEmitter.on('error', (err) => {
    console.log('an error occured:', err)
})

// simulate error
myEmitter.emit('error', new Error('something went wrong'))