class Animal {
  public id: number;
  public name: string;
  public points: number;
  public imagePath: string;
  public category: string;
  public status: string;
  public diet: string;
  public lifespan: string;

  constructor(
    id: number,
    name: string,
    points: number,
    imagePath: string,
    category: string,
    status: string,
    diet: string,
    lifespan: string
  ) {
    this.id = id;
    this.name = name;
    this.points = points;
    this.imagePath = imagePath;
    this.category = category;
    this.status = status;
    this.diet = diet;
    this.lifespan = lifespan;
  }
}

export default Animal;