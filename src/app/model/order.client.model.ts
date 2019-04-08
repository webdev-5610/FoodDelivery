export class Order {
  _id: String;
  name: String;
  developerId: String;
  description: String;

  constructor(name: String, developerId: String, description: String) {
    this.name = name;
    this.developerId = developerId;
    this.description = description;
  }
}
