const emoji = require('node-emoji');

const emojiCode = process.argv[2];
const emojiExists = emoji.hasEmoji(emojiCode);

// Alternative version:
// if (emojiExists === true) {
if (emojiExists) {
  console.log(emoji.get(emojiCode));
} else {
  console.log('Emoji not found');
}
