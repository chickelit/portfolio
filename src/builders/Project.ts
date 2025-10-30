export class Project {
  constructor(
    public title: string,
    public description: string,
    public year: number,
    public cover: { url: string },
    public link?: string,
    public repo?: string
  ) {}
}

export class ProjectBuilder {
  private title!: Project["title"];
  private description!: Project["description"];
  private year!: Project["year"];
  private cover!: Project["cover"];
  private link?: Project["link"];
  private repo?: Project["repo"];

  private constructor() {}

  public static one() {
    return new ProjectBuilder();
  }

  public setTitle(title: Project["title"]) {
    this.title = title;

    return this;
  }

  public setDescription(description: Project["description"]) {
    this.description = description;

    return this;
  }

  public setCover(cover: Project["cover"]) {
    this.cover = cover;

    return this;
  }

  public setLink(link: Project["link"]) {
    this.link = link;

    return this;
  }

  public setRepo(repo: Project["repo"]) {
    this.repo = repo;

    return this;
  }

  public setYear(year: Project["year"]) {
    this.year = year;

    return this;
  }

  public build() {
    return new Project(this.title, this.description, this.year, this.cover, this.link, this.repo);
  }
}
