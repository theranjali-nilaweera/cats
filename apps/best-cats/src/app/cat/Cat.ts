export default class Cat {
    public id: string;
    public breed: number;
    public childFriendly: number;
    public strangerFriendly: number;
    public dogFriendly: number;
    public friendlyIndex: number;

    constructor(id: string, breed: number, 
        childFriendly: number = 0, strangerFriendly: number = 0, dogFriendly: number = 0 ) {
        this.id = id;
        this.breed = breed;
        this.childFriendly = childFriendly;
        this.strangerFriendly = strangerFriendly;
        this.dogFriendly = dogFriendly;
    }

    isFriendly(){
        return this.childFriendly>0 && this.strangerFriendly>0 && this.dogFriendly>0;
    }

    calculateWeightedIndex(){
        if(!this.isFriendly) return 0;
        return this.childFriendly*5 + this.dogFriendly*5+ this.strangerFriendly*5;
    }
}
