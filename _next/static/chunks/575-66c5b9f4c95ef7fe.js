"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{1298:function(e,s,t){t.d(s,{Z:function(){return o}});var i=t(5893),n=t(5675),r=t.n(n),a=t(1664),l=t.n(a),c=t(1095);function o(e){let{title:s,subtitle:t,buttonText:n,buttonLink:a,imagePath:o,extraContent:u}=e;return(0,i.jsxs)("div",{className:"relative h-screen",role:"region","aria-label":"En-t\xeate de la page",children:[(0,i.jsx)("div",{className:"absolute inset-0",children:(0,i.jsx)(r(),{loader:c.X,src:o,alt:"Image d'arri\xe8re-plan: ".concat(s," - Entreprise D'Yen, sp\xe9cialiste en construction bois"),fill:!0,className:"object-cover brightness-50",priority:!0,sizes:"100vw",role:"img","aria-hidden":"false"})}),(0,i.jsx)("div",{className:"relative container h-full flex items-center",children:(0,i.jsxs)("div",{className:"max-w-2xl text-white fade-in z-10 mt-[-80px]",tabIndex:"0",children:[(0,i.jsx)("h1",{className:"text-4xl md:text-6xl font-bold mb-4",children:s}),(0,i.jsx)("p",{className:"text-xl md:text-2xl mb-6 text-gray-100",children:t}),u&&(0,i.jsx)("div",{className:"mt-6 mb-8 text-white",children:u}),n&&a&&(0,i.jsx)(l(),{href:a,className:"btn btn-primary inline-block","aria-label":"".concat(n," pour en savoir plus sur ").concat(s),children:n})]})})]})}},3304:function(e,s,t){t.d(s,{Z:function(){return v}});var i=t(5893),n=t(7294),r=t(9008),a=t.n(r),l=t(1664),c=t.n(l),o=t(1352),u=t(7232),d=t(6701),x=t(378),m=t(1095);let h=e=>{{let s=new window.Image;s.src=e}},p={"/":x.Y.hero.home,"/chalets":x.Y.hero.chalets,"/menuiserie":x.Y.hero.menuiserie,"/contact":x.Y.hero.contact},f=e=>{let{href:s,children:t,isMobile:n,ref:r}=e;return(0,i.jsx)(c(),{href:s,ref:r,className:"block py-2 hover:text-primary transition-colors ".concat(n?"px-2":""),onMouseEnter:()=>{p[s]&&h((0,m.a)(p[s]))},"aria-current":window.location.pathname===s?"page":void 0,children:t})};function b(){let[e,s]=(0,n.useState)(!1),[t,r]=(0,n.useState)(!1),a=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.useEffect)(()=>{let t=t=>{if("Escape"===t.key&&e){var i;s(!1),null===(i=a.current)||void 0===i||i.focus()}};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e]),(0,n.useEffect)(()=>{e&&l.current&&setTimeout(()=>{l.current.focus()},100)},[e]),(0,i.jsx)("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ".concat(t?"shadow-xl":""),role:"banner",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"flex items-center justify-between h-20",children:[(0,i.jsx)(c(),{href:"/",className:"block","aria-label":"Entreprise D'Yen - Retour \xe0 l'accueil",children:(0,i.jsx)("img",{src:"".concat("/entreprise-dyen-website","/images/logo.png"),alt:"Entreprise D'Yen Logo",className:"h-12 w-auto"})}),(0,i.jsx)("button",{ref:a,className:"md:hidden flex items-center justify-center w-10 h-10",onClick:()=>{s(!e)},"aria-expanded":e,"aria-controls":"mobile-menu","aria-label":e?"Fermer le menu":"Ouvrir le menu","aria-haspopup":"true",children:(0,i.jsx)("div",{className:"hamburger-icon ".concat(e?"open":""),children:e?(0,i.jsx)(o.Z,{size:24}):(0,i.jsx)(u.Z,{size:24})})}),(0,i.jsx)(d.Z,{in:e,timeout:300,classNames:"menu",unmountOnExit:!0,children:(0,i.jsx)("nav",{id:"mobile-menu",className:"absolute left-0 right-0 top-20 bg-white shadow-lg p-4 w-full z-50 md:hidden","aria-label":"Navigation mobile",children:(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsx)(f,{href:"/",ref:l,isMobile:!0,children:"Accueil"}),(0,i.jsx)(f,{href:"/chalets",isMobile:!0,children:"Chalets"}),(0,i.jsx)(f,{href:"/menuiserie",isMobile:!0,children:"Menuiserie"}),(0,i.jsx)(f,{href:"/galerie",isMobile:!0,children:"Galerie"}),(0,i.jsx)(f,{href:"/contact",isMobile:!0,children:"Contact"})]})})}),(0,i.jsxs)("nav",{className:"hidden md:flex md:items-center md:space-x-8","aria-label":"Navigation principale",children:[(0,i.jsx)(f,{href:"/",children:"Accueil"}),(0,i.jsx)(f,{href:"/chalets",children:"Chalets"}),(0,i.jsx)(f,{href:"/menuiserie",children:"Menuiserie"}),(0,i.jsx)(f,{href:"/galerie",children:"Galerie"}),(0,i.jsx)(f,{href:"/contact",children:"Contact"})]})]})})})}function g(){return(0,i.jsx)("footer",{className:"bg-secondary text-white py-8",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Entreprise D'Yen"}),(0,i.jsx)("p",{className:"text-gray-300",children:"Sp\xe9cialiste en construction de chalets, extensions en bois et menuiserie."})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Navigation"}),(0,i.jsxs)("ul",{className:"space-y-2",children:[(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"/",className:"hover:text-primary transition-colors",children:"Accueil"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"/chalets",className:"hover:text-primary transition-colors",children:"Chalets"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"/menuiserie",className:"hover:text-primary transition-colors",children:"Menuiserie"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"/galerie",className:"hover:text-primary transition-colors",children:"Galerie"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c(),{href:"/contact",className:"hover:text-primary transition-colors",children:"Contact"})})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{className:"text-lg font-semibold mb-4",children:"Contact"}),(0,i.jsxs)("ul",{className:"space-y-2 text-gray-300",children:[(0,i.jsx)("li",{children:"Route Cascade de la Lance"}),(0,i.jsx)("li",{children:"04370 COLMARS"}),(0,i.jsx)("li",{children:"T\xe9l: 04 92 83 44 25"}),(0,i.jsx)("li",{children:"Email: entreprisedyen@hotmail.fr"})]})]})]}),(0,i.jsxs)("div",{className:"border-t border-gray-600 mt-8 pt-8 text-center text-gray-300",children:[(0,i.jsx)("p",{className:"mb-2",children:"ENTREPRISE DYEN SARL - SIRET 40473968200015 - TVA Intra. FR24404739682 - RCS Manosque B 404 739 682"}),(0,i.jsxs)("p",{className:"mb-2",children:["DYEN CONSTRUCTION BOIS \xa9 ",new Date().getFullYear()," | Creation site : LSM R\xe9f\xe9rencement"]})]})]})})}function j(){let[e,s]=(0,n.useState)(!1);return(0,i.jsx)("a",{href:"#main-content",className:"\n        fixed top-4 left-4 z-[100] transform transition-transform duration-200 bg-primary text-white px-4 py-2 rounded-md focus:outline-none \n        ".concat(e?"translate-y-0":"-translate-y-20","\n      "),onFocus:()=>s(!0),onBlur:()=>s(!1),children:"Aller au contenu principal"})}function v(e){let{children:s}=e,[t,r]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=()=>{r(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let l=window.location.hostname.includes("github.io");return(0,i.jsxs)("div",{className:"min-h-screen flex flex-col",children:[l&&(0,i.jsx)(a(),{children:(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                (function() {\n                  // Fonction pour fixer les liens dans le document\n                  function fixLinks() {\n                    // Pr\xe9fixe pour GitHub Pages\n                    const prefix = '/entreprise-dyen-website';\n                    \n                    // Parcourir tous les liens\n                    document.querySelectorAll('link[rel=\"stylesheet\"], script[src], img[src]').forEach(function(el) {\n                      // Attribut \xe0 v\xe9rifier (src ou href)\n                      const attr = el.hasAttribute('src') ? 'src' : 'href';\n                      const value = el.getAttribute(attr);\n                      \n                      // Ne pas modifier les URLs absolues ou celles qui ont d\xe9j\xe0 le pr\xe9fixe\n                      if (value && !value.startsWith('http') && !value.startsWith(prefix) && !value.startsWith('data:')) {\n                        el.setAttribute(attr, prefix + value);\n                      }\n                    });\n                  }\n                  \n                  // Ex\xe9cuter imm\xe9diatement\n                  fixLinks();\n                  \n                  // Observer les changements du DOM pour fixer de nouveaux \xe9l\xe9ments\n                  const observer = new MutationObserver(fixLinks);\n                  observer.observe(document.documentElement, { \n                    childList: true, \n                    subtree: true \n                  });\n                })();\n              "}})}),(0,i.jsx)(j,{}),(0,i.jsx)(b,{}),(0,i.jsx)("div",{className:"h-20"}),(0,i.jsx)("main",{id:"main-content",className:"flex-grow",tabIndex:"-1",children:s}),(0,i.jsx)(g,{})]})}},9312:function(e,s,t){t.d(s,{Z:function(){return n}});var i=t(5893);function n(e){let{title:s,subtitle:t,id:n}=e;return(0,i.jsxs)("div",{className:"text-center mb-12",children:[(0,i.jsx)("h2",{id:n,className:"text-3xl font-bold mb-4",children:s}),t&&(0,i.jsx)("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:t})]})}},378:function(e,s,t){t.d(s,{Y:function(){return i}});let i={hero:{home:"/images/chalet_sunset.webp",chalets:"/images/chalet_forest.webp",menuiserie:"/images/kitchen.webp",contact:"/images/city.webp"},services:{chalets:{main:"/images/chalet_lake.webp",detail:"/images/lake.webp"},extensions:{main:"/images/house.webp",detail:"/images/villa.webp"},menuiserie:[{url:"/images/sejour.webp",title:"Menuiserie Ext\xe9rieure",description:"Des solutions durables pour vos ouvertures",items:["Fen\xeatres bois, PVC, aluminium","Portes d'entr\xe9e","Volets roulants et battants","Pergolas et terrasses"]},{url:"/images/architect_house.webp",title:"Menuiserie Int\xe9rieure",description:"Am\xe9nagements sur mesure pour votre int\xe9rieur",items:["Portes int\xe9rieures","Placards et dressing","Escaliers","Parquets et rev\xeatements"]},{url:"/images/modern_house.webp",title:"Am\xe9nagements Sp\xe9ciaux",description:"Des solutions personnalis\xe9es pour vos besoins",items:["Biblioth\xe8ques sur mesure","Cuisines int\xe9gr\xe9es","Meubles TV et rangements","Solutions acoustiques"]}]},gallery:{chalets:[{url:"/images/chalet_sunset.webp",title:"Chalet Contemporain",description:"Chalet moderne avec grandes baies vitr\xe9es"},{url:"/images/chalet_forest.webp",title:"Chalet Traditionnel",description:"Construction traditionnelle en bois massif"},{url:"/images/chalet_lake.webp",title:"Chalet de Montagne",description:"Chalet luxueux avec vue panoramique"}],extensions:[{url:"/images/house.webp",title:"Extension Moderne",description:"Extension avec toit plat et bardage bois"},{url:"/images/villa.webp",title:"Extension Traditionnelle",description:"Extension en harmonie avec l'existant"}],menuiserie:[{url:"/images/architect_house.webp",title:"Escalier Sur Mesure",description:"Escalier h\xe9lico\xefdal en bois massif"},{url:"/images/modern_house.webp",title:"Dressing Int\xe9gr\xe9",description:"Am\xe9nagement complet de dressing"},{url:"/images/chalet_sunset.webp",title:"Cuisine Sur Mesure",description:"Cuisine int\xe9gr\xe9e en bois massif"}]}}},1095:function(e,s,t){t.d(s,{X:function(){return n},a:function(){return i}});let i=e=>{let s=window.location.hostname.includes("github.io"),t=s?"/entreprise-dyen-website":"";return e.startsWith(t)?e:"".concat(t).concat(e)},n=e=>{let{src:s}=e;return i(s)}}}]);