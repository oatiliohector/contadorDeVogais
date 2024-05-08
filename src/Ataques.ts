interface IAtaquePokemon{
    nome: string,
    tipo: string,
    dano: number
}

export class AtaquePokemon{
    private readonly nome: string;
    private readonly tipo: string;
    private readonly dano: number;
    
    constructor(atributos: IAtaquePokemon){
        this.nome = atributos.nome;
        this.tipo = atributos.tipo;
        this.dano = atributos.dano;
    }

    public calcularDano(tipoDeAtaque: string, atributosPokemonAlvo: string){

    }
}