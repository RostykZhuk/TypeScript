class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is${this.version}`;
  }
}

// class Car {
//   readonly model: string; // Можна перезаписати тільки в середині конструктора
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
// is equal to code below

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}
