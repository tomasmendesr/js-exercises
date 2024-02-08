import Animal from './Animal';

class Duck extends Animal {
  constructor() {
    super('cuac');
  }

  doSound(): string {
    return this.sound;
  }
}

export default Duck;