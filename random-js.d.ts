interface IntegerFunc { (engine: RandomEngine): number; }

interface Random {
	public engines = new RandomEngines();
	public integer(min: number, max: number): IntegerFunc;
}

interface RandomEngines {
	public mt19937(): RandomEngine;
}

interface RandomEngine {
	public (): number;
	public seed(value: number);
	public autoSeed();
}

export = new Random();