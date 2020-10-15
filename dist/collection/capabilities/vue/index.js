import {Assert} from 'ku4es-kernel';

/**
 * Method to wire a form to pass through the ku4-form validation
 * mechanism before calling the application onSubmit method
 * @param {Vue} vm - The Vue instance for the target Vue Component instance
 * that encapsulates ku4-form.
 * @param {string} ref - The ref for this form.
 * @param {function} onSubmit - the function to call on submit
 */
export const wireForm = (vm, ref, onSubmit) => {
  if(!vm || !vm.$refs || !vm.$refs[ref] || vm.$refs[ref].__ku4wired__) { return; }
  try {
    const _ref = vm.$refs[ref];
    const {submit} = _ref;
    _ref.submit = () => {
      const values = {};
      new FormData(_ref).forEach((v, k) => (values[k] = v));
      const cont = onSubmit.call(vm, values, _ref);
      if(!Assert.isFalse(cont)) { submit.call(_ref); }
    };
    _ref.__ku4wired__ = true;
  }
  catch(e) {
    // eslint-disable-next-line no-console
    console.error(`ku4web-components/vue wireForm error:
wireForm should be used with a callback ref, or a defined ref.current
Examples:
Callback Ref: <form ref={ref => wireForm(ref, handleSubmit)}>
Ref Current: componentDidLoad() { wireForm(ref.current, handleSubmit); }`, e);
    throw new Error('wireForm Error. See developer console for more information.');
  }
};
