
const D=window.SSIT_DATA, $=s=>document.querySelector(s);
const cats=["Accueil","Diagnostic & Escalade","Poste Windows","Sécurité Windows","Windows Update","Périphériques & Pilotes","Réseau & Accès distant","Microsoft 365","Applications","Navigateurs","Intune / Entra / SCCM","Communications","Outils Support","Portails","Journal & Statistiques"];
let state=JSON.parse(localStorage.getItem("ssitState")||'{"cat":"Accueil","tabs":["Accueil"],"theme":"dark"}');
let custom=JSON.parse(localStorage.getItem("ssitTemplates")||"[]");
function save(){localStorage.setItem("ssitState",JSON.stringify(state));localStorage.setItem("ssitTemplates",JSON.stringify(custom))}
function esc(s=""){return String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]))}
function toast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1300)}
async function copy(t){try{await navigator.clipboard.writeText(t);toast("Copié")}catch{let a=document.createElement("textarea");a.value=t;document.body.append(a);a.select();document.execCommand("copy");a.remove();toast("Copié")}}
function openCat(c){state.cat=c;if(!state.tabs.includes(c))state.tabs.push(c);save();render()}
function closeTab(c,e){e.stopPropagation();state.tabs=state.tabs.filter(x=>x!==c);if(state.cat===c)state.cat=state.tabs.at(-1)||"Accueil";save();render()}
function nav(){ $("#nav").innerHTML=cats.map(c=>`<button class="navbtn ${state.cat===c?"active":""}" onclick='openCat(${JSON.stringify(c)})'>${icon(c)} ${esc(c)}</button>`).join("")}
function icon(c){return {"Accueil":"⌂","Diagnostic & Escalade":"🩺","Poste Windows":"🖥","Sécurité Windows":"🛡","Windows Update":"↻","Périphériques & Pilotes":"⌨","Réseau & Accès distant":"🌐","Microsoft 365":"▦","Applications":"📦","Navigateurs":"🌍","Intune / Entra / SCCM":"☁","Communications":"✉","Outils Support":"⌘","Portails":"↗","Journal & Statistiques":"📊"}[c]||"•"}
function tabs(){ $("#tabs").innerHTML=state.tabs.map(c=>`<button class="tab ${state.cat===c?"active":""}" onclick='openCat(${JSON.stringify(c)})'>${icon(c)} ${esc(c)} <span onclick='closeTab(${JSON.stringify(c)},event)'>×</span></button>`).join("")}
function actionCard(a){
 let cmd=a.command||a.method||"";
 return `<article class="card"><h3>${esc(a.name)}</h3><div class="meta">${esc(a.category)} ${a.language?`• ${esc(a.language)}`:""}</div>
 <p class="desc">${esc(a.description||a.method)}</p>
 <div>${a.rights?`<span class="badge">${esc(a.rights)}</span>`:""}${a.risk?`<span class="badge warn">${esc(a.risk)}</span>`:""}</div>
 ${cmd?`<pre class="code">${esc(cmd)}</pre>`:""}
 <div class="actions">${cmd?`<button class="btn primary" onclick='copy(${JSON.stringify(cmd)})'>Copier commande / méthode</button>`:""}<button class="btn" onclick='copy(${JSON.stringify((a.name||"")+"\n"+(a.description||"")+"\n"+(a.method||""))})'>Copier la fiche</button></div></article>`
}
function commandCard(c){return `<article class="card"><h3>${esc(c.name)}</h3><div class="meta">${esc(c.category)}</div><p class="desc">${esc(c.description)}</p><pre class="code">${esc(c.command)}</pre><div class="actions"><button class="btn primary" onclick='copy(${JSON.stringify(c.command)})'>Copier</button>${c.rights?`<span class="badge">${esc(c.rights)}</span>`:""}</div></article>`}

