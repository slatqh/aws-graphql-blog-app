import { GET_BLOG_ID, TEXT_INPUT } from "./reducer";

export function getNameAndId(id, name) {
  return {
    type: GET_BLOG_ID,
    id,
    name
  };
}

export const getInput = input => ({
  type: TEXT_INPUT,
  payload: input
});
