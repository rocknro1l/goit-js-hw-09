const e=document.querySelector("[data-stop]"),t=document.querySelector("[data-start]");t.addEventListener("click",(function(o){document.body.style.backgroundColor=d();setInterval((()=>{document.body.style.backgroundColor=d()}),1e3);t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(d){clearInterval(bodyColor),t.disabled=!1,e.disabled=!0}));function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!0;
//# sourceMappingURL=01-color-switcher.e92f8482.js.map