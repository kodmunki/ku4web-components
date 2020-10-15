import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @description ku4-tab
 */
export declare class Ku4Tab {
  private host;
  /**
   * Active when true
   */
  selected: boolean;
  private panel;
  /**
   * Event fired when this tab is clicked.
   */
  tabClick: EventEmitter;
  /**
   * Event fired when this tab is keyup.
   */
  tabKeyUp: EventEmitter;
  handleClick(e: any): void;
  handleKeyUp(e: any): void;
  /**
   * Set this tab as selected.
   */
  select(): Promise<void>;
  /**
   * Unset this tab as selected
   */
  deselect(): Promise<void>;
  /**
   * Connect this tab to a panel
   * @param {HTMLElement} panel - The target ku4-tab-panel HTMLElement
   */
  connect(panel: any): Promise<void>;
  get id(): string | void;
  /**
   * @param {Ku4TabPanel} panel - panel to assign to this tab
   * @internal
   */
  $assignPanel(panel: any): void;
  render(): any;
}
