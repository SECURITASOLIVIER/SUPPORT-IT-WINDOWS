
const D=window.SSIT_DATA, $=s=>document.querySelector(s);
const cats=["Accueil","Toutes les actions","Diagnostic & Escalade","Poste Windows","Sécurité Windows","Windows Update","Périphériques & Pilotes","Réseau & Accès distant","Microsoft 365","Applications","Navigateurs","Intune / Entra / SCCM","Outils Support","Commandes rapides","Communications","Portails","Journal & Statistiques"];
let state=JSON.parse(localStorage.getItem("ssitState")||'{"cat":"Accueil","tabs":["Accueil"],"theme":"dark"}');
let custom=JSON.parse(localStorage.getItem("ssitTemplates")||"[]");
function save(){localStorage.setItem("ssitState",JSON.stringify(state));localStorage.setItem("ssitTemplates",JSON.stringify(custom))}
function esc(s=""){return String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]))}
function toast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1300)}
async function copy(t){try{await navigator.clipboard.writeText(t);toast("Copié")}catch{let a=document.createElement("textarea");a.value=t;document.body.append(a);a.select();document.execCommand("copy");a.remove();toast("Copié")}}
async function shareText(title,text){
 const payload={title:title||"IT Pocket",text:String(text||"")};
 if(navigator.share){
   try{await navigator.share(payload);return}catch(e){if(e&&e.name==="AbortError")return}
 }
 await copy(payload.text);
 toast("Partage indisponible : contenu copié");
}
function openOutlookText(title,text){
 const subject=String(title||"IT Pocket");
 const body=String(text||"");
 window.location.href="mailto:?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
}
function openCat(c){state.cat=c;if(!state.tabs.includes(c))state.tabs.push(c);save();render()}
function closeTab(c,e){e.stopPropagation();state.tabs=state.tabs.filter(x=>x!==c);if(state.cat===c)state.cat=state.tabs.at(-1)||"Accueil";save();render()}
function nav(){ $("#nav").innerHTML=cats.map(c=>`<button class="navbtn ${state.cat===c?"active":""}" onclick='openCat(${JSON.stringify(c)})'>${icon(c)} ${esc(c)}</button>`).join("")}
function icon(c){return {"Accueil":"⌂","Toutes les actions":"☷","Diagnostic & Escalade":"🩺","Poste Windows":"🖥","Sécurité Windows":"🛡","Windows Update":"↻","Périphériques & Pilotes":"⌨","Réseau & Accès distant":"🌐","Microsoft 365":"▦","Applications":"📦","Navigateurs":"🌍","Intune / Entra / SCCM":"☁","Communications":"✉","Outils Support":"🧰","Commandes rapides":"⌘","Portails":"↗","Journal & Statistiques":"📊"}[c]||"•"}
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
 const actionCats=[...new Set(D.actions.map(a=>a.category).filter(Boolean))];
 return '<div class="home-summary">'+
   '<article class="card home-kpi"><h3>☷ Actions NO LOSS</h3><div class="big-number">'+D.actions.length+'</div><p class="desc">Toutes les actions de référence à consulter, comprendre, copier ou partager.</p><button class="btn primary" onclick=\'openCat("Toutes les actions")\'>Ouvrir</button></article>'+
   '<article class="card home-kpi"><h3>⌘ Commandes rapides</h3><div class="big-number">'+D.commands.length+'</div><p class="desc">PowerShell, CMD et raccourcis prêts à copier vers un poste Windows.</p><button class="btn primary" onclick=\'openCat("Commandes rapides")\'>Ouvrir</button></article>'+
   '<article class="card home-kpi"><h3>✉ Communications</h3><div class="big-number">'+allTemplates().length+'</div><p class="desc">Modèles corporate à copier, partager ou préparer dans l’application mail locale.</p><button class="btn primary" onclick=\'openCat("Communications")\'>Ouvrir</button></article>'+
   '<article class="card home-kpi"><h3>↗ Portails & liens</h3><div class="big-number">'+allPortals().length+'</div><p class="desc">Liens Microsoft et IT, favoris personnels et accès rapides.</p><button class="btn primary" onclick=\'openCat("Portails")\'>Ouvrir</button></article>'+
 '</div>'+
 '<div class="section-title">Catégories NO LOSS</div>'+
 '<div class="category-cloud">'+actionCats.map(c=>'<button class="btn category-chip" onclick=\'openNoLossCategory('+JSON.stringify(c)+')\'>'+esc(c)+' <span>'+D.actions.filter(a=>a.category===c).length+'</span></button>').join("")+'</div>';
}
function openNoLossCategory(cat){actionFilter=cat;openCat("Toutes les actions")}
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
function quickTemplateSearch(cat){setTemplateFilter(cat)}
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
function setActionFilter(v){actionFilter=v;render()}
function renderAllActions(){
 let sourceCats=[...new Set(D.actions.map(x=>x.category).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"fr"));
 let a=filterItems(D.actions,["name","description","method","command","script","category","webCategory"]);
 if(actionFilter!=="Tous")a=a.filter(x=>x.category===actionFilter);
 return '<div class="toolbar slimbar"><span class="badge">'+a.length+' / '+D.actions.length+' actions</span><span class="meta-inline">Référence NO LOSS • Mobile = consulter / partager • PC = exécuter si autonome</span></div>'+
 '<div class="category-scroll"><button class="btn" onclick=\'setActionFilter("Tous")\'>Toutes</button>'+sourceCats.map(c=>'<button class="btn" onclick=\'setActionFilter('+JSON.stringify(c)+')\'>'+esc(c)+'</button>').join("")+'</div>'+
 '<div class="grid">'+(a.map(actionCard).join("")||'<div class="empty">Aucune action trouvée.</div>')+'</div>';
}
function renderJournal(){
 let a=filterItems(D.actions.filter(x=>x.webCategory==="Journal & Statistiques"),["name","description","method","command","script","category"]);
 return (a.length?'<div class="section-title">Actions</div><div class="grid">'+a.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">Rapport local IT Pocket</div>'+renderReport();
}
function render(){
 document.body.classList.toggle("light",state.theme==="light");nav();tabs();
 $("#title").textContent=state.cat;
 $("#subtitle").textContent=state.cat==="Accueil"?"IT Pocket mobile — le téléphone consulte et partage, le PC Windows exécute.":"Rôles séparés : IT Pocket sur mobile ≠ poste Windows cible. IT Pocket fonctionne comme une solution indépendante.";
 $("#stats").textContent=D.actions.length+" actions • "+D.commands.length+" commandes • "+allTemplates().length+" modèles";
 let c=state.cat, h=
   c==="Accueil"?home():
   c==="Toutes les actions"?renderAllActions():
   c==="Communications"?communications():
   c==="Commandes rapides"?tools():
   c==="Portails"?portals():
   c==="Journal & Statistiques"?renderJournal():
   renderActions(c);
 $("#content").innerHTML=h
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
let templateFilter="Tous";
let actionFilter="Tous";
function savePocket(){save();localStorage.setItem("itpHiddenTemplates",JSON.stringify(hiddenTemplates));localStorage.setItem("itpCustomLinks",JSON.stringify(customLinks));localStorage.setItem("itpHiddenLinks",JSON.stringify(hiddenLinks));localStorage.setItem("itpFavoriteLinks",JSON.stringify(favoriteLinks))}
function executionProfile(item){
 const s=String(item.script||item.command||"").trim();
 if(!s)return {kind:"info",label:"Information / procédure",standalone:false};
 if(item.command && !item.script)return {kind:"standalone",label:"Autonome sur PC Windows",standalone:true};
 const internal=/\b(?:Show-Text|Show-Grid|Show-AppSupportCenter|Show-RepairableApps|Show-OfficeAddinManager|Show-OneDriveDiagnostic|Export-OneDriveDiagnostic|Start-SupportTarget|Open-Uri|Confirm-Action|Add-Report|Enable-Escape|Get-PriorityApps|Get-InstalledApps|Get-OneDriveDiagnostic|Invoke-Lms|Start-Lms|Show-Ssit|Get-Ssit|Invoke-Ssit|Write-Ssit|Apply-Ssit|Register-Ssit)\b/i.test(s);
 if(internal)return {kind:"reference",label:"Module interne • non autonome",standalone:false};
 return {kind:"standalone",label:"Script autonome à exécuter sur le PC",standalone:true};
}
function roleBlock(item){
 const p=executionProfile(item);
 return '<div class="role-split">'+
 '<div class="role-box"><div class="role-title">📱 Rôle IT Pocket</div><div class="role-text">Sur mobile : comprendre l’action, copier, partager ou envoyer par Outlook. Rien n’est exécuté sur le téléphone.</div></div>'+
 '<div class="role-box '+(p.standalone?'role-pc':'role-ref')+'"><div class="role-title">🖥 Rôle PC Windows</div><div class="role-text">'+
 (p.standalone?'Sur le poste cible : ouvrir PowerShell / CMD selon l’indication puis exécuter le contenu copié.':'Cette fiche décrit un module interne. Ses options doivent être utilisées via les fiches indépendantes proposées dans IT Pocket.')+
 '</div></div></div>'+
 '<div class="execution-label '+p.kind+'">'+esc(p.label)+'</div>';
}
function launchTutorial(item){
 const p=executionProfile(item);
 const shell=String(item.shell||item.language||"PowerShell");
 const rights=String(item.rights||"");
 const risk=String(item.risk||"");
 const cmd=String(item.script||item.command||"");
 const admin=/admin/i.test(rights);
 const isUrl=/^https?:\/\//i.test(cmd.trim());
 const isUri=/ms-settings:|ms-quick-assist:|edge:\/\/|chrome:\/\//i.test(cmd);
 const isCmd=/CMD/i.test(shell)&&!/PowerShell/i.test(shell);
 let steps=[];
 steps.push("Depuis IT Pocket sur le mobile, copie ou partage le contenu vers le technicien / le PC cible.");
 if(!p.standalone){
   steps.push("Ne colle pas ce bloc tel quel dans PowerShell : cette fiche représente un module interne non autonome.");
   steps.push("Utilise la méthode et la description pour comprendre l’action, ou cherche une commande autonome équivalente dans Commandes rapides.");
   return '<ol class="tutorial-steps">'+steps.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ol>';
 }
 if(isUrl){
   steps.push("Sur le PC cible, ouvre un navigateur puis colle l’adresse dans la barre d’adresse.");
   steps.push("Appuie sur Entrée et connecte-toi avec le compte professionnel si demandé.");
 }else if(isUri){
   steps.push("Sur le PC cible, appuie sur Windows + R.");
   steps.push("Colle la commande ou l’URI puis appuie sur Entrée.");
 }else if(isCmd){
   steps.push("Sur le PC cible, ouvre Invite de commandes"+(admin?" en tant qu’administrateur":"")+".");
   steps.push("Colle la commande puis appuie sur Entrée.");
 }else{
   steps.push("Sur le PC cible, ouvre PowerShell ou Terminal Windows"+(admin?" en tant qu’administrateur":"")+".");
   steps.push("Colle le script puis appuie sur Entrée.");
 }
 steps.push("Contrôle le résultat avant de passer à une autre action.");
 if(/redémarr|reboot/i.test(risk))steps.push("Redémarre le poste uniquement si l’action ou le résultat le demande.");
 if(/moyen|élevé|modifie|supprim|interrompt|resynchron/i.test(risk))steps.push("Vérifie l’impact et préviens l’utilisateur avant une action corrective.");
 steps.push("Pour une escalade, partage le résultat avec le nom de l’action et le contexte.");
 return '<ol class="tutorial-steps">'+steps.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ol>';
}
function toggleInlineDetail(id){
 const box=document.getElementById(id);
 if(!box)return;
 const open=box.classList.toggle("open");
 const btn=document.querySelector('[data-detail-btn="'+id+'"]');
 if(btn)btn.textContent=open?"Réduire":"Voir plus";
}
function detailHtml(item,id){
 const s=item.script||item.command||"", sh=item.shell||item.language||"PowerShell", p=executionProfile(item);
 return '<div id="'+id+'" class="inline-detail">'+
   roleBlock(item)+
   (item.method?'<div class="more-label">Méthode / principe</div><div class="more-text">'+esc(item.method)+'</div>':'')+
   '<div class="more-label">Utilisation • étape par étape</div>'+launchTutorial(item)+
   (p.standalone&&s?'<div class="more-label">Commande / script autonome • '+esc(sh)+'</div><pre class="code scriptfull">'+esc(s)+'</pre><div class="actions"><button class="btn primary" onclick=\'copy('+JSON.stringify(s)+')\'>Copier pour le PC</button></div>':'')+
   (!p.standalone?'<div class="module-note">Les options de ce module sont destinées à être présentées séparément dans IT Pocket : scripts autonomes, liens et procédures.</div>':'')+
   '</div>';
}
function actionCard(a){
 let s=a.script||a.command||"", p=executionProfile(a);
 const id="detail_"+Math.random().toString(36).slice(2);
 const usefulText=p.standalone?s:(a.method||a.description||"");
 const shareBody=(a.name||"")+(a.description?"\n\n"+a.description:"")+
   (p.standalone&&s?"\n\nSCRIPT / COMMANDE AUTONOME\n"+s:"")+
   (!p.standalone&&a.method?"\n\nMéthode / principe : "+a.method:"");
 return '<article class="card compact-card"><h3>'+esc(a.name)+'</h3>'+
 '<div class="meta">'+esc(a.category)+(a.language?' • '+esc(a.language):'')+'</div>'+
 '<p class="desc">'+esc(a.description||a.method||'')+'</p>'+
 '<div class="card-badges"><span class="badge '+(p.standalone?'':'warn')+'">'+esc(p.label)+'</span>'+(a.rights?'<span class="badge">'+esc(a.rights)+'</span>':'')+(a.risk?'<span class="badge warn">'+esc(a.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions">'+
 (usefulText?'<button class="btn '+(p.standalone?'primary':'')+'" onclick=\'copy('+JSON.stringify(usefulText)+')\'>'+(p.standalone?'Copier':'Copier la fiche')+'</button>':'')+
 '<button class="btn" onclick=\'shareText('+JSON.stringify(a.name||"IT Pocket")+','+JSON.stringify(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+JSON.stringify(a.name||"IT Pocket")+','+JSON.stringify(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>Voir plus</button></div>'+
 detailHtml(a,id)+'</article>';
}
function commandCard(c){
 const id="detail_"+Math.random().toString(36).slice(2);
 const shareBody=(c.name||"")+(c.description?"\n\n"+c.description:"")+"\n\nCOMMANDE AUTONOME\n"+(c.command||"");
 return '<article class="card compact-card"><h3>'+esc(c.name)+'</h3>'+
 '<div class="meta">'+esc(c.category)+(c.shell?' • '+esc(c.shell):'')+'</div>'+
 '<p class="desc">'+esc(c.description||'')+'</p>'+
 '<div class="card-badges"><span class="badge">Autonome sur PC Windows</span>'+(c.rights?'<span class="badge">'+esc(c.rights)+'</span>':'')+(c.risk?'<span class="badge warn">'+esc(c.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions"><button class="btn primary" onclick=\'copy('+JSON.stringify(c.command)+')\'>Copier</button>'+
 '<button class="btn" onclick=\'shareText('+JSON.stringify(c.name||"IT Pocket")+','+JSON.stringify(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+JSON.stringify(c.name||"IT Pocket")+','+JSON.stringify(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>Voir plus</button></div>'+
 detailHtml(c,id)+'</article>';
}
function allTemplates(){return D.templates.map((t,i)=>({...t,builtin:true,_id:"b"+i})).filter(t=>!hiddenTemplates.includes(t._id)).concat(custom.map((t,i)=>({...t,custom:true,_id:"c"+i})))}
function getTemplateByRef(ref){if(!ref)return null;let i=parseInt(ref.slice(1),10);return ref[0]==="b"?D.templates[i]:custom[i]}
function openTemplateOutlook(ref){let t=getTemplateByRef(ref);if(!t)return;window.location.href="mailto:?subject="+encodeURIComponent(t.subject||"")+"&body="+encodeURIComponent(t.content||"")}
function templateCard(t){
 let r=JSON.stringify(t._id);
 const full=(t.subject?"Objet : "+t.subject+"\n\n":"")+t.content;
 return '<article class="card"><h3>'+esc(t.name)+'</h3><div class="meta">'+esc(t.category)+' '+(t.builtin?'• Intégré':'• Personnel')+'</div>'+
 (t.subject?'<div class="badge">Objet : '+esc(t.subject)+'</div>':'')+
 '<pre class="code">'+esc(t.content)+'</pre><div class="actions">'+
 '<button class="btn primary" onclick=\'copy('+JSON.stringify(full)+')\'>Copier</button>'+
 '<button class="btn" onclick=\'shareText('+JSON.stringify(t.name||"Communication IT")+','+JSON.stringify(full)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openTemplateOutlook('+r+')\'>Outlook</button>'+
 '<button class="btn" onclick=\'editTemplate('+r+')\'>Modifier</button><button class="btn red" onclick=\'deleteTemplate('+r+')\'>Supprimer</button></div></article>';
}
function setTemplateFilter(v){templateFilter=v;render()}
function communications(){
 let all=allTemplates(), ts=filterItems(all,["name","category","subject","content"]);
 if(templateFilter!=="Tous")ts=ts.filter(t=>t.category===templateFilter);
 let cs=[...new Set(all.map(x=>x.category))].sort();
 let actionCards=filterItems(D.actions.filter(x=>x.webCategory==="Communications"),["name","description","method","command","script","category"]);
 return '<div class="toolbar"><button class="btn primary" onclick="newTemplate()">+ Créer un template</button><button class="btn" onclick="exportTemplates()">Exporter</button><label class="btn">Importer <input type="file" accept=".json" onchange="importTemplates(this)" style="display:none"></label><span class="badge">'+ts.length+' modèle(s)</span></div>'+
 '<div class="toolbar"><button class="btn" onclick=\'setTemplateFilter("Tous")\'>Tous</button>'+cs.map(c=>'<button class="btn" onclick=\'setTemplateFilter('+JSON.stringify(c)+')\'>'+esc(c)+'</button>').join("")+'</div>'+
 (actionCards.length?'<div class="section-title">Actions Communication</div><div class="grid">'+actionCards.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">Modèles corporate</div><div class="grid">'+(ts.map(templateCard).join("")||'<div class="empty">Aucun template trouvé.</div>')+'</div>';
}
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
function renderActions(c){let a=filterItems(D.actions.filter(x=>x.webCategory===c),["name","description","method","command","script","category"]);return '<div class="toolbar slimbar"><span class="badge">'+a.length+' action(s)</span><span class="meta-inline">Copier • Partager • Outlook • Voir plus</span></div><div class="grid">'+(a.map(actionCard).join("")||'<div class="empty">Aucune action trouvée.</div>')+'</div>'}
function tools(){let c=filterItems(D.commands,["name","description","command","category","shell"]);return '<div class="toolbar slimbar"><span class="badge">'+c.length+' / '+D.commands.length+' commande(s)</span><span class="meta-inline">Copier • Partager • Outlook • Voir plus</span></div><div class="grid">'+(c.map(commandCard).join("")||'<div class="empty">Aucune commande trouvée.</div>')+'</div>'}
Object.assign(window,{actionCard,commandCard,toggleInlineDetail,launchTutorial,executionProfile,roleBlock,shareText,openOutlookText,setTemplateFilter,setActionFilter,openNoLossCategory,renderAllActions,renderJournal,communications,newTemplate,editTemplate,saveTemplateRef,deleteTemplate,openTemplateOutlook,portals,newLink,editLink,saveLink,deleteLink,toggleFavoriteLink,setPortalFilter,renderActions,tools});
render();
