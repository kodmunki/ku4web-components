/**
 * @description ku4-drawer
 */
export declare class Ku4Drawer {
  /**
   * Pin drawer to bottom
   */
  readonly bottom: boolean;
  /**
   * Pin drawer to left
   */
  readonly left: boolean;
  /**
   * Pin drawer to right
   */
  readonly right: boolean;
  /**
   * Pin drawer to top
   */
  readonly top: boolean;
  /**
   * Open size of this drawer (any valid CSS width or height value)
   */
  readonly size: string;
  /**
   * Display drawer
   */
  open: boolean;
  /**
   * Toggle drawer
   */
  toggle(): Promise<void>;
  private get sizeValue();
  render(): any;
}
