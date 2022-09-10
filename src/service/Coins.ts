export class Coins {
    public platinum: number;
    public gold: number;
    public electrum: number;
    public silver: number;
    public copper: number;

    constructor(platinum: number, gold: number, electrum: number, silver: number, copper: number) {
        this.platinum = platinum;
        this.gold = gold;
        this.electrum = electrum;
        this.silver = silver;
        this.copper = copper;
    }
}