export class Ingredient {
	constructor(public name: string, public amount: number, public ingredients: Ingredient[]) {

	}
}
