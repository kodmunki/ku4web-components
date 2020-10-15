import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-dc6f4989.js';

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-2bc9d17d.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ku4-carousel",[[1,"ku4-carousel",{"swipeTolerance":[2,"swipe-tolerance"],"slideState":[32],"next":[64],"previous":[64]}]]],["ku4-carousel-slide",[[1,"ku4-carousel-slide",{"active":[32],"classList":[32],"slideIn":[64],"slideOut":[64],"activate":[64],"deactivate":[64]}]]],["ku4-col",[[1,"ku4-col",{"startXs":[2,"start-xs"],"startSm":[2,"start-sm"],"startMd":[2,"start-md"],"startLg":[2,"start-lg"],"spanXs":[2,"span-xs"],"spanSm":[2,"span-sm"],"spanMd":[2,"span-md"],"spanLg":[2,"span-lg"],"orderXs":[2,"order-xs"],"orderSm":[2,"order-sm"],"orderMd":[2,"order-md"],"orderLg":[2,"order-lg"]}]]],["ku4-drawer",[[1,"ku4-drawer",{"bottom":[4],"left":[4],"right":[4],"top":[4],"size":[1],"open":[1540],"toggle":[64]}]]],["ku4-focus-trap",[[1,"ku4-focus-trap",{"active":[1540],"include":[1],"exclude":[1],"excludeShadow":[1,"exclude-shadow"],"initial":[1],"return":[1],"activate":[64],"deactivate":[64]}]]],["ku4-form",[[4,"ku4-form",{"invalid":[1540],"validate":[64],"invalidate":[64],"read":[64],"write":[64]}]]],["ku4-grid",[[1,"ku4-grid",{"columnsXs":[2,"columns-xs"],"columnsSm":[2,"columns-sm"],"columnsMd":[2,"columns-md"],"columnsLg":[2,"columns-lg"],"offsetLeftXs":[2,"offset-left-xs"],"offsetLeftSm":[2,"offset-left-sm"],"offsetLeftMd":[2,"offset-left-md"],"offsetLeftLg":[2,"offset-left-lg"],"offsetRight":[2,"offset-right"],"offsetRightXs":[2,"offset-right-xs"],"offsetRightSm":[2,"offset-right-sm"],"offsetRightMd":[2,"offset-right-md"],"offsetRightLg":[2,"offset-right-lg"],"offsetXs":[2,"offset-xs"],"offsetSm":[2,"offset-sm"],"offsetMd":[2,"offset-md"],"offsetLg":[2,"offset-lg"]}]]],["ku4-label",[[1,"ku4-label",{"for":[1],"value":[1],"empty":[32]}]]],["ku4-mask",[[1,"ku4-mask",{"for":[1],"template":[1],"ban":[1],"pattern":[1],"char":[1],"hidden":[4]}]]],["ku4-modal",[[1,"ku4-modal",{"visible":[1540],"focusTrap":[1,"focus-trap"],"display":[64],"dismiss":[64]},[[8,"keyup","handleKeyUp"]]]]],["ku4-tab",[[1,"ku4-tab",{"selected":[1540],"panel":[32],"select":[64],"deselect":[64],"connect":[64]},[[0,"click","handleClick"],[0,"keyup","handleKeyUp"]]]]],["ku4-tab-list",[[1,"ku4-tab-list",{"open":[64]},[[0,"ku4TabClick","handleHpTabClick"],[0,"ku4TabKeyup","handleHpTabKeyUp"]]]]],["ku4-tab-panel",[[1,"ku4-tab-panel",{"selected":[1540],"tab":[32],"select":[64],"deselect":[64],"connect":[64]}]]],["ku4-table",[[4,"ku4-table",{"stackXs":[1537,"stack-xs"],"stackSm":[1537,"stack-sm"]}]]],["ku4-tooltip",[[1,"ku4-tooltip",{"element":[1],"top":[4],"left":[4],"bottom":[4],"right":[4],"show":[64],"hide":[64]}]]],["ku4-validation",[[1,"ku4-validation",{"for":[1],"element":[1],"pattern":[1],"flags":[1],"values":[1],"method":[1],"invalid":[1540],"isValid":[32],"validate":[64]}]]]], options);
  });
};

export { defineCustomElements };
