interface IPokemon{
    name: string,
    teamName: string
}

export class PokemonTrainer{
    private readonly name;
    private readonly team;

    constructor(attributes: IPokemon){
        this.name = attributes.name;
        this.team = attributes.teamName;
    }

    public trainPokemon(){}

    public fightWithOtherTrainer(){}

    public catchPokemon(){}

    public evolvePokemon(){}

    public trainSkill(){}    
}