var html = document.querySelector('#html')
var css = document.querySelector('#css')
var js = document.querySelector('#js')
const lineNumbers = document.querySelector('.line-numbers')
const lineNumbers1 = document.querySelector('.line-numbers1')
const lineNumbers2 = document.querySelector('.line-numbers2')

html.addEventListener('keyup', event => {
  const numberOfLines = event.target.value.split('\n').length

  lineNumbers.innerHTML = Array(numberOfLines)
    .fill('<span></span>')
    .join('')
});

js.addEventListener('keyup', event => {
  const numberOfLines2 = event.target.value.split('\n').length

  lineNumbers2.innerHTML = Array(numberOfLines2)
    .fill('<span></span>')
    .join('')
});

css.addEventListener('keyup', event => {
  const numberOfLines1 = event.target.value.split('\n').length

  lineNumbers1.innerHTML = Array(numberOfLines1)
    .fill('<span></span>')
    .join('')
});

textarea.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    textarea.value = textarea.value.substring(0, start) + '\\t' + textarea.value.substring(end)

    event.preventDefault()
  }
})
