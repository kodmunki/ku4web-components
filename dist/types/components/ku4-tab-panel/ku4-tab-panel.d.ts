/**
 * @description ku4-tab-panel
 */
export declare class Ku4TabPanel {
  private host;
  /**
   * Set true to display panel
   */
  selected: boolean;
  private tab;
  /**
   * Set this panel as selected.
   */
  select(): Promise<void>;
  /**
   * Unset this panel as selected.
   */
  deselect(): Promise<void>;
  /**
   * Connect this panel to a tab.
   * @param {Ku4Tab} tab - Tab to connect to this panel
   */
  connect(tab: any): Promise<void>;
  render(): any;
}
