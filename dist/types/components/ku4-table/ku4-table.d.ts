/**
 * @description ku4-table
 */
export declare class Ku4Table {
  private mutationObserver;
  private host;
  /**
   * The member to stack on at extra-small views.
   */
  stackXs: 'column' | 'row' | '';
  /**
   * The member to stack on at small views.
   */
  stackSm: 'column' | 'row' | '';
  private stack;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
