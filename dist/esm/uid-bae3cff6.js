import { E } from './index-aa88697c.js';

const uid = () => {
  // @ts-ignore
  let value;
  return (() => { value = E(); })();
};

export { uid as u };
