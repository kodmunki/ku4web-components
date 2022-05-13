import { r as registerInstance, h, f as Host, g as getElement } from './index-65e7ba77.js';
import { t } from './index-5bc509ed.js';

const Ku4Feature = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * A function or method that returns a boolean.
     * A return value of true will turn on the this
     * feature. (optional)
     */
    this.policy = '';
    this.enabled = false;
    const policy = this.policy.trim();
    this.featurePolicy = t.isNullOrEmpty(policy)
      ? () => false
      : new Function((/^return/.test(policy) ? policy : `return ${policy}`));
  }
  componentWillLoad() {
    const { on, featurePolicy } = this;
    on || featurePolicy.call(this.host)
      ? this.render = () => h("slot", null)
      : this.host.parentNode.removeChild(this.host);
  }
  render() { return h(Host, null); }
  get host() { return getElement(this); }
};

export { Ku4Feature as ku4_feature };
