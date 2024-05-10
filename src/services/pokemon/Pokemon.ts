import axios from "axios";

interface IPokemon{
    name: string;
    type: string;
    pointsHP: number;
    pointsATK: number;
}

export class Pokemon{
    private readonly name: string;
    private readonly type: string;
    private readonly pointsHP: number;
    private readonly pointsATK: number;

    constructor(attributes: IPokemon){
        this.name = attributes.name;
        this.type = attributes.type;
        this.pointsHP = attributes.pointsHP;
        this.pointsATK = attributes.pointsATK;
    }

    public checkPokemon(){

    }
}