function Decorator(target: any): void {
  console.log("Annotation applied");
}

@Decorator
class Pearson {

  walk(): void {

  }
}