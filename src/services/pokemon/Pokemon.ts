import axios, { AxiosInstance } from "axios";
import { IPokemon } from "./interfaces/IPokemon";

export class Pokemon{
    private readonly name: string;
    private readonly type: string;
    private readonly pointsHP: number;
    private readonly pointsATK: number;
    private readonly axios: AxiosInstance;

    constructor(attributes: IPokemon){
        this.name = attributes.name;
        this.type = attributes.type;
        this.pointsHP = attributes.pointsHP;
        this.pointsATK = attributes.pointsATK;
        this.axios = axios.create({
            timeout: 3000,
        });
    }

    public checkPokemon(){

    }
}