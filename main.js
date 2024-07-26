import qrDecompostion from './logic/houseHolder.js';
import QRDecompositionWithGramSchmidt from './logic/gramSchmidt.js';

window.addEventListener('load', () => {
	const dimentionButton = document.querySelector(
		'.linear-system__dimention-btn'
	);
	const dimentionInput = document.querySelector(
		'.linear-system__dimention-input'
	);
	const form = document.querySelector('#frmMain');
	const rowContainer = document.querySelectorAll('.linear-system__matrix');
	const resultRowContainer = document.querySelectorAll('.result-container');
	const buttons = document.querySelectorAll('.submit-btn');
	let inputs;

	let dim = [0, 0, 0];

	dimentionButton.addEventListener('click', () => {
		resultRowContainer.forEach((r) => {
			r.innerHTML = '';
			r.classList.remove('linear-system__matrix');
		});
		buttons.forEach((input) => input.classList.remove('selected'));
		const dimValue = Number(dimentionInput.value);
		dim = new Array(dimValue).fill(0);

		rowContainer[0].innerHTML = '';
		rowContainer[0].insertAdjacentHTML(
			'beforeend',
			dim
				.map(
					(_, i) =>
						`<div class="linear-system__matrix-row">${dim
							.map(
								(_, j) =>
									`<input class="linear-system__matrix-input" type="text" />`
							)
							.join('')}</div>`
				)
				.join('')
		);
		inputs = document.querySelectorAll('.linear-system__matrix-input');
	});

	form.addEventListener('submit', (event) => {
		let inputs = event.target.querySelectorAll('input');
		inputs = Array.from(inputs);
		const matrix = inputs.slice(0, -2);
		buttons.forEach((input) => input.classList.remove('selected'));
		event.submitter.classList.add('selected');

		const matrixInput = [];
		for (let i = 0; i < dim.length; i++) {
			matrixInput[i] = [];
			for (let j = 0; j < dim.length; j++) {
				matrixInput[i][j] = Number(matrix[i * dim.length + j].value);
			}
		}

		const [Q, R] =
			event.submitter.id === 'gramschmidt-btn'
				? qrDecompostion(matrixInput)
				: QRDecompositionWithGramSchmidt(matrixInput);

		insertMatrixToDOM(Q, resultRowContainer[0]);
		insertMatrixToDOM(R, resultRowContainer[1]);
	});
});

function insertMatrixToDOM(matrix, matrixContainer) {
	matrixContainer.classList.add('linear-system__matrix');
	matrixContainer.innerHTML = '';
	matrixContainer.insertAdjacentHTML(
		'beforeend',
		matrix
			.map(
				(_, i) =>
					`<div class="linear-system__matrix-row">${matrix[0]
						.map(
							(_, j) =>
								`<div class="linear-system__matrix-output">${matrix[
									i
								][j].toFixed(5)}</div>`
						)
						.join('')}</div>`
			)
			.join('')
	);
}
