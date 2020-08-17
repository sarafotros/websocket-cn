const socket = io()

const form = document.querySelector('#form')
const messages = document.querySelector('#messages')


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log(e.target[0].value);
    let val= e.target[0].value

    socket.emit('sendMessage', val)

    form.reset()
})

socket.on('message', (text)=>{
    messages.innerHTML += `<li>${text}</li>`
})



