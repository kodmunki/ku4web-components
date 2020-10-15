/**
 * @description ku4-carousel-slide
 */
export declare class Ku4CarouselSlide {
  private active;
  private classList;
  /**
   * Move this slide in to view.
   * @param {string} direction - Direction to move.
   */
  slideIn(direction: 'prev' | 'next'): Promise<void>;
  /**
   * Move this slide out of view.
   * @param {string} direction - Direction to move.
   */
  slideOut(direction: 'prev' | 'next'): Promise<void>;
  /**
   * Set this slide to active.
   */
  activate(): Promise<void>;
  /**
   * Set this slide to inactive.
   */
  deactivate(): Promise<void>;
  render(): any;
}
