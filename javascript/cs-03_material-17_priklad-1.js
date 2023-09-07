class Clovek {
	constructor(jmeno, vek) {
		this.jmeno 	= jmeno;
		this.vek 	= vek;
	}
}

const tereza = 	new Clovek("Tereza", 16);
const karel = 	new Clovek("Karel", 61);
const josef = 	new Clovek("Josef", 21);

console.log(tereza.jmeno, "je", tereza.vek, "let stary/a");

karel.vek++;
console.log("Karel ma narozeniny. Je mu", karel.vek, "let.");