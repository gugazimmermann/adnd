import _ from 'underscore';
import { DICES } from '../ts/enums';

const rowDice = (dice: DICES) => {
  switch (dice) {
    case DICES.D2:
      return _.random(1, 2);
    case DICES.D4:
      return _.random(1, 4);
    case DICES.D6:
      return _.random(1, 6);
    case DICES.D8:
      return _.random(1, 8);
    case DICES.D10:
      return _.random(1, 10);
    case DICES.D12:
      return _.random(1, 12);
    case DICES.D20:
      return _.random(1, 20);
    default:
      return _.random(1, 100);
  }
};

const Row = (qtd: number, dice: DICES, mod: number = 0) => {
  let value = 0;
  for (let i = 1; i <= qtd; i += 1) value += rowDice(dice);
  return value + mod;
};

const Dices = { Row }

export default Dices;
