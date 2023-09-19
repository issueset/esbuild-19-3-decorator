import { createMyDecorator, myDecorator } from "my-lib";

@createMyDecorator("PREFIX")
class MyClass1 {
  constructor() {}
}

@myDecorator
class MyClass2 {
  constructor() {}
}

export { MyClass1, MyClass2 };
