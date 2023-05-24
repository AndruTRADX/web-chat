const socket = io()

const send = document.querySelector('#send-message')
const allMesages = document.querySelector('#all-messages')

send.addEventListener('click', () => {
  const message = document.querySelector('#message')
  if(message != '') {
    socket.emit('message', message.value)
    message.value = ''
  } else {
    alert('El mensaje no puede estar vacio')
  }
})

socket.on('message',({user, message}) => {
  const htmlMgs = document.createRange().createContextualFragment(`
    <div class="message">
      <div class="image-container">
        <img src="images/funny-cat.jpg" alt="gato-gracioso">
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">hace un segundo</span>
        </div>
        <p>${message}</p>
      </div>
    </div>
  `)

  allMesages.append(htmlMgs)
})