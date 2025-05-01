class Starter {
  private readonly myName: string = "Andrew";

  public sayMyName(): void {
    console.log(this.myName);
  }
}

const start = new Starter();

start.sayMyName();
