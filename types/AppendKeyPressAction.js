import $ from 'jquery'

export let allInputs = []
export let initialInputIndex = null

export function moveToNextInput(ind) {
    //reset previous input to default
//   allInputs[ind].parentElement.classList.remove("bg-force")

  if (ind + 1 >= allInputs.length) ind = 0
  const inputField = allInputs[ind + 1]
  inputField.scrollIntoView({ behavior: 'smooth', block: 'center' })
  inputField.type != 'radio' && inputField.parentElement.classList.add("bg-force")
  inputField.focus()
}

export function keyupfFunc(event) {
  initialInputIndex = allInputs.findIndex((v) => v == event.target)
  event.key === 'Enter' &&
    !event.shiftKey &&
    (event.target.type == 'text' || event.target.type == 'textarea') &&
    moveToNextInput(initialInputIndex)
}

export function changeFunc(event) {
  if (event.target.type == 'text' || event.target.type == 'textarea') return

  initialInputIndex = allInputs.findIndex((v) => v == event.target)
  moveToNextInput(initialInputIndex)
}

export function AppendKeypressActionOnInput() {
  setTimeout(() => {
    let inputs = $('.pdf-editor-view').find(':input')
    allInputs = Array.from(inputs)

    if (inputs.length < 1) return

    Array.from(inputs).forEach((element) => {
      element.addEventListener('keyup', keyupfFunc)
      element.addEventListener('input', changeFunc)
    })
  }, 200)
}
