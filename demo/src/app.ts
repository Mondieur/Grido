function Decorator(): void {
  console.log("Annotation applied");
}

class Pearson {

  @Decorator
  walk(): void {

  }
}