/**
 * @description ku4-col
 */
export declare class Ku4Col {
  /**
   * Start position of column at extra-small (optional).
   */
  readonly startXs: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Start position of column at small (optional).
   */
  readonly startSm: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Start position of column at medium (optional).
   */
  readonly startMd: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Start position of column at large (optional).
   */
  readonly startLg: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Number of columns to span left and right at extra-small (optional).
   */
  readonly spanXs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Number of columns to span left and right at extra-small (optional).
   */
  readonly spanSm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Number of columns to span left and right at medium (optional).
   */
  readonly spanMd: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Number of columns to span left and right at large (optional).
   */
  readonly spanLg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Order of column at extra-small (optional).
   */
  readonly orderXs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Order of column at small (optional).
   */
  readonly orderSm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Order of column at medium (optional).
   */
  readonly orderMd: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  /**
   * Order of column at large (optional).
   */
  readonly orderLg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
  get startClass(): string;
  get spanClass(): string;
  get orderClass(): string;
  render(): any;
}
