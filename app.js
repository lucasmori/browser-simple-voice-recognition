const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = [
  'I\'m good you little piece of love',
  'Doing good homeboi',
  'leave me alone'
]

const wheather = [
  'Wheather is fine',
  'You need a tan'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = function() {
  console.log('voice is activated, you can to microphoneeee');
}

recognition.onresult = function(event){
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript
  content.textContent = transcript
  readOutLoud(transcript)
}

btn.addEventListener('click', ()=> {
  recognition.start();
})

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = 'I dont know what you said'

  if(message.includes('how are you')){
    const text = greetings[Math.floor(Math.random() * greetings.length)]
    speech.text = text
  }

  if(message.includes('dark screen')){
    document.querySelector('.container').style.background = "rgb(48, 51, 46)"
    document.querySelector('.content-box').style.color = "#333"
    document.querySelector('.content-box').style.removeProperty('border')

    speech.text = 'Changed background to dark mode'
  }
  
  if(message.includes('white screen')){
    document.querySelector('.container').style.background = "white"
    document.querySelector('.content-box').style.border = "solid 1px rgb(236, 5, 142)"
    document.querySelector('.content-box').style.color = "rgb(48, 51, 46)"

    speech.text = 'Changed background to white mode'
  }

  speech.volume = 0.5
  speech.rate = 1
  speech.pitch = 1

  window.speechSynthesis.speak(speech)
}