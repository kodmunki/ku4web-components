import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @description ku4-validation
 */
export declare class Ku4Validation {
  private form;
  private input;
  private regex;
  private ele;
  private validOptions;
  private readonly validationMethod;
  constructor();
  private host;
  /**
   * The value of the id attribute of the field that this
   * is the validation for.
   */
  readonly for: string;
  /**
   * querySelector for an element whose value this value should match.
   * This is excellent for creating confirmation type validations, e.g.
   * email confirmations or password confirmations. See the Preview
   * in the ku4-form Docs and "Show code" for some examples of using
   * this attribute.
   */
  readonly element: string;
  /**
   * Validation RegExp pattern that the target field must match to
   * be considered valid. Multiple patterns can be passed delimited
   * by a `space` character. e.g. pattern1 pattern2 pattern3 etc.
   * If your target field is optional you can accomplish this with
   * your pattern using "(^$)|(YOUR-PATTERN)". This says that the
   * field must be empty (^$) OR (YOUR-PATTERN).
   */
  readonly pattern: string;
  /**
   * Any RegExp flags that you want to include in your pattern. Multiple
   * patterns can be passed delimited by a `space` character. e.g.
   * using the pattern1 pattern2 pattern3 example from the `pattern`
   * property, you could pass "gimsuy gim gi". If you wanted to pass
   * flags only for patterns 1 and 3 you will just skip flags for pattern2
   * by typing nothing and instead typing another "space" e.g. "gimsuy  gi".
   * If you wanted to skip flags for pattern1 you could start flags with a
   * "space" e.g. " gim gi".
   */
  readonly flags: string;
  /**
   * Comma delimited string of valid values. This attribute is great
   * if your validation rules require some very specific set of
   * valid values. An example may be if you have a select field where
   * you would like to show all possible values but some you still
   * want to be invalid.
   */
  readonly values: string;
  /**
   * A reference to a named function or a function body that
   * define a validation criteria and return `true` when the
   * defined validation criteria are satisfied.
   * The function will be called with one argument, `value`,
   * that will contain the current value of the target field.
   * Example: method="return value === 'valid'", or
   * function validate(value) { return value === 'valid'; }
   * method="validate(value)"
   */
  readonly method: string;
  /**
   * Set to true to display as invalid
   */
  invalid: boolean;
  isValid: boolean;
  /**
   * Event fired when this validation changes from
   * invalid to valid.
   */
  validated: EventEmitter;
  /**
   * Call to explicitly validate this validation. This method
   * is called internally on change and blur of the input internally.
   * There is no default need to call this method.
   */
  validate(): Promise<boolean>;
  private handleInput;
  private handleChange;
  private handleBlur;
  private handleReset;
  private assert;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
