import { SAVE_POST_ID, TEXT_INPUT } from './reducer';

export function getNameAndId(id) {
  return {
    type: SAVE_POST_ID,
    payload: id,
  };
}

export const getInput = input => ({
  type: TEXT_INPUT,
  payload: input,
});
