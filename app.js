
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
 <div class="actions">${cmd?`<button class="btn primary" onclick='copy(${JSON.stringify(cmd)})'>Copier commande / méthode</button>`:""}<button class="btn" onclick='addReport(${JSON.stringify(a.name+" — "+(a.description||a.method))})'>+ Rapport</button></div></article>`
}
function commandCard(c){return `<article class="card"><h3>${esc(c.name)}</h3><div class="meta">${esc(c.category)}</div><p class="desc">${esc(c.description)}</p><pre class="code">${esc(c.command)}</pre><div class="actions"><button class="btn primary" onclick='copy(${JSON.stringify(c.command)})'>Copier</button>${c.rights?`<span class="badge">${esc(c.rights)}</span>`:""}</div></article>`}
function allTemplates(){return [...D.templates,...custom]}
function templateCard(t,i){return `<article class="card"><h3>${esc(t.name)}</h3><div class="meta">${esc(t.category)}${t.custom?" • Personnel":""}</div>${t.subject?`<div class="badge">${esc(t.subject)}</div>`:""}<pre class="code">${esc(t.content)}</pre><div class="actions"><button class="btn primary" onclick='copy(${JSON.stringify((t.subject?"Objet : "+t.subject+"\n\n":"")+t.content)})'>Copier</button>${t.custom?`<button class="btn" onclick="editTemplate(${i})">Modifier</button><button class="btn red" onclick="deleteTemplate(${i})">Supprimer</button>`:""}</div></article>`}
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
 return `<div class="toolbar"><button class="btn primary" onclick="newTemplate()">+ Nouveau modèle</button><span class="badge">${ts.length} modèle(s)</span></div><div class="grid">${ts.map((t)=>templateCard(t,custom.indexOf(t))).join("")}</div>`
}
function newTemplate(idx=-1){
 let t=idx>=0?custom[idx]:{category:"Divers",name:"",subject:"",content:"",custom:true};
 $("#content").innerHTML=`<div class="editor"><input id="ecat" value="${esc(t.category)}" placeholder="Catégorie"><input id="ename" value="${esc(t.name)}" placeholder="Nom"><input class="full" id="esub" value="${esc(t.subject)}" placeholder="Objet (optionnel)"><textarea class="full" id="ebody" placeholder="Contenu">${esc(t.content)}</textarea><div class="full actions"><button class="btn primary" onclick="saveTemplate(${idx})">Enregistrer</button><button class="btn" onclick="render()">Annuler</button></div></div>`
}
function editTemplate(i){if(i>=0)newTemplate(i)}
function saveTemplate(i){let t={category:$("#ecat").value||"Divers",name:$("#ename").value||"Sans nom",subject:$("#esub").value,content:$("#ebody").value,custom:true};if(i>=0)custom[i]=t;else custom.push(t);save();render()}
function deleteTemplate(i){if(i>=0&&confirm("Supprimer ce modèle ?")){custom.splice(i,1);save();render()}}
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
window.openCat=openCat;window.closeTab=closeTab;window.copy=copy;window.addReport=addReport;window.newTemplate=newTemplate;window.editTemplate=editTemplate;window.saveTemplate=saveTemplate;window.deleteTemplate=deleteTemplate;window.render=render;
render();
