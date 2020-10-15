/**
 * @description ku4-form
 */
export declare class Ku4Form {
  private isValid;
  constructor();
  private host;
  /**
   * Set to true to display as invalid
   */
  invalid: boolean;
  /**
   * Validates this form. This method is automatically called
   * internally on submit of the form only allowing a successful
   * submit if the form  is valid.
   */
  validate(): Promise<any>;
  /**
   * A string of the name of the field to invalidate
   * @param {string} name
   */
  invalidate(name: any): Promise<this>;
  /**
   * Reads data from the associated form
   */
  read(): Promise<any>;
  /**
   * Writes data to the associated form
   */
  write(data: any): Promise<this>;
  private get form();
  private get fields();
  private handleReset;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
