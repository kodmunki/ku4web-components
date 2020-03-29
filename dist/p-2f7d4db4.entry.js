import{r as t,h as o,H as a}from"./p-a13d72ed.js";import{t as s}from"./p-15adacda.js";const l=class{constructor(o){t(this,o),this.columnsXs=1,this.offsetLeftXs=0,this.offsetRight=0,this.offsetXs=0}get columnClass(){const{columnsXs:t,columnsSm:o,columnsMd:a,columnsLg:s}=this,l=[];return t&&!Number.isNaN(t)&&l.push(`columns-xs-${t}`),o&&!Number.isNaN(o)&&l.push(`columns-sm-${o}`),a&&!Number.isNaN(a)&&l.push(`columns-md-${a}`),s&&!Number.isNaN(s)&&l.push(`columns-lg-${s}`),l.join(" ")}get offsetLeftClass(){const{offsetLeftXs:t,offsetLeftSm:o,offsetLeftMd:a,offsetLeftLg:s}=this,l=[];return t&&!Number.isNaN(t)&&l.push(`offset-left-xs-${t}`),o&&!Number.isNaN(o)&&l.push(`offset-left-sm-${o}`),a&&!Number.isNaN(a)&&l.push(`offset-left-md-${a}`),s&&!Number.isNaN(s)&&l.push(`offset-left-lg-${s}`),l.join(" ")}get offsetRightClass(){const{offsetRightXs:t,offsetRightSm:o,offsetRightMd:a,offsetRightLg:s}=this,l=[];return t&&!Number.isNaN(t)&&l.push(`offset-right-xs-${t}`),o&&!Number.isNaN(o)&&l.push(`offset-right-sm-${o}`),a&&!Number.isNaN(a)&&l.push(`offset-right-md-${a}`),s&&!Number.isNaN(s)&&l.push(`offset-right-lg-${s}`),l.join(" ")}get offsetClass(){const{offsetXs:t,offsetSm:o,offsetMd:a,offsetLg:s}=this,l=[];return t&&!Number.isNaN(t)&&l.push(`offset-xs-${t}`),o&&!Number.isNaN(o)&&l.push(`offset-sm-${o}`),a&&!Number.isNaN(a)&&l.push(`offset-md-${a}`),s&&!Number.isNaN(s)&&l.push(`offset-lg-${s}`),l.join(" ")}get rowGutterClass(){const{rowGutter:t}=this;return s.exists(t)?`row-gutter-${t}`:""}render(){const{columnClass:t,offsetClass:s,offsetLeftClass:l,offsetRightClass:i,rowGutterClass:e}=this;return o(a,{class:`${t} ${l} ${i} ${s} ${e}`},o("slot",null))}};l.style=":host{position:relative;display:block;margin:0 calc(-1 * var(--ku4-grid-column-gutter, 15px) + var(--ku4-grid-outer-gutter, 8px))}@media only screen and (min-width: 1px){:host(.columns-xs-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-xs-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-xs-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-xs-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-xs-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-xs-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.offset-left-xs-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-xs-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-xs-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-xs-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-xs-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-xs-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-xs-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-xs-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-xs-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-xs-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-xs-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-xs-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-xs-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-xs-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-xs-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-xs-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-xs-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-xs-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}}@media only screen and (min-width: 768px){:host(.columns-sm-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-sm-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-sm-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-sm-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-sm-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-sm-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.offset-left-sm-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-sm-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-sm-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-sm-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-sm-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-sm-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-sm-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-sm-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-sm-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-sm-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-sm-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-sm-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-sm-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-sm-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-sm-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-sm-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-sm-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-sm-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}}@media only screen and (min-width: 992px){:host(.columns-md-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-md-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-md-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-md-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-md-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-md-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.offset-left-md-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-md-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-md-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-md-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-md-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-md-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-md-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-md-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-md-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-md-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-md-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-md-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-md-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-md-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-md-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-md-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-md-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-md-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}}@media only screen and (min-width: 1200px){:host(.columns-lg-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-lg-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-lg-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-lg-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-lg-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-lg-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.offset-left-lg-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-lg-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-lg-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-lg-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-lg-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-lg-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-lg-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-lg-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-lg-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-lg-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-lg-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-lg-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-lg-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-lg-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-lg-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-lg-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-lg-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-lg-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}}::slotted(*){margin:0 var(--ku4-grid-column-gutter, 15px) !important}:host(.row-gutter-xs){margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-xs, 6px))}:host(.row-gutter-xs)::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-xs, 6px) !important}:host(.row-gutter-xs) ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-xs, 6px) !important}:host(.row-gutter-sm){margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-sm, 10px))}:host(.row-gutter-sm)::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-sm, 10px) !important}:host(.row-gutter-sm) ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-sm, 10px) !important}:host(.row-gutter-md){margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-md, 12px))}:host(.row-gutter-md)::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-md, 12px) !important}:host(.row-gutter-md) ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-md, 12px) !important}:host(.row-gutter-lg){margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-lg, 16px))}:host(.row-gutter-lg)::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-lg, 16px) !important}:host(.row-gutter-lg) ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-lg, 16px) !important}";export{l as ku4_grid}