/**
 * @description ku4-tab-list
 */
export declare class Ku4TabList {
  private tabs;
  private host;
  handleHpTabClick({ target }: {
    target: any;
  }): void;
  handleHpTabKeyUp({ target, detail: e }: {
    target: any;
    detail: any;
  }): void;
  /**
   * Open a ku4-tab in this ku4-tab-list.
   * @param {Ku4Tab} tab - ku4-tab target to open.
   */
  open(tab: any): Promise<this>;
  private select;
  private deselect;
  private reset;
  private previous;
  private next;
  componentDidRender(): void;
  render(): any;
}
