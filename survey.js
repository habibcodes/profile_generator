// implement profile generator survey //

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (favActivity) => {
    rl.question('What do you listen to while doing that? ', (favSong) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (favMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favourite? ', (favSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superPower) => {
              // profile output
              console.log(`${name} loves listening to ${favSong} while ${favActivity}, devouring ${favFood} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superPower}.`);
              // close rl and exit stdin
              rl.close();
            });
          });
        });
      });
    });
  });
});