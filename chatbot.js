const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// window.onload = function() {
//     sendMessage('Hello! What is the weather like?');
// };

function sendMessage() {
  const message = userInput.value;
  const reply = handleWeatherQuestion(message); // Use handleWeatherQuestion instead of getReply
  addMessage('user', message);
  addMessage('bot', reply);
  userInput.value = '';
}

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(message) {
  let reply = '';
  if (message.toLowerCase().includes('sunny')) {
    reply = 'You should wear a t-shirt and shorts.';
  } else if (message.toLowerCase().includes('rainy')) {
    reply = 'You should wear rain boots and a raincoat.';
  } else if (message.toLowerCase().includes('cloudy')) {
    reply = 'You should wear a light jacket.';
  } else if (message.toLowerCase().includes('windy')) {
    reply = 'You should wear a windbreaker.';
  } else if (message.toLowerCase().includes('snowy')) {
    reply = 'You should wear a heavy coat, gloves, and boots.';
  } else {
    reply = 'What is the weather like?';
  }
  return reply;
}

function handleWeatherQuestion(message) {
  let reply = '';
  if (message.toLowerCase().includes('hi')) {
    reply = 'Hello! What is the weather like?';
  } else {
    reply = getReply(message);
  }
  return reply;
}
