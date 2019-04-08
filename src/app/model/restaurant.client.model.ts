export class Restaurant {
  _id: String;
  name: String;
  websiteId: String;
  title: String;

  constructor(name: String, websiteId: String, description: String) {
    this.name = name;
    this.websiteId = websiteId;
    this.title = description;
  }
}
