import { R } from './index-5bc509ed.js';

const uid = () => {
  // @ts-ignore
  let value;
  return (() => { value = R.uid(); })();
};

export { uid as u };
