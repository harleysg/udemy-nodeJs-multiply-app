const fs = require("fs");
/**
 * Create a file .txt with param data and param base like name file.
 * @param data string
 * @param base number
 */
module.exports = ({ data, base }) =>
	new Promise((resolve, reject) => {
		if (!data) {
			reject(`Es requerido un valor para crear el archivo`);
			return;
		}

		// const data = new Uint8Array(Buffer.from('Hello Node.js'));
		fs.writeFile(`./files/tabla-${base}.txt`, data, err => {
			if (err) reject(err);
			else resolve(`tabla-${base}.txt`);
		});
	});
