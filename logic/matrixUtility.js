function identity(dimension) {
	const identity = [];
	for (let i = 0; i < dimension; i++) {
		identity[i] = [];
		for (let j = 0; j < dimension; j++) identity[i][j] = i === j ? 1 : 0;
	}
	return identity;
}

function orthogonalization(_vectors) {
	const vectors = _vectors.map((vector) => [vector]);
	let OrthogonalVectors = [];
	for (let vector of vectors) {
		let newU = vector;
		for (let u of OrthogonalVectors) {
			let temp = scalarProduct(
				product(vector, transpose(u))[0] / product(u, transpose(u))[0],
				u
			);
			newU = sum(newU, scalarProduct(-1, temp));
		}
		OrthogonalVectors.push(newU);
	}
	OrthogonalVectors = OrthogonalVectors.map((v) => v[0]);
	return OrthogonalVectors;
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

function unify(vector) {
	const norm2V = norm2(vector);
	let unifiedVector = vector.map((minor) => minor / norm2V);
	return unifiedVector;
}

export {
	identity,
	orthogonalization,
	product,
	scalarProduct,
	sum,
	transpose,
	unify,
};
