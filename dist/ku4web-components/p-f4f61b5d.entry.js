import{r as t,h as a,c as o}from"./p-4b3a55b9.js";const l=class{constructor(a){t(this,a),this.columnsXs=1,this.offsetLeftXs=0,this.offsetRight=0,this.offsetXs=0}get columnClass(){const{columnsXs:t,columnsSm:a,columnsMd:o,columnsLg:l}=this,s=[];return t&&!Number.isNaN(t)&&s.push("columns-xs-"+t),a&&!Number.isNaN(a)&&s.push("columns-sm-"+a),o&&!Number.isNaN(o)&&s.push("columns-md-"+o),l&&!Number.isNaN(l)&&s.push("columns-lg-"+l),s.join(" ")}get offsetLeftClass(){const{offsetLeftXs:t,offsetLeftSm:a,offsetLeftMd:o,offsetLeftLg:l}=this,s=[];return t&&!Number.isNaN(t)&&s.push("offset-left-xs-"+t),a&&!Number.isNaN(a)&&s.push("offset-left-sm-"+a),o&&!Number.isNaN(o)&&s.push("offset-left-md-"+o),l&&!Number.isNaN(l)&&s.push("offset-left-lg-"+l),s.join(" ")}get offsetRightClass(){const{offsetRightXs:t,offsetRightSm:a,offsetRightMd:o,offsetRightLg:l}=this,s=[];return t&&!Number.isNaN(t)&&s.push("offset-right-xs-"+t),a&&!Number.isNaN(a)&&s.push("offset-right-sm-"+a),o&&!Number.isNaN(o)&&s.push("offset-right-md-"+o),l&&!Number.isNaN(l)&&s.push("offset-right-lg-"+l),s.join(" ")}get offsetClass(){const{offsetXs:t,offsetSm:a,offsetMd:o,offsetLg:l}=this,s=[];return t&&!Number.isNaN(t)&&s.push("offset-xs-"+t),a&&!Number.isNaN(a)&&s.push("offset-sm-"+a),o&&!Number.isNaN(o)&&s.push("offset-md-"+o),l&&!Number.isNaN(l)&&s.push("offset-lg-"+l),s.join(" ")}render(){const{columnClass:t,offsetClass:l,offsetLeftClass:s,offsetRightClass:i}=this;return a(o,{class:`${t} ${s} ${i} ${l}`},a("slot",null))}};l.style=":host{position:relative;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (min-width: 1px){:host(.columns-xs-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-xs-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-xs-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-xs-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-xs-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-xs-8){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(12.5%), auto));margin-bottom:0}:host(.columns-xs-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.columns-xs-16){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(6.25%), auto));margin-bottom:0}:host(.offset-left-xs-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-xs-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-xs-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-xs-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-xs-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-xs-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-xs-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-xs-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-xs-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-xs-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-xs-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-xs-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-xs-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-xs-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-xs-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-xs-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-xs-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-xs-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}:host{margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-xs, 6px))}:host::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-xs, 6px)}:host ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-xs, 6px)}}@media only screen and (min-width: 768px){:host(.columns-sm-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-sm-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-sm-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-sm-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-sm-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-sm-8){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(12.5%), auto));margin-bottom:0}:host(.columns-sm-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.columns-sm-16){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(6.25%), auto));margin-bottom:0}:host(.offset-left-sm-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-sm-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-sm-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-sm-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-sm-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-sm-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-sm-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-sm-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-sm-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-sm-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-sm-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-sm-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-sm-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-sm-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-sm-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-sm-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-sm-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-sm-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}:host{margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-sm, 10px))}:host::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-sm, 10px)}:host ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-sm, 10px)}}@media only screen and (min-width: 992px){:host(.columns-md-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-md-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-md-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-md-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-md-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-md-8){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(12.5%), auto));margin-bottom:0}:host(.columns-md-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.columns-md-16){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(6.25%), auto));margin-bottom:0}:host(.offset-left-md-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-md-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-md-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-md-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-md-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-md-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-md-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-md-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-md-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-md-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-md-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-md-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-md-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-md-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-md-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-md-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-md-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-md-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}:host{margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-md, 12px))}:host::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-md, 12px)}:host ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-md, 12px)}}@media only screen and (min-width: 1200px){:host(.columns-lg-1){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(100%), auto));margin-bottom:0}:host(.columns-lg-2){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(50%), auto));margin-bottom:0}:host(.columns-lg-3){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(33.3333333333%), auto));margin-bottom:0}:host(.columns-lg-4){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(25%), auto));margin-bottom:0}:host(.columns-lg-6){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(16.6666666667%), auto));margin-bottom:0}:host(.columns-lg-8){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(12.5%), auto));margin-bottom:0}:host(.columns-lg-12){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(8.3333333333%), auto));margin-bottom:0}:host(.columns-lg-16){display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(6.25%), auto));margin-bottom:0}:host(.offset-left-lg-0){padding-left:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-left-lg-1){padding-left:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-left-lg-2){padding-left:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-left-lg-3){padding-left:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-left-lg-4){padding-left:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-left-lg-5){padding-left:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-right-lg-0){padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-right-lg-1){padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-right-lg-2){padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-right-lg-3){padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-right-lg-4){padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-right-lg-5){padding-right:calc(((100% + 8.33px) / 12) * 5)}:host(.offset-lg-0){padding-left:calc(((100% + 8.33px) / 12) * 0);padding-right:calc(((100% + 8.33px) / 12) * 0)}:host(.offset-lg-1){padding-left:calc(((100% + 8.33px) / 12) * 1);padding-right:calc(((100% + 8.33px) / 12) * 1)}:host(.offset-lg-2){padding-left:calc(((100% + 8.33px) / 12) * 2);padding-right:calc(((100% + 8.33px) / 12) * 2)}:host(.offset-lg-3){padding-left:calc(((100% + 8.33px) / 12) * 3);padding-right:calc(((100% + 8.33px) / 12) * 3)}:host(.offset-lg-4){padding-left:calc(((100% + 8.33px) / 12) * 4);padding-right:calc(((100% + 8.33px) / 12) * 4)}:host(.offset-lg-5){padding-left:calc(((100% + 8.33px) / 12) * 5);padding-right:calc(((100% + 8.33px) / 12) * 5)}:host{margin-bottom:calc(-1 * var(--ku4-grid-row-gutter-lg, 16px))}:host::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-lg, 16px)}:host ::slotted(*){margin-bottom:var(--ku4-grid-row-gutter-lg, 16px)}}::slotted(*){margin-left:var(--ku4-grid-column-gutter, 15px);margin-right:var(--ku4-grid-column-gutter, 15px)}";export{l as ku4_grid}