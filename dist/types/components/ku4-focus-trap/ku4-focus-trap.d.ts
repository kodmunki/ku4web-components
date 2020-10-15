/**
 * @description ku4-focus-trap
 */
export declare class Ku4FocusTrap {
  private elements;
  private iframes;
  private trapElements;
  private focusableElements;
  private outerElements;
  private lastActiveElement;
  constructor();
  private host;
  /**
   * Focus trap will be active when true.
   */
  active: boolean;
  /**
   * A querySelector of elements to include in the trap that
   * are not children of this focus trap. This can be useful
   * for specific situations such as modal overlays.
   */
  readonly include: string;
  /**
   * A querySelector of elements to explicitly exclude. This
   * can be useful for greedy accessibility apis and screen
   * reader fallover. Pass a comma delimited string of multiple
   * selectors to target multiple exclusions.
   */
  readonly exclude: string;
  /**
   * A querySelector of shadow elements to explicitly exclude. This
   * can be useful for greedy accessibility apis and screen
   * reader fallover. Pass a comma delimited string of multiple
   * selectors to target multiple exclusions. Pass selectors that
   * starts with the target components host lightDom element
   * E.g. `'ku4-carousel .next, ku4-carousel .prev'` will explicitly
   * exclude the target ku4-carousel next and previous buttons from
   * being navigable by greedy accessibility tools, i.e. VoiceOver.
   */
  readonly excludeShadow: string;
  /**
   * A querySelector of element to initially focus
   */
  readonly initial: string;
  /**
   * A querySelector of element to return focus to
   */
  readonly return: string;
  activeHandler(value: any): void;
  /**
   * Activate focus trap
   * @param {Element} [element] - Element to return focus to when trap is deactivated.
   */
  activate(element?: any): Promise<void>;
  /**
   * Deactivate focus trap.
   */
  deactivate(): Promise<void>;
  private handleActivate;
  private handleDeactivate;
  private handleKeyDown;
  private handleKeyUp;
  private handleMouse;
  private addEventListeners;
  private removeEventListeners;
  private activateTraps;
  private deactivateTraps;
  private setTraps;
  private wrap;
  private createTrapTag;
  private createWrapTag;
  private createTag;
  private initialize;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
