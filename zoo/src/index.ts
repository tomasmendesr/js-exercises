import * as readline from 'readline';
import Lion from './animals/Lion';
import Tiger from './animals/Tiger';
import Animal from './animals/Animal';

const animalClasses: { [key: string]: new () => Animal } = {
  lion: Lion,
  tiger: Tiger
};

function speakWithAnimal(animalType: string, message: string): void {
  const AnimalClass = animalClasses[animalType.toLowerCase()];

  if (AnimalClass) {
    const animal = new AnimalClass();
    console.log(animal.speak(message));
  } else {
    console.error('Invalid animal type');
    rl.close();
    process.exit(1); 
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startListening(): void {
  rl.question('Enter animal type (lion, tiger, dog or duck): ', (animalType: string) => {
    if (!animalClasses[animalType.toLowerCase()]) {
      console.log('Invalid animal type');
      rl.close();
      process.exit(1);
    }

    rl.question('Enter message: ', (message: string) => {
      speakWithAnimal(animalType.trim(), message.trim());
      startListening();
    });
  });
}

startListening();
