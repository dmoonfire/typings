export module "random-js" {
interface IntegerFunc { (engine: RandomEngine): number; }

interface Random {
	engines: RandomEngines;
	integer(min: number, max: number): IntegerFunc;
}

interface RandomEngines {
	mt19937(): RandomEngine;
}

interface RandomEngine {
	(): number;
	seed(value: number);
	autoSeed();
}

export = Random;
}