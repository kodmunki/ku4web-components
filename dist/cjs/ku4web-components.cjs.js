'use strict';

const index = require('./index-15d4a570.js');

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    {
        // shim css vars
        index.plt.$cssShim$ = index.win.__cssshim;
    }
    {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(index.H.prototype);
    }
    // @ts-ignore
    const scriptElm =  Array.from(index.doc.querySelectorAll('script')).find(s => new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === index.NAMESPACE)
        ;
    const opts =  scriptElm['data-opts'] || {} ;
    if ( 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
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
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, index.win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if ( !index.win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-dom" */ './dom-3a349c0e.js'); }).then(() => opts);
        }
    }
    return index.promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(index.NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        index.win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        index.win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = index.doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(index.win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                index.doc.head.appendChild(script);
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
  return index.bootstrapLazy([["ku4-carousel.cjs",[[1,"ku4-carousel",{"swipeTolerance":[2,"swipe-tolerance"],"slideState":[32],"next":[64],"previous":[64]}]]],["ku4-carousel-slide.cjs",[[1,"ku4-carousel-slide",{"active":[32],"classList":[32],"slideIn":[64],"slideOut":[64],"activate":[64],"deactivate":[64]}]]],["ku4-col.cjs",[[1,"ku4-col",{"startXs":[2,"start-xs"],"startSm":[2,"start-sm"],"startMd":[2,"start-md"],"startLg":[2,"start-lg"],"spanXs":[2,"span-xs"],"spanSm":[2,"span-sm"],"spanMd":[2,"span-md"],"spanLg":[2,"span-lg"],"orderXs":[2,"order-xs"],"orderSm":[2,"order-sm"],"orderMd":[2,"order-md"],"orderLg":[2,"order-lg"]}]]],["ku4-drawer.cjs",[[1,"ku4-drawer",{"bottom":[4],"left":[4],"right":[4],"top":[4],"size":[1],"open":[1540],"toggle":[64]}]]],["ku4-focus-trap.cjs",[[1,"ku4-focus-trap",{"active":[1540],"include":[1],"exclude":[1],"excludeShadow":[1,"exclude-shadow"],"initial":[1],"return":[1],"activate":[64],"deactivate":[64]}]]],["ku4-form.cjs",[[4,"ku4-form",{"invalid":[1540],"validate":[64],"invalidate":[64],"read":[64],"write":[64]}]]],["ku4-grid.cjs",[[1,"ku4-grid",{"columnsXs":[2,"columns-xs"],"columnsSm":[2,"columns-sm"],"columnsMd":[2,"columns-md"],"columnsLg":[2,"columns-lg"],"offsetLeftXs":[2,"offset-left-xs"],"offsetLeftSm":[2,"offset-left-sm"],"offsetLeftMd":[2,"offset-left-md"],"offsetLeftLg":[2,"offset-left-lg"],"offsetRight":[2,"offset-right"],"offsetRightXs":[2,"offset-right-xs"],"offsetRightSm":[2,"offset-right-sm"],"offsetRightMd":[2,"offset-right-md"],"offsetRightLg":[2,"offset-right-lg"],"offsetXs":[2,"offset-xs"],"offsetSm":[2,"offset-sm"],"offsetMd":[2,"offset-md"],"offsetLg":[2,"offset-lg"]}]]],["ku4-label.cjs",[[1,"ku4-label",{"for":[1],"value":[1],"empty":[32]}]]],["ku4-mask.cjs",[[1,"ku4-mask",{"for":[1],"template":[1],"ban":[1],"pattern":[1],"char":[1],"hidden":[4]}]]],["ku4-modal.cjs",[[1,"ku4-modal",{"visible":[1540],"focusTrap":[1,"focus-trap"],"display":[64],"dismiss":[64]},[[8,"keyup","handleKeyUp"]]]]],["ku4-tab.cjs",[[1,"ku4-tab",{"selected":[1540],"panel":[32],"select":[64],"deselect":[64],"connect":[64]},[[0,"click","handleClick"],[0,"keyup","handleKeyUp"]]]]],["ku4-tab-list.cjs",[[1,"ku4-tab-list",{"open":[64]},[[0,"ku4TabClick","handleHpTabClick"],[0,"ku4TabKeyup","handleHpTabKeyUp"]]]]],["ku4-tab-panel.cjs",[[1,"ku4-tab-panel",{"selected":[1540],"tab":[32],"select":[64],"deselect":[64],"connect":[64]}]]],["ku4-table.cjs",[[4,"ku4-table",{"stackXs":[1537,"stack-xs"],"stackSm":[1537,"stack-sm"]}]]],["ku4-tooltip.cjs",[[1,"ku4-tooltip",{"element":[1],"top":[4],"left":[4],"bottom":[4],"right":[4],"show":[64],"hide":[64]}]]],["ku4-validation.cjs",[[1,"ku4-validation",{"for":[1],"element":[1],"pattern":[1],"flags":[1],"values":[1],"method":[1],"invalid":[1540],"isValid":[32],"validate":[64]}]]]], options);
});
