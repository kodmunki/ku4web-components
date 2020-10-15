import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @description ku4-modal
 */
export declare class Ku4Modal {
  private host;
  /**
   * Visible when true
   */
  visible: boolean;
  /**
   * An optional querySelector of an associated ku4-focus-trap that should
   * be activated when this ku4-modal is displayed and deactivated when
   * this ku4-modal is dismissed.
   */
  readonly focusTrap: string;
  /**
   * Event fired when modal is displayed
   */
  displayed: EventEmitter;
  /**
   * Event fired when modal is dismissed
   */
  dismissed: EventEmitter;
  private handleVisibility;
  handleKeyUp(e: any): void;
  /**
   * Display modal
   */
  display(): Promise<void>;
  /**
   * Dismiss modal
   */
  dismiss(): Promise<void>;
  private trap;
  componentDidLoad(): void;
  render(): any;
}
