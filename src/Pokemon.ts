interface IPokemon{
    nome: string;
    tipo: string;
    pontosHP: number;
    pontosATK: number;
}

export class Pokemon{
    private readonly nome: string;
    private readonly tipo: string;
    private readonly pontosHP: number;
    private readonly pontosATK: number;

    constructor(atributos: IPokemon){
        this.nome = atributos.nome;
        this.tipo = atributos.tipo;
        this.pontosHP = atributos.pontosHP;
        this.pontosATK = atributos.pontosATK;
    }

    public atacarPokemon(){
        
    }

    public receberDano(){}

    public verificarOutroPokemon(){}
}