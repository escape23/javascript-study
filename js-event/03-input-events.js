/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus)
// refs.input.addEventListener('blur', onInputBlur)
// refs.input.addEventListener('change', onInputChange)
// refs.input.addEventListener('input', onInputChange)

refs.input.addEventListener('input',onInputChange )
refs.licenseCheckbox.addEventListener('change', onLicenseChange)

// refs.input.addEventListener('input', onInputChange);
// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
    console.log(event.currentTarget.value)
    refs.nameLabel.textContent = event.currentTarget.value
}

// function onInputChange(event) {
//     console.log(refs.nameLabel.textContent = event.currentTarget.value);
    
// }

function onLicenseChange(event) {
    console.log(event.currentTarget.checked)
    console.log(refs.btn.disabled)
    refs.btn.disabled = !event.currentTarget.checked;
}