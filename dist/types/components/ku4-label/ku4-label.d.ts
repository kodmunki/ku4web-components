/**
 * @description ku4-label
 */
export declare class Ku4Label {
  private field;
  private form;
  private placeholder;
  constructor();
  private host;
  /**
   * The value of the id attribute of the input that this
   * is the label for.
   */
  readonly for: string;
  /**
   * Optional Label value. This value is driven
   * by the input placeholder attribute by default.
   */
  readonly value: string;
  empty: boolean;
  private handleFocus;
  private handleChange;
  private handleInput;
  private handleKeyUp;
  private handleReset;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
