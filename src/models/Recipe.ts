export class Recipe {
    constructor(public Id: number=0, public Name: string="", public CategoryId: number=0,
        public PreparationTimeInMinute: number=0, public Level: number=0, public AddDate: Date=new Date(),
        public Layers: Layer[]=[new Layer()], public Preparation: string[]=[""], public UserId: number=0, public Image: string="", public IsDisplay: boolean=false) { }

}
export class Layer {
    constructor(public Components: string[]=[""], public Description: string="") {

    }
}