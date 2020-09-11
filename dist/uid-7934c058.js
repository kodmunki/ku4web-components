import { F } from './index-4718bc14.js';

const uid = () => {
  // @ts-ignore
  let value;
  return (() => { value = F(); })();
};

export { uid as u };
