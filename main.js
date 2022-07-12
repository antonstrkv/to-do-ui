import {UI_ELEMENTS} from  "./view.js"

UI_ELEMENTS.FORM_HIGH.addEventListener('submit', checkClickedHighForm);
UI_ELEMENTS.FORM_LOW.addEventListener('submit', checkClickedLowForm);

function checkClickedHighForm() {
	if (UI_ELEMENTS.INPUT_HIGH.value) {
		let text = UI_ELEMENTS.INPUT_HIGH.value;
		let newTask = createTaskElement(text);
		UI_ELEMENTS.HIGH_CONTENT.after(newTask);

		checkClickedHelper();
	} else {
		UI_ELEMENTS.INPUT_HIGH.classList.add('empty');
	}
}


function checkClickedLowForm() {
	if (UI_ELEMENTS.INPUT_LOW.value) {
		let text = UI_ELEMENTS.INPUT_LOW.value;
		let newTask = createTaskElement(text);
		UI_ELEMENTS.LOW_CONTENT.after(newTask);

		checkClickedHelper();
	} else {
		UI_ELEMENTS.INPUT_LOW.classList.add('empty');
	}
}


function createTaskElement(text) {
	let div = document.createElement('div');
	div.className = 'new__task';

	const TEMPLATE = `
  <label class="label">
  <input class="checkbox" type="checkbox">
  <span class="fake"></span>
  <span class="text">${text}</span>
  </label>
  <button class="close__btn"></button>
	`;
	div.innerHTML = TEMPLATE;

	return div;
}

function checkBoxChecked() {
	const CHECKBOX = document.querySelectorAll('.checkbox');
	CHECKBOX.forEach((item) => {
		item.addEventListener('change', () => {
			if (item.checked) {
				item.parentElement.parentElement.classList.add('done');
			} else if (!item.checked) {
				item.parentElement.parentElement.classList.remove('done');
			}
		});
	});
}

function deleteChecked() {
	const CLOSE = document.querySelectorAll('.close__btn');
	CLOSE.forEach((item) => {
		item.addEventListener('click', () => {
			item.parentElement.remove();
		});
	});
}

function checkClickedHelper() {
	UI_ELEMENTS.INPUT_HIGH.value = '';
	UI_ELEMENTS.INPUT_LOW.value = '';
	checkBoxChecked();
	deleteChecked();
	UI_ELEMENTS.INPUT_HIGH.classList.remove('empty');
	UI_ELEMENTS.INPUT_LOW.classList.remove('empty');
}