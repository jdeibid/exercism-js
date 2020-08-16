export const hey = (message) => {
  let messageClean = message.trim();

  if (isRetoric(messageClean)){return "Calm down, I know what I'm doing!"};
  if (isYelling(messageClean)){return "Whoa, chill out!"};
  if (isQuestion(messageClean)){return "Sure."};
  if (isEpmty(messageClean)){return "Fine. Be that way!"};

  return "Whatever.";
};

const isYelling = (str) => {
  return str === str.toUpperCase() && str !== str.toLowerCase();
};

const isQuestion = (str) => {
  return str.endsWith("?");
};

const isEpmty = (str) => {
  return str === "";
};

const isRetoric = (str) => {
  return isYelling(str) && isQuestion(str);
};