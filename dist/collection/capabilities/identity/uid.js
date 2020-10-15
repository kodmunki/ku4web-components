import { uid as kuid } from 'ku4es-kernel';
export default () => {
  // @ts-ignore
  let value;
  return (() => { value = kuid(); })();
};
