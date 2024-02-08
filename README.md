## 1) Zoo Exercise

We are building a zoo inside a computer. Each animal species in our zoo has lots of different, particular, behaviors, but all animals talk to each other in a similar way. Specifically, they all implement a speak method, the output of which is the arbitrary input string interspersed with an "animal sound" that is particular to that type of animal. For example, the lion's speak function behaves like so:

```typescript
lion.speak( "I'm a lion" ); 
// Output: "I'm roar a roar lion roar" 
```

The tiger's speak function behaves similarly but with a different sound:

```typescript
tiger.speak( "Lions suck" ); 
// Output: "Lions grrr suck grrr" 
```

### Usage

This project is a TypeScript command-line application that simulates a virtual zoo. Different types of animals in the zoo can "speak" by entering a message that is combined with a specific sound for each type of animal.

#### Prerequisites

- Node.js installed on your system: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager), which is installed alongside Node.js.

#### Installation

1. Clone this repository to your local machine:

2. Navigate to the project directory:

```
cd zoo
```

3. Install the project dependencies:

```
npm install
```

#### Usage

Once you have cloned the repository and installed the dependencies, you can use the application by following these steps:

1. Open a terminal in the project directory.

2. Run the following command to start the application:

```
npm start
```

3. The application will prompt you to enter the animal type (you can choose between "lion" or "tiger") and then a message. After entering the message, press Enter, and the application will display the message combined with the corresponding animal sound.

4. You can continue entering new messages for different animals as many times as you want. The application will continue listening and responding to your input.

#### Example

```
npm start
```

```
Enter animal type (lion or tiger): lion
Enter message: I'm a lion
I'm roar a roar lion roar
```

## 2) Error Alarm Exercise

Suppose we have a web application that runs on a single server. Errors that occur from time to time during normal operation of the application are logged to a text file that is stored in the file system on the server.

We are not concerned about these errors when their frequency is low. However, when lots of errors occur in a short period of time, there may be a problem with the application and we want to be notified immediately. Specifically, when more than ten errors occur in one minute, we want to receive an email notification.

In general terms or pseudo code, how would you implement such an alarm? Please assume:

1. The general paradigm of logging errors to a text file will be kept in place.
2. There exists a function:

```typescript
function logError(error)
```

The solution is in /alarm/solution.js

## 3) URL Parser Exercise

We need logic to extract variable parts of a URL into a hash. The hash keys will be the "names" of the variable parts of the URL, and the values will be the corresponding values. We'll be given:

1. A URL format string: describes the URL's format, with variable parts starting with a colon. Example: `/:version/api/:collection/:id`.
2. A URL instance: matches the format and may contain URL parameters. Example: `/6/api/listings/3?sort=desc&limit=10`.

Given the URL format string and URL instance, the hash we want would look like:

```javascript
{
  version: 6,
  collection: 'listings',
  id: 3,
  sort: 'desc',
  limit: 10
}
```


### Usage

#### Prerequisites

- Node.js installed on your system: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager), which is installed alongside Node.js.

#### Installation

1. Clone this repository to your local machine:

2. Navigate to the project directory:

```
cd url-parser
```

#### Usage

Once you have cloned the repository and installed the dependencies, you can use the application by following these steps:

1. Open a terminal in the project directory.

2. Run the following command to start the application:

```
npm start
```