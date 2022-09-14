import _ from 'underscore';
import { DicesType } from '../interfaces';

const rowDice = (dice: DicesType) => {
  switch (dice) {
    case "d2":
      return _.random(1, 2);
    case "d4":
      return _.random(1, 4);
    case "d6":
      return _.random(1, 6);
    case "d8":
      return _.random(1, 8);
    case "d10":
      return _.random(1, 10);
    case "d12":
      return _.random(1, 12);
    case "d20":
      return _.random(1, 20);
    default:
      return _.random(1, 100);
  }
};

const Row = (qtd: number, dice: DicesType, mod: number = 0) => {
  let value = 0;
  for (let i = 1; i <= qtd; i += 1) value += rowDice(dice);
  return value + mod;
};

const Dices = { Row }

export default Dices;
