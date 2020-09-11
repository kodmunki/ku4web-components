import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-c6f39e4e.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-3484e571.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["ku4-carousel",[[1,"ku4-carousel",{"swipeTolerance":[2,"swipe-tolerance"],"slideState":[32],"next":[64],"previous":[64]}]]],["ku4-carousel-slide",[[1,"ku4-carousel-slide",{"active":[32],"classList":[32],"slideIn":[64],"slideOut":[64],"activate":[64],"deactivate":[64]}]]],["ku4-col",[[1,"ku4-col",{"startXs":[2,"start-xs"],"startSm":[2,"start-sm"],"startMd":[2,"start-md"],"startLg":[2,"start-lg"],"spanXs":[2,"span-xs"],"spanSm":[2,"span-sm"],"spanMd":[2,"span-md"],"spanLg":[2,"span-lg"],"orderXs":[2,"order-xs"],"orderSm":[2,"order-sm"],"orderMd":[2,"order-md"],"orderLg":[2,"order-lg"]}]]],["ku4-drawer",[[1,"ku4-drawer",{"bottom":[4],"left":[4],"right":[4],"top":[4],"size":[1],"open":[1540],"toggle":[64]}]]],["ku4-focus-trap",[[1,"ku4-focus-trap",{"active":[1540],"include":[1],"exclude":[1],"excludeShadow":[1,"exclude-shadow"],"initial":[1],"return":[1],"activate":[64],"deactivate":[64]}]]],["ku4-form",[[4,"ku4-form",{"validate":[64]}]]],["ku4-grid",[[1,"ku4-grid",{"columnsXs":[2,"columns-xs"],"columnsSm":[2,"columns-sm"],"columnsMd":[2,"columns-md"],"columnsLg":[2,"columns-lg"],"offsetLeftXs":[2,"offset-left-xs"],"offsetLeftSm":[2,"offset-left-sm"],"offsetLeftMd":[2,"offset-left-md"],"offsetLeftLg":[2,"offset-left-lg"],"offsetRight":[2,"offset-right"],"offsetRightXs":[2,"offset-right-xs"],"offsetRightSm":[2,"offset-right-sm"],"offsetRightMd":[2,"offset-right-md"],"offsetRightLg":[2,"offset-right-lg"],"offsetXs":[2,"offset-xs"],"offsetSm":[2,"offset-sm"],"offsetMd":[2,"offset-md"],"offsetLg":[2,"offset-lg"]}]]],["ku4-label",[[1,"ku4-label",{"for":[1],"value":[1],"empty":[32]}]]],["ku4-mask",[[1,"ku4-mask",{"for":[1],"template":[1],"ban":[1],"pattern":[1],"char":[1],"hidden":[4]}]]],["ku4-modal",[[1,"ku4-modal",{"visible":[1540],"focusTrap":[1,"focus-trap"],"display":[64],"dismiss":[64]},[[8,"keyup","handleKeyUp"]]]]],["ku4-tab",[[1,"ku4-tab",{"selected":[1540],"panel":[32],"select":[64],"deselect":[64],"connect":[64]},[[0,"click","handleClick"],[0,"keyup","handleKeyUp"]]]]],["ku4-tab-list",[[1,"ku4-tab-list",{"open":[64]},[[0,"ku4TabClick","handleHpTabClick"],[0,"ku4TabKeyup","handleHpTabKeyUp"]]]]],["ku4-tab-panel",[[1,"ku4-tab-panel",{"selected":[1540],"tab":[32],"select":[64],"deselect":[64],"connect":[64]}]]],["ku4-table",[[4,"ku4-table",{"stackXs":[1537,"stack-xs"],"stackSm":[1537,"stack-sm"]}]]],["ku4-validation",[[1,"ku4-validation",{"for":[1],"element":[1],"pattern":[1],"flags":[1],"values":[1],"method":[1],"invalid":[1540],"isValid":[32],"validate":[64]}]]]], options);
});
