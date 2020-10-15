export default () => (_target, _propertyKey, descriptor) => ((type) => {
  let value;
  return Object.assign(Object.assign({}, descriptor), { [type](...params) {
      value = value || descriptor[type].call(this, ...params);
      return value;
    } });
})(descriptor.get ? 'get' : 'value');
