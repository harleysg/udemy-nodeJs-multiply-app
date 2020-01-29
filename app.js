const argv = require("./config/yargs").argv;
const { multiply, newFile } = require("./tools");

let comando = argv._[0];

switch (comando) {
	case "listar":
		multiply(argv.base, argv.limit).then(data => console.log(data));
		break;

	case "crear":
		multiply(argv.base, argv.limit).then(res =>
			newFile(res)
				.then(file => console.log(file))
				.catch(err => console.error(err))
		);
		break;

	default:
		console.log("Comando no reconocido");
		break;
}
