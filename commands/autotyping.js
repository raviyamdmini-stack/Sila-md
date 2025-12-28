const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/autotyping.json');

function readData() {
  if (!fs.existsSync(dataPath)) return {};
  return JSON.parse(fs.readFileSync(dataPath));
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

const autotypingCommand = async (msg, args) => {
  const data = readData();
  const chat = msg.chat;

  data[chat] = !data[chat];
  writeData(data);

  return msg.reply(`Auto typing ${data[chat] ? 'enabled' : 'disabled'}`);
};

const isAutotypingEnabled = (chat) => {
  const data = readData();
  return data[chat] === true;
};

const handleAutotypingForMessage = async () => {};
const handleAutotypingForCommand = async () => {};
const showTypingAfterCommand = async () => {};

module.exports = {
  autotypingCommand,
  isAutotypingEnabled,
  handleAutotypingForMessage,
  handleAutotypingForCommand,
  showTypingAfterCommand
};
