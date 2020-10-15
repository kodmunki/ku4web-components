/**
 * @description ku4-mask
 */
export declare class Ku4Mask {
  private charIndexes;
  private reverseCharIndexes;
  private chars;
  private banned;
  private patterns;
  private input;
  private selectionStart;
  private selectionEnd;
  private previousValue;
  private currentValue;
  private touchStart;
  private init;
  constructor();
  /**
   * Mask for input having id of value
   */
  readonly for: string;
  /**
   * Mask template
   */
  readonly template: string;
  /**
   * A regex of characters to ban from
   * entry. A user will not be able to input
   * any character in this set of characters.
   * E.g. ban="[()-]" will not allow a user to
   * input (, ), or - into the target input.
   */
  readonly ban: string;
  /**
   * A test pattern for the mask to allow or
   * disallow characters at targeted points
   * in the input. The pattern is a character
   * separated value of regular expressions
   * where the first character denotes the
   * character separator at each subsequent
   * value is a regular expression for the
   * character at that indicated index.
   * E.g. `pattern=",[345],,,[^abc]"` would mean
   * that "," is the separator and that the
   * first character must  be a 3, 4, or 5, and
   * the fourth character cannot be an a, b or c.
   */
  readonly pattern: string;
  /**
   * Mask Character
   */
  readonly char: string;
  /**
   * Hide mask
   */
  readonly hidden: boolean;
  templateHandler(newTemplate: any, oldTemplate: any): void;
  charHandler(newChar: any, oldChar: any): void;
  private get previousCharIndex();
  private get value();
  private set value(value);
  private handleTouchStart;
  private handleFocus;
  private handleKeyDown;
  private handleInput;
  private validate;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
