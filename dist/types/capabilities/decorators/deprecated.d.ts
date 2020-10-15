declare const _default: (label: string, replacement?: string, callback?: (message: string) => void) => any;
/**
 * Decorates deprecated members.
 *
 * Note: Due to inherent issues with Stencil `@Component`, classes
 * should be `@Deprecated` at the `render` method.
 *
 * @param {string} [replacement] - Name of target replacement member
 * @param {function} [callback] - Optional callback for Unit Tests.
 */
export default _default;
