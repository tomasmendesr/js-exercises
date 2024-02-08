abstract class Animal {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  speak(message: string): string {
    return message
      .split(' ')
      .map(word => word + ' ' + this.doSound())
      .join(' ');
  }

  abstract doSound(): string
}

export default Animal;