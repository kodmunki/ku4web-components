import { Assert } from 'ku4es-kernel';
/**
 * Method to wire a form to pass through the ku4-form validation
 * mechanism before calling the application onSubmit method
 * @param {Node} ref - A ref for the target form
 * @param {function} onSubmit - the function to call on submit
 */
export const wireForm = (ref, onSubmit) => {
  if(!ref || ref.__ku4wired__) return;
  try {
    const submit = ref.submit;
    ref.submit = () => {
      const values = {};
      new FormData(ref).forEach((v, k) => (values[k] = v));
      const cont = onSubmit(values, ref);
      if(!Assert.isFalse(cont)) submit.call(ref);
    };
    ref.__ku4wired__ = true;
  }
  catch(e) {
    console.error(`ku4web-components/angular wireForm error:
wireForm should be used with a callback ref, or a defined ref.current
Examples:
Callback Ref: <form ref={ref => wireForm(ref, handleSubmit)}>
Ref Current: componentDidLoad() { wireForm(ref.current, handleSubmit); }`, e);
    throw new Error('wireForm Error. See developer console for more information.');
  }
};
