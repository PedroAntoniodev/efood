class Restaurant {
  title: string;
  description: string;
  infos: string[];
  image: string;
  overallRating: number;
  id: number;

  constructor(
    title: string,
    description: string,
    infos: string[],
    image: string,
    overallRating: number,
    id: number
  ) {
    this.title = title;
    this.description = description;
    this.infos = infos;
    this.image = image;
    this.overallRating = overallRating;
    this.id = id;
  }
}

export default Restaurant;
