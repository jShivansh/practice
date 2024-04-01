export class User {

    constructor(name: string, gender: string, subType: string, userStatus: string){
        this.name = name;
        this.gender = gender;
        this.subType = subType;
        this.userStatus = userStatus;
    }
    name: string;
    gender: string;
    subType: string;
    userStatus: string;
}