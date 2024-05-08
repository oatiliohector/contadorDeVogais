interface IPokemon{
    nome: string,
    equipeNome: string
}

export class TreinadorPokemon{
    private readonly nome;
    private readonly equipe;

    constructor(atributos: IPokemon){
        this.nome = atributos.nome;
        this.equipe = atributos.equipeNome;
    }

    public treinarNovoPokemon(){}

    public batalharComOutroTreinador(){}
}