function allTemplates(){
 return D.templates.map((t,i)=>({...t,builtin:true,_id:"b"+i})).concat(custom.map((t,i)=>({...t,custom:true,_id:"c"+i})));
}
function templateCard(t){
 const ref=JSON.stringify(t._id);
 return `<article class="card"><h3>${esc(t.name)}</h3><div class="meta">${esc(t.category)} ${t.builtin?"• Intégré":"• Personnel"}</div>
 ${t.subject?`<div class="badge">Objet : ${esc(t.subject)}</div>`:""}
 <pre class="code">${esc(t.content)}</pre>
 <div class="actions">
  <button class="btn primary" onclick='copy(${JSON.stringify((t.subject?"Objet : "+t.subject+"\n\n":"")+t.content)})'>Copier</button>
  <button class="btn" onclick='editTemplate(${ref})'>Modifier</button>
  <button class="btn" onclick='duplicateTemplate(${ref})'>Dupliquer</button>
  ${t.custom?`<button class="btn red" onclick='deleteTemplate(${ref})'>Supprimer</button>`:""}
 </div></article>`;
}
function filterItems(items, fields){let q=$("#search").value.trim().toLowerCase();if(!q)return items;return items.filter(x=>fields.some(f=>String(x[f]||"").toLowerCase().includes(q)))}
function renderActions(c){let arr=filterItems(D.actions.filter(a=>a.webCategory===c),["name","description","method","command","category"]);return `<div class="toolbar"><span class="badge">${arr.length} action(s)</span><span class="badge warn">Exécution Windows : copier la commande</span></div><div class="grid">${arr.map(actionCard).join("")||'<div class="empty">Aucune action trouvée.</div>'}</div>`}
function home(){
 let counts={};D.actions.forEach(a=>counts[a.webCategory]=(counts[a.webCategory]||0)+1);
 return `<div class="grid">${cats.slice(1,-2).map(c=>`<article class="card"><h3>${icon(c)} ${esc(c)}</h3><p class="desc">${counts[c]||0} actions disponibles.</p><button class="btn primary" onclick='openCat(${JSON.stringify(c)})'>Ouvrir</button></article>`).join("")}</div>`
}
let report=JSON.parse(localStorage.getItem("ssitReport")||"[]");
function addReport(x){report.push(new Date().toLocaleString()+" — "+x);localStorage.setItem("ssitReport",JSON.stringify(report));toast("Ajouté au rapport")}
function renderReport(){return `<div class="toolbar"><button class="btn primary" onclick="copy(report.join('\\n'))">Copier rapport</button><button class="btn red" onclick="report=[];localStorage.setItem('ssitReport','[]');render()">Vider</button></div><pre class="code" style="max-height:none">${esc(report.join("\n\n")||"Rapport vide.")}</pre>`}

