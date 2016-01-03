interface Numeral {
    format(format?: string): string;
    unformat(input: string): Numeral;
    value(): number;
    add(value: number): Numeral;
    difference(value: number): Numeral;
    set(value: number): void;
}

function numeral(input?: number): Numeral;
export = numeral;