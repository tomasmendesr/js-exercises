import Animal from './Animal';

class Tiger extends Animal {
  constructor() {
    super('grr');
  }

  doSound(): string {
    return this.sound;
  }
}

export default Tiger;