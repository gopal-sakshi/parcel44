export class Person {
    
    public readonly name:String;
    public age:number;

    public dance() {
        console.log('dancing');
    }

    public async getSomeUrl():Promise<any> {
        return '/path44';
    }
}