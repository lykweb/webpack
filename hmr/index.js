import hello from './hello.js'

const div = document.createElement('div')
div.innerHTML = hello()

console.log('================index================')

if (module.hot) {
  // module.hot.accept('./hello.js', function() {
  //   div.innerHTML = hello();
  // })
  module.hot.accept()
}

document.body.appendChild(div)

