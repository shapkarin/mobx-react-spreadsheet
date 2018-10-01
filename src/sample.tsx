import random from "lodash.random";

const randomName = () => {
  return Math.random()
    .toString(36)
    .substring(7)
    .replace(/\d/g, "")
    .toUpperCase();
};
export default function() {
  return {
    symbol: randomName(),
    bid_lp: random(),
    bid: random(0, 130, true).toFixed(random(4, 5)),
    ask_lp: random(),
    ask: random(0, 130, true).toFixed(random(3, 5)),
    spread: random(0.1, 0.3).toFixed(1),
    _red: random()
  };
}
