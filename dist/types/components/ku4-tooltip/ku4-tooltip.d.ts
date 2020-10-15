/**
 * @description ku4-tooltip
 */
export declare class Ku4Tooltip {
  private host;
  private scrollListener;
  private hideTimeout;
  private isShowing;
  constructor();
  /**
   * Query selector of element(s) to tie to
   * this tooltip.
   */
  readonly element: string;
  /**
   * Pin tooltip to top of target element
   */
  readonly top: boolean;
  /**
   * Pin tooltip to left of target element
   */
  readonly left: boolean;
  /**
   * Pin tooltip to bottom of target element
   */
  readonly bottom: boolean;
  /**
   * Pin tooltip to right of target element
   */
  readonly right: boolean;
  /**
   * Show tooltip on target element.
   * @param {HTMLElement} element - Element to show tooltip on
   */
  show(element: any): Promise<void>;
  /**
   * Hide tool tip.
   */
  hide(): Promise<void>;
  private _show;
  private _hide;
  private _toggle;
  private calcualtePosition;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
