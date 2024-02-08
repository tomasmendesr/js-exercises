import Animal from './Animal';

class Lion extends Animal {
  constructor() {
    super('roar');
  }

  doSound(): string {
    return this.sound;
  }
}

export default Lion;