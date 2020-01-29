/**
 * Function Synchronous that calculate the....
 * @param base type Number
 * @param limite type Number, default number 10, is used for multiplicate the param base
 * @returns Object {base: String, limite: Number}
 */
module.exports = (base, limite = 10) =>
	new Promise((resolve, reject) => {
		if (!Number(base)) {
			reject(`El valor introducido ${base} no es de tipo número.`);
			return;
		}
		let data = "";
		for (let i = 1; i <= limite; i++) {
			data += `${base} x ${i} = ${base * i}\n`;
		}
		resolve({ data, base });
		return { data, base };
	});
