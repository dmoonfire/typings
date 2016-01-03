class Qty {
	constructor(value: number|string, unit?: string);
	to(unit: string): Qty;
	scalar: number;
}

export = Qty;