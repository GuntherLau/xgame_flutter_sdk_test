import{a as m,S as n,u as p,r as c,j as t}from"./index.sdk-0.0.1.js";import{u as l}from"./mqtt-controller.js";import{G as f}from"./game.dto.js";import{G as u}from"./type-filter.js";import{S as g}from"./grid-game-view.js";import"./browser.js";import"./game-widget.js";import"./current-not-support-modal.js";import"./modals.js";import"./Modal.js";import"./home-layout.js";import"./main-layout.js";import"./popover.js";import"./lazy-load-component.js";function q(){const e=m(),r=new n(e.search),{getGameByCate:o,games:a}=l(),{i18n:{language:i}}=p(),s=c.useMemo(()=>o(f.sport,{type:r.findString("filterGames","all"),provider:r.findString("provider",""),name:r.findString("name",""),recent:r.findString("filterGames","all")=="recent"}),[e.search,a,i]);return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(g,{games:s})]})}export{q as SportView};
