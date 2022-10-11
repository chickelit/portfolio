export class Project {
  public title: string;
  public description: string;
  public cover: { url: string };
  public link: string;

  constructor({
    title,
    description,
    cover,
    link,
  }: {
    title: string;
    description: string;
    cover: { url: string };
    link: string;
  }) {
    this.title = title;
    this.description = description;
    this.cover = cover;
    this.link = link;
  }
}
