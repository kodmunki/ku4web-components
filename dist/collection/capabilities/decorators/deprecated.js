import { Assert } from 'ku4es-kernel';
/**
 * Decorates deprecated members.
 *
 * Note: Due to inherent issues with Stencil `@Component`, classes
 * should be `@Deprecated` at the `render` method.
 *
 * @param {string} [replacement] - Name of target replacement member
 * @param {function} [callback] - Optional callback for Unit Tests.
 */
export default (label, replacement, callback) => (_target, propertyKey, _descriptor) => {
  const property = propertyKey === 'render' ? '' : `.${propertyKey}`;
  const message = [
    `DEPRECATED: ${label}${property}`,
    '\nUse identified replacement if available.',
    Assert.exists(replacement) ? `\nReplacement: ${replacement}` : '',
  ].join('');
  // eslint-disable-next-line no-console
  (callback || (message => console.warn(message)))(message);
};
