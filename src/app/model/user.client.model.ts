export class User {
  _id: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;

  name, password, email, addrress, phone, credit card info, billing info, past orders
  constructor( username: String, password: String, firstName: String, lastName: String, email: String) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