function communications(){
 let ts=filterItems(allTemplates(),["name","category","subject","content"]);
 let cats=[...new Set(allTemplates().map(x=>x.category))].sort();
 return `<div class="toolbar">
   <button class="btn primary" onclick="newTemplate()">+ Créer un template</button>
   <button class="btn" onclick="exportTemplates()">Exporter mes templates</button>
   <label class="btn">Importer <input type="file" accept=".json" onchange="importTemplates(this)" style="display:none"></label>
   <span class="badge">${ts.length} modèle(s)</span>
   <span class="badge">${custom.length} personnel(s)</span>
 </div>
 <div class="toolbar">${cats.map(c=>`<button class="btn" onclick='quickTemplateSearch(${JSON.stringify(c)})'>${esc(c)}</button>`).join("")}</div>
 <div class="grid">${ts.map(templateCard).join("")||'<div class="empty">Aucun template trouvé.</div>'}</div>`;
}
function getTemplateByRef(ref){
 if(!ref)return null;
 let type=ref[0],i=parseInt(ref.slice(1),10);
 return type==="b"?D.templates[i]:custom[i];
}
function newTemplate(ref=null){
 let source=getTemplateByRef(ref);
 let t=source?{...source}:{category:"Tickets",name:"",subject:"",content:""};
 let editIndex=(ref&&ref[0]==="c")?parseInt(ref.slice(1),10):-1;
 $("#content").innerHTML=`<div class="card"><h3>${source?"Modifier le template":"Créer un template"}</h3>
 <div class="editor">
  <div><div class="meta">Catégorie</div><input id="ecat" value="${esc(t.category||"")}" placeholder="Tickets, Matériel, Sécurité…"></div>
  <div><div class="meta">Nom du template</div><input id="ename" value="${esc(t.name||"")}" placeholder="Ex. Incident - clôture"></div>
  <div class="full"><div class="meta">Objet</div><input id="esub" value="${esc(t.subject||"")}" placeholder="Objet du mail / message"></div>
  <div class="full"><div class="meta">Texte</div><textarea id="ebody" placeholder="Texte du template">${esc(t.content||"")}</textarea></div>
  <div class="full actions">
   <button class="btn primary" onclick="saveTemplate(${editIndex})">Enregistrer</button>
   <button class="btn" onclick="render()">Annuler</button>
  </div>
 </div></div>`;
}
function editTemplate(ref){
 // An integrated template is copied to personal templates when modified,
 // preserving the shipped default.
 newTemplate(ref);
}
function duplicateTemplate(ref){
 let t=getTemplateByRef(ref); if(!t)return;
 custom.push({...t,name:(t.name||"Template")+" - copie",custom:true});
 save();toast("Template dupliqué");render();
}
function saveTemplate(i){
 let t={category:$("#ecat").value.trim()||"Divers",name:$("#ename").value.trim()||"Sans nom",
        subject:$("#esub").value.trim(),content:$("#ebody").value,custom:true};
 if(i>=0)custom[i]=t;else custom.push(t);
 save();toast("Template enregistré");render();
}
function deleteTemplate(ref){
 if(!ref||ref[0]!=="c")return;
 let i=parseInt(ref.slice(1),10);
 if(confirm("Supprimer ce template personnel ?")){custom.splice(i,1);save();render()}
}
function quickTemplateSearch(cat){$("#search").value=cat;render()}
function exportTemplates(){
 let blob=new Blob([JSON.stringify(custom,null,2)],{type:"application/json"});
 let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="SuperSupportIT_Templates.json";a.click();URL.revokeObjectURL(a.href);
}
function importTemplates(inp){
 let f=inp.files&&inp.files[0];if(!f)return;
 let r=new FileReader();r.onload=()=>{try{let x=JSON.parse(r.result);if(!Array.isArray(x))throw 0;
 custom=x.filter(t=>t&&t.name&&typeof t.content==="string").map(t=>({...t,custom:true}));save();toast("Templates importés");render()
 }catch{alert("Fichier de templates invalide.")}};r.readAsText(f);
}
function portals(){let ps=filterItems(D.portals,["name","url"]);return `<div class="grid">${ps.map(p=>`<article class="card"><h3>${esc(p.name)}</h3><pre class="code">${esc(p.url)}</pre><div class="actions"><button class="btn primary" onclick='window.open(${JSON.stringify(p.url)},"_blank","noopener")'>Ouvrir</button><button class="btn" onclick='copy(${JSON.stringify(p.url)})'>Copier URL</button></div></article>`).join("")}</div>`}
function tools(){let cs=filterItems(D.commands,["name","description","command","category"]);return `<div class="toolbar"><span class="badge">${cs.length} commande(s)</span></div><div class="grid">${cs.map(commandCard).join("")}</div>`}
function render(){
 document.body.classList.toggle("light",state.theme==="light");nav();tabs();
 $("#title").textContent=state.cat;$("#subtitle").textContent=state.cat==="Accueil"?"Version Web complète — recherche, commandes, procédures, communications et portails.":"Navigation persistante : changer de menu ne ferme pas les autres onglets.";
 $("#stats").textContent=`${D.actions.length} actions • ${D.commands.length} commandes • ${allTemplates().length} modèles`;
 let c=state.cat, h=c==="Accueil"?home():c==="Communications"?communications():c==="Outils Support"?tools():c==="Portails"?portals():c==="Journal & Statistiques"?renderReport():renderActions(c);$("#content").innerHTML=h
}
$("#search").addEventListener("input",render);
$("#theme").onclick=()=>{state.theme=state.theme==="light"?"dark":"light";save();render()};
$("#export").onclick=()=>{let blob=new Blob([JSON.stringify({state,custom,report},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="SuperSupportIT_Web_Data.json";a.click();URL.revokeObjectURL(a.href)};
window.openCat=openCat;window.closeTab=closeTab;window.copy=copy;window.newTemplate=newTemplate;window.editTemplate=editTemplate;window.duplicateTemplate=duplicateTemplate;window.saveTemplate=saveTemplate;window.deleteTemplate=deleteTemplate;window.quickTemplateSearch=quickTemplateSearch;window.exportTemplates=exportTemplates;window.importTemplates=importTemplates;window.render=render;

let hiddenTemplates=JSON.parse(localStorage.getItem("itpHiddenTemplates")||"[]");
let customLinks=JSON.parse(localStorage.getItem("itpCustomLinks")||"[]");
let hiddenLinks=JSON.parse(localStorage.getItem("itpHiddenLinks")||"[]");
let favoriteLinks=JSON.parse(localStorage.getItem("itpFavoriteLinks")||"[]");
let portalFilter="Tous";
function savePocket(){save();localStorage.setItem("itpHiddenTemplates",JSON.stringify(hiddenTemplates));localStorage.setItem("itpCustomLinks",JSON.stringify(customLinks));localStorage.setItem("itpHiddenLinks",JSON.stringify(hiddenLinks));localStorage.setItem("itpFavoriteLinks",JSON.stringify(favoriteLinks))}
function actionCard(a){let s=a.script||a.command||"",sh=a.shell||a.language||"PowerShell";return '<article class="card"><h3>'+esc(a.name)+'</h3><div class="meta">'+esc(a.category)+(a.language?' • '+esc(a.language):'')+'</div><p class="desc">'+esc(a.description||a.method||'')+'</p><div>'+(a.rights?'<span class="badge">'+esc(a.rights)+'</span>':'')+(a.risk?'<span class="badge warn">'+esc(a.risk)+'</span>':'')+'</div>'+(a.method?'<details class="details"><summary>Comprendre / méthode</summary><pre class="code">'+esc(a.method)+'</pre></details>':'')+(s?'<details class="details" open><summary>Script / commande • '+esc(sh)+'</summary><pre class="code scriptfull">'+esc(s)+'</pre></details>':'')+'<div class="actions">'+(s?'<button class="btn primary" onclick=\'copy('+JSON.stringify(s)+')\'>Copier le script</button>':'')+'<button class="btn" onclick=\'copy('+JSON.stringify((a.name||"")+"\n"+(a.description||"")+"\n\nMéthode : "+(a.method||"")+(s?"\n\nScript :\n"+s:""))+')\'>Copier la fiche</button></div></article>'}
function commandCard(c){return '<article class="card"><h3>'+esc(c.name)+'</h3><div class="meta">'+esc(c.category)+(c.shell?' • '+esc(c.shell):'')+'</div><p class="desc">'+esc(c.description||'')+'</p><div>'+(c.rights?'<span class="badge">'+esc(c.rights)+'</span>':'')+(c.risk?'<span class="badge warn">'+esc(c.risk)+'</span>':'')+'</div><pre class="code scriptfull">'+esc(c.command)+'</pre><div class="actions"><button class="btn primary" onclick=\'copy('+JSON.stringify(c.command)+')\'>Copier la commande</button></div></article>'}
function allTemplates(){return D.templates.map((t,i)=>({...t,builtin:true,_id:"b"+i})).filter(t=>!hiddenTemplates.includes(t._id)).concat(custom.map((t,i)=>({...t,custom:true,_id:"c"+i})))}
function getTemplateByRef(ref){if(!ref)return null;let i=parseInt(ref.slice(1),10);return ref[0]==="b"?D.templates[i]:custom[i]}
function openTemplateOutlook(ref){let t=getTemplateByRef(ref);if(!t)return;window.open("https://outlook.office.com/mail/deeplink/compose?subject="+encodeURIComponent(t.subject||"")+"&body="+encodeURIComponent(t.content||""),"_blank","noopener")}
function templateCard(t){let r=JSON.stringify(t._id);return '<article class="card"><h3>'+esc(t.name)+'</h3><div class="meta">'+esc(t.category)+' '+(t.builtin?'• Intégré':'• Personnel')+'</div>'+(t.subject?'<div class="badge">Objet : '+esc(t.subject)+'</div>':'')+'<pre class="code">'+esc(t.content)+'</pre><div class="actions"><button class="btn primary" onclick=\'copy('+JSON.stringify((t.subject?"Objet : "+t.subject+"\n\n":"")+t.content)+')\'>Copier</button><button class="btn outlook" onclick=\'openTemplateOutlook('+r+')\'>Outlook</button><button class="btn" onclick=\'editTemplate('+r+')\'>Modifier</button><button class="btn red" onclick=\'deleteTemplate('+r+')\'>Supprimer</button></div></article>'}
function communications(){let ts=filterItems(allTemplates(),["name","category","subject","content"]),cs=[...new Set(allTemplates().map(x=>x.category))].sort();return '<div class="toolbar"><button class="btn primary" onclick="newTemplate()">+ Créer un template</button><button class="btn" onclick="exportTemplates()">Exporter</button><label class="btn">Importer <input type="file" accept=".json" onchange="importTemplates(this)" style="display:none"></label><span class="badge">'+ts.length+' modèle(s)</span></div><div class="toolbar">'+cs.map(c=>'<button class="btn" onclick=\'quickTemplateSearch('+JSON.stringify(c)+')\'>'+esc(c)+'</button>').join("")+'</div><div class="grid">'+(ts.map(templateCard).join("")||'<div class="empty">Aucun template trouvé.</div>')+'</div>'}
function newTemplate(ref=null){let t=ref?{...getTemplateByRef(ref)}:{category:"Tickets",name:"",subject:"",content:""};$("#content").innerHTML='<div class="card"><h3>'+(ref?'Modifier le template':'Créer un template')+'</h3><div class="editor"><div><div class="meta">Catégorie</div><input id="ecat" value="'+esc(t.category||"")+'"></div><div><div class="meta">Nom</div><input id="ename" value="'+esc(t.name||"")+'"></div><div class="full"><div class="meta">Objet</div><input id="esub" value="'+esc(t.subject||"")+'"></div><div class="full"><div class="meta">Texte</div><textarea id="ebody">'+esc(t.content||"")+'</textarea></div><div class="full actions"><button class="btn primary" onclick=\'saveTemplateRef('+JSON.stringify(ref||"")+')\'>Enregistrer</button><button class="btn" onclick="render()">Annuler</button></div></div></div>'}
function editTemplate(ref){newTemplate(ref)}
function saveTemplateRef(ref){let t={category:$("#ecat").value.trim()||"Divers",name:$("#ename").value.trim()||"Sans nom",subject:$("#esub").value.trim(),content:$("#ebody").value,custom:true};if(ref&&ref[0]==="c")custom[parseInt(ref.slice(1),10)]=t;else{if(ref&&ref[0]==="b"&&!hiddenTemplates.includes(ref))hiddenTemplates.push(ref);custom.push(t)}savePocket();toast("Template enregistré");render()}
function deleteTemplate(ref){if(!ref||!confirm("Supprimer ce template ?"))return;if(ref[0]==="c")custom.splice(parseInt(ref.slice(1),10),1);else if(!hiddenTemplates.includes(ref))hiddenTemplates.push(ref);savePocket();render()}
function allPortals(){return (D.portals||[]).map((p,i)=>({...p,builtin:true,_id:"b"+i})).filter(p=>!hiddenLinks.includes(p._id)).concat(customLinks.map((p,i)=>({...p,custom:true,_id:"c"+i})))}
function isFavoriteLink(r){return favoriteLinks.includes(r)}
function toggleFavoriteLink(r){favoriteLinks=isFavoriteLink(r)?favoriteLinks.filter(x=>x!==r):favoriteLinks.concat(r);savePocket();render()}
function setPortalFilter(v){portalFilter=v;render()}
function getLinkByRef(r){if(!r)return null;let i=parseInt(r.slice(1),10);return r[0]==="b"?D.portals[i]:customLinks[i]}
function portalCard(p){let r=JSON.stringify(p._id),f=isFavoriteLink(p._id);return '<article class="card"><h3>'+(f?'★ ':'')+esc(p.name)+'</h3><div class="meta">'+esc(p.category||"Divers")+' '+(p.builtin?'• Intégré':'• Personnel')+'</div><pre class="code">'+esc(p.url)+'</pre><div class="actions"><button class="btn primary" onclick=\'window.open('+JSON.stringify(p.url)+',"_blank","noopener")\'>Ouvrir</button><button class="btn" onclick=\'copy('+JSON.stringify(p.url)+')\'>Copier URL</button><button class="btn" onclick=\'toggleFavoriteLink('+r+')\'>'+(f?'★ Favori':'☆ Favori')+'</button><button class="btn" onclick=\'editLink('+r+')\'>Modifier</button><button class="btn red" onclick=\'deleteLink('+r+')\'>Supprimer</button></div></article>'}
function portals(){let ps=filterItems(allPortals(),["name","url","category"]);if(portalFilter==="Favoris")ps=ps.filter(p=>isFavoriteLink(p._id));else if(portalFilter!=="Tous")ps=ps.filter(p=>(p.category||"Divers")===portalFilter);let cs=[...new Set(allPortals().map(x=>x.category||"Divers"))].sort();return '<div class="toolbar"><button class="btn primary" onclick="newLink()">+ Ajouter un lien</button><button class="btn" onclick=\'setPortalFilter("Tous")\'>Tous</button><button class="btn" onclick=\'setPortalFilter("Favoris")\'>★ Favoris</button><span class="badge">'+ps.length+' lien(s)</span></div><div class="toolbar">'+cs.map(c=>'<button class="btn" onclick=\'setPortalFilter('+JSON.stringify(c)+')\'>'+esc(c)+'</button>').join("")+'</div><div class="grid">'+(ps.map(portalCard).join("")||'<div class="empty">Aucun lien trouvé.</div>')+'</div>'}
function newLink(ref=null){let p=ref?{...getLinkByRef(ref)}:{name:"",category:"Favoris",url:"https://"};$("#content").innerHTML='<div class="card"><h3>'+(ref?'Modifier le lien':'Ajouter un lien favori')+'</h3><div class="editor"><div><div class="meta">Nom</div><input id="lname" value="'+esc(p.name||"")+'"></div><div><div class="meta">Catégorie</div><input id="lcat" value="'+esc(p.category||"Favoris")+'"></div><div class="full"><div class="meta">URL</div><input id="lurl" value="'+esc(p.url||"https://")+'"></div><div class="full actions"><button class="btn primary" onclick=\'saveLink('+JSON.stringify(ref||"")+')\'>Enregistrer</button><button class="btn" onclick="render()">Annuler</button></div></div></div>'}
function editLink(r){newLink(r)}
function saveLink(r){let name=$("#lname").value.trim(),category=$("#lcat").value.trim()||"Favoris",url=$("#lurl").value.trim();if(!name||!/^https?:\/\//i.test(url)){alert("Nom obligatoire et URL http/https valide.");return}let p={name,category,url,custom:true};if(r&&r[0]==="c")customLinks[parseInt(r.slice(1),10)]=p;else{if(r&&r[0]==="b"&&!hiddenLinks.includes(r))hiddenLinks.push(r);customLinks.push(p)}savePocket();toast("Lien enregistré");render()}
function deleteLink(r){if(!r||!confirm("Supprimer ce lien ?"))return;if(r[0]==="c")customLinks.splice(parseInt(r.slice(1),10),1);else if(!hiddenLinks.includes(r))hiddenLinks.push(r);favoriteLinks=favoriteLinks.filter(x=>x!==r);savePocket();render()}
function renderActions(c){let a=filterItems(D.actions.filter(x=>x.webCategory===c),["name","description","method","command","script","category"]);return '<div class="toolbar"><span class="badge">'+a.length+' action(s)</span><span class="badge warn">Web : copie du script, exécution locale dans PowerShell/CMD</span></div><div class="grid">'+(a.map(actionCard).join("")||'<div class="empty">Aucune action trouvée.</div>')+'</div>'}
function tools(){let c=filterItems(D.commands,["name","description","command","category","shell"]);return '<div class="toolbar"><span class="badge">'+c.length+' commande(s)</span><span class="badge">Shell + droits + risque</span></div><div class="grid">'+c.map(commandCard).join("")+'</div>'}
Object.assign(window,{actionCard,commandCard,communications,newTemplate,editTemplate,saveTemplateRef,deleteTemplate,openTemplateOutlook,portals,newLink,editLink,saveLink,deleteLink,toggleFavoriteLink,setPortalFilter,renderActions,tools});
render();
