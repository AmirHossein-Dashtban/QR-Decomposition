function identity(dimension) {
	const identity = [];
	for (let i = 0; i < dimension; i++) {
		identity[i] = [];
		for (let j = 0; j < dimension; j++) identity[i][j] = i === j ? 1 : 0;
	}
	return identity;
}

function product(A, B) {
	const C = [];
	for (let i = 0; i < A.length; i++) {
		C[i] = [];
		for (let j = 0; j < B[0].length; j++) {
			let minor = 0;
			for (let k = 0; k < A[0].length; k++) minor += A[i][k] * B[k][j];
			C[i][j] = minor;
		}
	}
	return C;
}

function scalarProduct(c, A) {
	const B = [];
	for (let i = 0; i < A.length; i++) {
		B[i] = [];
		for (let j = 0; j < A[0].length; j++) B[i][j] = c * A[i][j];
	}
	return B;
}

function sum(A, B) {
	const C = [];
	for (let i = 0; i < A.length; i++) {
		C[i] = [];
		for (let j = 0; j < A[0].length; j++) C[i][j] = A[i][j] + B[i][j];
	}
	return C;
}

function transpose(matrix) {
	const B = [];
	for (let i = 0; i < matrix[0].length; i++) {
		B[i] = [];
		for (let j = 0; j < matrix.length; j++) B[i][j] = matrix[j][i];
	}
	return B;
}
