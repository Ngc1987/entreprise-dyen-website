"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{1298:function(e,n,s){s.d(n,{Z:function(){return d}});var t=s(5893),r=s(5675),i=s.n(r),l=s(1664),a=s.n(l),c=s(1095),o=s(7294);function d(e){let{title:n,subtitle:s,buttonText:r,buttonLink:l,imagePath:d,extraContent:x}=e,[h,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{{let e=new window.Image;e.src=(0,c.a)(d),e.onload=()=>u(!0)}},[d]),(0,t.jsxs)("div",{className:"relative h-screen",role:"region","aria-label":"En-t\xeate de la page",children:[(0,t.jsx)("div",{className:"absolute inset-0",children:(0,t.jsx)(i(),{loader:c.X,src:d,alt:"Image d'arri\xe8re-plan: ".concat(n," - Entreprise D'Yen, sp\xe9cialiste en construction bois"),fill:!0,className:"object-cover brightness-50 transition-opacity duration-500 ".concat(h?"opacity-100":"opacity-0"),priority:!0,sizes:"100vw",role:"img","aria-hidden":"false",onLoad:()=>u(!0)})}),(0,t.jsx)("div",{className:"relative container h-full flex items-center",children:(0,t.jsxs)("div",{className:"max-w-2xl text-white fade-in z-10 mt-[-80px]",tabIndex:"0",children:[(0,t.jsx)("h1",{className:"text-4xl md:text-6xl font-bold mb-4",children:n}),(0,t.jsx)("p",{className:"text-xl md:text-2xl mb-6 text-gray-100",children:s}),x&&(0,t.jsx)("div",{className:"mt-6 mb-8 text-white",children:x}),r&&l&&(0,t.jsx)(a(),{href:l,className:"btn btn-primary inline-block","aria-label":"".concat(r," pour en savoir plus sur ").concat(n),children:r})]})})]})}},3304:function(e,n,s){s.d(n,{Z:function(){return N}});var t=s(5893),r=s(7294),i=s(9008),l=s.n(i),a=s(1664),c=s.n(a),o=s(1352),d=s(7232),x=s(6701),h=s(378),u=s(1095);let m=e=>{{let n=new window.Image;n.src=e}},f={"/":h.Y.hero.home,"/chalets":h.Y.hero.chalets,"/menuiserie":h.Y.hero.menuiserie,"/contact":h.Y.hero.contact},j=e=>{let{href:n,children:s,isMobile:r,ref:i}=e;return(0,t.jsx)(c(),{href:n,ref:i,className:"block py-2 hover:text-primary transition-colors ".concat(r?"px-2":""),onMouseEnter:()=>{f[n]&&m((0,u.a)(f[n]))},"aria-current":window.location.pathname===n?"page":void 0,children:s})};function p(){let[e,n]=(0,r.useState)(!1),[s,i]=(0,r.useState)(!1),l=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.useEffect)(()=>{let s=s=>{if("Escape"===s.key&&e){var t;n(!1),null===(t=l.current)||void 0===t||t.focus()}};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[e]),(0,r.useEffect)(()=>{e&&a.current&&setTimeout(()=>{a.current.focus()},100)},[e]),(0,t.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ".concat(s?"shadow-xl":""),role:"banner",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"flex items-center justify-between h-20",children:[(0,t.jsx)(c(),{href:"/",className:"block","aria-label":"Entreprise D'Yen - Retour \xe0 l'accueil",children:(0,t.jsx)("img",{src:"".concat("/entreprise-dyen-website","/images/logo.png"),alt:"Entreprise D'Yen Logo",className:"h-12 w-auto"})}),(0,t.jsx)("button",{ref:l,className:"md:hidden flex items-center justify-center w-10 h-10",onClick:()=>{n(!e)},"aria-expanded":e,"aria-controls":"mobile-menu","aria-label":e?"Fermer le menu":"Ouvrir le menu","aria-haspopup":"true",children:(0,t.jsx)("div",{className:"hamburger-icon ".concat(e?"open":""),children:e?(0,t.jsx)(o.Z,{size:24}):(0,t.jsx)(d.Z,{size:24})})}),(0,t.jsx)(x.Z,{in:e,timeout:300,classNames:"menu",unmountOnExit:!0,children:(0,t.jsx)("nav",{id:"mobile-menu",className:"absolute left-0 right-0 top-20 bg-white shadow-lg p-4 w-full z-50 md:hidden","aria-label":"Navigation mobile",children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(j,{href:"/",ref:a,isMobile:!0,children:"Accueil"}),(0,t.jsx)(j,{href:"/chalets",isMobile:!0,children:"Chalets"}),(0,t.jsx)(j,{href:"/menuiserie",isMobile:!0,children:"Menuiserie"}),(0,t.jsx)(j,{href:"/galerie",isMobile:!0,children:"Galerie"}),(0,t.jsx)(j,{href:"/contact",isMobile:!0,children:"Contact"})]})})}),(0,t.jsxs)("nav",{className:"hidden md:flex md:items-center md:space-x-8","aria-label":"Navigation principale",children:[(0,t.jsx)(j,{href:"/",children:"Accueil"}),(0,t.jsx)(j,{href:"/chalets",children:"Chalets"}),(0,t.jsx)(j,{href:"/menuiserie",children:"Menuiserie"}),(0,t.jsx)(j,{href:"/galerie",children:"Galerie"}),(0,t.jsx)(j,{href:"/contact",children:"Contact"})]})]})})})}function b(){return(0,t.jsx)("footer",{className:"bg-secondary text-white py-8",children:(0,t.jsxs)("div",{className:"container mx-auto px-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Entreprise D'Yen"}),(0,t.jsx)("p",{className:"text-gray-300",children:"Sp\xe9cialiste en construction de chalets, extensions en bois et menuiserie."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Navigation"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:"/",className:"hover:text-primary transition-colors",children:"Accueil"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:"/chalets",className:"hover:text-primary transition-colors",children:"Chalets"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:"/menuiserie",className:"hover:text-primary transition-colors",children:"Menuiserie"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:"/galerie",className:"hover:text-primary transition-colors",children:"Galerie"})}),(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:"/contact",className:"hover:text-primary transition-colors",children:"Contact"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Contact"}),(0,t.jsxs)("ul",{className:"space-y-2 text-gray-300",children:[(0,t.jsx)("li",{children:"Route Cascade de la Lance"}),(0,t.jsx)("li",{children:"04370 COLMARS"}),(0,t.jsx)("li",{children:"T\xe9l: 04 92 83 44 25"}),(0,t.jsx)("li",{children:"Email: entreprisedyen@hotmail.fr"})]})]})]}),(0,t.jsxs)("div",{className:"border-t border-gray-600 mt-8 pt-8 text-center text-gray-300",children:[(0,t.jsx)("p",{className:"mb-2",children:"ENTREPRISE DYEN SARL - SIRET 40473968200015 - TVA Intra. FR24404739682 - RCS Manosque B 404 739 682"}),(0,t.jsxs)("p",{className:"mb-2",children:["DYEN CONSTRUCTION BOIS \xa9 ",new Date().getFullYear()," | Creation site : LSM R\xe9f\xe9rencement"]})]})]})})}function v(){let[e,n]=(0,r.useState)(!1);return(0,t.jsx)("a",{href:"#main-content",className:"\n        fixed top-4 left-4 z-[100] transform transition-transform duration-200 bg-primary text-white px-4 py-2 rounded-md focus:outline-none \n        ".concat(e?"translate-y-0":"-translate-y-20","\n      "),onFocus:()=>n(!0),onBlur:()=>n(!1),children:"Aller au contenu principal"})}function N(e){let{children:n}=e,[s,i]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{i(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let a=window.location.hostname.includes("github.io");return(0,t.jsxs)("div",{className:"min-h-screen flex flex-col",children:[a&&(0,t.jsx)(l(),{children:(0,t.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                (function() {\n                  // Fonction pour fixer les liens dans le document\n                  function fixLinks() {\n                    // Pr\xe9fixe pour GitHub Pages\n                    const prefix = '/entreprise-dyen-website';\n                    \n                    // Parcourir tous les liens\n                    document.querySelectorAll('link[rel=\"stylesheet\"], script[src], img[src]').forEach(function(el) {\n                      // Attribut \xe0 v\xe9rifier (src ou href)\n                      const attr = el.hasAttribute('src') ? 'src' : 'href';\n                      const value = el.getAttribute(attr);\n                      \n                      // Ne pas modifier les URLs absolues ou celles qui ont d\xe9j\xe0 le pr\xe9fixe\n                      if (value && !value.startsWith('http') && !value.startsWith(prefix) && !value.startsWith('data:')) {\n                        el.setAttribute(attr, prefix + value);\n                      }\n                    });\n                  }\n                  \n                  // Ex\xe9cuter imm\xe9diatement\n                  fixLinks();\n                  \n                  // Observer les changements du DOM pour fixer de nouveaux \xe9l\xe9ments\n                  const observer = new MutationObserver(fixLinks);\n                  observer.observe(document.documentElement, { \n                    childList: true, \n                    subtree: true \n                  });\n                })();\n              "}})}),(0,t.jsx)(v,{}),(0,t.jsx)(p,{}),(0,t.jsx)("div",{className:"h-20"}),(0,t.jsx)("main",{id:"main-content",className:"flex-grow",tabIndex:"-1",children:n}),(0,t.jsx)(b,{})]})}},9312:function(e,n,s){s.d(n,{Z:function(){return r}});var t=s(5893);function r(e){let{title:n,subtitle:s,id:r}=e;return(0,t.jsxs)("div",{className:"text-center mb-12",children:[(0,t.jsx)("h2",{id:r,className:"text-3xl font-bold mb-4",children:n}),s&&(0,t.jsx)("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:s})]})}}}]);