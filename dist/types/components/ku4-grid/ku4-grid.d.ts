/**
 * @description ku4-grid
 */
export declare class Ku4Grid {
  /**
   * Number of columns to render at extra-small (optional).
   */
  readonly columnsXs?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16;
  /**
   * Number of columns to render at small (optional).
   */
  readonly columnsSm?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16;
  /**
   * Number of columns to render at medium (optional).
   */
  readonly columnsMd?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16;
  /**
   * Number of columns to render at large (optional).
   */
  readonly columnsLg?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16;
  /**
   * Number of columns to offset left at extra-small (optional).
   */
  readonly offsetLeftXs?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset left at small (optional).
   */
  readonly offsetLeftSm?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset left at medium (optional).
   */
  readonly offsetLeftMd?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset at large (optional).
   */
  readonly offsetLeftLg?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset right (optional).
   */
  readonly offsetRight?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset at extra-small (optional).
   */
  readonly offsetRightXs?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset right at small (optional).
   */
  readonly offsetRightSm?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset right at medium (optional).
   */
  readonly offsetRightMd?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset right at large (optional).
   */
  readonly offsetRightLg?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset left and right at extra-small (optional).
   */
  readonly offsetXs?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset left and right at small (optional).
   */
  readonly offsetSm?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset left and right at medium (optional).
   */
  readonly offsetMd?: 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * Number of columns to offset left and right at large (optional).
   */
  readonly offsetLg?: 0 | 1 | 2 | 3 | 4 | 5;
  get columnClass(): string;
  get offsetLeftClass(): string;
  get offsetRightClass(): string;
  get offsetClass(): string;
  render(): any;
}
