
export class Employee {
    _id: String;
    username: String;
    firstName: String;
    lastName:String;
    password: String;
    email: String;
    phone: String;


    constructor(_id, username = '', password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
