interface IAtackPokemon{
    nome: string,
    tipo: string,
    dano: number
}

export class AtackPokemon{
    private readonly nome: string;
    private readonly tipo: string;
    private readonly dano: number;
    
    constructor(atributos: IAtackPokemon){
        this.nome = atributos.nome;
        this.tipo = atributos.tipo;
        this.dano = atributos.dano;
    }
    
    public calcularDano(tipoDeAtack: string, atributosPokemonAlvo: string){

    }
}