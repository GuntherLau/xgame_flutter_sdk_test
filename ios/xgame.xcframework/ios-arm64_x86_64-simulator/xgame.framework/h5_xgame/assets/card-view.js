import{a as m,S as n,u as p,r as c,j as r}from"./index.sdk-0.0.1.js";import{u as l}from"./mqtt-controller.js";import{G as f,a as G}from"./game.dto.js";import{G as u}from"./type-filter.js";import{N as d}from"./no-record.js";import{O as g}from"./grid-game-view.js";import"./browser.js";import"./game-widget.js";import"./current-not-support-modal.js";import"./modals.js";import"./Modal.js";import"./home-layout.js";import"./main-layout.js";import"./popover.js";import"./lazy-load-component.js";function O(){const a=m(),e=new n(a.search),{getGameByCate:o,games:i}=l(),{i18n:{language:s}}=p(),t=c.useMemo(()=>o(f.card,{type:e.findString("filterGames","all"),provider:e.findString("provider",""),name:e.findString("name",""),recent:e.findString("filterGames","all")=="recent"}),[a.search,i,s]);return r.jsxs(r.Fragment,{children:[r.jsx(u,{}),(t==null?void 0:t.length)>0?r.jsx(g,{games:t,type:G.CARD_GAME}):r.jsx(d,{className:"grow"})]})}export{O as CardView};
