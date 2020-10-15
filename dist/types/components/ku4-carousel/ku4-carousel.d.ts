/**
 * @description ku4-carousel
 */
export declare class Ku4Carousel {
  private rolodex;
  private swipe;
  private host;
  /**
   * Sets the distance a touch must travel before
   * activating a swipe.
   */
  readonly swipeTolerance: number;
  private slideState;
  /**
   * Display the next ku4-carousel-slide
   */
  next(): Promise<this>;
  /**
   * Display the previous ku4-carousel-slide
   */
  previous(): Promise<this>;
  private get currentSlideNumber();
  private display;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
