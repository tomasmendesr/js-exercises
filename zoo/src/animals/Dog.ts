import Animal from './Animal';

class Dog extends Animal {
  constructor() {
    super('waw');
  }

  doSound(): string {
    return this.sound;
  }
}

export default Dog;