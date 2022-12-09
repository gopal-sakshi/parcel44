export class Football {
    
    clubName:string;
    stadiumName:string;
    isActive:boolean = true;
    players:string[] = [];

    doRenovation() {
        this.isActive = false;
    }
}