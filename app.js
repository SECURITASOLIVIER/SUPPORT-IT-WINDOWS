
const D=window.SSIT_DATA, $=s=>document.querySelector(s);
function readLocalJson(key,fallback){
 try{
   const raw=localStorage.getItem(key);
   if(raw===null||raw===undefined||raw==="")return fallback;
   const value=JSON.parse(raw);
   return value===null||value===undefined?fallback:value;
 }catch(e){
   try{localStorage.removeItem(key)}catch(_){}
   return fallback;
 }
}
function readLocalArray(key){
 const v=readLocalJson(key,[]);
 return Array.isArray(v)?v:[];
}
const cats=["Accueil","Communications","Portails","Système","Réseau & Accès distant","Microsoft 365","Navigateurs","Applications","Périphériques & Pilotes","Sécurité Windows","Intune / Entra / SCCM","Windows Update","Outils Support"];
const UI_EN={
 "Accueil":"Home",
 "Communications":"Communications",
 "Portails":"Portals",
 "Système":"System",
 "Réseau & Accès distant":"Network & Remote Access",
 "Microsoft 365":"Microsoft 365",
 "Navigateurs":"Browsers",
 "Applications":"Applications",
 "Périphériques & Pilotes":"Devices & Drivers",
 "Sécurité Windows":"Windows Security",
 "Intune / Entra / SCCM":"Intune / Entra / SCCM",
 "Windows Update":"Windows Update",
 "Outils Support":"Support Tools",
 "Ouvrir":"Open",
 "Copier":"Copy",
 "Copier le lien":"Copy link",
 "Copier le script":"Copy script",
 "Copier la commande":"Copy command",
 "Copier le raccourci":"Copy shortcut",
 "Partager":"Share",
 "Voir plus":"Show more",
 "Réduire":"Collapse",
 "Modifier":"Edit",
 "Supprimer":"Delete",
 "Enregistrer":"Save",
 "Annuler":"Cancel",
 "Tous":"All",
 "Favoris":"Favorites",
 "★ Favoris":"★ Favorites",
 "★ Favori":"★ Favorite",
 "☆ Favori":"☆ Favorite",
 "+ Ajouter un lien":"+ Add link",
 "+ Créer un template":"+ Create template",
 "Exporter":"Export",
 "Importer":"Import",
 "Objet":"Subject",
 "Modèles corporate":"Corporate templates",
 "Actions Communication":"Communication actions",
 "Aucun lien trouvé.":"No link found.",
 "Aucun template trouvé.":"No template found.",
 "Aucun contenu.":"No content.",
 "Thème":"Theme",
};
const PORTAL_CAT_EN={
 "Cybersécurité France":"French Cybersecurity",
 "Cybersécurité":"Cybersecurity",
 "Actualité IT":"IT News",
 "Statuts services":"Service Status",
 "Documentation Microsoft":"Microsoft Documentation",
 "Microsoft 365":"Microsoft 365",
 "Entra / Identité":"Entra / Identity",
 "Intune":"Intune",
 "Azure":"Azure",
 "Sécurité":"Security",
 "Sécurité / Réseau":"Security / Network",
 "Microsoft Graph":"Microsoft Graph",
 "Windows":"Windows",
 "Support":"Support",
 "Outils IT":"IT Tools",
 "Constructeurs":"Vendors",
 "Accès distant / VPN":"Remote Access / VPN",
 "Navigateurs":"Browsers",
 "IA":"AI",
 "Favoris":"Favorites",
 "Vulnérabilités":"Vulnerabilities",
 "Microsoft Sécurité":"Microsoft Security",
 "IA":"AI",
 "Actualité IT":"IT News"
};

Object.assign(UI_EN,{
 "Objectif":"Objective",
 "À comprendre":"What to know",
 "Prérequis / impact":"Prerequisites / impact",
 "Procédure":"Procedure",
 "Vérification":"Verification",
 "Escalade":"Escalation",
 "Droits":"Permissions",
 "Impact":"Impact",
 "Information":"Information",
 "Lien":"Link",
 "Commande":"Command",
 "Raccourci Windows":"Windows shortcut",
 "Script":"Script",
 "Lien • Navigateur":"Link • Browser",
 "Commande • CMD":"Command • CMD",
 "Script • PowerShell":"Script • PowerShell",
 "Aucun script, commande ou lien autonome dans cette rubrique.":"No standalone script, command or link in this section.",
 "Aucune commande trouvée.":"No command found.",
 "Créer un template":"Create template",
 "Modifier le template":"Edit template",
 "Ajouter un lien favori":"Add favorite link",
 "Modifier le lien":"Edit link",
 "Catégorie":"Category",
 "Nom":"Name",
 "Texte":"Text",
 "URL":"URL",
 "Sans nom":"Untitled",
 "Lien enregistré":"Link saved",
 "Template enregistré":"Template saved",
 "Template dupliqué":"Template duplicated",
 "Templates importés":"Templates imported",
 "Supprimer ce lien ?":"Delete this link?",
 "Supprimer ce template ?":"Delete this template?",
 "Nom obligatoire et URL http/https valide.":"A name and a valid http/https URL are required."
});
Object.assign(UI_EN,{
 "N° ticket (optionnel)":"Ticket # (optional)",
 "Appliquer le N° ticket aux modèles":"Apply ticket number to templates"
});
const TEMPLATE_CAT_EN={
 "Accès & MFA":"Access & MFA",
 "Applications":"Applications",
 "Communication":"Communication",
 "Incident majeur":"Major Incident",
 "Mails":"Emails",
 "Maintenance & Changement":"Maintenance & Change",
 "Matériel":"Equipment",
 "Messages rapides":"Quick Messages",
 "Microsoft 365":"Microsoft 365",
 "Onboarding / Offboarding":"Onboarding / Offboarding",
 "Rapports":"Reports",
 "Relances & Escalades":"Follow-ups & Escalations",
 "Rendez-vous":"Appointments",
 "Réseau & VPN":"Network & VPN",
 "Salles & MTR":"Meeting Rooms & MTR",
 "Sécurité":"Security",
 "Tickets":"Tickets"
};
Object.assign(PORTAL_CAT_EN,{
 "Veille & Actualité IT":"IT Monitoring & News",
 "Documentation & Diagnostic":"Documentation & Diagnostics",
 "Tests Web & Réseau":"Web & Network Tests",
 "IA & Numérique France":"AI & Digital France",
 "Veille IT & Cyber":"IT & Cyber Monitoring",
 "Documentation & Communauté":"Documentation & Community"
,
 "Actualité Microsoft":"Microsoft News",
 "Actualité IT France":"French IT News",
 "Sécurité Microsoft":"Microsoft Security"
});
const TECH_EN_EXACT={
 "Utilisateur":"User",
 "Administrateur":"Administrator",
 "Utilisateur/Admin selon ACL":"User/Admin depending on ACL",
 "Utilisateur/Admin selon processus":"User/Admin depending on process",
 "Utilisateur/Admin selon tâche":"User/Admin depending on task",
 "Lecture":"Read-only",
 "Lecture / diagnostic":"Read-only / diagnostic",
 "Faible":"Low",
 "Moyen":"Medium",
 "Élevé":"High",
 "Selon contrôle":"Depends on check",
 "Action de support":"Support action",
 "État":"Status",
 "Outils":"Tools",
 "Réseau":"Network",
 "Sécurité":"Security",
 "Applications":"Applications",
 "Navigateurs":"Browsers",
 "Périphériques":"Devices",
 "Matériel":"Equipment",
 "Système":"System",
 "Diagnostic":"Diagnostic",
 "Information":"Information",
 "Action":"Action",
 "Portails":"Portals"
};
function autoEn(text){
 let s=String(text==null?"":text);
 if(state.lang!=="en" || !s)return s;
 if(TECH_EN_EXACT[s])return TECH_EN_EXACT[s];
 const reps=[
  [/\bÉtat\b/gi,"Status"],[/\bprocessus\b/gi,"process"],[/\bMode sans échec\b/gi,"Safe mode"],
  [/\bForcer fermeture\b/gi,"Force close"],[/\bRedémarrer\b/gi,"Restart"],[/\bRedémarrage\b/gi,"Restart"],
  [/\bRéinitialiser\b/gi,"Reset"],[/\bRéinitialisation\b/gi,"Reset"],[/\bOuvrir\b/gi,"Open"],[/\bFermer\b/gi,"Close"],
  [/\bProfils\b/gi,"Profiles"],[/\bDossier\b/gi,"Folder"],[/\bMise à jour\b/gi,"Update"],[/\bMises à jour\b/gi,"Updates"],
  [/\bDerniers correctifs installés\b/gi,"Latest installed updates"],[/\bPériphériques\b/gi,"Devices"],[/\bPilotes\b/gi,"Drivers"],
  [/\bImprimantes\b/gi,"Printers"],[/\bApplications installées\b/gi,"Installed applications"],[/\bRéparer\b/gi,"Repair"],
  [/\bDésinstaller\b/gi,"Uninstall"],[/\bRéseau\b/gi,"Network"],[/\bAccès distant\b/gi,"Remote Access"],
  [/\bSécurité\b/gi,"Security"],[/\bCompte\b/gi,"Account"],[/\bMot de passe\b/gi,"Password"],
  [/\bMes connexions\b/gi,"My sign-ins"],[/\bConfigurer les méthodes\b/gi,"Configure methods"],
  [/\bTous les appareils\b/gi,"All devices"],[/\bAppareils Windows\b/gi,"Windows devices"],
  [/\bUtilisateur\b/gi,"User"],[/\bAdministrateur\b/gi,"Administrator"],[/\bLecture\b/gi,"Read-only"],
  [/\bFaible\b/gi,"Low"],[/\bMoyen\b/gi,"Medium"],[/\bÉlevé\b/gi,"High"],
  [/\bAfficher\b/gi,"Display"],[/\bAffiche\b/gi,"Displays"],[/\bVérifier\b/gi,"Check"],[/\bVérifie\b/gi,"Checks"],
  [/\bTester\b/gi,"Test"],[/\bLancer\b/gi,"Launch"],[/\bTerminer\b/gi,"Terminate"],[/\bNettoyer\b/gi,"Clean"],
  [/\bNettoyage\b/gi,"Cleanup"],[/\bRéparation\b/gi,"Repair"],[/\bGestionnaire de périphériques\b/gi,"Device Manager"],
  [/\bTâches planifiées\b/gi,"Scheduled tasks"],[/\bHistorique\b/gi,"History"],[/\bErreur\b/gi,"Error"],[/\bErreurs\b/gi,"Errors"]
 ];
 for(const [re,to] of reps)s=s.replace(re,to);
 return s.replace(/\s{2,}/g," ").trim();
}
function localField(obj,field){
 const raw=obj&&obj[field]!=null?String(obj[field]):"";
 if(state.lang!=="en")return raw;
 const en=obj&&obj[field+"_en"];
 return en!=null&&String(en).trim()!==""?String(en):autoEn(raw);
}
function templateCategoryLabel(c){return state.lang==="en"?(TEMPLATE_CAT_EN[c]||autoEn(c)):c}
function localizedTemplate(t){
 if(state.lang!=="en")return t;
 return {...t,name:localField(t,"name"),subject:localField(t,"subject"),content:localField(t,"content"),category:templateCategoryLabel(t.category)};
}

function ui(s){return state.lang==="en"?(UI_EN[s]||s):s}
function catLabel(c){return ui(c)}
function portalCategoryLabel(c){return state.lang==="en"?(PORTAL_CAT_EN[c]||c):c}
function applyUiLanguage(){
 document.documentElement.lang=state.lang==="en"?"en":"fr";
 const search=$("#search"); if(search)search.placeholder=state.lang==="en"?"Search everywhere...":"Rechercher partout...";
 const theme=$("#theme"); if(theme)theme.textContent="☀/☾ "+(state.lang==="en"?"Theme":"Thème");
 const lang=$("#lang"); if(lang)lang.textContent=state.lang==="en"?"English • FR":"Français • EN";
 document.querySelectorAll("button,.btn,label.btn,.section-title,.template-subject span").forEach(el=>{
   const raw=(el.textContent||"").trim();
   if(state.lang==="en" && UI_EN[raw]) el.textContent=UI_EN[raw];
 });
}
let state=readLocalJson("ssitState",{cat:"Accueil",tabs:["Accueil"],theme:"dark",lang:"fr"});
if(!state||typeof state!=="object")state={cat:"Accueil",tabs:["Accueil"],theme:"dark"};
if(!Array.isArray(state.tabs))state.tabs=["Accueil"];
if(!["light","dark"].includes(state.theme))state.theme="dark";
if(!["fr","en"].includes(state.lang))state.lang="fr";
if(!cats.includes(state.cat))state.cat="Accueil";

function preparedTemplate(t){
 const subject=formalizeTemplateText(t&&t.subject||"");
 const body=formalizeTemplateText(t&&t.content||"");
 const shareBody=decorateTemplatePlainText(body);
 return {subject,body,full:(subject?"Objet : "+subject+"\n\n":"")+shareBody};
}
async function copyTemplate(ref){
 const t=getTemplateByRef(ref); if(!t)return;
 const p=preparedTemplate(t); await copy(p.full);
}
async function shareTemplate(ref){
 const t=getTemplateByRef(ref); if(!t)return;
 const p=preparedTemplate(t); await shareText(t.name||"Communication IT",p.full);
}
const pocketCenterOptions=[{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Diagnostic processus","description":"État, PID, RAM, CPU et chemin Outlook","method":"Option du Centre Office / M365","command":"Get-Process OUTLOOK -ErrorAction SilentlyContinue | Select Name,Id,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}},StartTime,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Mode sans échec","description":"Démarrer Outlook sans extensions","method":"Option du Centre Office / M365","command":"Start-Process outlook.exe -ArgumentList \"/safe\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Forcer fermeture","description":"Terminer Outlook bloqué","method":"Option du Centre Office / M365","command":"Stop-Process -Name OUTLOOK -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Redémarrer","description":"Fermer puis relancer Outlook","method":"Option du Centre Office / M365","command":"Stop-Process -Name OUTLOOK -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; Start-Process outlook.exe","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Réinitialiser volet navigation","description":"Réinitialiser le volet de navigation Outlook","method":"Option du Centre Office / M365","command":"Start-Process outlook.exe -ArgumentList \"/resetnavpane\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Profils Mail","description":"Ouvrir les profils Outlook","method":"Option du Centre Office / M365","command":"Start-Process control.exe -ArgumentList \"mlcfg32.cpl\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • Outlook","webCategory":"Microsoft 365","name":"Outlook — Dossier OST","description":"Ouvrir les fichiers OST du profil","method":"Option du Centre Office / M365","command":"Start-Process explorer.exe -ArgumentList \"$env:LOCALAPPDATA\\Microsoft\\Outlook\"","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Word","webCategory":"Microsoft 365","name":"Word — Diagnostic processus","description":"État Word","method":"Option du Centre Office / M365","command":"Get-Process WINWORD -ErrorAction SilentlyContinue | Select Name,Id,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}},StartTime,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Word","webCategory":"Microsoft 365","name":"Word — Mode sans échec","description":"Démarrer Word sans compléments","method":"Option du Centre Office / M365","command":"Start-Process winword.exe -ArgumentList \"/safe\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • Word","webCategory":"Microsoft 365","name":"Word — Forcer fermeture","description":"Terminer Word bloqué","method":"Option du Centre Office / M365","command":"Stop-Process -Name WINWORD -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Word","webCategory":"Microsoft 365","name":"Word — Redémarrer","description":"Fermer puis relancer Word","method":"Option du Centre Office / M365","command":"Stop-Process -Name WINWORD -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; Start-Process winword.exe","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Word","webCategory":"Microsoft 365","name":"Word — Mode /a","description":"Démarrer Word sans Normal.dotm ni compléments","method":"Option du Centre Office / M365","command":"Start-Process winword.exe -ArgumentList \"/a\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • Excel","webCategory":"Microsoft 365","name":"Excel — Diagnostic processus","description":"État Excel","method":"Option du Centre Office / M365","command":"Get-Process EXCEL -ErrorAction SilentlyContinue | Select Name,Id,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}},StartTime,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Excel","webCategory":"Microsoft 365","name":"Excel — Mode sans échec","description":"Démarrer Excel sans compléments","method":"Option du Centre Office / M365","command":"Start-Process excel.exe -ArgumentList \"/safe\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • Excel","webCategory":"Microsoft 365","name":"Excel — Forcer fermeture","description":"Terminer Excel bloqué","method":"Option du Centre Office / M365","command":"Stop-Process -Name EXCEL -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Excel","webCategory":"Microsoft 365","name":"Excel — Redémarrer","description":"Fermer puis relancer Excel","method":"Option du Centre Office / M365","command":"Stop-Process -Name EXCEL -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; Start-Process excel.exe","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Excel","webCategory":"Microsoft 365","name":"Excel — Nouvelle instance","description":"Tester Excel dans une nouvelle instance","method":"Option du Centre Office / M365","command":"Start-Process excel.exe -ArgumentList \"/x\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • PowerPoint","webCategory":"Microsoft 365","name":"PowerPoint — Diagnostic processus","description":"État PowerPoint","method":"Option du Centre Office / M365","command":"Get-Process POWERPNT -ErrorAction SilentlyContinue | Select Name,Id,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}},StartTime,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • PowerPoint","webCategory":"Microsoft 365","name":"PowerPoint — Mode sans échec","description":"Démarrer PowerPoint sans compléments","method":"Option du Centre Office / M365","command":"Start-Process powerpnt.exe -ArgumentList \"/safe\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Office / M365 • PowerPoint","webCategory":"Microsoft 365","name":"PowerPoint — Forcer fermeture","description":"Terminer PowerPoint bloqué","method":"Option du Centre Office / M365","command":"Stop-Process -Name POWERPNT -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • PowerPoint","webCategory":"Microsoft 365","name":"PowerPoint — Redémarrer","description":"Fermer puis relancer PowerPoint","method":"Option du Centre Office / M365","command":"Stop-Process -Name POWERPNT -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; Start-Process powerpnt.exe","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Teams","webCategory":"Microsoft 365","name":"Teams — Diagnostic processus","description":"État Teams","method":"Option du Centre Office / M365","command":"Get-Process -ErrorAction SilentlyContinue | Where-Object {$_.Name -match \"^(ms-teams|Teams)$\"} | Select Name,Id,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}},StartTime,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Teams","webCategory":"Microsoft 365","name":"Teams — Forcer fermeture","description":"Terminer Teams","method":"Option du Centre Office / M365","command":"Get-Process -ErrorAction SilentlyContinue | Where-Object {$_.Name -match \"^(ms-teams|Teams)$\"} | Stop-Process -Force","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Teams","webCategory":"Microsoft 365","name":"Teams — Redémarrer","description":"Fermer puis relancer Teams","method":"Option du Centre Office / M365","command":"Get-Process -ErrorAction SilentlyContinue | Where-Object {$_.Name -match \"^(ms-teams|Teams)$\"} | Stop-Process -Force; Start-Sleep -Seconds 2; Start-Process \"msteams:\"","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Teams","webCategory":"Microsoft 365","name":"Teams — Package New Teams","description":"Identifier version/package New Teams","method":"Option du Centre Office / M365","command":"Get-AppxPackage -Name MSTeams -ErrorAction SilentlyContinue | Select Name,Version,InstallLocation,Status","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • OneDrive","webCategory":"Microsoft 365","name":"OneDrive — Diagnostic processus","description":"État OneDrive","method":"Option du Centre Office / M365","command":"Get-Process OneDrive -ErrorAction SilentlyContinue | Select Name,Id,Path,ProductVersion,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}}","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • OneDrive","webCategory":"Microsoft 365","name":"OneDrive — Reset","description":"Réinitialiser OneDrive","method":"Option du Centre Office / M365","command":"$od=@(\"$env:LOCALAPPDATA\\Microsoft\\OneDrive\\OneDrive.exe\",\"$env:ProgramFiles\\Microsoft OneDrive\\OneDrive.exe\") | Where-Object {Test-Path $_} | Select-Object -First 1; if($od){& $od /reset}else{\"OneDrive.exe introuvable\"}","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • OneDrive","webCategory":"Microsoft 365","name":"OneDrive — Forcer fermeture","description":"Terminer OneDrive","method":"Option du Centre Office / M365","command":"Stop-Process -Name OneDrive -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • OneDrive","webCategory":"Microsoft 365","name":"OneDrive — Redémarrer","description":"Fermer puis relancer OneDrive","method":"Option du Centre Office / M365","command":"Stop-Process -Name OneDrive -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; $od=@(\"$env:LOCALAPPDATA\\Microsoft\\OneDrive\\OneDrive.exe\",\"$env:ProgramFiles\\Microsoft OneDrive\\OneDrive.exe\") | Where-Object {Test-Path $_} | Select-Object -First 1; if($od){Start-Process $od}","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Office","webCategory":"Microsoft 365","name":"Office — Version Click-to-Run","description":"Version, architecture et canal Office","method":"Option du Centre Office / M365","command":"Get-ItemProperty \"HKLM:\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration\" -ErrorAction SilentlyContinue | Select ProductReleaseIds,Platform,VersionToReport,ClientVersionToReport,UpdateChannel","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Explorer","webCategory":"Microsoft 365","name":"Explorer — Diagnostic processus","description":"État Explorer Windows","method":"Option du Centre Office / M365","command":"Get-Process explorer -ErrorAction SilentlyContinue | Select Name,Id,CPU,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}},StartTime,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Office / M365 • Explorer","webCategory":"Microsoft 365","name":"Explorer — Forcer fermeture","description":"Terminer Explorer","method":"Option du Centre Office / M365","command":"Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Office / M365 • Explorer","webCategory":"Microsoft 365","name":"Explorer — Redémarrer","description":"Redémarrer le shell Windows","method":"Option du Centre Office / M365","command":"Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue; Start-Sleep -Seconds 2; Start-Process explorer.exe","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"VPN • VPN","webCategory":"Réseau & Accès distant","name":"VPN — Détection clients","description":"Identifier client et version","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"$p=@(\"HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*\",\"HKLM:\\Software\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*\",\"HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\*\"); Get-ItemProperty $p -ErrorAction SilentlyContinue | Where-Object {$_.DisplayName -match \"Citrix|FortiClient|Fortinet|Ivanti|Pulse Secure|Secure Access\"} | Select DisplayName,DisplayVersion,Publisher","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Citrix","webCategory":"Réseau & Accès distant","name":"Citrix — Processus","description":"Voir les processus Citrix","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-Process -ErrorAction SilentlyContinue | Where-Object {$_.Name -match \"citrix|receiver|wfica|selfservice\"} | Select Name,Id,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}}","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Citrix","webCategory":"Réseau & Accès distant","name":"Citrix — Services","description":"Vérifier services Citrix","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-Service -ErrorAction SilentlyContinue | Where-Object {$_.DisplayName -match \"Citrix\" -or $_.Name -match \"Citrix\"} | Select Status,Name,DisplayName,StartType","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Citrix","webCategory":"Réseau & Accès distant","name":"Citrix — Journaux Windows","description":"Lister journaux Citrix disponibles","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-WinEvent -ListLog *Citrix* -ErrorAction SilentlyContinue | Select LogName,RecordCount,LastWriteTime","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • FortiClient","webCategory":"Réseau & Accès distant","name":"FortiClient — Processus","description":"Vérifier processus FortiClient","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-Process -ErrorAction SilentlyContinue | Where-Object {$_.Name -match \"forti\"} | Select Name,Id,Path,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}}","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • FortiClient","webCategory":"Réseau & Accès distant","name":"FortiClient — Services","description":"Vérifier services Fortinet","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-Service -ErrorAction SilentlyContinue | Where-Object {$_.DisplayName -match \"Forti|Fortinet\" -or $_.Name -match \"Forti\"} | Select Status,Name,DisplayName,StartType","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • FortiClient","webCategory":"Réseau & Accès distant","name":"FortiClient — Carte / routes","description":"Vérifier interface et routes VPN","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-NetAdapter | Where-Object {$_.InterfaceDescription -match \"Forti\" -or $_.Name -match \"Forti\"}; Get-NetRoute -AddressFamily IPv4 | Sort-Object RouteMetric | Select-Object -First 30 DestinationPrefix,NextHop,InterfaceAlias,RouteMetric","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • FortiClient","webCategory":"Réseau & Accès distant","name":"FortiClient — Rechercher logs","description":"Trouver les logs Fortinet récents","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-ChildItem \"$env:ProgramData\\Fortinet\" -Recurse -File -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 30 FullName,LastWriteTime,Length","shell":"PowerShell","rights":"Utilisateur/Admin selon ACL","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Ivanti","webCategory":"Réseau & Accès distant","name":"Ivanti — Processus","description":"Vérifier processus Ivanti / Pulse","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-Process -ErrorAction SilentlyContinue | Where-Object {$_.Name -match \"ivanti|pulse\"} | Select Name,Id,Path,@{N=\"RAM_MB\";E={[math]::Round($_.WorkingSet64/1MB,1)}}","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Ivanti","webCategory":"Réseau & Accès distant","name":"Ivanti — Services","description":"Vérifier services Ivanti","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-Service -ErrorAction SilentlyContinue | Where-Object {$_.DisplayName -match \"Ivanti|Pulse|Secure Access\" -or $_.Name -match \"Ivanti|Pulse\"} | Select Status,Name,DisplayName,StartType","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Ivanti","webCategory":"Réseau & Accès distant","name":"Ivanti — Carte / routes","description":"Vérifier interface et routes Ivanti","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-NetAdapter | Where-Object {$_.InterfaceDescription -match \"Ivanti|Pulse\" -or $_.Name -match \"Ivanti|Pulse\"}; Get-NetRoute -AddressFamily IPv4 | Sort-Object RouteMetric | Select-Object -First 30 DestinationPrefix,NextHop,InterfaceAlias,RouteMetric","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"VPN • Ivanti","webCategory":"Réseau & Accès distant","name":"Ivanti — Rechercher logs","description":"Trouver les logs Ivanti/Pulse récents","method":"Option du Centre Citrix / FortiClient / Ivanti","command":"Get-ChildItem \"$env:ProgramData\\Ivanti\",\"$env:ProgramData\\Pulse Secure\" -Recurse -File -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 30 FullName,LastWriteTime,Length","shell":"PowerShell","rights":"Utilisateur/Admin selon ACL","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Tous les appareils","description":"Vue globale des appareils gérés dans Intune.","method":"Option du Centre Intune Azure MS","command":"https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/allDevices","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Windows Intune","description":"Appareils Windows gérés dans Intune.","method":"Option du Centre Intune Azure MS","command":"https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/~/windowsDevices","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Autopilot","description":"Enregistrements Windows Autopilot.","method":"Option du Centre Intune Azure MS","command":"https://intune.microsoft.com/#view/Microsoft_Intune_Enrollment/AutopilotDevices.ReactView/filterOnManualRemediationRequired~/false","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Applications Intune","description":"Applications, déploiements et affectations.","method":"Option du Centre Intune Azure MS","command":"https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/AppsMenu/~/allApps","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Groupes Entra","description":"Groupes utilisateurs et appareils.","method":"Option du Centre Intune Azure MS","command":"https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade/~/AllGroups","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Appareils Entra","description":"Appareils enregistrés ou joints Entra.","method":"Option du Centre Intune Azure MS","command":"https://entra.microsoft.com/#view/Microsoft_AAD_Devices/DevicesMenuBlade/~/Devices","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Utilisateurs Entra","description":"Gestion des utilisateurs Microsoft Entra.","method":"Option du Centre Intune Azure MS","command":"https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Company Portal Web","description":"Applications et appareils côté utilisateur.","method":"Option du Centre Intune Azure MS","command":"https://portal.manage.microsoft.com/","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Azure Portal","description":"Ressources et administration Azure.","method":"Option du Centre Intune Azure MS","command":"https://portal.azure.com/","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"PIM Entra — Mes rôles","description":"Consulter/activer les rôles éligibles dans Entra.","method":"Option du Centre Intune Azure MS","command":"https://entra.microsoft.com/#view/Microsoft_Azure_PIMCommon/ActivationMenuBlade/~/aadmigratedroles","shell":"Lien web","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"Compte professionnel / école","description":"Ouvrir Accès professionnel ou scolaire sur Windows.","method":"Option du Centre Intune Azure MS","command":"ms-settings:workplace","shell":"URI Windows","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Intune / Entra • Options","webCategory":"Intune / Entra / SCCM","name":"État Entra / SSO","description":"Lire jointure, DeviceId, TenantId et PRT.","method":"Option du Centre Intune Azure MS","command":"dsregcmd /status","shell":"CMD","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"SCCM / Intune • Sync","webCategory":"Intune / Entra / SCCM","name":"SCCM — Synchroniser les cycles principaux","description":"Déclenche les cycles principaux Configuration Manager.","method":"SMS_Client TriggerSchedule","command":"$ids=\"{00000000-0000-0000-0000-000000000021}\",\"{00000000-0000-0000-0000-000000000022}\",\"{00000000-0000-0000-0000-000000000026}\",\"{00000000-0000-0000-0000-000000000027}\",\"{00000000-0000-0000-0000-000000000001}\",\"{00000000-0000-0000-0000-000000000002}\",\"{00000000-0000-0000-0000-000000000003}\",\"{00000000-0000-0000-0000-000000000108}\",\"{00000000-0000-0000-0000-000000000113}\",\"{00000000-0000-0000-0000-000000000121}\"; foreach($id in $ids){Invoke-CimMethod -Namespace root\\ccm -ClassName SMS_Client -MethodName TriggerSchedule -Arguments @{sScheduleID=$id} -ErrorAction Continue}","shell":"PowerShell","rights":"Selon politique SCCM","risk":"Faible","pocketExpanded":true},{"category":"SCCM / Intune • Sync","webCategory":"Intune / Entra / SCCM","name":"Intune / MDM — Synchroniser","description":"Déclenche les tâches EnterpriseMgmt présentes sur le poste.","method":"Tâches planifiées EnterpriseMgmt","command":"Get-ScheduledTask -ErrorAction SilentlyContinue | Where-Object {$_.TaskPath -like \"\\Microsoft\\Windows\\EnterpriseMgmt\\*\" -and $_.TaskName -match \"PushLaunch|Schedule|OMADM\"} | Start-ScheduledTask","shell":"PowerShell","rights":"Utilisateur/Admin selon tâche","risk":"Faible","pocketExpanded":true},{"category":"SCCM / Intune • Outils","webCategory":"Intune / Entra / SCCM","name":"Ouvrir Configuration Manager","description":"Ouvre le panneau Configuration Manager du client SCCM.","method":"Applet SCCM","command":"control.exe smscfgrc","shell":"CMD","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"SCCM / Intune • Outils","webCategory":"Intune / Entra / SCCM","name":"Ouvrir Company Portal local","description":"Ouvre Company Portal installé sur Windows.","method":"AppsFolder","command":"explorer.exe shell:AppsFolder\\Microsoft.CompanyPortal_8wekyb3d8bbwe!App","shell":"CMD","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Périphériques • Options","webCategory":"Périphériques & Pilotes","name":"Inventaire PnP complet","description":"Liste périphériques, classe, état, fabricant et InstanceId.","method":"Get-PnpDevice","command":"Get-PnpDevice -PresentOnly -ErrorAction SilentlyContinue | Select Status,Class,FriendlyName,Manufacturer,InstanceId","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Périphériques • Options","webCategory":"Périphériques & Pilotes","name":"Périphériques en anomalie","description":"Affiche les périphériques dont l’état n’est pas OK.","method":"Get-PnpDevice","command":"Get-PnpDevice -PresentOnly -ErrorAction SilentlyContinue | Where-Object {$_.Status -ne \"OK\"} | Select Status,Class,FriendlyName,Manufacturer,InstanceId","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Périphériques • Options","webCategory":"Périphériques & Pilotes","name":"Activer par InstanceId","description":"Remplace [INSTANCE_ID] par l’identifiant du périphérique.","method":"Enable-PnpDevice","command":"Enable-PnpDevice -InstanceId \"[INSTANCE_ID]\" -Confirm:$false","shell":"PowerShell","rights":"Administrateur","risk":"Moyen","pocketExpanded":true},{"category":"Périphériques • Options","webCategory":"Périphériques & Pilotes","name":"Désactiver par InstanceId","description":"Remplace [INSTANCE_ID] par l’identifiant du périphérique.","method":"Disable-PnpDevice","command":"Disable-PnpDevice -InstanceId \"[INSTANCE_ID]\" -Confirm:$false","shell":"PowerShell","rights":"Administrateur","risk":"Moyen","pocketExpanded":true},{"category":"Périphériques • Options","webCategory":"Périphériques & Pilotes","name":"Rescan matériel","description":"Force la détection des changements matériels.","method":"PnPUtil","command":"pnputil.exe /scan-devices","shell":"CMD","rights":"Administrateur","risk":"Faible","pocketExpanded":true},{"category":"Périphériques • Options","webCategory":"Périphériques & Pilotes","name":"Gestionnaire de périphériques Windows","description":"Ouvre devmgmt.msc.","method":"Console Windows","command":"devmgmt.msc","shell":"CMD","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Navigateurs • Options","webCategory":"Navigateurs","name":"Edge — fermer navigateur","description":"Ferme les processus Edge.","method":"Stop-Process","command":"Stop-Process -Name msedge -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Navigateurs • Options","webCategory":"Navigateurs","name":"Chrome — fermer navigateur","description":"Ferme les processus Chrome.","method":"Stop-Process","command":"Stop-Process -Name chrome -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Navigateurs • Options","webCategory":"Navigateurs","name":"Firefox — fermer navigateur","description":"Ferme les processus Firefox.","method":"Stop-Process","command":"Stop-Process -Name firefox -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur","risk":"Moyen","pocketExpanded":true},{"category":"Navigateurs • Options","webCategory":"Navigateurs","name":"Tester un site","description":"Teste DNS, HTTPS 443, HTTP et proxy. Modifie l’URL avant utilisation.","method":"Diagnostic site autonome","command":"$url=\"https://www.microsoft.com\"; $u=[uri]$url; Resolve-DnsName $u.DnsSafeHost -ErrorAction Continue; Test-NetConnection $u.DnsSafeHost -Port 443; try{Invoke-WebRequest -Uri $url -Method Head -UseBasicParsing -TimeoutSec 10 | Select StatusCode,StatusDescription}catch{$_}; netsh winhttp show proxy","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Réseau • Tests","webCategory":"Réseau & Accès distant","name":"Test DNS personnalisé","description":"Remplace [HOTE].","method":"Resolve-DnsName","command":"Resolve-DnsName \"[HOTE]\" -ErrorAction Continue","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Réseau • Tests","webCategory":"Réseau & Accès distant","name":"Ping personnalisé","description":"Remplace [HOTE].","method":"Test-Connection","command":"Test-Connection \"[HOTE]\" -Count 4","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Réseau • Tests","webCategory":"Réseau & Accès distant","name":"Test port TCP personnalisé","description":"Remplace [HOTE] et [PORT].","method":"Test-NetConnection","command":"Test-NetConnection \"[HOTE]\" -Port [PORT]","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Réseau • Tests","webCategory":"Réseau & Accès distant","name":"Traceroute personnalisé","description":"Remplace [HOTE].","method":"tracert","command":"tracert [HOTE]","shell":"CMD","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Applications • Options","webCategory":"Applications","name":"Applications graphiques ouvertes","description":"Liste les applications visibles avec PID.","method":"Get-Process","command":"Get-Process | Where-Object {$_.MainWindowTitle} | Select ProcessName,Id,MainWindowTitle,Path","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Applications • Options","webCategory":"Applications","name":"Fermer proprement une application","description":"Remplace [PROCESS_NAME].","method":"CloseMainWindow","command":"Get-Process -Name \"[PROCESS_NAME]\" -ErrorAction SilentlyContinue | ForEach-Object {$_.CloseMainWindow() | Out-Null}","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Applications • Options","webCategory":"Applications","name":"Forcer fermeture d’une application","description":"Remplace [PROCESS_NAME]. Les données non enregistrées peuvent être perdues.","method":"Stop-Process -Force","command":"Stop-Process -Name \"[PROCESS_NAME]\" -Force -ErrorAction SilentlyContinue","shell":"PowerShell","rights":"Utilisateur/Admin selon processus","risk":"Moyen","pocketExpanded":true},{"category":"Applications • Options","webCategory":"Applications","name":"Lancer une application par chemin","description":"Remplace [CHEMIN_EXE].","method":"Start-Process","command":"Start-Process \"[CHEMIN_EXE]\"","shell":"PowerShell","rights":"Utilisateur","risk":"Faible","pocketExpanded":true},{"category":"Windows • État","webCategory":"Windows Update","name":"Ouvrir Windows Update","description":"Ouvre la page Windows Update.","method":"URI Windows","command":"ms-settings:windowsupdate","shell":"URI Windows","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Windows • État","webCategory":"Windows Update","name":"Derniers correctifs installés","description":"Affiche les 30 derniers correctifs.","method":"Get-HotFix","command":"Get-HotFix -ErrorAction SilentlyContinue | Sort-Object InstalledOn -Descending | Select-Object -First 30 HotFixID,Description,InstalledOn,InstalledBy","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Windows • État","webCategory":"Windows Update","name":"Redémarrage requis ?","description":"Contrôle Windows Update et CBS RebootPending.","method":"Registre Windows","command":"[pscustomobject]@{WindowsUpdate=(Test-Path \"HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WindowsUpdate\\Auto Update\\RebootRequired\");CBS=(Test-Path \"HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Component Based Servicing\\RebootPending\")}","shell":"PowerShell","rights":"Utilisateur","risk":"Lecture","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — PC lent","description":"CPU, mémoire, disque, processus et événements.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Plus d'Internet","description":"IP, passerelle, DNS, proxy et HTTPS.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Navigateur lent","description":"Processus, RAM, cache et réseau.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Un site ne fonctionne pas","description":"DNS, HTTPS et proxy.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Application bloquée / ne se ferme pas","description":"Processus sans réponse et erreurs Application.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Outlook lent / bloqué","description":"Processus, Office, OST/PST et événements.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — OneDrive ne synchronise pas","description":"Processus, compte et réseau.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Casque / aucun son","description":"Services audio, périphériques, sortie et Bluetooth.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Microphone / qualité douteuse","description":"Microphones et autorisations.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Casque Bluetooth","description":"Bluetooth et périphériques audio.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Webcam / caméra","description":"Caméra, pilote et autorisations.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Périphérique USB non reconnu","description":"PnP et périphériques USB en erreur.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Imprimante indisponible","description":"Imprimantes, Spooler et files.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — VPN / accès distant","description":"Interfaces, routes et clients VPN.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true},{"category":"Diagnostic • Scénarios","webCategory":"Système","name":"Scénario — Windows Update bloqué","description":"Services, reboot pending et espace disque.","method":"Scénario du Centre Diagnostic. Utiliser les commandes IT Pocket correspondantes sur le PC.","rights":"Selon contrôle","risk":"Lecture / diagnostic","pocketExpanded":true}];
function isPocketCenterWrapper(a){
 const n=String(a.name||""), s=String(a.script||"");
 if(a.pocketExpanded)return false;
 if(/^Centre(?:\s|\b|\s+d)/i.test(n) || /^Azure Tools Hub$/i.test(n))return true;
 if(/Centre/i.test(n) && /^Show-[\w-]+(?:Center|Centre|Hub)\s*$/i.test(s.trim()))return true;
 if(/Centre/i.test(n) && /^Ouvre le Centre?/i.test(s.trim()))return true;
 return false;
}
const pocketSecurityOptions=[
 {category:"Sécurité • Compte",webCategory:"Sécurité Windows",name:"Compte Microsoft — My Account",description:"Gérer le compte professionnel, les informations personnelles et les paramètres de sécurité.",method:"Ouvrir My Account",command:"https://myaccount.microsoft.com/",shell:"Navigateur",rights:"Compte professionnel",risk:"Lecture",pocketExpanded:true},
 {category:"Sécurité • Mot de passe",webCategory:"Sécurité Windows",name:"Mot de passe — Réinitialisation",description:"Accéder au portail Microsoft de réinitialisation du mot de passe professionnel.",method:"Portail Microsoft de réinitialisation",command:"https://passwordreset.microsoftonline.com/",shell:"Navigateur",rights:"Compte professionnel",risk:"Modification du mot de passe",pocketExpanded:true},
 {category:"Sécurité • MFA",webCategory:"Sécurité Windows",name:"MFA — Configurer les méthodes",description:"Ajouter ou modifier les méthodes MFA et les informations de sécurité du compte.",method:"Portail Microsoft MFA",command:"https://aka.ms/mfasetup",shell:"Navigateur",rights:"Compte professionnel",risk:"Modification des méthodes MFA",pocketExpanded:true},
 {category:"Sécurité • Connexions",webCategory:"Sécurité Windows",name:"Mes connexions — Activité du compte",description:"Consulter les connexions récentes et vérifier une activité inhabituelle.",method:"Microsoft My Sign-Ins",command:"https://mysignins.microsoft.com/",shell:"Navigateur",rights:"Compte professionnel",risk:"Lecture",pocketExpanded:true},
 {category:"Accès • Microsoft",webCategory:"Intune / Entra / SCCM",name:"Mes applications Microsoft",description:"Accéder aux applications d’entreprise attribuées au compte.",method:"Microsoft My Apps",command:"https://myapps.microsoft.com/",shell:"Navigateur",rights:"Compte professionnel",risk:"Lecture",pocketExpanded:true},
 {category:"Intune • Utilisateur",webCategory:"Intune / Entra / SCCM",name:"Portail d’entreprise Web",description:"Accéder aux appareils et applications publiés via Microsoft Intune.",method:"Company Portal Web",command:"https://portal.manage.microsoft.com/",shell:"Navigateur",rights:"Compte professionnel",risk:"Lecture",pocketExpanded:true},
 {category:"Intune • Administration",webCategory:"Intune / Entra / SCCM",name:"Centre d’administration Intune",description:"Accéder à l’administration Microsoft Intune selon les droits du compte.",method:"Microsoft Intune Admin Center",command:"https://intune.microsoft.com/",shell:"Navigateur",rights:"Droits Intune requis",risk:"Administration",pocketExpanded:true}
];
const POCKET_SECURITY_EN={
 "Compte Microsoft — My Account":{name_en:"Microsoft account — My Account",description_en:"Manage the work account, personal information and security settings.",method_en:"Open My Account",category_en:"Security • Account",rights_en:"Work account",risk_en:"Read-only"},
 "Mot de passe — Réinitialisation":{name_en:"Password — Reset",description_en:"Open the Microsoft portal to reset the work account password.",method_en:"Microsoft password reset portal",category_en:"Security • Password",rights_en:"Work account",risk_en:"Password change"},
 "MFA — Configurer les méthodes":{name_en:"MFA — Configure methods",description_en:"Add or change MFA methods and account security information.",method_en:"Microsoft MFA portal",category_en:"Security • MFA",rights_en:"Work account",risk_en:"Changes MFA methods"},
 "Mes connexions — Activité du compte":{name_en:"My sign-ins — Account activity",description_en:"Review recent sign-ins and check for unusual activity.",method_en:"Microsoft My Sign-Ins",category_en:"Security • Sign-ins",rights_en:"Work account",risk_en:"Read-only"},
 "Mes applications Microsoft":{name_en:"My Microsoft apps",description_en:"Open enterprise applications assigned to the account.",method_en:"Microsoft My Apps",category_en:"Access • Microsoft",rights_en:"Work account",risk_en:"Read-only"},
 "Portail d’entreprise Web":{name_en:"Company Portal Web",description_en:"Access devices and applications published through Microsoft Intune.",method_en:"Company Portal Web",category_en:"Intune • User",rights_en:"Work account",risk_en:"Read-only"},
 "Centre d’administration Intune":{name_en:"Intune admin center",description_en:"Open Microsoft Intune administration according to the account permissions.",method_en:"Microsoft Intune admin center",category_en:"Intune • Administration",rights_en:"Intune permissions required",risk_en:"Administration"}
};
pocketSecurityOptions.forEach(x=>{const e=POCKET_SECURITY_EN[x.name];if(e)Object.assign(x,e);});

function commandWebCategory(c){
 const k=String(c.webCategory||"").trim();
 if(k)return k;
 const cat=String(c.category||"").toLowerCase();
 if(/r[ée]seau/.test(cat))return "Réseau & Accès distant";
 if(/microsoft 365|office|onedrive|outlook|teams/.test(cat))return "Microsoft 365";
 if(/intune|entra|sccm|mdm/.test(cat))return "Intune / Entra / SCCM";
 if(/s[ée]curit|defender|bitlocker|tpm/.test(cat))return "Sécurité Windows";
 if(/windows update/.test(cat))return "Windows Update";
 if(/p[ée]riph|impression|imprimante|mat[ée]riel|pilote/.test(cat))return "Périphériques & Pilotes";
 if(/application|winget/.test(cat))return "Applications";
 if(/navigateur|edge|chrome|firefox/.test(cat))return "Navigateurs";
 if(/assistance|outil/.test(cat))return "Outils Support";
 return "Système";
}
function pocketActions(){
 const commandItems=(D.commands||[]).map(c=>({
   ...c,
   category:c.category||"Outils",
   webCategory:commandWebCategory(c),
   script:"",
   method:"",
   language:c.shell||"",
   _fromCommand:true
 }));
 const directLinks=(pocketSecurityOptions||[]).filter(x=>String(x.command||"").trim());
 const merged=[...commandItems,...directLinks];
 const seen=new Set();
 return merged.filter(x=>{
   const payload=String(x.command||x.script||"").trim();
   if(!x.name||!payload)return false;
   if(!executionProfile(x).standalone)return false;
   const key=String(x.name).trim().toLowerCase()+"|"+payload;
   if(seen.has(key))return false;
   seen.add(key);
   return true;
 });
}

let custom=readLocalArray("ssitTemplates");
function save(){localStorage.setItem("ssitState",JSON.stringify(state));localStorage.setItem("ssitTemplates",JSON.stringify(custom))}
function esc(s=""){return String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]))}
function inlineArg(value){
 return JSON.stringify(value)
   .replace(/&/g,"&amp;")
   .replace(/'/g,"&#39;")
   .replace(/</g,"&lt;")
   .replace(/>/g,"&gt;");
}
function toast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),1300)}
async function copy(t){try{await navigator.clipboard.writeText(t);toast("Copié")}catch{let a=document.createElement("textarea");a.value=t;document.body.append(a);a.select();document.execCommand("copy");a.remove();toast("Copié")}}
function safeShareName(title){
 return String(title||"IT Pocket").replace(/[\\/:*?"<>|]+/g," ").replace(/\s+/g," ").trim().slice(0,80)||"IT Pocket";
}
function makeTextShareFile(title,text){
 try{return new File([String(text||"")],safeShareName(title)+".txt",{type:"text/plain;charset=utf-8"})}catch{return null}
}
async function shareText(title,text){
 const subject=String(title||"IT Pocket");
 const full=String(text||"");
 let nativeError=null;

 // Fonctionne par capacité navigateur, pas par OS :
 // Windows/PC, macOS, Android, iPhone/iPad si Web Share est disponible.
 if(typeof navigator!=="undefined" && typeof navigator.share==="function"){
   try{
     if(full.length<=12000){
       await navigator.share({title:subject,text:full});
       return;
     }

     const f=makeTextShareFile(subject,full);
     if(f && typeof navigator.canShare==="function"){
       const payload={title:subject,text:"Contenu complet IT Pocket en pièce jointe.",files:[f]};
       if(navigator.canShare(payload)){
         await navigator.share(payload);
         return;
       }
     }

     await navigator.share({title:subject,text:full});
     return;
   }catch(e){
     if(e && e.name==="AbortError")return;
     nativeError=e;
   }
 }

 // Fallback universel desktop/mobile : copie complète.
 try{
   await copy(full);
   toast("Partage natif indisponible : contenu copié");
   if(nativeError) console.warn("IT Pocket share fallback",nativeError);
 }catch(e){
   console.error("IT Pocket share failed",e);
   alert("Partage indisponible sur ce navigateur. Le contenu n’a pas pu être copié.");
 }
}
async function openOutlookText(title,text){
 const subject=String(title||"IT Pocket");
 const body=String(text||"");
 const encSubject=encodeURIComponent(subject);
 const encBody=encodeURIComponent(body);
 const isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent||"");

 // Les très gros contenus passent par le partage natif sous forme de fichier texte :
 // cela évite la troncature des URL mailto/deep-link.
 if(encBody.length>14000 && navigator.share){
   const f=makeTextShareFile(subject,body);
   if(f && navigator.canShare){
     const payload={title:subject,text:"Fiche IT Pocket complète en pièce jointe. Choisir Outlook.",files:[f]};
     try{
       if(navigator.canShare(payload)){await navigator.share(payload);return}
     }catch(e){if(e&&e.name==="AbortError")return}
   }
 }

 const mailto="mailto:?subject="+encSubject+"&body="+encBody;
 if(isMobile){
   const outlook="ms-outlook://compose?subject="+encSubject+"&body="+encBody;
   const before=Date.now();
   window.location.href=outlook;
   setTimeout(()=>{
     if(!document.hidden && Date.now()-before<2500) window.location.href=mailto;
   },900);
 }else{
   window.location.href=mailto;
 }
}
function openCat(c){state.cat=c;save();render()}
function closeTab(c,e){e.stopPropagation();state.tabs=state.tabs.filter(x=>x!==c);if(state.cat===c)state.cat=state.tabs.at(-1)||"Accueil";save();render()}
function nav(){ $("#nav").innerHTML=cats.map(c=>`<button class="navbtn ${state.cat===c?"active":""}" onclick='openCat(${JSON.stringify(c)})'>${icon(c)} ${esc(catLabel(c))}</button>`).join("")}
function icon(c){return {"Accueil":"⌂","Toutes les actions":"☷","Système":"🖥","Sécurité Windows":"🛡","Windows Update":"↻","Périphériques & Pilotes":"⌨","Réseau & Accès distant":"🌐","Microsoft 365":"▦","Applications":"📦","Navigateurs":"🌍","Intune / Entra / SCCM":"☁","Communications":"✉","Outils Support":"🧰","Portails":"↗","Journal & Statistiques":"📊"}[c]||"•"}
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
 const sections=[
  {cat:"Communications",icon:"✉",desc:"Modèles et messages corporate.",count:allTemplates().length},
  {cat:"Portails",icon:"↗",desc:"Portails, sites officiels, outils et favoris.",count:allPortals().length},
  {cat:"Système",icon:"🖥",desc:"Windows, diagnostic poste, performances et actions système.",count:pocketActions().filter(x=>x.webCategory==="Système").length},
  {cat:"Réseau & Accès distant",icon:"🌐",desc:"IP, DNS, DHCP, VPN, RDP et connectivité.",count:pocketActions().filter(x=>x.webCategory==="Réseau & Accès distant").length},
  {cat:"Microsoft 365",icon:"▦",desc:"Outlook, Word, Excel, PowerPoint, Teams, OneDrive et Office.",count:pocketActions().filter(x=>x.webCategory==="Microsoft 365").length},
  {cat:"Navigateurs",icon:"🌍",desc:"Edge, Chrome, Firefox : diagnostic, profils, cache et actions.",count:pocketActions().filter(x=>x.webCategory==="Navigateurs").length},
  {cat:"Applications",icon:"📦",desc:"Applications installées, Winget, réparation et maintenance.",count:pocketActions().filter(x=>x.webCategory==="Applications").length},
  {cat:"Périphériques & Pilotes",icon:"⌨",desc:"Imprimantes, périphériques, pilotes, BIOS et matériel.",count:pocketActions().filter(x=>x.webCategory==="Périphériques & Pilotes").length},
  {cat:"Sécurité Windows",icon:"🛡",desc:"Defender, BitLocker, TPM et sécurité locale.",count:pocketActions().filter(x=>x.webCategory==="Sécurité Windows").length},
  {cat:"Intune / Entra / SCCM",icon:"☁",desc:"Enrôlement, MDM, Entra, SCCM et accès Microsoft.",count:pocketActions().filter(x=>x.webCategory==="Intune / Entra / SCCM").length},
  {cat:"Windows Update",icon:"↻",desc:"Mises à jour, KB et maintenance Windows.",count:pocketActions().filter(x=>x.webCategory==="Windows Update").length},
  {cat:"Outils Support",icon:"🧰",desc:"Assistance distante et outils utiles au support.",count:pocketActions().filter(x=>x.webCategory==="Outils Support").length},
 ];
 return '<div class="home-summary all-menu-home">'+sections.map(s=>
  '<article class="card home-kpi"><h3>'+s.icon+' '+esc(catLabel(s.cat))+'</h3><div class="big-number">'+s.count+'</div><p class="desc">'+esc(state.lang==="en"?({"Communications":"Corporate messages and communication templates.","Portails":"Official portals, trusted tools and useful resources.","Système":"Windows, workstation diagnostics, performance and system actions.","Réseau & Accès distant":"IP, DNS, DHCP, VPN, RDP and connectivity.","Microsoft 365":"Outlook, Word, Excel, PowerPoint, Teams, OneDrive and Office.","Navigateurs":"Edge, Chrome and Firefox diagnostics, profiles, cache and actions.","Applications":"Installed applications, Winget, repair and maintenance.","Périphériques & Pilotes":"Printers, devices, drivers, BIOS and hardware.","Sécurité Windows":"Defender, BitLocker, TPM and local security.","Intune / Entra / SCCM":"Enrollment, MDM, Entra, SCCM and Microsoft access.","Windows Update":"Updates, KBs and Windows maintenance.","Outils Support":"Remote assistance and useful support tools."}[s.cat]||s.desc):s.desc)+'</p><button class="btn primary" onclick=\'openCat('+JSON.stringify(s.cat)+')\'>'+ui("Ouvrir")+'</button></article>'
 ).join("")+'</div>';
}
let report=readLocalArray("ssitReport");
function addReport(x){report.push(new Date().toLocaleString()+" — "+x);localStorage.setItem("ssitReport",JSON.stringify(report));toast("Ajouté au rapport")}
function renderReport(){return `<div class="toolbar"><button class="btn primary" onclick="copy(report.join('\\n'))">Copier rapport</button><button class="btn red" onclick="report=[];localStorage.setItem('ssitReport','[]');render()">Vider</button></div><pre class="code" style="max-height:none">${esc(report.join("\n\n")||"Rapport vide.")}</pre>`}

function communications(){
 let ts=filterItems(allTemplates(),["name","category","subject","content"]);
 let cats=[...new Set(allTemplates().map(x=>x.category))].sort();
 return `<div class="toolbar">
   <button class="btn primary" onclick="newTemplate()">+ Créer un template</button>
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
 let a=filterItems(pocketActions(),["name","description","command","script","category","webCategory"]);
 return '<div class="toolbar slimbar"><span class="badge">'+a.length+' script(s) / action(s)</span></div>'+
 '<div class="grid">'+(a.map(actionCard).join("")||'<div class="empty">Aucun script trouvé.</div>')+'</div>';
}
function renderJournal(){
 let a=filterItems(pocketActions().filter(x=>x.webCategory==="Journal & Statistiques"),["name","description","method","command","script","category"]);
 return (a.length?'<div class="section-title">Actions</div><div class="grid">'+a.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">Rapport local IT Pocket</div>'+renderReport();
}
function render(){
 try{
   document.body.classList.toggle("light",state.theme==="light");
   nav();
   const title=$("#title"), stats=$("#stats"), content=$("#content");
   if(title)title.textContent=catLabel(state.cat);
   if(stats)stats.textContent=pocketActions().length+(state.lang==="en"?" scripts/actions • ":" scripts/actions • ")+allTemplates().length+(state.lang==="en"?" templates":" modèles");
   let c=state.cat, h=
     c==="Accueil"?home():
     c==="Communications"?communications():
     c==="Portails"?portals():
     c==="Journal & Statistiques"?renderJournal():
     renderActions(c);
   if(content)content.innerHTML=h;
   applyUiLanguage();
 }catch(e){
   console.error("IT Pocket render error",e);
   state={cat:"Accueil",tabs:["Accueil"],theme:"dark",lang:"fr"};
   try{localStorage.setItem("ssitState",JSON.stringify(state))}catch(_){}
   const content=$("#content");
   if(content)content.innerHTML=home();
   nav();
   applyUiLanguage();
 }
}
$("#search").addEventListener("input",render);
$("#theme").onclick=()=>{state.theme=state.theme==="light"?"dark":"light";save();render()};
$("#lang").onclick=()=>{state.lang=state.lang==="en"?"fr":"en";save();render()};
window.openCat=openCat;window.closeTab=closeTab;window.copy=copy;window.newTemplate=newTemplate;window.editTemplate=editTemplate;window.duplicateTemplate=duplicateTemplate;window.saveTemplate=saveTemplate;window.deleteTemplate=deleteTemplate;window.quickTemplateSearch=quickTemplateSearch;window.exportTemplates=exportTemplates;window.importTemplates=importTemplates;window.render=render;

let hiddenTemplates=readLocalArray("itpHiddenTemplates");
let customLinks=readLocalArray("itpCustomLinks");
let hiddenLinks=readLocalArray("itpHiddenLinks");
let favoriteLinks=readLocalArray("itpFavoriteLinks");
let portalFilter="Tous";
let templateFilter="Tous";
let actionFilter="Tous";
let typeFilter="Tous";
function savePocket(){save();localStorage.setItem("itpHiddenTemplates",JSON.stringify(hiddenTemplates));localStorage.setItem("itpCustomLinks",JSON.stringify(customLinks));localStorage.setItem("itpHiddenLinks",JSON.stringify(hiddenLinks));localStorage.setItem("itpFavoriteLinks",JSON.stringify(favoriteLinks))}
function executionProfile(item){
 const s=String(item.script||item.command||"").trim();
 if(!s)return {standalone:false};
 if(item.command && !item.script)return {standalone:true};
 const internal=/\b(?:Show-Text|Show-Grid|Show-AppSupportCenter|Show-RepairableApps|Show-OfficeAddinManager|Show-OneDriveDiagnostic|Export-OneDriveDiagnostic|Start-SupportTarget|Open-Uri|Confirm-Action|Add-Report|Enable-Escape|Get-PriorityApps|Get-InstalledApps|Get-OneDriveDiagnostic|Invoke-Lms|Start-Lms|Show-Ssit|Get-Ssit|Invoke-Ssit|Write-Ssit|Apply-Ssit|Register-Ssit)\b/i.test(s);
 if(internal)return {standalone:false};
 if(/^\s*(?:Ouvre|Lance)\s+(?:le|la|les|un|une)\s+centre/i.test(s))return {standalone:false};
 return {standalone:true};
}
function isContainerAction(item){
 const n=String(item.name||"");
 const s=String(item.script||item.command||"");
 return ((/\b(?:Centre|Hub)\b/i.test(n) && !/^(?:Gestionnaire de périphériques|Gestionnaire mots de passe)/i.test(n)) ||
        /^\s*(?:Ouvre|Lance)\s+(?:le|la|les|un|une)\s+centre/i.test(s));
}
function resourceType(item){
 const s=String(item.script||item.command||"").trim();
 const shell=String(item.shell||item.language||"").toLowerCase();
 if(/^https?:\/\//i.test(s))return {kind:"link",label:"Lien",detail:"Lien • Navigateur",copy:"Copier le lien"};
 if(/^(?:ms-settings:|ms-quick-assist:|companyportal:|edge:\/\/|chrome:\/\/)/i.test(s))return {kind:"uri",label:"Action",detail:"Raccourci Windows",copy:"Copier le raccourci"};
 if(/cmd|invite de commandes/i.test(shell) || /^(?:ipconfig|ping|tracert|nslookup|netsh|route|arp|hostname|whoami|query\s+user|cmdkey|gpupdate|sfc|dism|chkdsk|pnputil|mstsc\.exe)\b/i.test(s))
   return {kind:"cmd",label:"Commande",detail:"Commande • CMD",copy:"Copier la commande"};
 return {kind:"powershell",label:"Script",detail:"Script • PowerShell",copy:"Copier le script"};
}
function contentSectionTitle(item){
 const r=resourceType(item);
 return r.kind==="link"?"LIEN":r.kind==="uri"?"RACCOURCI WINDOWS":r.kind==="cmd"?"COMMANDE":"SCRIPT POWERSHELL";
}
function actionKind(item){
 const r=resourceType(item);
 if(r.kind==="link")return "Information";
 if(r.kind==="uri")return "Action";
 const text=[item.name,item.description,item.method,item.risk,item.actionType].filter(Boolean).join(" ").toLowerCase();
 if(/diagnostic|diagnosti|test|tester|contr[oô]l|v[ée]rifi|inventaire|liste|affiche|lecture|[ée]tat|version|historique|logs?|rapport|analyse|scan/.test(text))
   return "Diagnostic";
 return "Action";
}
function typeBadge(item){
 const k=actionKind(item);
 const icon=k==="Diagnostic"?"🩺":k==="Information"?"ℹ":"⚡";
 return '<span class="badge type-'+k.toLowerCase()+'">'+icon+' '+k+'</span>';
}
function setTypeFilter(v){typeFilter=v;render()}
function typeToolbar(){
 return '<div class="type-filter"><button class="btn" onclick=\'setTypeFilter("Tous")\'>Tous</button>'+
 '<button class="btn" onclick=\'setTypeFilter("Diagnostic")\'>🩺 Diagnostic</button>'+
 '<button class="btn" onclick=\'setTypeFilter("Information")\'>ℹ Information</button>'+
 '<button class="btn" onclick=\'setTypeFilter("Action")\'>⚡ Action</button></div>';
}
function cleanMethod(item){
 const m=String(item.method||"").trim();
 if(!m)return "";
 if(/^Option du Centre\b/i.test(m))return "";
 if(/^(?:Registre|CIM|WMI|Get-|Start-|Open-|PowerShell|Processus|Services|Lecture locale|HKLM|HKCU|root\\|Azure Tools Hub)/i.test(m))return "";
 return m;
}
function supportSteps(item){
 const p=executionProfile(item);
 const r=resourceType(item);
 const rights=String(item.rights||"");
 const risk=String(item.risk||"");
 const admin=/admin/i.test(rights);
 let steps=[];
 if(!p.standalone)return steps;
 if(r.kind==="link"){
   steps.push("Ouvrir le lien dans un navigateur.");
   if(/compte|microsoft|intune|entra|mfa|sign/i.test(String(item.name||"")+" "+String(item.description||"")))steps.push("Se connecter avec le compte professionnel si demandé.");
 }else if(r.kind==="uri"){
   steps.push("Sur le PC Windows, appuyer sur Windows + R.");
   steps.push("Coller le raccourci puis valider.");
 }else if(r.kind==="cmd"){
   steps.push("Ouvrir Invite de commandes"+(admin?" en administrateur":"")+".");
   steps.push("Coller la commande puis valider.");
 }else{
   steps.push("Ouvrir PowerShell ou Terminal Windows"+(admin?" en administrateur":"")+".");
   steps.push("Coller le script puis valider.");
 }
 if(/moyen|élevé|modifie|supprim|interrompt|resynchron|redémarr|reboot/i.test(risk)){
   steps.push("Vérifier l’impact indiqué avant l’action.");
 }
 return steps;
}
function specificCheck(item){
 const candidates=[item.expected,item.result,item.validation,item.check].filter(Boolean).map(x=>String(x).trim());
 for(const x of candidates){
   if(x && !/v[ée]rifier que l.?objectif|contr[oô]ler le r[ée]sultat|r[ée]sultat attendu/i.test(x))return x;
 }
 return "";
}
function buildSupportShare(item){
 const p=executionProfile(item);
 const s=String(item.script||item.command||"").trim();
 const method=cleanMethod(item);
 const steps=supportSteps(item);
 const objective=String(item.description||method||item.name||"Action de support").trim();
 const check=specificCheck(item);
 const lines=[];
 lines.push("FICHE SUPPORT IT");
 lines.push("");
 lines.push(String(item.name||"Support"));
 lines.push(String(item.category||item.webCategory||"Support")+" • "+actionKind(item));
 lines.push("");
 lines.push("OBJECTIF");
 lines.push(objective);
 if(method && method!==objective){
   lines.push("");
   lines.push("À COMPRENDRE");
   lines.push(method);
 }
 if(item.rights || item.risk){
   lines.push("");
   lines.push("PRÉREQUIS / IMPACT");
   if(item.rights)lines.push("Droits : "+String(item.rights));
   if(item.risk)lines.push("Impact : "+String(item.risk));
 }
 if(steps.length){
   lines.push("");
   lines.push("PROCÉDURE");
   steps.forEach((x,i)=>lines.push((i+1)+". "+x));
 }
 if(p.standalone&&s){
   lines.push("");
   lines.push(contentSectionTitle(item));
   lines.push(s);
 }
 if(check){
   lines.push("");
   lines.push("VÉRIFICATION");
   lines.push(check);
 }
 if(item.escalation){
   lines.push("");
   lines.push("ESCALADE");
   lines.push(String(item.escalation));
 }
 return lines.join("\n");
}
function launchTutorial(item){
 const steps=supportSteps(item);
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
 const s=item.script||item.command||"", p=executionProfile(item), m=cleanMethod(item), r=resourceType(item);
 const objective=String(item.description||m||item.name||"Action de support");
 const check=specificCheck(item);
 return '<div id="'+id+'" class="inline-detail">'+
   '<div class="detail-section objective-section"><div class="more-label">Objectif</div><div class="more-text">'+esc(objective)+'</div></div>'+
   (m&&m!==objective?'<div class="detail-section"><div class="more-label">À comprendre</div><div class="more-text">'+esc(m)+'</div></div>':'')+
   ((item.rights||item.risk)?'<div class="detail-section"><div class="more-label">Prérequis / impact</div><div class="detail-meta">'+
      (item.rights?'<span class="badge">'+esc(item.rights)+'</span>':'')+
      (item.risk?'<span class="badge warn">'+esc(item.risk)+'</span>':'')+
    '</div></div>':'')+
   ((supportSteps(item).length)?'<div class="detail-section"><div class="more-label">Procédure</div>'+launchTutorial(item)+'</div>':'')+
   (p.standalone&&s?'<div class="detail-section"><div class="more-label">'+esc(r.detail)+'</div><pre class="code scriptfull">'+esc(s)+'</pre></div>':'')+
   (check?'<div class="detail-section"><div class="more-label">Vérification</div><div class="more-text">'+esc(check)+'</div></div>':'')+
   (item.escalation?'<div class="detail-section"><div class="more-label">Escalade</div><div class="more-text">'+esc(item.escalation)+'</div></div>':'')+
   '</div>';
}
function actionCard(a){
 let s=a.script||a.command||"", p=executionProfile(a), m=cleanMethod(a), r=resourceType(a);
 const id="detail_"+Math.random().toString(36).slice(2);
 const usefulText=p.standalone&&s?s:(m||a.description||"");
 const shareBody=buildSupportShare(a);
 return '<article class="card compact-card">'+
 typeBadge(a)+'<h3>'+esc(a.name)+'</h3>'+
 '<div class="meta">'+esc(a.category)+' • '+esc(r.label)+'</div>'+
 '<p class="desc">'+esc(a.description||m||'')+'</p>'+
 '<div class="card-badges">'+(a.rights?'<span class="badge">'+esc(a.rights)+'</span>':'')+(a.risk?'<span class="badge warn">'+esc(a.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions">'+
 (usefulText?'<button class="btn '+(p.standalone?'primary':'')+'" onclick=\'copy('+inlineArg(usefulText)+')\'>'+esc(r.copy)+'</button>':'')+
 '<button class="btn" onclick=\'shareText('+inlineArg(a.name||"Fiche support")+','+inlineArg(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(a.name||"Fiche"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>Voir plus</button></div>'+
 detailHtml(a,id)+'</article>';
}
function commandCard(c){
 const id="detail_"+Math.random().toString(36).slice(2), r=resourceType(c);
 const shareBody=buildSupportShare(c);
 return '<article class="card compact-card">'+typeBadge(c)+'<h3>'+esc(c.name)+'</h3>'+
 '<div class="meta">'+esc(c.category)+' • '+esc(r.label)+'</div>'+
 '<p class="desc">'+esc(c.description||'')+'</p>'+
 '<div class="card-badges">'+(c.rights?'<span class="badge">'+esc(c.rights)+'</span>':'')+(c.risk?'<span class="badge warn">'+esc(c.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions"><button class="btn primary" onclick=\'copy('+inlineArg(c.command)+')\'>'+esc(r.copy)+'</button>'+
 '<button class="btn" onclick=\'shareText('+inlineArg(c.name||"Fiche support")+','+inlineArg(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(c.name||"Fiche"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>Voir plus</button></div>'+
 detailHtml(c,id)+'</article>';
}
function normalizeTemplateText(text){
 let t=String(text==null?"":text);
 t=t.replace(/\\r\\n/g,"\n").replace(/\\n/g,"\n").replace(/\\t/g," ");
 t=t.replace(/^\s*[>"'\x60]+\s*/,"");
 t=t.replace(/\s*["'\x60]+\s*\)?\s*>?\s*$/,"");
 t=t.replace(/^\s*>\s?/gm,"");
 t=t.replace(/\r\n?/g,"\n").replace(/[ \t]+$/gm,"").replace(/\n{3,}/g,"\n\n");
 return t.trim();
}
function formalizeTemplateText(text){
 return normalizeTemplateText(text);
}
function templateEmoji(t){
 const s=[t&&t.category,t&&t.name,t&&t.subject,t&&t.content].filter(Boolean).join(" ").toLowerCase();
 if(/matériel|materiel|expédition|expedition|livraison|remise|restitution|casque|chargeur|poste|pc\b/.test(s))return "📦";
 if(/réseau|reseau|vpn|wifi|connexion|dns|dhcp/.test(s))return "🌐";
 if(/outlook|mail|email|e-mail|microsoft 365|office/.test(s))return "📧";
 if(/mise à jour|mise a jour|update|correctif|patch/.test(s))return "🔄";
 if(/application|logiciel|software|installation|désinstallation|desinstallation/.test(s))return "💻";
 return "";
}
function templateHeadingEmoji(line){
 const s=String(line||"").trim().toLowerCase();
 if(/^(important|attention|alerte|à retenir|a retenir|urgent|urgence)\b/.test(s))return "⚠️ ";
 if(/^(information|info|contexte|à noter|a noter)\b/.test(s))return "ℹ️ ";
 if(/^(validation|résultat|resultat|confirmation|résolu|resolu)\b/.test(s))return "✅ ";
 return "";
}
function templateSafeLinkify(text){
 const s=String(text||"");
 const re=/(https?:\/\/[^\s<>"']+)/ig;
 let out="",last=0,m;
 while((m=re.exec(s))){
   out+=esc(s.slice(last,m.index));
   const url=m[1];
   const safe=esc(url);
   out+='<a class="tpl-link" href="'+safe+'" target="_blank" rel="noopener">'+safe+'</a>';
   last=m.index+url.length;
 }
 out+=esc(s.slice(last));
 return out;
}
function templateLineEmoji(line){
 const s=String(line||"").trim();
 if(!s)return "";
 if(/[\u2600-\u27BF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]/.test(s))return "";
 const l=s.toLowerCase();
 if(/attention|important|alerte|urgent|urgence|vigilance/.test(l))return "⚠️ ";
 if(/résolu|resolu|validation|confirm|fonctionne correctement|clôtur|clotur/.test(l))return "✅ ";
 if(/information|pour information|à noter|a noter/.test(l))return "ℹ️ ";
 return "";
}
function decorateTemplatePlainText(text){
 const clean=formalizeTemplateText(text);
 if(!clean)return "";
 return clean.split("\n").map(line=>{
   const trimmed=String(line||"").trim();
   if(!trimmed)return "";

   const marker=templateHeadingEmoji(trimmed);
   if(marker && !/[\u2600-\u27BF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]/.test(trimmed)){
     return marker+trimmed;
   }

   // Keep existing bullets, numbered steps and original user-authored emojis.
   return trimmed;
 }).join("\n");
}
function formatTemplateHtml(text){
 const clean=formalizeTemplateText(text);
 if(!clean)return '<div class="template-empty">Aucun contenu.</div>';
 return clean.split("\n").map(line=>{
   const trimmed=String(line||"").trim();
   if(!trimmed)return '<div class="tpl-space" aria-hidden="true"></div>';

   const marker=templateHeadingEmoji(trimmed);
   if(marker){
     const already=/[\u2600-\u27BF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]/.test(trimmed);
     return '<div class="tpl-callout">'+
       '<span class="tpl-callout-icon">'+esc(already?"":marker.trim())+'</span>'+
       '<div>'+templateSafeLinkify(trimmed)+'</div>'+
     '</div>';
   }

   if(/^(bonjour|bonsoir)(\s|,|$)/i.test(trimmed)){
     return '<div class="tpl-line tpl-greeting">'+templateSafeLinkify(trimmed)+'</div>';
   }
   if(/^(cordialement|bien cordialement|bonne journée|bonne journee|merci|merci d'avance|merci par avance)(\s|,|\.|$)/i.test(trimmed)){
     return '<div class="tpl-line tpl-closing">'+templateSafeLinkify(trimmed)+'</div>';
   }
   if(/^\d+[\).\-]?\s+/.test(trimmed) || /^\d+[️⃣]\s*/u.test(trimmed)){
     return '<div class="tpl-line tpl-step">'+templateSafeLinkify(trimmed)+'</div>';
   }
   if(/^[-•▪◦]\s*/.test(trimmed)){
     const content=trimmed.replace(/^[-•▪◦]\s*/,"");
     return '<div class="tpl-line tpl-bullet">'+templateSafeLinkify(content)+'</div>';
   }
   if(/^(objet\s*:)/i.test(trimmed)){
     return '<div class="tpl-line tpl-object">'+templateSafeLinkify(trimmed)+'</div>';
   }

   return '<div class="tpl-line">'+templateSafeLinkify(trimmed)+'</div>';
 }).join("");
}
function templateShareText(t){
 return preparedTemplate(t).full;
}
function allTemplates(){return D.templates.map((t,i)=>({...t,builtin:true,_id:"b"+i})).filter(t=>!hiddenTemplates.includes(t._id)).concat(custom.map((t,i)=>({...t,custom:true,_id:"c"+i})))}
function getTemplateByRef(ref){if(!ref)return null;let i=parseInt(ref.slice(1),10);return ref[0]==="b"?D.templates[i]:custom[i]}
function openTemplateOutlook(ref){
 let t=getTemplateByRef(ref); if(!t)return;
 const p=preparedTemplate(t);
 openOutlookText(p.subject||t.name||"Communication IT",decorateTemplatePlainText(p.body));
}
function toggleTemplatePreview(id){
 const box=document.getElementById(id);
 if(!box)return;
 const open=box.classList.toggle("open");
 const btn=document.querySelector('[data-template-btn="'+id+'"]');
 if(btn)btn.textContent=open?ui("Réduire"):ui("Voir plus");
}
function templateCard(t){
 let r=JSON.stringify(t._id);
 const p=preparedTemplate(t);
 const id="tpl_"+Math.random().toString(36).slice(2);
 return '<article class="card template-card">'+
 '<h3>'+esc(t.name)+'</h3>'+
 '<div class="meta">'+esc(t.category)+' '+(t.builtin?'• '+(state.lang==="en"?"Built-in":"Intégré"):'• '+(state.lang==="en"?"Personal":"Personnel"))+'</div>'+
 (p.subject?'<div class="template-subject"><span>'+ui("Objet")+'</span>'+esc(p.subject)+'</div>':'')+
 '<div id="'+id+'" class="template-preview template-preview-collapsed">'+formatTemplateHtml(p.body)+'</div>'+
 '<div class="actions template-actions">'+
 '<button class="btn primary" onclick=\'copyTemplate('+r+')\'>'+ui("Copier")+'</button>'+
 '<button class="btn" onclick=\'shareTemplate('+r+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openTemplateOutlook('+r+')\'>Outlook</button>'+
 '<button class="btn" data-template-btn="'+id+'" onclick=\'toggleTemplatePreview("'+id+'")\'>'+ui("Voir plus")+'</button>'+
 '<button class="btn" onclick=\'editTemplate('+r+')\'>'+ui("Modifier")+'</button>'+
 '</div></article>';
}
function setTemplateFilter(v){templateFilter=v;render()}
function communications(){
 let all=allTemplates(), ts=filterItems(all,["name","category","subject","content"]);
 if(templateFilter!=="Tous")ts=ts.filter(t=>t.category===templateFilter);
 let cs=[...new Set(all.map(x=>x.category))].sort();
 let actionCards=filterItems(pocketActions().filter(x=>x.webCategory==="Communications"),["name","description","method","command","script","category"]);
 return '<div class="toolbar communication-topbar">'+
 '<button class="btn primary" onclick="newTemplate()">'+ui("+ Créer un template")+'</button>'+
 '<span class="badge">'+ts.length+' '+(state.lang==="en"?"template(s)":"modèle(s)")+'</span></div>'+
 '<div class="toolbar"><button class="btn" onclick=\'setTemplateFilter("Tous")\'>'+ui("Tous")+'</button>'+cs.map(c=>'<button class="btn" onclick=\'setTemplateFilter('+JSON.stringify(c)+')\'>'+esc(c)+'</button>').join("")+'</div>'+
 (actionCards.length?'<div class="section-title">'+ui("Actions Communication")+'</div><div class="grid">'+actionCards.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">'+ui("Modèles corporate")+'</div><div class="grid">'+(ts.map(templateCard).join("")||'<div class="empty">'+ui("Aucun template trouvé.")+'</div>')+'</div>';
}
function newTemplate(ref=null){
 let t=ref?{...getTemplateByRef(ref)}:{category:"Tickets",name:"",subject:"",content:""};
 t.subject=formalizeTemplateText(t.subject||"");
 t.content=formalizeTemplateText(t.content||"");
 $("#content").innerHTML='<div class="card"><h3>'+(ref?'Modifier le template':'Créer un template')+'</h3><div class="editor"><div><div class="meta">Catégorie</div><input id="ecat" value="'+esc(t.category||"")+'"></div><div><div class="meta">Nom</div><input id="ename" value="'+esc(t.name||"")+'"></div><div class="full"><div class="meta">Objet</div><input id="esub" value="'+esc(t.subject||"")+'"></div><div class="full"><div class="meta">Texte</div><textarea id="ebody">'+esc(t.content||"")+'</textarea></div><div class="full actions"><button class="btn primary" onclick=\'saveTemplateRef('+JSON.stringify(ref||"")+')\'>Enregistrer</button><button class="btn" onclick="render()">Annuler</button></div></div></div>'
}
function editTemplate(ref){newTemplate(ref)}
function saveTemplateRef(ref){let t={category:$("#ecat").value.trim()||"Divers",name:$("#ename").value.trim()||"Sans nom",subject:formalizeTemplateText($("#esub").value.trim()),content:formalizeTemplateText($("#ebody").value),custom:true};if(ref&&ref[0]==="c")custom[parseInt(ref.slice(1),10)]=t;else{if(ref&&ref[0]==="b"&&!hiddenTemplates.includes(ref))hiddenTemplates.push(ref);custom.push(t)}savePocket();toast("Template enregistré");render()}
function deleteTemplate(ref){if(!ref||!confirm(ui("Supprimer ce template ?")))return;if(ref[0]==="c")custom.splice(parseInt(ref.slice(1),10),1);else if(!hiddenTemplates.includes(ref))hiddenTemplates.push(ref);savePocket();render()}
function allPortals(){return (D.portals||[]).map((p,i)=>({...p,builtin:true,_id:"b"+i})).filter(p=>!hiddenLinks.includes(p._id)).concat(customLinks.map((p,i)=>({...p,custom:true,_id:"c"+i})))}
function isFavoriteLink(r){return favoriteLinks.includes(r)}
function toggleFavoriteLink(r){favoriteLinks=isFavoriteLink(r)?favoriteLinks.filter(x=>x!==r):favoriteLinks.concat(r);savePocket();render()}
function setPortalFilter(v){portalFilter=v;render()}
function getLinkByRef(r){if(!r)return null;let i=parseInt(r.slice(1),10);return r[0]==="b"?D.portals[i]:customLinks[i]}
function portalCard(p){
 let r=JSON.stringify(p._id),f=isFavoriteLink(p._id);
 const shareBody=(p.name||"Lien IT")+"\n"+(p.description?String(p.description)+"\n":"")+(p.url||"");
 return '<article class="card"><h3>'+(f?'★ ':'')+esc(p.name)+'</h3>'+
 '<div class="meta">'+esc(portalCategoryLabel(p.category||"Divers"))+' '+(p.builtin?'• '+(state.lang==="en"?'Built-in':'Intégré'):'• '+(state.lang==="en"?'Personal':'Personnel'))+'</div>'+
 (p.description?'<p class="desc">'+esc(p.description)+'</p>':'')+
 '<pre class="code">'+esc(p.url)+'</pre><div class="actions">'+
 '<button class="btn primary" onclick=\'window.open('+inlineArg(p.url)+',"_blank","noopener")\'>'+ui("Ouvrir")+'</button>'+
 '<button class="btn" onclick=\'copy('+inlineArg(p.url)+')\'>'+ui("Copier le lien")+'</button>'+
 '<button class="btn" onclick=\'shareText('+inlineArg(p.name||"Lien IT")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(p.name||"Lien"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" onclick=\'toggleFavoriteLink('+r+')\'>'+(f?ui("★ Favori"):ui("☆ Favori"))+'</button>'+
 '<button class="btn" onclick=\'editLink('+r+')\'>'+ui("Modifier")+'</button>'+
 '<button class="btn red" onclick=\'deleteLink('+r+')\'>'+ui("Supprimer")+'</button></div></article>'
}
function portals(){
 let ps=filterItems(allPortals(),["name","url","category","description"]);
 if(portalFilter==="Favoris")ps=ps.filter(p=>isFavoriteLink(p._id));
 else if(portalFilter!=="Tous")ps=ps.filter(p=>(p.category||"Divers")===portalFilter);
 let cs=[...new Set(allPortals().map(x=>x.category||"Divers"))].sort();
 return '<div class="toolbar"><button class="btn primary" onclick="newLink()">'+ui("+ Ajouter un lien")+'</button>'+
 '<button class="btn" onclick=\'setPortalFilter("Tous")\'>'+ui("Tous")+'</button>'+
 '<button class="btn" onclick=\'setPortalFilter("Favoris")\'>'+ui("★ Favoris")+'</button>'+
 '<span class="badge">'+ps.length+' '+(state.lang==="en"?"link(s)":"lien(s)")+'</span></div>'+
 '<div class="toolbar">'+cs.map(c=>'<button class="btn" onclick=\'setPortalFilter('+JSON.stringify(c)+')\'>'+esc(portalCategoryLabel(c))+'</button>').join("")+'</div>'+
 '<div class="grid">'+(ps.map(portalCard).join("")||'<div class="empty">'+ui("Aucun lien trouvé.")+'</div>')+'</div>'
}
function newLink(ref=null){let p=ref?{...getLinkByRef(ref)}:{name:"",category:"Favoris",url:"https://"};$("#content").innerHTML='<div class="card"><h3>'+(ref?'Modifier le lien':'Ajouter un lien favori')+'</h3><div class="editor"><div><div class="meta">Nom</div><input id="lname" value="'+esc(p.name||"")+'"></div><div><div class="meta">Catégorie</div><input id="lcat" value="'+esc(p.category||"Favoris")+'"></div><div class="full"><div class="meta">URL</div><input id="lurl" value="'+esc(p.url||"https://")+'"></div><div class="full actions"><button class="btn primary" onclick=\'saveLink('+JSON.stringify(ref||"")+')\'>Enregistrer</button><button class="btn" onclick="render()">Annuler</button></div></div></div>'}
function editLink(r){newLink(r)}
function saveLink(r){let name=$("#lname").value.trim(),category=$("#lcat").value.trim()||"Favoris",url=$("#lurl").value.trim();if(!name||!/^https?:\/\//i.test(url)){alert(ui("Nom obligatoire et URL http/https valide."));return}let p={name,category,url,custom:true};if(r&&r[0]==="c")customLinks[parseInt(r.slice(1),10)]=p;else{if(r&&r[0]==="b"&&!hiddenLinks.includes(r))hiddenLinks.push(r);customLinks.push(p)}savePocket();toast("Lien enregistré");render()}
function deleteLink(r){if(!r||!confirm(ui("Supprimer ce lien ?")))return;if(r[0]==="c")customLinks.splice(parseInt(r.slice(1),10),1);else if(!hiddenLinks.includes(r))hiddenLinks.push(r);favoriteLinks=favoriteLinks.filter(x=>x!==r);savePocket();render()}
function renderActions(c){
 let a=filterItems(pocketActions().filter(x=>x.webCategory===c),["name","description","command","script","category","webCategory"]);
 if(!a.length)return '<div class="empty">Aucun script, commande ou lien autonome dans cette rubrique.</div>';
 const groups=new Map();
 a.forEach(x=>{const k=x.category||c;if(!groups.has(k))groups.set(k,[]);groups.get(k).push(x)});
 return '<div class="toolbar slimbar"><span class="badge">'+a.length+' élément(s)</span></div>'+
 [...groups.entries()].map(([k,items])=>
   '<div class="section-title">'+esc(k)+'</div><div class="grid">'+items.map(actionCard).join("")+'</div>'
 ).join("");
}
function tools(){
 let c=filterItems(D.commands,["name","description","command","category","shell"]);
 return '<div class="toolbar slimbar"><span class="badge">'+c.length+' commande(s)</span></div>'+
 '<div class="grid">'+(c.map(commandCard).join("")||'<div class="empty">Aucune commande trouvée.</div>')+'</div>';
}

/* ===== IT POCKET FULL FR/EN LAYER ===== */
Object.assign(UI_EN,{
 "Copié":"Copied",
 "Partage natif indisponible : contenu copié":"Native sharing unavailable: content copied",
 "Lien enregistré":"Link saved",
 "Template enregistré":"Template saved",
 "Templates importés":"Templates imported",
 "Ajouté au rapport":"Added to report",
 "Catégorie":"Category",
 "Nom":"Name",
 "Nom du template":"Template name",
 "Texte":"Text",
 "URL":"URL",
 "Modifier le lien":"Edit link",
 "Ajouter un lien favori":"Add favorite link",
 "Modifier le template":"Edit template",
 "Créer un template":"Create template",
 "Personnel":"Personal",
 "Intégré":"Built-in",
 "Objectif":"Objective",
 "À comprendre":"What to know",
 "Prérequis / impact":"Requirements / impact",
 "Procédure":"Procedure",
 "Vérification":"Verification",
 "Escalade":"Escalation",
 "Droits":"Rights",
 "Impact":"Impact",
 "Lien":"Link",
 "Commande":"Command",
 "Script":"Script",
 "Raccourci Windows":"Windows shortcut",
 "Lien • Navigateur":"Link • Browser",
 "Commande • CMD":"Command • CMD",
 "Script • PowerShell":"Script • PowerShell",
 "Action":"Action",
 "Diagnostic":"Diagnostic",
 "Information":"Information",
 "Lecture":"Read-only",
 "Lecture seule":"Read-only",
 "Utilisateur":"User",
 "Administrateur":"Administrator",
 "Administrateur recommandé":"Administrator recommended",
 "Faible":"Low",
 "Moyen":"Medium",
 "Élevé":"High",
 "Aucun script, commande ou lien autonome dans cette rubrique.":"No standalone script, command or link in this section.",
 "Aucune commande trouvée.":"No command found.",
 "Enregistrer":"Save",
 "Annuler":"Cancel",
 "Supprimer ce template ?":"Delete this template?",
 "Supprimer ce lien ?":"Delete this link?",
 "Nom obligatoire et URL http/https valide.":"A name and a valid http/https URL are required.",
 "Catégorie":"Category",
 "Nom du template":"Template name",
 "Objet du mail / message":"Email / message subject",
 "Texte du template":"Template text",
 "Tickets, Matériel, Sécurité…":"Tickets, Hardware, Security…"
});
Object.assign(PORTAL_CAT_EN,{
 "Veille & Actualité IT":"IT Watch & News",
 "Documentation & Diagnostic":"Documentation & Diagnostics",
 "Tests Web & Réseau":"Web & Network Tests",
 "IA & Numérique France":"AI & French Digital Services",
 "Veille IT & Cyber":"IT & Cyber Watch",
 "Documentation & Communauté":"Documentation & Community"
});
const TEMPLATE_CAT_EN_V2={
 "Accès & MFA":"Access & MFA",
 "Applications":"Applications",
 "Communication":"Communication",
 "Incident majeur":"Major Incident",
 "Mails":"Emails",
 "Maintenance & Changement":"Maintenance & Change",
 "Matériel":"Hardware",
 "Messages rapides":"Quick Messages",
 "Microsoft 365":"Microsoft 365",
 "Onboarding / Offboarding":"Onboarding / Offboarding",
 "Rapports":"Reports",
 "Relances & Escalades":"Follow-ups & Escalations",
 "Rendez-vous":"Appointments",
 "Réseau & VPN":"Network & VPN",
 "Salles & MTR":"Rooms & MTR",
 "Sécurité":"Security",
 "Tickets":"Tickets"
};
function templateCategoryLabel(c){return state.lang==="en"?(TEMPLATE_CAT_EN_V2[c]||c):c}
function localizeTemplate(t){
 if(!t)return t;
 if(state.lang!=="en")return {...t,_categoryKey:t._categoryKey||t.category};
 return {
   ...t,
   name:t.name_en||t.name,
   subject:t.subject_en||t.subject,
   content:t.content_en||t.content,
   _categoryKey:t._categoryKey||t.category,
   category:templateCategoryLabel(t._categoryKey||t.category)
 };
}
function localizeDataItem(x){
 if(!x||state.lang!=="en")return x;
 const y={...x};
 for(const k of ["name","description","category","rights","risk","method","expected","validation","check","escalation","actionType"]){
   if(x[k+"_en"])y[k]=x[k+"_en"];
 }
 return y;
}
function localizePortal(p){
 if(!p||state.lang!=="en")return p;
 return {
   ...p,
   name:p.name_en||p.name,
   category:p.category_en||portalCategoryLabel(p.category||"Divers"),
   description:p.description_en||p.description||"",
   _categoryKey:p._categoryKey||p.category
 };
}
function toast(t){
 const x=$("#toast"); if(!x)return;
 x.textContent=ui(String(t||""));
 x.classList.add("show");
 setTimeout(()=>x.classList.remove("show"),1300);
}
async function copy(t){
 try{await navigator.clipboard.writeText(t);toast("Copié")}
 catch{
   let a=document.createElement("textarea");a.value=t;document.body.append(a);a.select();
   document.execCommand("copy");a.remove();toast("Copié");
 }
}
function preparedTemplate(t){
 const v=localizeTemplate(t);
 const subject=formalizeTemplateText(v&&v.subject||"");
 const body=formalizeTemplateText(v&&v.content||"");
 const shareBody=decorateTemplatePlainText(body);
 const subjectPrefix=state.lang==="en"?"Subject: ":"Objet : ";
 return {subject,body,full:(subject?subjectPrefix+subject+"\n\n":"")+shareBody,name:v&&v.name||""};
}
async function copyTemplate(ref){
 const t=getTemplateByRef(ref);if(!t)return;
 const p=preparedTemplate(t);await copy(p.full);
}
async function shareTemplate(ref){
 const t=getTemplateByRef(ref);if(!t)return;
 const p=preparedTemplate(t);await shareText(p.name||"IT Pocket",p.full);
}
function openTemplateOutlook(ref){
 const t=getTemplateByRef(ref);if(!t)return;
 const p=preparedTemplate(t);
 openOutlookText(p.subject||p.name||"IT Pocket",decorateTemplatePlainText(p.body));
}
function templateHeadingEmoji(line){
 const s=String(line||"").trim().toLowerCase();
 if(/^(important|attention|alerte|à retenir|a retenir|urgent|urgence)\b/.test(s))return "⚠️ ";
 if(/^(information|info|contexte|à noter|a noter)\b/.test(s))return "ℹ️ ";
 if(/^(validation|résultat|resultat|confirmation|résolu|resolu|result|resolved|status)\b/.test(s))return "✅ ";
 return "";
}
function formatTemplateHtml(text){
 const clean=formalizeTemplateText(text);
 if(!clean)return '<div class="template-empty">'+ui("Aucun contenu.")+'</div>';
 return clean.split("\n").map(line=>{
   const trimmed=String(line||"").trim();
   if(!trimmed)return '<div class="tpl-space" aria-hidden="true"></div>';
   const marker=templateHeadingEmoji(trimmed);
   if(marker){
     const already=/[\u2600-\u27BF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]/.test(trimmed);
     return '<div class="tpl-callout"><span class="tpl-callout-icon">'+esc(already?"":marker.trim())+'</span><div>'+templateSafeLinkify(trimmed)+'</div></div>';
   }
   if(/^(bonjour|bonsoir|hello|hi)(\s|,|$)/i.test(trimmed))return '<div class="tpl-line tpl-greeting">'+templateSafeLinkify(trimmed)+'</div>';
   if(/^(cordialement|bien cordialement|bonne journée|bonne journee|merci|merci d'avance|merci par avance|kind regards|thank you)(\s|,|\.|$)/i.test(trimmed))return '<div class="tpl-line tpl-closing">'+templateSafeLinkify(trimmed)+'</div>';
   if(/^\d+[\).\-]?\s+/.test(trimmed)||/^\d+[️⃣]\s*/u.test(trimmed))return '<div class="tpl-line tpl-step">'+templateSafeLinkify(trimmed)+'</div>';
   if(/^[-•▪◦]\s*/.test(trimmed))return '<div class="tpl-line tpl-bullet">'+templateSafeLinkify(trimmed.replace(/^[-•▪◦]\s*/,""))+'</div>';
   if(/^(objet|subject)\s*:/i.test(trimmed))return '<div class="tpl-line tpl-object">'+templateSafeLinkify(trimmed)+'</div>';
   return '<div class="tpl-line">'+templateSafeLinkify(trimmed)+'</div>';
 }).join("");
}
function allTemplates(){
 return D.templates.map((t,i)=>({...t,builtin:true,_id:"b"+i,_categoryKey:t.category}))
   .concat(custom.map((t,i)=>({...t,custom:true,_id:"c"+i,_categoryKey:t.category})));
}
function templateCard(t){
 const v=localizeTemplate(t);
 const r=JSON.stringify(t._id);
 const p=preparedTemplate(t);
 const id="tpl_"+Math.random().toString(36).slice(2);
 return '<article class="card template-card">'+
 '<h3>'+esc(v.name)+'</h3>'+
 '<div class="meta">'+esc(templateCategoryLabel(t._categoryKey||t.category))+' '+(t.builtin?'• '+(state.lang==="en"?"Built-in":"Intégré"):'• '+(state.lang==="en"?"Personal":"Personnel"))+'</div>'+
 (p.subject?'<div class="template-subject"><span>'+ui("Objet")+'</span>'+esc(p.subject)+'</div>':'')+
 '<div id="'+id+'" class="template-preview template-preview-collapsed">'+formatTemplateHtml(p.body)+'</div>'+
 '<div class="actions template-actions">'+
 '<button class="btn primary" onclick=\'copyTemplate('+r+')\'>'+ui("Copier")+'</button>'+
 '<button class="btn" onclick=\'shareTemplate('+r+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openTemplateOutlook('+r+')\'>Outlook</button>'+
 '<button class="btn" data-template-btn="'+id+'" onclick=\'toggleTemplatePreview("'+id+'")\'>'+ui("Voir plus")+'</button>'+
 '<button class="btn" onclick=\'editTemplate('+r+')\'>'+ui("Modifier")+'</button>'+
 '<button class="btn red" onclick=\'deleteTemplate('+r+')\'>'+ui("Supprimer")+'</button>'+
 '</div></article>';
}
function communications(){
 const raw=allTemplates();
 let all=raw.map(localizeTemplate);
 let ts=filterItems(all,["name","category","subject","content"]);
 if(templateFilter!=="Tous")ts=ts.filter(t=>(t._categoryKey||t.category)===templateFilter);
 const cs=[...new Set(raw.map(x=>x._categoryKey||x.category))].sort();
 let actionCards=filterItems(pocketActions().filter(x=>x.webCategory==="Communications").map(localizeDataItem),["name","description","method","command","script","category"]);
 return '<div class="toolbar communication-topbar">'+
 '<button class="btn primary" onclick="newTemplate()">'+ui("+ Créer un template")+'</button>'+
 '<span class="badge">'+ts.length+' '+(state.lang==="en"?"template(s)":"modèle(s)")+'</span></div>'+
 '<div class="toolbar"><button class="btn" onclick=\'setTemplateFilter("Tous")\'>'+ui("Tous")+'</button>'+
 cs.map(c=>'<button class="btn" onclick=\'setTemplateFilter('+JSON.stringify(c)+')\'>'+esc(templateCategoryLabel(c))+'</button>').join("")+'</div>'+
 (actionCards.length?'<div class="section-title">'+ui("Actions Communication")+'</div><div class="grid">'+actionCards.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">'+ui("Modèles corporate")+'</div><div class="grid">'+(ts.map(templateCard).join("")||'<div class="empty">'+ui("Aucun template trouvé.")+'</div>')+'</div>';
}
function newTemplate(ref=null){
 let source=ref?getTemplateByRef(ref):null;
 let t=source?localizeTemplate({...source,_categoryKey:source.category}):{category:"Tickets",name:"",subject:"",content:""};
 t.subject=formalizeTemplateText(t.subject||"");t.content=formalizeTemplateText(t.content||"");
 $("#content").innerHTML='<div class="card"><h3>'+ui(ref?"Modifier le template":"Créer un template")+'</h3><div class="editor">'+
 '<div><div class="meta">'+ui("Catégorie")+'</div><input id="ecat" value="'+esc(t.category||"")+'"></div>'+
 '<div><div class="meta">'+ui("Nom")+'</div><input id="ename" value="'+esc(t.name||"")+'"></div>'+
 '<div class="full"><div class="meta">'+ui("Objet")+'</div><input id="esub" value="'+esc(t.subject||"")+'"></div>'+
 '<div class="full"><div class="meta">'+ui("Texte")+'</div><textarea id="ebody">'+esc(t.content||"")+'</textarea></div>'+
 '<div class="full actions"><button class="btn primary" onclick=\'saveTemplateRef('+JSON.stringify(ref||"")+')\'>'+ui("Enregistrer")+'</button>'+
 '<button class="btn" onclick="render()">'+ui("Annuler")+'</button></div></div></div>';
}
function resourceType(item){
 const s=String(item.script||item.command||"").trim();
 const shell=String(item.shell||item.language||"").toLowerCase();
 if(/^https?:\/\//i.test(s))return {kind:"link",label:ui("Lien"),detail:ui("Lien • Navigateur"),copy:ui("Copier le lien")};
 if(/^(?:ms-settings:|ms-quick-assist:|companyportal:|edge:\/\/|chrome:\/\/)/i.test(s))return {kind:"uri",label:ui("Action"),detail:ui("Raccourci Windows"),copy:ui("Copier le raccourci")};
 if(/cmd|invite de commandes/i.test(shell)||/^(?:ipconfig|ping|tracert|nslookup|netsh|route|arp|hostname|whoami|query\s+user|cmdkey|gpupdate|sfc|dism|chkdsk|pnputil|mstsc\.exe)\b/i.test(s))
  return {kind:"cmd",label:ui("Commande"),detail:ui("Commande • CMD"),copy:ui("Copier la commande")};
 return {kind:"powershell",label:ui("Script"),detail:ui("Script • PowerShell"),copy:ui("Copier le script")};
}
function contentSectionTitle(item){
 const r=resourceType(item);
 return r.kind==="link"?(state.lang==="en"?"LINK":"LIEN"):r.kind==="uri"?(state.lang==="en"?"WINDOWS SHORTCUT":"RACCOURCI WINDOWS"):r.kind==="cmd"?(state.lang==="en"?"COMMAND":"COMMANDE"):(state.lang==="en"?"POWERSHELL SCRIPT":"SCRIPT POWERSHELL");
}
function supportSteps(item){
 const p=executionProfile(item),r=resourceType(item);
 const rights=String(item.rights||"");
 const admin=/admin|administrator/i.test(rights);
 if(!p.standalone)return [];
 const steps=[];
 if(state.lang==="en"){
   if(r.kind==="link"){steps.push("Open the link in a browser.");if(/account|compte|microsoft|intune|entra|mfa|sign/i.test(String(item.name||"")+" "+String(item.description||"")))steps.push("Sign in with the work account if prompted.");}
   else if(r.kind==="uri"){steps.push("On the Windows PC, press Windows + R.");steps.push("Paste the shortcut and press Enter.");}
   else if(r.kind==="cmd"){steps.push("Open Command Prompt"+(admin?" as administrator":"")+".");steps.push("Paste the command and press Enter.");}
   else{steps.push("Open PowerShell or Windows Terminal"+(admin?" as administrator":"")+".");steps.push("Paste the script and run it.");}
   if(/medium|high|modify|delete|interrupt|resync|restart|reboot/i.test(String(item.risk||"")))steps.push("Check the stated impact before running the action.");
 }else{
   if(r.kind==="link"){steps.push("Ouvrir le lien dans un navigateur.");if(/compte|microsoft|intune|entra|mfa|sign/i.test(String(item.name||"")+" "+String(item.description||"")))steps.push("Se connecter avec le compte professionnel si demandé.");}
   else if(r.kind==="uri"){steps.push("Sur le PC Windows, appuyer sur Windows + R.");steps.push("Coller le raccourci puis valider.");}
   else if(r.kind==="cmd"){steps.push("Ouvrir Invite de commandes"+(admin?" en administrateur":"")+".");steps.push("Coller la commande puis valider.");}
   else{steps.push("Ouvrir PowerShell ou Terminal Windows"+(admin?" en administrateur":"")+".");steps.push("Coller le script puis valider.");}
   if(/moyen|élevé|modifie|supprim|interrompt|resynchron|redémarr|reboot/i.test(String(item.risk||"")))steps.push("Vérifier l’impact indiqué avant l’action.");
 }
 return steps;
}
function buildSupportShare(item){
 const x=localizeDataItem(item),p=executionProfile(x),s=String(x.script||x.command||"").trim(),m=cleanMethod(x),steps=supportSteps(x);
 const objective=String(x.description||m||x.name||(state.lang==="en"?"Support action":"Action de support")).trim();
 const check=specificCheck(x),lines=[];
 if(state.lang==="en"){
   lines.push("IT SUPPORT SHEET","",String(x.name||"Support"),String(x.category||x.webCategory||"Support")+" • "+actionKind(x),"","OBJECTIVE",objective);
   if(m&&m!==objective)lines.push("","WHAT TO KNOW",m);
   if(x.rights||x.risk){lines.push("","REQUIREMENTS / IMPACT");if(x.rights)lines.push("Rights: "+x.rights);if(x.risk)lines.push("Impact: "+x.risk);}
   if(steps.length){lines.push("","PROCEDURE");steps.forEach((v,i)=>lines.push((i+1)+". "+v));}
   if(p.standalone&&s)lines.push("",contentSectionTitle(x),s);
   if(check)lines.push("","VERIFICATION",check);
   if(x.escalation)lines.push("","ESCALATION",String(x.escalation));
 }else{
   lines.push("FICHE SUPPORT IT","",String(x.name||"Support"),String(x.category||x.webCategory||"Support")+" • "+actionKind(x),"","OBJECTIF",objective);
   if(m&&m!==objective)lines.push("","À COMPRENDRE",m);
   if(x.rights||x.risk){lines.push("","PRÉREQUIS / IMPACT");if(x.rights)lines.push("Droits : "+x.rights);if(x.risk)lines.push("Impact : "+x.risk);}
   if(steps.length){lines.push("","PROCÉDURE");steps.forEach((v,i)=>lines.push((i+1)+". "+v));}
   if(p.standalone&&s)lines.push("",contentSectionTitle(x),s);
   if(check)lines.push("","VÉRIFICATION",check);
   if(x.escalation)lines.push("","ESCALADE",String(x.escalation));
 }
 return lines.join("\n");
}
function detailHtml(item,id){
 const x=localizeDataItem(item),s=x.script||x.command||"",p=executionProfile(x),m=cleanMethod(x),r=resourceType(x);
 const objective=String(x.description||m||x.name||(state.lang==="en"?"Support action":"Action de support")),check=specificCheck(x);
 return '<div id="'+id+'" class="inline-detail">'+
 '<div class="detail-section objective-section"><div class="more-label">'+ui("Objectif")+'</div><div class="more-text">'+esc(objective)+'</div></div>'+
 (m&&m!==objective?'<div class="detail-section"><div class="more-label">'+ui("À comprendre")+'</div><div class="more-text">'+esc(m)+'</div></div>':'')+
 ((x.rights||x.risk)?'<div class="detail-section"><div class="more-label">'+ui("Prérequis / impact")+'</div><div class="detail-meta">'+(x.rights?'<span class="badge">'+esc(x.rights)+'</span>':'')+(x.risk?'<span class="badge warn">'+esc(x.risk)+'</span>':'')+'</div></div>':'')+
 (supportSteps(x).length?'<div class="detail-section"><div class="more-label">'+ui("Procédure")+'</div>'+launchTutorial(x)+'</div>':'')+
 (p.standalone&&s?'<div class="detail-section"><div class="more-label">'+esc(r.detail)+'</div><pre class="code scriptfull">'+esc(s)+'</pre></div>':'')+
 (check?'<div class="detail-section"><div class="more-label">'+ui("Vérification")+'</div><div class="more-text">'+esc(check)+'</div></div>':'')+
 (x.escalation?'<div class="detail-section"><div class="more-label">'+ui("Escalade")+'</div><div class="more-text">'+esc(x.escalation)+'</div></div>':'')+
 '</div>';
}
function actionCard(a){
 const x=localizeDataItem(a),s=x.script||x.command||"",p=executionProfile(x),m=cleanMethod(x),r=resourceType(x),id="detail_"+Math.random().toString(36).slice(2);
 const usefulText=p.standalone&&s?s:(m||x.description||""),shareBody=buildSupportShare(x);
 return '<article class="card compact-card">'+typeBadge(x)+'<h3>'+esc(x.name)+'</h3>'+
 '<div class="meta">'+esc(x.category)+' • '+esc(r.label)+'</div><p class="desc">'+esc(x.description||m||"")+'</p>'+
 '<div class="card-badges">'+(x.rights?'<span class="badge">'+esc(x.rights)+'</span>':'')+(x.risk?'<span class="badge warn">'+esc(x.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions">'+(usefulText?'<button class="btn '+(p.standalone?'primary':'')+'" onclick=\'copy('+inlineArg(usefulText)+')\'>'+esc(r.copy)+'</button>':'')+
 '<button class="btn" onclick=\'shareText('+inlineArg(x.name||"IT Support")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(x.name||"Support"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>'+ui("Voir plus")+'</button></div>'+detailHtml(x,id)+'</article>';
}
function commandCard(c){
 const x=localizeDataItem(c),id="detail_"+Math.random().toString(36).slice(2),r=resourceType(x),shareBody=buildSupportShare(x);
 return '<article class="card compact-card">'+typeBadge(x)+'<h3>'+esc(x.name)+'</h3><div class="meta">'+esc(x.category)+' • '+esc(r.label)+'</div>'+
 '<p class="desc">'+esc(x.description||"")+'</p><div class="card-badges">'+(x.rights?'<span class="badge">'+esc(x.rights)+'</span>':'')+(x.risk?'<span class="badge warn">'+esc(x.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions"><button class="btn primary" onclick=\'copy('+inlineArg(x.command)+')\'>'+esc(r.copy)+'</button>'+
 '<button class="btn" onclick=\'shareText('+inlineArg(x.name||"IT Support")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(x.name||"Support"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>'+ui("Voir plus")+'</button></div>'+detailHtml(x,id)+'</article>';
}
function renderActions(c){
 let a=filterItems(pocketActions().filter(x=>x.webCategory===c).map(localizeDataItem),["name","description","command","script","category","webCategory"]);
 if(!a.length)return '<div class="empty">'+ui("Aucun script, commande ou lien autonome dans cette rubrique.")+'</div>';
 const groups=new Map();a.forEach(x=>{const k=x.category||catLabel(c);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(x)});
 return '<div class="toolbar slimbar"><span class="badge">'+a.length+' '+(state.lang==="en"?"item(s)":"élément(s)")+'</span></div>'+
 [...groups.entries()].map(([k,items])=>'<div class="section-title">'+esc(k)+'</div><div class="grid">'+items.map(actionCard).join("")+'</div>').join("");
}
function portalCard(p){
 const v=localizePortal(p),r=JSON.stringify(p._id),f=isFavoriteLink(p._id);
 const shareBody=(v.name||"IT Link")+"\n"+(v.description?String(v.description)+"\n":"")+(v.url||"");
 return '<article class="card"><h3>'+(f?'★ ':'')+esc(v.name)+'</h3><div class="meta">'+esc(v.category||"")+' '+(p.builtin?'• '+(state.lang==="en"?"Built-in":"Intégré"):'• '+(state.lang==="en"?"Personal":"Personnel"))+'</div>'+
 (v.description?'<p class="desc">'+esc(v.description)+'</p>':'')+'<pre class="code">'+esc(v.url)+'</pre><div class="actions">'+
 '<button class="btn primary" onclick=\'window.open('+inlineArg(v.url)+',"_blank","noopener")\'>'+ui("Ouvrir")+'</button>'+
 '<button class="btn" onclick=\'copy('+inlineArg(v.url)+')\'>'+ui("Copier le lien")+'</button>'+
 '<button class="btn" onclick=\'shareText('+inlineArg(v.name||"IT Link")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(v.name||"Link"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" onclick=\'toggleFavoriteLink('+r+')\'>'+(f?ui("★ Favori"):ui("☆ Favori"))+'</button>'+
 '<button class="btn" onclick=\'editLink('+r+')\'>'+ui("Modifier")+'</button><button class="btn red" onclick=\'deleteLink('+r+')\'>'+ui("Supprimer")+'</button></div></article>';
}
function portals(){
 const raw=allPortals().map(p=>({...p,_categoryKey:p.category}));
 let ps=filterItems(raw.map(localizePortal),["name","url","category","description"]);
 if(portalFilter==="Favoris")ps=ps.filter(p=>isFavoriteLink(p._id));
 else if(portalFilter!=="Tous")ps=ps.filter(p=>(p._categoryKey||p.category)===portalFilter);
 const cs=[...new Set(raw.map(x=>x._categoryKey||x.category||"Divers"))].sort();
 return '<div class="toolbar"><button class="btn primary" onclick="newLink()">'+ui("+ Ajouter un lien")+'</button>'+
 '<button class="btn" onclick=\'setPortalFilter("Tous")\'>'+ui("Tous")+'</button><button class="btn" onclick=\'setPortalFilter("Favoris")\'>'+ui("★ Favoris")+'</button>'+
 '<span class="badge">'+ps.length+' '+(state.lang==="en"?"link(s)":"lien(s)")+'</span></div>'+
 '<div class="toolbar">'+cs.map(c=>'<button class="btn" onclick=\'setPortalFilter('+JSON.stringify(c)+')\'>'+esc(state.lang==="en"?(PORTAL_CAT_EN[c]||c):c)+'</button>').join("")+'</div>'+
 '<div class="grid">'+(ps.map(portalCard).join("")||'<div class="empty">'+ui("Aucun lien trouvé.")+'</div>')+'</div>';
}
function newLink(ref=null){
 let p=ref?{...getLinkByRef(ref)}:{name:"",category:"Favoris",url:"https://"};
 if(ref&&state.lang==="en")p=localizePortal({...p,_categoryKey:p.category});
 $("#content").innerHTML='<div class="card"><h3>'+ui(ref?"Modifier le lien":"Ajouter un lien favori")+'</h3><div class="editor">'+
 '<div><div class="meta">'+ui("Nom")+'</div><input id="lname" value="'+esc(p.name||"")+'"></div>'+
 '<div><div class="meta">'+ui("Catégorie")+'</div><input id="lcat" value="'+esc(p.category||ui("Favoris"))+'"></div>'+
 '<div class="full"><div class="meta">URL</div><input id="lurl" value="'+esc(p.url||"https://")+'"></div>'+
 '<div class="full actions"><button class="btn primary" onclick=\'saveLink('+JSON.stringify(ref||"")+')\'>'+ui("Enregistrer")+'</button>'+
 '<button class="btn" onclick="render()">'+ui("Annuler")+'</button></div></div></div>';
}
function tabs(){ $("#tabs").innerHTML=state.tabs.map(c=>'<button class="tab '+(state.cat===c?"active":"")+'" onclick=\'openCat('+JSON.stringify(c)+')\'>'+icon(c)+' '+esc(catLabel(c))+' <span onclick=\'closeTab('+JSON.stringify(c)+',event)\'>×</span></button>').join("")}


function toggleInlineDetail(id){
 const box=document.getElementById(id); if(!box)return;
 const open=box.classList.toggle("open");
 const btn=document.querySelector('[data-detail-btn="'+id+'"]');
 if(btn)btn.textContent=open?ui("Réduire"):ui("Voir plus");
}
function saveTemplateRef(ref){
 let t={
  category:$("#ecat").value.trim()||(state.lang==="en"?"Miscellaneous":"Divers"),
  name:$("#ename").value.trim()||(state.lang==="en"?"Untitled":"Sans nom"),
  subject:formalizeTemplateText($("#esub").value.trim()),
  content:formalizeTemplateText($("#ebody").value),
  custom:true
 };
 if(ref&&ref[0]==="c")custom[parseInt(ref.slice(1),10)]=t;
 else{
  if(ref&&ref[0]==="b"&&!hiddenTemplates.includes(ref))hiddenTemplates.push(ref);
  custom.push(t);
 }
 savePocket();toast("Template enregistré");render();
}
function deleteTemplate(ref){
 toast(state.lang==="en"?"Template deletion is disabled":"Suppression des templates désactivée");
}
function importTemplates(inp){
 let f=inp.files&&inp.files[0];if(!f)return;
 let r=new FileReader();
 r.onload=()=>{try{
   let x=JSON.parse(r.result);if(!Array.isArray(x))throw 0;
   custom=x.filter(t=>t&&t.name&&typeof t.content==="string").map(t=>({...t,custom:true}));
   save();toast("Templates importés");render();
 }catch{alert(state.lang==="en"?"Invalid template file.":"Fichier de templates invalide.")}};
 r.readAsText(f);
}
function saveLink(r){
 let name=$("#lname").value.trim(),category=$("#lcat").value.trim()||(state.lang==="en"?"Favorites":"Favoris"),url=$("#lurl").value.trim();
 if(!name||!/^https?:\/\//i.test(url)){alert(ui("Nom obligatoire et URL http/https valide."));return}
 let p={name,category,url,custom:true};
 if(r&&r[0]==="c")customLinks[parseInt(r.slice(1),10)]=p;
 else{
   if(r&&r[0]==="b"&&!hiddenLinks.includes(r))hiddenLinks.push(r);
   customLinks.push(p);
 }
 savePocket();toast("Lien enregistré");render();
}
function deleteLink(r){
 if(!r||!confirm(ui("Supprimer ce lien ?")))return;
 if(r[0]==="c")customLinks.splice(parseInt(r.slice(1),10),1);
 else if(!hiddenLinks.includes(r))hiddenLinks.push(r);
 favoriteLinks=favoriteLinks.filter(x=>x!==r);
 savePocket();render();
}


function preparedTemplate(t){
 const v=localizeTemplate(t);
 let subject=formalizeTemplateText(v&&v.subject||"");
 let body=formalizeTemplateText(v&&v.content||"");
const shareBody=decorateTemplatePlainText(body);
 const subjectPrefix=state.lang==="en"?"Subject: ":"Objet : ";
 return {subject,body,full:(subject?subjectPrefix+subject+"\n\n":"")+shareBody,name:v&&v.name||""};
}


/* === IT Pocket final UI localization / simple communications === */
Object.assign(UI_EN,{
 "Copié":"Copied",
 "Partage natif indisponible : contenu copié":"Native sharing unavailable: content copied",
 "Partage indisponible : contenu copié":"Sharing unavailable: content copied",
 "Ajouté au rapport":"Added to report",
 "Rapport vide.":"Report is empty.",
 "Copier rapport":"Copy report",
 "Vider":"Clear",
 "Personnel":"Personal",
 "Intégré":"Built-in",
 "élément(s)":"item(s)",
 "lien(s)":"link(s)",
 "modèle(s)":"template(s)",
 "Droits :":"Permissions:",
 "Impact :":"Impact:",
 "Nom du template":"Template name",
 "Texte du template":"Template text",
 "Portail support":"Support portal",
 "Support informatique":"IT Support"
});

const TECH_CAT_EN_FINAL={
 "Réseau":"Network",
 "Système":"System",
 "Processus & Services":"Processes & Services",
 "Disque & Stockage":"Disk & Storage",
 "Applications & Winget":"Applications & Winget",
 "Office / M365":"Office / M365",
 "OneDrive":"OneDrive",
 "Navigateurs":"Browsers",
 "Intune / Entra":"Intune / Entra",
 "SCCM":"SCCM",
 "Sécurité":"Security",
 "Impression":"Printing",
 "Matériel":"Hardware",
 "Profil & Comptes":"Profiles & Accounts",
 "Assistance distante":"Remote Assistance",
 "Périphériques":"Devices",
 "Poste Windows":"Windows Device",
 "Microsoft 365 • Word":"Microsoft 365 • Word",
 "Microsoft 365 • Excel":"Microsoft 365 • Excel",
 "Microsoft 365 • PowerPoint":"Microsoft 365 • PowerPoint",
 "Microsoft 365 • Teams":"Microsoft 365 • Teams",
 "Microsoft 365 • OneDrive":"Microsoft 365 • OneDrive",
 "Microsoft 365 • Office":"Microsoft 365 • Office",
 "Navigateurs • Général":"Browsers • General",
 "Navigateurs • Edge":"Browsers • Edge",
 "Navigateurs • Chrome":"Browsers • Chrome",
 "Navigateurs • Firefox":"Browsers • Firefox"
};

function autoEnFinal(text){
 let s=String(text==null?"":text);
 if(state.lang!=="en"||!s)return s;
 if(UI_EN[s])return UI_EN[s];
 if(PORTAL_CAT_EN[s])return PORTAL_CAT_EN[s];
 if(TEMPLATE_CAT_EN[s])return TEMPLATE_CAT_EN[s];
 if(TECH_CAT_EN_FINAL[s])return TECH_CAT_EN_FINAL[s];
 if(TECH_EN_EXACT[s])return TECH_EN_EXACT[s];

 const exact={
  "Administrateur recommandé":"Administrator recommended",
  "Compte professionnel":"Work account",
  "Droits Intune requis":"Intune permissions required",
  "Modification du mot de passe":"Password change",
  "Modification des méthodes MFA":"MFA method changes",
  "Administration":"Administration",
  "Lecture locale":"Local read-only",
  "Selon droits":"Depends on permissions"
 };
 if(exact[s])return exact[s];

 const reps=[
  [/\bdiagnostic complet\b/gi,"full diagnostic"],
  [/\bdiagnostic technicien\b/gi,"technician diagnostic"],
  [/\bmode sans échec\b/gi,"safe mode"],
  [/\bforcer fermeture\b/gi,"force close"],
  [/\bredémarrer\b/gi,"restart"],
  [/\bredémarrage\b/gi,"restart"],
  [/\bnettoyer cache\b/gi,"clear cache"],
  [/\bnettoyer caches tous profils\b/gi,"clear cache for all profiles"],
  [/\bgestionnaire mots de passe\b/gi,"password manager"],
  [/\beffacer données navigateur\b/gi,"clear browsing data"],
  [/\bversion et canal\b/gi,"version and channel"],
  [/\bdemander mise à jour\b/gi,"check for updates"],
  [/\bouvrir réparation Windows\b/gi,"open Windows repair"],
  [/\bversions\b/gi,"versions"],
  [/\bprocessus\b/gi,"processes"],
  [/\bprofils\b/gi,"profiles"],
  [/\bcompléments\b/gi,"add-ins"],
  [/\bcomptes\b/gi,"accounts"],
  [/\berreurs\b/gi,"errors"],
  [/\binstallées\b/gi,"installed"],
  [/\binstallés\b/gi,"installed"],
  [/\bconfigurés\b/gi,"configured"],
  [/\bphysiques\b/gi,"physical"],
  [/\bautomatiques\b/gi,"automatic"],
  [/\barrêtés\b/gi,"stopped"],
  [/\ben attente\b/gi,"pending"],
  [/\bfiabilité\b/gi,"reliability"],
  [/\brésolution\b/gi,"resolution"],
  [/\bpasserelle\b/gi,"gateway"],
  [/\butilisateur\b/gi,"user"],
  [/\blocales\b/gi,"local"],
  [/\blocaux\b/gi,"local"],
  [/\blocale\b/gi,"local"],
  [/\blocal\b/gi,"local"],
  [/\bsignés\b/gi,"signed"],
  [/\bcertificats\b/gi,"certificates"],
  [/\benregistrements\b/gi,"enrollment records"],
  [/\bmenaces\b/gi,"threats"],
  [/\bimprimantes\b/gi,"printers"],
  [/\bfile d'attente\b/gi,"print queue"],
  [/\bfiles d'attente\b/gi,"print queues"],
  [/\bcorrectifs\b/gi,"updates"],
  [/\bhistorique\b/gi,"history"],
  [/\bdéclencher\b/gi,"trigger"],
  [/\bbatterie\b/gi,"battery"],
  [/\blecteurs mappés\b/gi,"mapped drives"],
  [/\bidentifiants enregistrés\b/gi,"saved credentials"],
  [/\bnom machine\b/gi,"computer name"],
  [/\bcartes actives\b/gi,"active adapters"],
  [/\bcartes réseau\b/gi,"network adapters"],
  [/\brenouveler DHCP\b/gi,"renew DHCP lease"],
  [/\bvoisins IPv4\b/gi,"IPv4 neighbors"],
  [/\bespace libre\b/gi,"free space"],
  [/\brequis\b/gi,"required"],
  [/\bétat\b/gi,"status"],
  [/\bpériphériques\b/gi,"devices"],
  [/\bmatériel\b/gi,"hardware"],
  [/\brapide\b/gi,"quick"],
  [/\bassistance\b/gi,"assistance"],
  [/\bsauvegarder favoris\b/gi,"back up bookmarks"],
  [/\btaille des caches\b/gi,"cache sizes"],
  [/\bnavigateurs\b/gi,"browsers"],
  [/\bréseau\b/gi,"network"],
  [/\bsystème\b/gi,"system"],
  [/\bsécurité\b/gi,"security"],
  [/\blecture\b/gi,"read-only"],
  [/\bfaible\b/gi,"low"],
  [/\bmoyen\b/gi,"medium"],
  [/\bélevé\b/gi,"high"]
 ];
 for(const [re,to] of reps)s=s.replace(re,to);
 return s.replace(/\s{2,}/g," ").trim();
}

function localizeDataItem(x){
 if(!x||state.lang!=="en")return x;
 const y={...x};
 for(const k of ["name","description","category","rights","risk","method","expected","validation","check","escalation","actionType"]){
   const en=x[k+"_en"];
   y[k]=(en!=null&&String(en).trim()!=="")?String(en):autoEnFinal(x[k]);
 }
 if(x.webCategory)y.webCategory=catLabel(x.webCategory);
 return y;
}

// Safe formal wording: do not use ASCII word-boundary replacements that can corrupt "êtes".
function formalizeTemplateText(text){
 let t=normalizeTemplateText(text);
 const rules=[
  [/(^|[\s(])Peux-tu(?=$|[\s,.;:!?])/g,"$1Pouvez-vous"],
  [/(^|[\s(])peux-tu(?=$|[\s,.;:!?])/g,"$1pouvez-vous"],
  [/(^|[\s(])Tu peux(?=$|[\s,.;:!?])/g,"$1Vous pouvez"],
  [/(^|[\s(])tu peux(?=$|[\s,.;:!?])/g,"$1vous pouvez"],
  [/(^|[\s(])ton(?=$|[\s,.;:!?])/g,"$1votre"],
  [/(^|[\s(])Ton(?=$|[\s,.;:!?])/g,"$1Votre"],
  [/(^|[\s(])ta(?=$|[\s,.;:!?])/g,"$1votre"],
  [/(^|[\s(])Ta(?=$|[\s,.;:!?])/g,"$1Votre"],
  [/(^|[\s(])tes(?=$|[\s,.;:!?])/g,"$1vos"],
  [/(^|[\s(])Tes(?=$|[\s,.;:!?])/g,"$1Vos"],
  [/(^|[\s(])toi(?=$|[\s,.;:!?])/g,"$1vous"],
  [/(^|[\s(])N['’]hésite pas(?=$|[\s,.;:!?])/g,"$1N’hésitez pas"],
  [/(^|[\s(])n['’]hésite pas(?=$|[\s,.;:!?])/g,"$1n’hésitez pas"]
 ];
 for(const [re,to] of rules)t=t.replace(re,to);
 return t;
}

// Communications stay generic: no ticket number field, no import/export.
function preparedTemplate(t){
 const v=localizeTemplate(t);
 const subject=formalizeTemplateText(v&&v.subject||"");
 const body=formalizeTemplateText(v&&v.content||"");
 const shareBody=decorateTemplatePlainText(body);
 const subjectPrefix=state.lang==="en"?"Subject: ":"Objet : ";
 return {subject,body,full:(subject?subjectPrefix+subject+"\n\n":"")+shareBody,name:v&&v.name||""};
}

function communications(){
 const raw=allTemplates();
 let all=raw.map(localizeTemplate);
 let ts=filterItems(all,["name","category","subject","content"]);
 if(templateFilter!=="Tous")ts=ts.filter(t=>(t._categoryKey||t.category)===templateFilter);
 const cs=[...new Set(raw.map(x=>x._categoryKey||x.category))].sort();
 let actionCards=filterItems(
   pocketActions().filter(x=>x.webCategory==="Communications").map(localizeDataItem),
   ["name","description","method","command","script","category"]
 );
 return '<div class="toolbar communication-topbar">'+
 '<button class="btn primary" onclick="newTemplate()">'+ui("+ Créer un template")+'</button>'+
 '<span class="badge">'+ts.length+' '+(state.lang==="en"?"template(s)":"modèle(s)")+'</span></div>'+
 '<div class="toolbar"><button class="btn" onclick=\'setTemplateFilter("Tous")\'>'+ui("Tous")+'</button>'+
 cs.map(c=>'<button class="btn" onclick=\'setTemplateFilter('+JSON.stringify(c)+')\'>'+esc(templateCategoryLabel(c))+'</button>').join("")+'</div>'+
 (actionCards.length?'<div class="section-title">'+ui("Actions Communication")+'</div><div class="grid">'+actionCards.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">'+ui("Modèles corporate")+'</div><div class="grid">'+
 (ts.map(templateCard).join("")||'<div class="empty">'+ui("Aucun template trouvé.")+'</div>')+
 '</div>';
}

/* ===== FINAL COMPLETE ENGLISH UI COVERAGE ===== */
Object.assign(UI_EN,{
 "Copier rapport":"Copy report",
 "Vider":"Clear",
 "Rapport vide.":"Empty report.",
 "Rapport local IT Pocket":"Local IT Pocket report",
 "Template dupliqué":"Template duplicated",
 "Supprimer ce template personnel ?":"Delete this personal template?",
 "Partage indisponible sur ce navigateur. Le contenu n’a pas pu être copié.":"Sharing is unavailable in this browser. The content could not be copied.",
 "Fichier de templates invalide.":"Invalid template file.",
 "Copier commande / méthode":"Copy command / method",
 "Copier la fiche":"Copy sheet",
 "Aucune action trouvée.":"No action found.",
 "Exécution Windows : copier la commande":"Windows execution: copy the command"
});

const TECH_CATEGORY_EN_FINAL={
 "Accueil":"Home","Communications":"Communications","Portails":"Portals","Système":"System",
 "Réseau & Accès distant":"Network & Remote Access","Microsoft 365":"Microsoft 365","Navigateurs":"Browsers",
 "Applications":"Applications","Périphériques & Pilotes":"Devices & Drivers","Sécurité Windows":"Windows Security",
 "Intune / Entra / SCCM":"Intune / Entra / SCCM","Windows Update":"Windows Update","Outils Support":"Support Tools",
 "Office / M365":"Office / M365","OneDrive":"OneDrive","Poste Windows":"Windows Device",
 "Processus & Services":"Processes & Services","Profil & Comptes":"Profiles & Accounts","Périphériques":"Devices",
 "Réseau":"Network","Sécurité":"Security","Matériel":"Hardware","Impression":"Printing",
 "Assistance distante":"Remote Assistance","Disque & Stockage":"Disk & Storage","Intune / Entra":"Intune / Entra",
 "Applications & Winget":"Applications & Winget","Navigateurs • Général":"Browsers • General",
 "Navigateurs • Edge":"Browsers • Edge","Navigateurs • Chrome":"Browsers • Chrome","Navigateurs • Firefox":"Browsers • Firefox"
};
function looksFrenchTechnicalText(v){
 const s=String(v||"");
 return /[àâäçéèêëîïôöùûüÿœ]|\b(?:sans|avec|puis|lorsque|afin|bloqué|compléments|volet|fichiers|dossier|poste|réseau|sécurité|registre|nettoie|démarre|termine|supprime|réinitialise|sélectionne|génère|déclenche|sauvegarde|détecte|renouvelle|filtre|disponible|avant|après|uniquement|certains|certaines|ancien|ancienne|locaux|ciblés|documents|classeurs|présentation|impressions|ressources|éléments|gestionnaire|officiel|professionnel|résumé|fiabilité|identité|matériel|événements|capacité|récupère|analyse|configurées|élévation|icône|éditeur|chemin|collecte|équipe|navigateurs|rôle|bibliothèque|personnalisés|serveurs|routeurs|switchs|anomalies|proposées|impression|détaillées|stratégies|niveau|modèle|rechercher|copier|créer|dupliquer|nouveau|isoler|relance)\b/i.test(s);
}
function technicalProductName(x){
 const s=[x&&x.name,x&&x.name_en,x&&x.category,x&&x.category_en].filter(Boolean).join(" ");
 const hits=s.match(/Outlook|OneDrive|Teams|Word|Excel|PowerPoint|Edge|Chrome|Firefox|Office|Windows|Intune|Entra|SCCM|BitLocker|Defender|TPM|Winget|VPN|RDP|DNS|DHCP|BIOS|Graph|MFA|Bluetooth|Citrix/gi)||[];
 return [...new Set(hits)].join(" / ");
}
function fallbackEnglishTechnical(x,field,value){
 const src=String(value||"");
 if(field==="category"||field==="webCategory") return TECH_CATEGORY_EN_FINAL[src]||src;
 if(field==="rights"){
   if(/admin/i.test(src))return "Administrator";
   if(/compte professionnel/i.test(src))return "Work account";
   return "User";
 }
 if(field==="risk"){
   if(/élev|high/i.test(src))return "High impact. Review the action carefully before running it.";
   if(/moyen|medium/i.test(src))return "Medium impact. Save current work before running the action.";
   if(/lecture/i.test(src))return "Read-only";
   return "Low impact.";
 }
 const product=technicalProductName(x)||TECH_CATEGORY_EN_FINAL[x&&x.category]||"IT";
 const original=[x&&x.name,x&&x.description,x&&x.method].filter(Boolean).join(" ");
 if(field==="name"){
   if(/mode sans échec/i.test(original))return product+" - Safe mode";
   if(/forcer fermeture|fin de tâche/i.test(original))return product+" - Force close";
   if(/redémarr/i.test(original))return product+" - Restart";
   if(/réinitial|reset/i.test(original))return product+" - Reset";
   if(/répar/i.test(original))return product+" - Repair";
   if(/netto|cache|purge/i.test(original))return product+" - Cleanup";
   if(/diagnostic|état|inventaire|résumé|info|version|liste|affiche|contrôle|test/i.test(original))return product+" - Diagnostic";
   if(/ouvrir|lancer/i.test(original))return product+" - Open";
   return product+" - Support action";
 }
 if(field==="description"){
   if(/mode sans échec/i.test(original))return "Starts "+product+" in safe mode to isolate add-in or profile issues.";
   if(/forcer fermeture|fin de tâche|bloqué/i.test(original))return "Stops "+product+" when it is unresponsive.";
   if(/redémarr/i.test(original))return "Closes and restarts "+product+".";
   if(/réinitial|reset/i.test(original))return "Resets the relevant "+product+" configuration.";
   if(/répar/i.test(original))return "Runs the available repair action for "+product+".";
   if(/netto|cache|purge/i.test(original))return "Performs a targeted cleanup for "+product+".";
   if(/diagnostic|état|inventaire|résumé|info|version|liste|affiche|contrôle|test/i.test(original))return "Displays or checks technical information for "+product+".";
   if(/ouvrir|lancer/i.test(original))return "Opens or starts "+product+".";
   return "Technical support action for "+product+".";
 }
 if(field==="method")return "Support procedure for "+product+".";
 if(field==="expected"||field==="validation"||field==="check")return "Verify the result after running the action.";
 if(field==="escalation")return "Escalate with the available technical context and collected results.";
 return src;
}
function localizeDataItem(x){
 if(!x||state.lang!=="en")return x;
 const y={...x};
 for(const k of ["name","description","category","rights","risk","method","expected","validation","check","escalation","actionType"]){
   let v=x[k+"_en"]!=null?String(x[k+"_en"]):String(x[k]||"");
   if(!v)continue;
   if(looksFrenchTechnicalText(v))v=fallbackEnglishTechnical(x,k,v);
   else if(k==="category")v=TECH_CATEGORY_EN_FINAL[v]||v;
   y[k]=v;
 }
 return y;
}
function copyReportPocket(){copy(report.join("\n"))}
function clearReportPocket(){report=[];localStorage.setItem("ssitReport","[]");render()}
function renderReport(){
 const empty=state.lang==="en"?"Empty report.":"Rapport vide.";
 return '<div class="toolbar"><button class="btn primary" onclick="copyReportPocket()">'+ui("Copier rapport")+'</button>'+
 '<button class="btn red" onclick="clearReportPocket()">'+ui("Vider")+'</button></div>'+
 '<pre class="code" style="max-height:none">'+esc(report.join("\n\n")||empty)+'</pre>';
}
function renderJournal(){
 const items=filterItems(pocketActions().filter(x=>x.webCategory==="Journal & Statistiques").map(localizeDataItem),["name","description","method","command","script","category"]);
 return (items.length?'<div class="section-title">Actions</div><div class="grid">'+items.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">'+(state.lang==="en"?"Local IT Pocket report":"Rapport local IT Pocket")+'</div>'+renderReport();
}
function typeToolbar(){
 return '<div class="type-filter"><button class="btn" onclick="setTypeFilter(&quot;Tous&quot;)">'+ui("Tous")+'</button>'+
 '<button class="btn" onclick="setTypeFilter(&quot;Diagnostic&quot;)">🩺 Diagnostic</button>'+
 '<button class="btn" onclick="setTypeFilter(&quot;Information&quot;)">ℹ Information</button>'+
 '<button class="btn" onclick="setTypeFilter(&quot;Action&quot;)">⚡ Action</button></div>';
}
function renderAllActions(){
 const items=filterItems(pocketActions().map(localizeDataItem),["name","description","command","script","category","webCategory"]);
 return '<div class="toolbar slimbar"><span class="badge">'+items.length+' '+(state.lang==="en"?"script(s) / action(s)":"script(s) / action(s)")+'</span></div>'+
 '<div class="grid">'+(items.map(actionCard).join("")||'<div class="empty">'+(state.lang==="en"?"No script found.":"Aucun script trouvé.")+'</div>')+'</div>';
}
function tools(){
 const items=filterItems((D.commands||[]).map(localizeDataItem),["name","description","command","category","shell"]);
 return '<div class="toolbar slimbar"><span class="badge">'+items.length+' '+(state.lang==="en"?"command(s)":"commande(s)")+'</span></div>'+
 '<div class="grid">'+(items.map(commandCard).join("")||'<div class="empty">'+(state.lang==="en"?"No command found.":"Aucune commande trouvée.")+'</div>')+'</div>';
}
function duplicateTemplate(ref){
 const t=getTemplateByRef(ref);if(!t)return;
 const v=localizeTemplate({...t,_categoryKey:t.category});
 custom.push({...t,name:(v.name||"Template")+(state.lang==="en"?" - copy":" - copie"),custom:true});
 save();toast(state.lang==="en"?"Template duplicated":"Template dupliqué");render();
}
async function shareText(title,text){
 const subject=String(title||"IT Pocket"),full=String(text||"");
 let nativeError=null;
 if(typeof navigator!=="undefined"&&typeof navigator.share==="function"){
   try{
     if(full.length<=12000){await navigator.share({title:subject,text:full});return}
     const f=makeTextShareFile(subject,full);
     if(f&&typeof navigator.canShare==="function"){
       const payload={title:subject,text:state.lang==="en"?"Full IT Pocket content attached.":"Contenu complet IT Pocket en pièce jointe.",files:[f]};
       if(navigator.canShare(payload)){await navigator.share(payload);return}
     }
     await navigator.share({title:subject,text:full});return;
   }catch(e){if(e&&e.name==="AbortError")return;nativeError=e}
 }
 try{
   await copy(full);
   toast(state.lang==="en"?"Native sharing unavailable: content copied":"Partage natif indisponible : contenu copié");
   if(nativeError)console.warn("IT Pocket share fallback",nativeError);
 }catch(e){
   console.error("IT Pocket share failed",e);
   alert(state.lang==="en"?"Sharing is unavailable in this browser. The content could not be copied.":"Partage indisponible sur ce navigateur. Le contenu n’a pas pu être copié.");
 }
}
async function openOutlookText(title,text){
 const subject=String(title||"IT Pocket"),body=String(text||"");
 const encSubject=encodeURIComponent(subject),encBody=encodeURIComponent(body);
 const isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent||"");
 if(encBody.length>14000&&navigator.share){
   const f=makeTextShareFile(subject,body);
   if(f&&navigator.canShare){
     const payload={title:subject,text:state.lang==="en"?"Full IT Pocket sheet attached. Choose Outlook.":"Fiche IT Pocket complète en pièce jointe. Choisir Outlook.",files:[f]};
     try{if(navigator.canShare(payload)){await navigator.share(payload);return}}catch(e){if(e&&e.name==="AbortError")return}
   }
 }
 const mailto="mailto:?subject="+encSubject+"&body="+encBody;
 if(isMobile){
   const outlook="ms-outlook://compose?subject="+encSubject+"&body="+encBody,before=Date.now();
   window.location.href=outlook;
   setTimeout(()=>{if(!document.hidden&&Date.now()-before<2500)window.location.href=mailto},900);
 }else{
   window.location.href=mailto;
 }
}
function applyUiLanguage(){
 document.documentElement.lang=state.lang==="en"?"en":"fr";
 const search=$("#search");if(search)search.placeholder=state.lang==="en"?"Search everywhere...":"Rechercher partout...";
 const theme=$("#theme");if(theme)theme.textContent="☀/☾ "+(state.lang==="en"?"Theme":"Thème");
 const lang=$("#lang");if(lang)lang.textContent=state.lang==="en"?"English • FR":"Français • EN";
 const top=$("#scrollTopBtn");if(top&&top.setAttribute)top.setAttribute("aria-label",state.lang==="en"?"Back to top":"Remonter en haut");
 document.querySelectorAll("button,.btn,label.btn,.section-title,.template-subject span").forEach(el=>{
   const raw=(el.textContent||"").trim();
   if(state.lang==="en"&&UI_EN[raw])el.textContent=UI_EN[raw];
 });
}


function newLink(ref=null){
 let source=ref?getLinkByRef(ref):null;
 let p=source?{...source,_categoryKey:source.category}:{name:"",category:state.lang==="en"?"Favorites":"Favoris",url:"https://"};
 if(source&&state.lang==="en")p=localizePortal(p);
 $("#content").innerHTML='<div class="card"><h3>'+ui(ref?"Modifier le lien":"Ajouter un lien favori")+'</h3><div class="editor">'+
 '<div><div class="meta">'+ui("Nom")+'</div><input id="lname" value="'+esc(p.name||"")+'"></div>'+
 '<div><div class="meta">'+ui("Catégorie")+'</div><input id="lcat" value="'+esc(p.category||(state.lang==="en"?"Favorites":"Favoris"))+'"></div>'+
 '<div class="full"><div class="meta">URL</div><input id="lurl" value="'+esc(p.url||"https://")+'"></div>'+
 '<div class="full actions"><button class="btn primary" onclick=\'saveLink('+JSON.stringify(ref||"")+')\'>'+ui("Enregistrer")+'</button>'+
 '<button class="btn" onclick="render()">'+ui("Annuler")+'</button></div></div></div>';
}


/* ===== IT POCKET BILINGUAL TEMPLATE SAFETY + TICKET CONTEXT ===== */
let ticketRef=String(localStorage.getItem("itpTicketRef")||"").trim();
function setTicketRef(v){
 ticketRef=String(v||"").trim();
 try{localStorage.setItem("itpTicketRef",ticketRef)}catch(_){}
}
function applyTemplateContext(text){
 let s=String(text||"");
 if(!ticketRef)return s;
 const ref=ticketRef;
 s=s.replace(/\[(?:N[°ºo]\s*)?(?:ticket|Ticket)\s*#?\]/g,ref);
 s=s.replace(/\[(?:RÉFÉRENCE|REFERENCE|Référence|Reference)\]/g,ref);
 s=s.replace(/\[(?:N[°ºo]|N° ticket|Ticket #)\]/g,ref);
 s=s.replace(/\b(ticket|demande|incident|request)\s+XX\b/gi,(m,k)=>k+" "+ref);
 return s;
}
function looksFrenchTemplateText(v){
 const s=String(v||"");
 return /[àâäçéèêëîïôöùûüÿœ]|\b(?:bonjour|merci|votre|vous|nous|pourriez|afin|concernant|retour|disponibilit|traitement|demande|incident|sujet|cordialement|clôture|problème|équipe|informatique|poursuivre|réinitial|connexion|compte|mot de passe|matériel|expédition|restitution|disponible|réseau|sécurité|collaborateur|application|poste|ordinateur|téléphone|rendez-vous|intervention|résolution|relance)\b/i.test(s);
}
function englishTemplateNameFromFrench(name){
 let s=String(name||"");
 const exact={
  "Teams - Message automatique support":"Teams - Automatic support message",
  "[Application / portail] - RESET MOT DE PASSE":"[Application / portal] - PASSWORD RESET",
  "Applications - [Application] hors périmètre service informatique":"Applications - [Application] outside IT Support scope",
  "Matériel - Compatibilité dock USB-C / adresse agence":"Hardware - USB-C dock compatibility / office address",
  "Modern environnement professionnel - Demande installation application":"Modern workplace - Application installation request",
  "Modern environnement professionnel - Installation application terminée":"Modern workplace - Application installation completed",
  "Modern environnement professionnel - Demande désinstallation application":"Modern workplace - Application uninstall request",
  "Modern environnement professionnel - Désinstallation terminée":"Modern workplace - Uninstallation completed",
  "Mail - Premier contact support":"Email - Initial support contact",
  "Mail - Confirmation de prise en compte":"Email - Request acknowledgement",
  "Mail - Intervention terminée":"Email - Intervention completed",
  "Mail - Information utilisateur":"Email - User information",
  "Mail - Demande de test utilisateur":"Email - User test request",
  "Mail - Relance simple":"Email - Follow-up",
  "Mail - Dernière relance":"Email - Final follow-up",
  "Rapport - Escalade N2/N3":"Report - N2/N3 escalation",
  "Phishing - Accusé de réception":"Phishing - Acknowledgement",
  "Phishing - Utilisateur a cliqué":"Phishing - User clicked",
  "Compte - Suspicion de compromission":"Account - Suspected compromise",
  "Blocage fichier / URL":"File / URL blocked",
  "Alerte antivirus":"Antivirus alert",
  "Demande d'exception sécurité":"Security exception request",
  "Mot de passe - Réinitialisé":"Password - Reset completed",
  "Accès - Demande de justification":"Access - Justification request",
  "Accès - Accord requis":"Access - Approval required",
  "Accès - Ajout effectué":"Access - Added",
  "Application - Demande d'installation":"Application - Installation request",
  "Application - Réinstallation proposée":"Application - Reinstallation proposed",
  "Arrivée - Préparation compte et poste":"Onboarding - Account and device preparation",
  "Escalade - Fournisseur":"Escalation - Vendor",
  "Escalade - Équipe infrastructure":"Escalation - Infrastructure team",
  "Escalade - Équipe sécurité":"Escalation - Security team",
  "Escalade - N3 avec chronologie":"Escalation - N3 with timeline",
  "Incident majeur - Accusé utilisateur":"Major incident - User notification",
  "Incident majeur - Mise à jour":"Major incident - Update",
  "Incident majeur - Service rétabli":"Major incident - Service restored",
  "Incident majeur - Contournement":"Major incident - Workaround",
  "Utilisateur injoignable":"User unavailable",
  "Escalade N2/N3":"N2/N3 escalation",
  "Mise à disposition matériel":"Equipment availability",
  "Alerte sécurité utilisateur":"User security alert"
 };
 if(exact[s])return exact[s];
 const rules=[
  [/Dernière relance avant clôture/gi,"Final follow-up before closure"],
  [/Clôture administrative/gi,"Administrative closure"],
  [/Clôture sans retour/gi,"Closure without response"],
  [/Premier contact/gi,"First contact"],
  [/Prise en charge/gi,"Acknowledgement"],
  [/Demande d'informations diagnostic/gi,"Diagnostic information request"],
  [/Demande d’informations incident/gi,"Incident information request"],
  [/Demande d'informations/gi,"Information request"],
  [/Informations complémentaires/gi,"Additional information"],
  [/Informations nécessaires/gi,"Required information"],
  [/Demande de disponibilité/gi,"Availability request"],
  [/Intervention à distance/gi,"Remote intervention"],
  [/En attente utilisateur/gi,"Waiting for user"],
  [/En attente équipe tierce/gi,"Waiting for third party"],
  [/En attente de traitement externe/gi,"Waiting for external processing"],
  [/Résolution temporaire \/ contournement/gi,"Temporary resolution / workaround"],
  [/Résolution proposée/gi,"Proposed resolution"],
  [/Résolution confirmée/gi,"Resolution confirmed"],
  [/Résolu \?/gi,"Resolved?"],
  [/Mauvaise catégorie/gi,"Wrong category"],
  [/Mauvais type de ticket/gi,"Wrong ticket type"],
  [/Doublon/gi,"Duplicate"],
  [/Hors périmètre/gi,"Out of scope"],
  [/Réinitialisation collaborateur \+ procédure/gi,"Employee reset + procedure"],
  [/Réinitialisation \+ méthodes d'authentification/gi,"Reset + authentication methods"],
  [/Réinitialisation effectuée/gi,"Reset completed"],
  [/Nouvelle méthode/gi,"New method"],
  [/Mot de passe \+ MFA réinitialisés/gi,"Password + MFA reset"],
  [/Mot de passe/gi,"Password"],
  [/Compte professionnel à régulariser/gi,"Work account correction required"],
  [/Compte environnement professionnel au lieu de compte professionnel/gi,"Work account correction required"],
  [/Déploiement de/gi,"Deployment of"],
  [/Déploiement/gi,"Deployment"],
  [/Préparation terminée/gi,"Preparation completed"],
  [/Préparation en cours/gi,"Preparation in progress"],
  [/PC prêt avant expédition \/ appel/gi,"PC ready before shipping / call"],
  [/PC prêt pour expédition/gi,"PC ready for shipping"],
  [/PC prêt et disponible/gi,"PC ready and available"],
  [/Colis prêt pour expédition/gi,"Parcel ready for shipping"],
  [/Expédition et suivi/gi,"Shipping and tracking"],
  [/Confirmation expédition/gi,"Shipping confirmation"],
  [/Expédition effectuée/gi,"Shipped"],
  [/Informations expédition/gi,"Shipping information"],
  [/Bonne réception à confirmer/gi,"Receipt confirmation"],
  [/Retrait au service informatique/gi,"Collection from IT Support"],
  [/Retrait disponible/gi,"Available for collection"],
  [/Mise à disposition complète/gi,"Full equipment availability"],
  [/Mise à disposition/gi,"Availability"],
  [/Accessoires disponibles/gi,"Accessories available"],
  [/Casque disponible/gi,"Headset available"],
  [/Chargeur disponible/gi,"Charger available"],
  [/Écran - Mise à disposition/gi,"Monitor - Availability"],
  [/Dock - Mise à disposition/gi,"Dock - Availability"],
  [/Casque - Mise à disposition/gi,"Headset - Availability"],
  [/Chargeur - Mise à disposition/gi,"Charger - Availability"],
  [/Retour ancien matériel/gi,"Return old equipment"],
  [/Retour ancien PC/gi,"Return old PC"],
  [/Restitution à organiser/gi,"Return to arrange"],
  [/Restitution matériel/gi,"Equipment return"],
  [/Rendez-vous première connexion/gi,"First sign-in appointment"],
  [/Proposition de créneau/gi,"Time slot proposal"],
  [/Prise de rendez-vous/gi,"Support appointment"],
  [/Confirmation de rendez-vous/gi,"Appointment confirmation"],
  [/Téléphone professionnel prêt/gi,"Work phone ready"],
  [/Rendez-vous préparation \/ remise/gi,"Preparation / handover appointment"],
  [/Remise Android terminée/gi,"Android handover completed"],
  [/iOS problème d'accès Microsoft/gi,"iOS Microsoft access issue"],
  [/Intune iOS accompagnement/gi,"Intune iOS assistance"],
  [/Intune Android accompagnement/gi,"Intune Android assistance"],
  [/Installation application terminée/gi,"Application installation completed"],
  [/Demande installation application/gi,"Application installation request"],
  [/Demande désinstallation application/gi,"Application uninstall request"],
  [/Désinstallation terminée/gi,"Uninstallation completed"],
  [/Installation planifiée/gi,"Scheduled installation"],
  [/Installation terminée/gi,"Installation completed"],
  [/Installation non autorisée/gi,"Installation not authorized"],
  [/Mise à jour requise/gi,"Update required"],
  [/Réinstallation proposée/gi,"Reinstallation proposed"],
  [/Licence manquante/gi,"Missing license"],
  [/Test Web demandé/gi,"Web test requested"],
  [/Nouveau profil proposé/gi,"New profile proposed"],
  [/Synchronisation/gi,"Synchronization"],
  [/Cache \/ redémarrage/gi,"Cache / restart"],
  [/Réparation/gi,"Repair"],
  [/Boîte partagée - Accès ajouté/gi,"Shared mailbox - Access added"],
  [/Premier diagnostic/gi,"Initial diagnosis"],
  [/Test autre réseau/gi,"Test another network"],
  [/Incident local ou général/gi,"Local or general incident"],
  [/Préparation compte et poste/gi,"Account and device preparation"],
  [/Matériel prêt/gi,"Equipment ready"],
  [/Checklist IT/gi,"IT checklist"],
  [/Retour matériel/gi,"Equipment return"],
  [/Utilisateur indisponible/gi,"User unavailable"],
  [/Test attendu/gi,"Awaiting test"],
  [/Équipe infrastructure/gi,"Infrastructure team"],
  [/Équipe sécurité/gi,"Security team"],
  [/N3 avec chronologie/gi,"N3 with timeline"],
  [/Accusé utilisateur/gi,"User notification"],
  [/Service rétabli/gi,"Service restored"],
  [/Information préalable/gi,"Advance notice"],
  [/Terminée/gi,"Completed"],
  [/Redémarrage requis/gi,"Restart required"],
  [/Fenêtre d'intervention/gi,"Maintenance window"],
  [/Je regarde/gi,"I am checking"],
  [/Besoin du poste/gi,"Device needed"],
  [/Test demandé/gi,"Test requested"],
  [/Redémarrage demandé/gi,"Restart requested"],
  [/Merci clôture/gi,"Closure confirmation"],
  [/Incident salle pris en charge/gi,"Meeting room incident acknowledged"],
  [/Salle de nouveau opérationnelle/gi,"Meeting room operational again"],
  [/Maintenance planifiée/gi,"Scheduled maintenance"],
  [/Test avant réunion importante/gi,"Pre-meeting technical test"],
  [/Configuration terminée/gi,"Configuration completed"],
  [/Poste prêt/gi,"Device ready"],
  [/Restitution et fermeture/gi,"Return and account closure"],
  [/Incident pris en charge/gi,"Incident acknowledged"],
  [/Relance utilisateur/gi,"User follow-up"],
  [/Escalade technique/gi,"Technical escalation"],
  [/Interruption de service/gi,"Service interruption"],
  [/Retour à la normale/gi,"Service restored"],
  [/Diagnostic synthétique/gi,"Diagnostic summary"],
  [/Incident récurrent/gi,"Recurring incident"],
  [/Intervention poste/gi,"Device intervention"],
  [/Rapport/gi,"Report"],
  [/Matériel/gi,"Hardware"],
  [/Réseau/gi,"Network"],
  [/Sécurité/gi,"Security"],
  [/Accès/gi,"Access"],
  [/Arrivée/gi,"Onboarding"],
  [/Départ/gi,"Offboarding"],
  [/Logiciel/gi,"Software"],
  [/Salle/gi,"Meeting room"],
  [/Téléphone/gi,"Phone"],
  [/Maintenance/gi,"Maintenance"],
  [/Changement/gi,"Change"],
  [/Mise à jour/gi,"Update"],
  [/Rendez-vous/gi,"Appointment"],
  [/Réinitialisation/gi,"Reset"],
  [/Procédure/gi,"Procedure"],
  [/Préparation/gi,"Preparation"],
  [/Expédition/gi,"Shipping"],
  [/Restitution/gi,"Return"],
  [/Installation/gi,"Installation"],
  [/Désinstallation/gi,"Uninstallation"],
  [/Relance/gi,"Follow-up"],
  [/Clôture/gi,"Closure"],
  [/Demande/gi,"Request"],
  [/problème/gi,"issue"],
  [/nécessaire/gi,"required"],
  [/disponible/gi,"available"],
  [/effectuée/gi,"completed"],
  [/ajouté/gi,"added"],
  [/général/gi,"general"],
  [/planifiée/gi,"scheduled"],
  [/organiser/gi,"arrange"],
  [/suivi/gi,"tracking"],
  [/compatibilité/gi,"compatibility"],
  [/adresse agence/gi,"office address"],
  [/remplacement/gi,"replacement"],
  [/validé/gi,"approved"],
  [/compte/gi,"account"],
  [/professionnel/gi,"work"],
  [/réception/gi,"receipt"],
  [/casque/gi,"headset"],
  [/chargeur/gi,"charger"],
  [/écran/gi,"monitor"]
 ];
 for(const [re,to] of rules)s=s.replace(re,to);
 return s.replace(/\s{2,}/g," ").trim();
}
function fallbackEnglishTemplate(t){
 const n=String(t&&t.name||"").toLowerCase();
 const subject=englishTemplateNameFromFrench(t&&t.subject||t&&t.name||"IT Support");
 const hello="Hello [First name],\n\n", close="\n\nKind regards,\nIT Support";

 if(/mauvais type de ticket|wrong ticket type/.test(n))return {subject,content:hello+"This request was submitted under the wrong ticket type.\n\nPlease create an INCIDENT ticket through the support portal so it can be routed to the appropriate team.\n\n[Support portal]"+close};
 if(/en attente utilisateur|waiting for user/.test(n))return {subject,content:hello+"Your ticket is currently waiting for your reply.\n\nPlease send the requested information or your availability so that we can continue processing the ticket."+close};
 if(/en attente équipe tierce|en attente de traitement externe|waiting for third party|waiting for external/.test(n))return {subject,content:hello+"Your ticket requires action from another team or provider.\n\nThe available diagnostic information has been forwarded and we will keep you informed of progress."+close};
 if(/mauvaise catégorie|wrong category/.test(n))return {subject,content:hello+"The request was submitted in a category that does not match the identified need.\n\nThe ticket will be redirected to the appropriate category or team."+close};
 if(/doublon|duplicate/.test(n))return {subject,content:hello+"This ticket duplicates an existing request.\n\nTo avoid parallel processing, follow-up will continue on ticket [Ticket #]."+close};
 if(/hors périmètre|out of scope/.test(n))return {subject,content:hello+"After review, this request is outside the scope of this IT Support team.\n\nPlease contact [Team / provider / service] for further assistance."+close};

 if(/message automatique support|automatic support message/.test(n))return {subject,content:"Hello,\n\nThank you for your message.\n\nThis is an automatic response. I am currently unavailable to process support requests through Teams.\n\nFor any support request or incident, please open a ticket through the support portal:\n\n[Support portal]\n\nFor urgent matters only, contact the support hotline at [Support hotline] during IT Support hours.\n\nThank you for your understanding."};
 if(/phishing/.test(n))return {subject,content:hello+"Thank you for reporting this suspicious message.\n\n• Do not click any link or open any additional attachment.\n• In Outlook, use Report Message > Phishing when available.\n• If you entered a password or approved an MFA request, contact IT Support immediately."+close};
 if(/suspicion de compromission|security.*compromise|compromission/.test(n))return {subject,content:hello+"A security verification is required for your account.\n\nAs a precaution, active sessions or authentication methods may be reset. Please remain available to verify your identity and sign in again."+close};
 if(/blocage fichier|file.*url|url.*block/.test(n))return {subject,content:hello+"Access to [File / URL / application] is being blocked by a security control.\n\nPlease provide:\n• the exact file name or URL;\n• a screenshot of the block message;\n• the related business need.\n\nThe request can then be reviewed."+close};
 if(/alerte antivirus|antivirus alert/.test(n))return {subject,content:hello+"A security alert has been detected on [Device].\n\nPlease limit use of the device and do not power it off unless instructed by IT Support while checks are in progress."+close};
 if(/exception sécurité|security exception/.test(n))return {subject,content:hello+"To review a security exception, please provide:\n• the application or URL;\n• the business justification;\n• the affected users;\n• the required duration;\n• the impact if the exception is not approved.\n\nThe request can then be submitted for validation."+close};

 if(/mfa|authenticator/.test(n))return {subject,content:hello+"Your multi-factor authentication (MFA) settings have been reset or require reconfiguration.\n\n1. Open https://aka.ms/mfasetup\n2. Add an authentication method.\n3. Select Microsoft Authenticator if required.\n4. Scan the QR code with the mobile application.\n5. Complete the validation test.\n\n⚠️ If the registration fails, contact IT Support."+close};
 if(/mot de passe|password/.test(n))return {subject,content:hello+"Your password has been reset.\n\nUse the temporary password provided through the approved secure channel, then set a new password that complies with your organization's security policy.\n\nIf you experience any issue, contact IT Support."+close};

 if(/accès - demande de justification|access.*justification/.test(n))return {subject,content:hello+"To process your access request for [Resource], please provide:\n• the business need;\n• the required access level;\n• the duration if access is temporary;\n• the relevant manager or approver."+close};
 if(/accord requis|approval required/.test(n))return {subject,content:hello+"Access to [Resource] requires prior approval from [Manager / owner].\n\nProcessing will continue once the approval is received."+close};
 if(/accès - ajout effectué|access.*added/.test(n))return {subject,content:hello+"Access to [Resource] has been added.\n\nA short propagation delay may be required. Please sign out and sign back in before testing."+close};
 if(/boîte partagée|shared mailbox/.test(n))return {subject,content:hello+"Access to the shared mailbox [Mailbox name] has been added or corrected.\n\nPlease restart Outlook and allow time for the change to propagate before testing."+close};

 if(/mobile - téléphone professionnel prêt|work phone ready/.test(n))return {subject,content:hello+"Your work phone is ready.\n\nPlease send us your availability so that we can arrange the handover and initial configuration."+close};
 if(/mobile - rendez-vous préparation|handover appointment/.test(n))return {subject,content:hello+"Your new mobile device is available.\n\nPlease send us your availability so that we can schedule the handover and configuration. Allow approximately 30 minutes."+close};
 if(/remise android terminée|android handover completed/.test(n))return {subject,content:hello+"Your Android work phone has been handed over with the planned accessories.\n\nPlease verify Company Portal, the work profile and access to your work applications."+close};
 if(/ios.*accès microsoft|ios microsoft access/.test(n))return {subject,content:hello+"We will check your Microsoft access on iOS.\n\nPlease make sure the affected Microsoft applications are up to date. IT Support may need to remove the previous registration and reconnect the work account."+close};
 if(/intune ios|intune android/.test(n))return {subject,content:hello+"IT Support can assist with enrolling your mobile device in Intune.\n\nPlease have your phone, work password and MFA method available. We will verify Company Portal, device management and access to work applications."+close};

 if(/mail - confirmation de prise en compte|confirmation of receipt/.test(n))return {subject,content:hello+"Your request regarding [Subject] has been received.\n\nWe will contact you again as soon as the analysis progresses."+close};
 if(/mail - proposition de créneau|time slot proposal/.test(n))return {subject,content:hello+"We propose an intervention on [Date] at [Time] regarding [Subject].\n\nPlease confirm whether this time slot works for you."+close};
 if(/mail - intervention terminée|intervention completed/.test(n))return {subject,content:hello+"The intervention regarding [Subject] is complete.\n\nActions performed:\n• [Action 1]\n• [Action 2]\n• [Action 3]\n\nPlease confirm that everything is working correctly."+close};
 if(/mail - information utilisateur|user information/.test(n))return {subject,content:hello+"For your information: [Message / change / instruction].\n\nNo action is required unless you notice an issue."+close};
 if(/mail - demande de test utilisateur|user test request/.test(n))return {subject,content:hello+"An action has been performed on [Application / device / account].\n\nPlease perform the following test: [Requested test] and send us the result."+close};

 if(/proxy|accès web|web access/.test(n))return {subject,content:hello+"For the web access issue, please send the exact website address and a screenshot of the message displayed.\n\nPlease also confirm whether other websites are working normally."+close};

 if(/maintenance - information préalable|advance notice/.test(n))return {subject,content:"Hello,\n\nMaintenance is scheduled for [Service / application / equipment].\n\nPeriod: [Date / window]\nPossible impact: [Impact]\nUser action: [Action if required]\n\nA confirmation will be sent once the work is complete.\n\nKind regards,\nIT Support"};
 if(/maintenance - terminée|maintenance.*completed/.test(n))return {subject,content:"Hello,\n\nMaintenance on [Service] has been completed.\n\nValidation checks are successful and the service is available. Please report any remaining issue.\n\nKind regards,\nIT Support"};
 if(/changement - redémarrage requis|restart required/.test(n))return {subject,content:hello+"A change has been applied to your device or account and a restart is required to complete it.\n\nPlease save your work and restart the computer."+close};
 if(/changement - fenêtre d'intervention|maintenance window/.test(n))return {subject,content:hello+"An intervention is required on [Device / service].\n\nEstimated duration: [Duration]\nImpact: [Impact]\nPreparation: [Close applications / save work / other]\n\nPlease confirm the selected time slot."+close};

 if(/mtr - incident salle|meeting room incident/.test(n))return {subject,content:hello+"The incident reported in meeting room [Room / floor] has been acknowledged.\n\nAffected equipment: [MTR / display / camera / microphone / speakers / console]\nSymptom: [Description]\n\nChecks are in progress and we will keep you informed."+close};
 if(/mtr - salle de nouveau opérationnelle|meeting room operational/.test(n))return {subject,content:"Hello,\n\nMeeting room [Room / floor] is operational again.\n\nChecks completed:\n• display and sharing;\n• camera;\n• microphones and audio;\n• Teams Rooms console;\n• test call.\n\nPlease report any new issue.\n\nKind regards,\nIT Support"};
 if(/mtr - maintenance planifiée|meeting room.*maintenance/.test(n))return {subject,content:"Hello,\n\nMaintenance is scheduled in meeting room [Room] on [Date] at [Time].\n\nThe room may be unavailable for approximately [Duration].\n\nPurpose: [update / equipment replacement / diagnosis / configuration].\n\nKind regards,\nIT Support"};
 if(/test avant réunion importante|pre-meeting technical test/.test(n))return {subject,content:hello+"A technical check has been completed for meeting room [Room] before your meeting.\n\nTests:\n• display / sharing;\n• camera;\n• microphones and audio;\n• Teams Rooms console;\n• test call.\n\nStatus: [OK / item to correct]."+close};
 if(/salle - demande d’informations incident|meeting room.*information request/.test(n))return {subject,content:hello+"To troubleshoot meeting room [Room], please provide:\n• the affected equipment;\n• the exact error message;\n• the approximate incident time;\n• whether all meetings are affected;\n• a photo of the display or console when possible."+close};

 if(/mise à jour - intervention planifiée|update.*scheduled/.test(n))return {subject,content:hello+"An update is scheduled on your computer on [Date / time].\n\nPlease save your work before the intervention. A restart may be required."+close};
 if(/utilisateur injoignable|user unavailable/.test(n))return {subject,content:hello+"We tried to contact you regarding your ticket but could not reach you.\n\nPlease send us a time slot when you are available so that processing can continue."+close};
 if(/alerte sécurité utilisateur|user security alert/.test(n))return {subject,content:"Hello,\n\nA security action is required for your device or account.\n\nDo not share your password and follow only the instructions provided by IT Support.\n\nRequested action: [Action]\n\nKind regards,\nIT Support"};
 if(/retour à la normale|service restored/.test(n))return {subject,content:"Hello,\n\n[Service] is operational again.\n\nYou can resume normal activity. Please report any persistent issue through the support portal.\n\nKind regards,\nIT Support"};

 if(/demande d'informations|information request|diagnostic/.test(n))return {subject,content:hello+"To continue the diagnosis, please provide the following information:\n\n• the exact error message;\n• a screenshot when possible;\n• the affected device name;\n• the steps required to reproduce the issue;\n• your availability if a remote session is required."+close};
 if(/dernière relance|final follow-up/.test(n))return {subject,content:hello+"We are following up again regarding your request.\n\nWithout a response, the ticket may be administratively closed. If assistance is still required, please reply with your availability or the requested information."+close};
 if(/relance|follow-up/.test(n))return {subject,content:hello+"We are following up regarding your request.\n\nPlease send us your feedback or your next available time slot so that we can continue the investigation."+close};
 if(/clôture|closure|résolu|resolution confirmed/.test(n))return {subject,content:hello+"The requested action has been completed and the service is now considered operational.\n\nPlease confirm that everything is working correctly. The request can then be closed."+close};
 if(/prise en charge|acknowledgement|premier contact|first contact/.test(n))return {subject,content:hello+"Your request has been received and is now being handled by IT Support.\n\nWe will contact you if additional information is required and will keep you informed of progress."+close};
 if(/disponibil|availability|rendez-vous|appointment/.test(n))return {subject,content:hello+"To continue with this request, please send us a time slot when you are available in front of the affected device.\n\nWe will confirm the intervention time once the slot is agreed."+close};
 if(/intervention à distance|remote intervention/.test(n))return {subject,content:hello+"We can continue the diagnosis remotely on the affected device.\n\nPlease save your current work and confirm when you are available for the remote intervention."+close};
 if(/expédition|shipping/.test(n))return {subject,content:hello+"Your equipment is ready for shipping or has been shipped.\n\nEquipment: [Equipment]\nCarrier: [Carrier]\nTracking number: [Tracking number]\n\nPlease confirm the delivery address when required and acknowledge receipt of the parcel."+close};
 if(/restitution|return/.test(n))return {subject,content:hello+"Please arrange the return of the following company equipment:\n\n• [PC]\n• [Charger]\n• [Dock / accessories]\n• [Phone if applicable]\n\nPlease confirm the planned return method and date."+close};
 if(/matériel|hardware|pc |casque|chargeur|dock|écran/.test(n))return {subject,content:hello+"Your requested equipment is being prepared or is now available.\n\nPlease confirm the required delivery or collection method and any relevant accessories."+close};
 if(/installation|déploiement|deployment|logiciel|application/.test(n))return {subject,content:hello+"The requested application action has been processed.\n\nApplication: [Application]\nDevice: [Device]\n\nPlease launch the application and confirm that it works correctly. A restart may be required."+close};
 if(/vpn|wi-fi|wifi|réseau|network/.test(n))return {subject,content:hello+"To continue the network diagnosis, please provide:\n\n• the network or VPN being used;\n• the exact error message;\n• whether Internet access works outside the VPN;\n• whether other nearby users are affected."+close};
 if(/outlook|teams|onedrive|office|microsoft 365/.test(n))return {subject,content:hello+"We are investigating the Microsoft 365 issue.\n\nPlease describe the exact symptom and confirm whether the issue also occurs in the web version when applicable. Save your work before any repair or restart action."+close};
 if(/onboarding|arrivée/.test(n))return {subject,content:"ONBOARDING\n\nEmployee: [Name]\nStart date: [Date]\nManager: [Manager]\n\nTo prepare:\n• user account;\n• workstation;\n• licenses;\n• groups and access;\n• email;\n• MFA;\n• applications;\n• accessories."};
 if(/offboarding|départ/.test(n))return {subject,content:"OFFBOARDING\n\nEmployee: [Name]\nDeparture date: [Date]\n\nTo process:\n• disable account;\n• revoke sessions;\n• handle MFA and licenses;\n• manage mailbox / OneDrive delegation;\n• recover PC, charger, dock, headset and phone."};
 if(/rapport|report|escalade|escalation/.test(n))return {subject,content:"IT SUPPORT REPORT\n\nTicket: [Ticket #]\nUser: [User]\nDevice: [Device]\nImpact: [Impact]\n\nIssue / observation:\n[Details]\n\nTests performed:\n• [Test 1]\n• [Test 2]\n\nActions performed:\n• [Action 1]\n• [Action 2]\n\nResult / next step:\n[Result]"};
 if(/incident majeur|major incident|interruption de service/.test(n))return {subject,content:"Hello,\n\nA general incident is currently affecting [Service]. The technical teams are investigating.\n\nImpact: [Impact]\nStart time: [Time]\nCurrent status: [Status]\nNext update: [Time / when new information is available]\n\nThank you for your understanding."};

 return {subject,content:hello+"This message concerns: "+englishTemplateNameFromFrench(t&&t.name||"IT support request")+".\n\nPlease reply with any information required to continue processing the request."+close};
}
function safeEnglishTemplate(t){
 const candidate={subject:String(t&&t.subject_en||""),content:String(t&&t.content_en||""),name:String(t&&t.name_en||"")};
 const bad=!candidate.content||looksFrenchTemplateText(candidate.content)||looksFrenchTemplateText(candidate.subject)||looksFrenchTemplateText(candidate.name);
 if(!bad)return candidate;
 const fb=fallbackEnglishTemplate(t);
 return {name:englishTemplateNameFromFrench(t&&t.name||"Template"),subject:fb.subject,content:fb.content};
}
function localizeTemplate(t){
 if(!t)return t;
 if(state.lang!=="en")return {...t,_categoryKey:t._categoryKey||t.category};
 const safe=safeEnglishTemplate(t);
 return {...t,name:safe.name||t.name,subject:safe.subject||t.subject,content:safe.content||t.content,_categoryKey:t._categoryKey||t.category,category:templateCategoryLabel(t._categoryKey||t.category)};
}
function preparedTemplate(t){
 const v=localizeTemplate(t);
 const originalSubject=String(v&&v.subject||"");
 const originalBody=String(v&&v.content||"");
 let subject=formalizeTemplateText(applyTemplateContext(originalSubject));
 let body=formalizeTemplateText(applyTemplateContext(originalBody));
const shareBody=decorateTemplatePlainText(body);
 const subjectPrefix=state.lang==="en"?"Subject: ":"Objet : ";
 return {subject,body,full:(subject?subjectPrefix+subject+"\n\n":"")+shareBody,name:v&&v.name||""};
}
function communications(){
 const raw=allTemplates(),all=raw.map(localizeTemplate);
 let ts=filterItems(all,["name","category","subject","content"]);
 if(templateFilter!=="Tous")ts=ts.filter(t=>(t._categoryKey||t.category)===templateFilter);
 const cs=[...new Set(raw.map(x=>x._categoryKey||x.category))].sort();
 let actionCards=filterItems(pocketActions().filter(x=>x.webCategory==="Communications").map(localizeDataItem),["name","description","method","command","script","category"]);
 return '<div class="toolbar communication-topbar">'+
 '<button class="btn primary" onclick="newTemplate()">'+ui("+ Créer un template")+'</button>'+
 '<span class="badge">'+ts.length+' '+(state.lang==="en"?"template(s)":"modèle(s)")+'</span></div>'+
 '<div class="toolbar"><button class="btn" onclick=\'setTemplateFilter("Tous")\'>'+ui("Tous")+'</button>'+
 cs.map(c=>'<button class="btn" onclick=\'setTemplateFilter('+JSON.stringify(c)+')\'>'+esc(templateCategoryLabel(c))+'</button>').join("")+'</div>'+
 (actionCards.length?'<div class="section-title">'+ui("Actions Communication")+'</div><div class="grid">'+actionCards.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">'+ui("Modèles corporate")+'</div><div class="grid">'+(ts.map(templateCard).join("")||'<div class="empty">'+ui("Aucun template trouvé.")+'</div>')+'</div>';
}
/* === IT Pocket iconography v1 === */
const ITP_TECH_LABELS={
 "Outlook":{fr:"Outlook",en:"Outlook"},"Word":{fr:"Word",en:"Word"},"Excel":{fr:"Excel",en:"Excel"},
 "PowerPoint":{fr:"PowerPoint",en:"PowerPoint"},"Teams":{fr:"Teams",en:"Teams"},"OneDrive":{fr:"OneDrive",en:"OneDrive"},
 "Microsoft 365":{fr:"Microsoft 365 / Office",en:"Microsoft 365 / Office"},"Edge":{fr:"Microsoft Edge",en:"Microsoft Edge"},
 "Chrome":{fr:"Google Chrome",en:"Google Chrome"},"Firefox":{fr:"Mozilla Firefox",en:"Mozilla Firefox"},
 "Intune":{fr:"Microsoft Intune",en:"Microsoft Intune"},"Entra":{fr:"Microsoft Entra ID",en:"Microsoft Entra ID"},
 "SCCM":{fr:"SCCM / Configuration Manager",en:"SCCM / Configuration Manager"},"Autopilot":{fr:"Windows Autopilot",en:"Windows Autopilot"},
 "Graph":{fr:"Microsoft Graph",en:"Microsoft Graph"},"Company Portal":{fr:"Company Portal",en:"Company Portal"},
 "Azure":{fr:"Microsoft Azure",en:"Microsoft Azure"},"Citrix":{fr:"Citrix",en:"Citrix"},"FortiClient":{fr:"FortiClient",en:"FortiClient"},
 "Ivanti":{fr:"Ivanti",en:"Ivanti"},"Zscaler":{fr:"Zscaler",en:"Zscaler"},"CrowdStrike":{fr:"CrowdStrike",en:"CrowdStrike"},
 "VPN":{fr:"VPN",en:"VPN"},"RDP":{fr:"Bureau à distance / RDP",en:"Remote Desktop / RDP"},
 "WiFi":{fr:"Wi‑Fi / Ethernet",en:"Wi‑Fi / Ethernet"},"Network":{fr:"Réseau Windows",en:"Windows Network"},
 "Windows":{fr:"Windows",en:"Windows"},"Processes":{fr:"Processus & Services",en:"Processes & Services"},
 "Storage":{fr:"Disque & Stockage",en:"Disk & Storage"},"Printing":{fr:"Impression",en:"Printing"},
 "AudioVideo":{fr:"Audio & Vidéo",en:"Audio & Video"},"Devices":{fr:"Périphériques",en:"Devices"},
 "Drivers":{fr:"Pilotes & BIOS",en:"Drivers & BIOS"},"Defender":{fr:"Microsoft Defender",en:"Microsoft Defender"},
 "BitLocker":{fr:"BitLocker",en:"BitLocker"},"TPMHello":{fr:"TPM & Windows Hello",en:"TPM & Windows Hello"},
 "Firewall":{fr:"Pare-feu",en:"Firewall"},"PowerShell":{fr:"PowerShell / Terminal",en:"PowerShell / Terminal"},
 "Support":{fr:"Outils support",en:"Support tools"}
};
function itpTechLabel(k){const x=ITP_TECH_LABELS[k];return x?(state.lang==="en"?x.en:x.fr):k}
function itpSvgIcon(label,extra){
 const s=String(label||"").toLowerCase();
 let body="";
 if(/accueil|home/.test(s))body='<path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9 21v-7h6v7"/>';
 else if(/communication|mail|message/.test(s))body='<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>';
 else if(/portail|portal|web/.test(s))body='<path d="M14 4h6v6"/><path d="m10 14 10-10"/><path d="M20 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"/>';
 else if(/système|system|windows tool/.test(s))body='<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>';
 else if(/réseau|network|browser|navigateurs/.test(s))body='<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/>';
 else if(/application/.test(s))body='<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>';
 else if(/périph|devices|driver|audio|video/.test(s))body='<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M9 20h6"/><path d="M12 16v4"/><path d="M7 9h10"/>';
 else if(/security|sécurité|defender|firewall/.test(s))body='<path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/>';
 else if(/bitlocker|lock|tpm|hello/.test(s))body='<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>';
 else if(/update/.test(s))body='<path d="M20 6v5h-5"/><path d="M4 18v-5h5"/><path d="M19 11a7 7 0 0 0-12-4L4 10"/><path d="M5 13a7 7 0 0 0 12 4l3-3"/>';
 else if(/support|tools|outil/.test(s))body='<path d="M14.7 6.3a4 4 0 0 0-5-5l2.1 2.1-3.5 3.5-2.1-2.1a4 4 0 0 0 5 5L19 17.6a2 2 0 1 1-2.8 2.8L8.4 12.6"/>';
 else if(/journal|chart|stat/.test(s))body='<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>';
 else if(/remote|rdp|vpn/.test(s))body='<rect x="3" y="4" width="14" height="11" rx="2"/><path d="M8 19h4"/><path d="M10 15v4"/><path d="m16 17 5-5"/><path d="M17 12h4v4"/>';
 else if(/printer|impression/.test(s))body='<path d="M7 8V3h10v5"/><rect x="5" y="14" width="14" height="7" rx="1"/><path d="M5 17H3v-7h18v7h-2"/>';
 else if(/storage|disque|stockage/.test(s))body='<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>';
 else if(/process|service/.test(s))body='<circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="m4.9 4.9 2.1 2.1"/><path d="m17 17 2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.9 19.1 2.1-2.1"/><path d="m17 7 2.1-2.1"/>';
 else if(/terminal|powershell/.test(s))body='<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M12 15h5"/>';
 else body='<circle cx="12" cy="12" r="8"/><path d="M12 8v8"/><path d="M8 12h8"/>';
 return '<span class="itp-svg-icon '+(extra||'')+'" aria-hidden="true" title="'+esc(label||"")+'"><svg viewBox="0 0 24 24" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+body+'</g></svg></span>';
}
function itpFluent(glyph,label,extra){return itpSvgIcon(label,extra)}
function itpBrandFallbackText(label){
 const s=String(label||"").toLowerCase();
 if(/outlook/.test(s))return "O";
 if(/\bword\b/.test(s))return "W";
 if(/excel/.test(s))return "X";
 if(/powerpoint/.test(s))return "P";
 if(/teams/.test(s))return "T";
 if(/onedrive/.test(s))return "1D";
 if(/edge/.test(s))return "E";
 if(/chrome/.test(s))return "C";
 if(/firefox/.test(s))return "F";
 if(/entra/.test(s))return "ID";
 if(/intune/.test(s))return "I";
 if(/sccm|configuration manager/.test(s))return "CM";
 if(/azure/.test(s))return "AZ";
 if(/powershell/.test(s))return "PS";
 if(/windows/.test(s))return "⊞";
 if(/microsoft/.test(s))return "MS";
 return String(label||"IT").replace(/[^A-Za-z0-9]/g,"").slice(0,2).toUpperCase()||"IT";
}
function itpBrand(slug,color,label,fallback){
 const src='https://cdn.simpleicons.org/'+slug+'/'+color;
 const fb=itpBrandFallbackText(label);
 return '<span class="itp-brand-wrap" title="'+esc(label||"")+'">'+
  '<img class="itp-brand-logo" src="'+src+'" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-flex\'">'+
  '<span class="itp-brand-fallback" aria-hidden="true">'+esc(fb)+'</span></span>';
}
function itpCategoryIcon(c,size){
 const cls=size==="home"?"itp-icon-home":size==="header"?"itp-icon-header":"itp-icon-nav";
 if(c==="Microsoft 365")return itpBrand("microsoft","5E5E5E","Microsoft 365","\uE71D");
 if(c==="Intune / Entra / SCCM")return itpBrand("microsoft","5E5E5E","Microsoft","\uE753");
 const m={
  "Accueil":["\uE80F","Accueil"],"Communications":["\uE715","Communications"],"Portails":["\uE8A7","Portails"],
  "Système":["\uE770","Système"],"Réseau & Accès distant":["\uE774","Réseau"],
  "Navigateurs":["\uE774","Navigateurs"],"Applications":["\uE71D","Applications"],
  "Périphériques & Pilotes":["\uE772","Périphériques"],"Sécurité Windows":["\uEA18","Sécurité Windows"],
  "Windows Update":["\uE895","Windows Update"],"Outils Support":["\uE90F","Outils Support"],
  "Toutes les actions":["\uE8FD","Toutes les actions"],"Journal & Statistiques":["\uE9D2","Journal"]
 };
 const x=m[c]||["\uE713",c];
 return itpFluent(x[0],x[1],cls);
}
function icon(c){return itpCategoryIcon(c,"nav")}
function itpBrandFromText(text){
 const s=String(text||"").toLowerCase();
 const defs=[
  [/\boutlook\b/,"microsoftoutlook","0078D4","Outlook","\uE715"],
  [/\bexcel\b/,"microsoftexcel","217346","Excel","\uE8B7"],
  [/\bpowerpoint\b|\bpowerpnt\b/,"microsoftpowerpoint","B7472A","PowerPoint","\uE8A5"],
  [/\bteams\b|\bmsteams\b/,"microsoftteams","6264A7","Teams","\uE716"],
  [/\bonedrive\b/,"microsoftonedrive","0078D4","OneDrive","\uE753"],
  [/\bword\b|\bwinword\b/,"microsoftword","2B579A","Word","\uE8A5"],
  [/\bedge\b/,"microsoftedge","0C59A4","Microsoft Edge","\uE774"],
  [/\bchrome\b/,"googlechrome","4285F4","Google Chrome","\uE774"],
  [/\bfirefox\b/,"firefoxbrowser","FF7139","Mozilla Firefox","\uE774"],
  [/\bentra\b/,"microsoft","5E5E5E","Microsoft Entra ID","\uE77B"],
  [/\bintune\b/,"microsoft","5E5E5E","Microsoft Intune","\uE772"],
  [/\bsccm\b|configuration manager/,"microsoft","5E5E5E","SCCM","\uE713"],
  [/\bautopilot\b/,"windows11","0078D4","Windows Autopilot","\uE770"],
  [/microsoft graph|\bgraph\b/,"microsoft","5E5E5E","Microsoft Graph","\uE8A7"],
  [/company portal|portail d.?entreprise/,"microsoft","5E5E5E","Company Portal","\uE71D"],
  [/\bazure\b/,"microsoftazure","0078D4","Microsoft Azure","\uE753"],
  [/\bpowershell\b/,"powershell","5391FE","PowerShell","\uE756"],
  [/\bwindows\b/,"windows11","0078D4","Windows","\uE770"],
  [/\bcitrix\b/,"citrix","452170","Citrix","\uE8CE"],
  [/\bforti(client|net)?\b|\bfortinet\b/,"fortinet","EE3124","Fortinet","\uEA18"],
  [/\bivanti\b|\bpulse secure\b/,"ivanti","5B2C83","Ivanti","\uE8CE"],
  [/\bzscaler\b/,"zscaler","1670F8","Zscaler","\uEA18"],
  [/\bcrowdstrike\b/,"crowdstrike","E01F3D","CrowdStrike","\uEA18"],
  [/\bgithub\b/,"github","6E7781","GitHub","\uE8A7"],
  [/\bcloudflare\b/,"cloudflare","F38020","Cloudflare","\uE753"],
  [/\bopenai\b|\bchatgpt\b/,"openai","10A37F","OpenAI","\uE8A7"],
  [/\bservicenow\b|service.?now/,"servicenow","81B5A1","ServiceNow","\uE8A7"],
  [/\bhp\b|hewlett.?packard/,"hp","0096D6","HP","\uE772"],
  [/\bdell\b/,"dell","0672CE","Dell","\uE772"],
  [/\blenovo\b/,"lenovo","E2231A","Lenovo","\uE772"]
 ];
 for(const d of defs)if(d[0].test(s))return itpBrand(d[1],d[2],d[3],d[4]);
 return "";
}
function itpSystemIconFromText(text){
 const s=String(text||"").toLowerCase();
 if(/bitlocker|chiffrement|encrypt/.test(s))return itpFluent("\uE72E","BitLocker","itp-icon-card");
 if(/defender|antivirus|sécurit|security/.test(s))return itpFluent("\uEA18","Security","itp-icon-card");
 if(/pare.?feu|firewall/.test(s))return itpFluent("\uEA18","Firewall","itp-icon-card");
 if(/\btpm\b|windows hello|empreinte|fingerprint/.test(s))return itpFluent("\uE72E","TPM / Windows Hello","itp-icon-card");
 if(/imprim|printer|print /.test(s))return itpFluent("\uE749","Printer","itp-icon-card");
 if(/wifi|wi-fi|ethernet|réseau|network|dns|dhcp|ping|tracert|ipconfig|route/.test(s))return itpFluent("\uE774","Network","itp-icon-card");
 if(/\bvpn\b|rdp|bureau à distance|remote desktop|quick assist|assistance rapide/.test(s))return itpFluent("\uE8CE","Remote access","itp-icon-card");
 if(/audio|micro|casque|haut.?parleur|speaker|camera|caméra|video|vidéo/.test(s))return itpFluent("\uE767","Audio / Video","itp-icon-card");
 if(/bluetooth|usb|périph|device|driver|pilote|bios|firmware/.test(s))return itpFluent("\uE772","Devices","itp-icon-card");
 if(/disque|disk|storage|stockage|winsxs|temp|cache/.test(s))return itpFluent("\uE7C3","Storage","itp-icon-card");
 if(/process|service|task|tâche|event|événement|journal|log/.test(s))return itpFluent("\uE90F","System tools","itp-icon-card");
 if(/update|mise à jour|\bkb\d+/.test(s))return itpFluent("\uE895","Windows Update","itp-icon-card");
 if(/application|winget|store|logiciel|software/.test(s))return itpFluent("\uE71D","Applications","itp-icon-card");
 if(/mail|message|communication|ticket|template/.test(s))return itpFluent("\uE715","Communication","itp-icon-card");
 if(/browser|navigateur|web|site|portail|portal|http/.test(s))return itpFluent("\uE774","Web","itp-icon-card");
 if(/powershell|terminal|cmd|commande|script/.test(s))return itpFluent("\uE756","Terminal","itp-icon-card");
 return itpFluent("\uE713","Windows tool","itp-icon-card");
}
function itpIconForItem(item){
 const text=[item&&item.name,item&&item.category,item&&item.webCategory,item&&item.description,item&&item.url,item&&item.command,item&&item.script].filter(Boolean).join(" ");
 return itpBrandFromText(text)||itpSystemIconFromText(text);
}
function itpTechKey(item,menu){
 const s=[item&&item.name,item&&item.category,item&&item.webCategory,item&&item.description,item&&item.command,item&&item.script].filter(Boolean).join(" ").toLowerCase();
 const tests=[
  ["Outlook",/\boutlook\b/],["Excel",/\bexcel\b/],["PowerPoint",/\bpowerpoint\b|\bpowerpnt\b/],["Teams",/\bteams\b|\bmsteams\b/],
  ["OneDrive",/\bonedrive\b/],["Word",/\bword\b|\bwinword\b/],["Edge",/\bedge\b/],["Chrome",/\bchrome\b/],["Firefox",/\bfirefox\b/],
  ["Intune",/\bintune\b/],["Entra",/\bentra\b/],["SCCM",/\bsccm\b|configuration manager/],["Autopilot",/\bautopilot\b/],
  ["Graph",/microsoft graph|\bgraph\b/],["Company Portal",/company portal|portail d.?entreprise/],["Azure",/\bazure\b/],
  ["Citrix",/\bcitrix\b/],["FortiClient",/\bforti(client|net)?\b|\bfortinet\b/],["Ivanti",/\bivanti\b|\bpulse secure\b/],
  ["Zscaler",/\bzscaler\b/],["CrowdStrike",/\bcrowdstrike\b/],["Defender",/\bdefender\b/],["BitLocker",/\bbitlocker\b/],
  ["TPMHello",/\btpm\b|windows hello/],["Firewall",/pare.?feu|firewall/],["RDP",/\brdp\b|bureau à distance|remote desktop/],
  ["VPN",/\bvpn\b/],["Printing",/imprim|printer|print /],["AudioVideo",/audio|micro|casque|speaker|camera|caméra|video|vidéo/],
  ["Drivers",/driver|pilote|bios|firmware/],["Devices",/bluetooth|usb|périph|device|matériel|hardware/],
  ["Storage",/disque|disk|storage|stockage|winsxs/],["Processes",/process|service|task|tâche|event|événement|journal|log/],
  ["PowerShell",/powershell|terminal|cmd|invite de commandes/],["WiFi",/wifi|wi-fi|ethernet/],
  ["Network",/réseau|network|dns|dhcp|ping|tracert|ipconfig|route/],["Windows",/\bwindows\b|système|system/]
 ];
 for(const t of tests)if(t[1].test(s))return t[0];
 if(menu==="Microsoft 365")return "Microsoft 365";
 if(menu==="Navigateurs")return "Support";
 if(menu==="Réseau & Accès distant")return "Network";
 if(menu==="Sécurité Windows")return "Defender";
 if(menu==="Périphériques & Pilotes")return "Devices";
 if(menu==="Intune / Entra / SCCM")return "Intune";
 if(menu==="Windows Update")return "Windows";
 if(menu==="Applications")return "Support";
 if(menu==="Outils Support")return "Support";
 return String(item&&item.category||catLabel(menu)||"Support");
}
const ITP_TECH_ORDER=["Outlook","Word","Excel","PowerPoint","Teams","OneDrive","Microsoft 365","Edge","Chrome","Firefox","Intune","Entra","SCCM","Autopilot","Company Portal","Graph","Azure","Citrix","FortiClient","Ivanti","Zscaler","CrowdStrike","VPN","RDP","WiFi","Network","Defender","BitLocker","TPMHello","Firewall","Printing","AudioVideo","Drivers","Devices","Storage","Processes","PowerShell","Windows","Support"];
function itpOrder(k){const i=ITP_TECH_ORDER.indexOf(k);return i<0?999:i}
function itpTitle(iconHtml,text,cls){
 return '<span class="itp-tech-title '+(cls||"")+'">'+iconHtml+'<span>'+esc(text)+'</span></span>';
}
function nav(){
 $("#nav").innerHTML=cats.map(c=>'<button class="navbtn '+(state.cat===c?"active":"")+'" onclick=\'openCat('+JSON.stringify(c)+')\'>'+itpTitle(itpCategoryIcon(c,"nav"),catLabel(c),"itp-nav-title")+'</button>').join("");
}
function tabs(){
 $("#tabs").innerHTML=state.tabs.map(c=>'<button class="tab '+(state.cat===c?"active":"")+'" onclick=\'openCat('+JSON.stringify(c)+')\'>'+itpCategoryIcon(c,"nav")+' <span>'+esc(catLabel(c))+'</span> <span class="tab-close" onclick=\'closeTab('+JSON.stringify(c)+',event)\'>×</span></button>').join("");
}
function home(){
 const descFr={
  "Communications":"Modèles et messages corporate.","Portails":"Portails, sites officiels, outils et favoris.",
  "Système":"Windows, diagnostic poste, performances et actions système.","Réseau & Accès distant":"IP, DNS, DHCP, VPN, RDP et connectivité.",
  "Microsoft 365":"Outlook, Word, Excel, PowerPoint, Teams, OneDrive et Office.","Navigateurs":"Edge, Chrome, Firefox : diagnostic, profils, cache et actions.",
  "Applications":"Applications installées, Winget, réparation et maintenance.","Périphériques & Pilotes":"Imprimantes, périphériques, pilotes, BIOS et matériel.",
  "Sécurité Windows":"Defender, BitLocker, TPM et sécurité locale.","Intune / Entra / SCCM":"Enrôlement, MDM, Entra, SCCM et accès Microsoft.",
  "Windows Update":"Mises à jour, KB et maintenance Windows.","Outils Support":"Assistance distante et outils utiles au support."
 };
 const descEn={
  "Communications":"Corporate messages and communication templates.","Portails":"Official portals, trusted tools and useful resources.",
  "Système":"Windows, workstation diagnostics, performance and system actions.","Réseau & Accès distant":"IP, DNS, DHCP, VPN, RDP and connectivity.",
  "Microsoft 365":"Outlook, Word, Excel, PowerPoint, Teams, OneDrive and Office.","Navigateurs":"Edge, Chrome and Firefox diagnostics, profiles, cache and actions.",
  "Applications":"Installed applications, Winget, repair and maintenance.","Périphériques & Pilotes":"Printers, devices, drivers, BIOS and hardware.",
  "Sécurité Windows":"Defender, BitLocker, TPM and local security.","Intune / Entra / SCCM":"Enrollment, MDM, Entra, SCCM and Microsoft access.",
  "Windows Update":"Updates, KBs and Windows maintenance.","Outils Support":"Remote assistance and useful support tools."
 };
 const sections=cats.filter(c=>c!=="Accueil").map(c=>({
  cat:c,
  count:c==="Communications"?allTemplates().length:c==="Portails"?allPortals().length:pocketActions().filter(x=>x.webCategory===c).length,
  desc:(state.lang==="en"?descEn[c]:descFr[c])||""
 }));
 return '<div class="home-summary all-menu-home">'+sections.map(s=>
  '<article class="card home-kpi itp-home-card">'+
   '<div class="itp-home-heading">'+itpCategoryIcon(s.cat,"home")+'<h3>'+esc(catLabel(s.cat))+'</h3></div>'+
   '<div class="big-number">'+s.count+'</div><p class="desc">'+esc(s.desc)+'</p>'+
   '<button class="btn primary" onclick=\'openCat('+JSON.stringify(s.cat)+')\'>'+ui("Ouvrir")+'</button>'+
  '</article>'
 ).join("")+'</div>';
}
function actionCard(a){
 const x=localizeDataItem(a),s=x.script||x.command||"",p=executionProfile(x),m=cleanMethod(x),r=resourceType(x),id="detail_"+Math.random().toString(36).slice(2);
 const usefulText=p.standalone&&s?s:(m||x.description||""),shareBody=buildSupportShare(x);
 return '<article class="card compact-card itp-action-card">'+typeBadge(x)+
 '<h3 class="itp-card-title">'+itpIconForItem(x)+'<span>'+esc(x.name)+'</span></h3>'+
 '<div class="meta">'+esc(x.category)+' • '+esc(r.label)+'</div><p class="desc">'+esc(x.description||m||"")+'</p>'+
 '<div class="card-badges">'+(x.rights?'<span class="badge">'+esc(x.rights)+'</span>':'')+(x.risk?'<span class="badge warn">'+esc(x.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions">'+(usefulText?'<button class="btn '+(p.standalone?'primary':'')+'" onclick=\'copy('+inlineArg(usefulText)+')\'>'+esc(r.copy)+'</button>':'')+
 '<button class="btn" onclick=\'shareText('+inlineArg(x.name||"IT Support")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(x.name||"Support"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>'+ui("Voir plus")+'</button></div>'+detailHtml(x,id)+'</article>';
}
function commandCard(c){
 const x=localizeDataItem(c),id="detail_"+Math.random().toString(36).slice(2),r=resourceType(x),shareBody=buildSupportShare(x);
 return '<article class="card compact-card itp-action-card">'+typeBadge(x)+
 '<h3 class="itp-card-title">'+itpIconForItem(x)+'<span>'+esc(x.name)+'</span></h3>'+
 '<div class="meta">'+esc(x.category)+' • '+esc(r.label)+'</div><p class="desc">'+esc(x.description||"")+'</p>'+
 '<div class="card-badges">'+(x.rights?'<span class="badge">'+esc(x.rights)+'</span>':'')+(x.risk?'<span class="badge warn">'+esc(x.risk)+'</span>':'')+'</div>'+
 '<div class="actions compact-actions"><button class="btn primary" onclick=\'copy('+inlineArg(x.command)+')\'>'+esc(r.copy)+'</button>'+
 '<button class="btn" onclick=\'shareText('+inlineArg(x.name||"IT Support")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(x.name||"Support"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>'+ui("Voir plus")+'</button></div>'+detailHtml(x,id)+'</article>';
}
function renderActions(c){
 let a=filterItems(pocketActions().filter(x=>x.webCategory===c).map(localizeDataItem),["name","description","command","script","category","webCategory"]);
 if(!a.length)return '<div class="empty">'+ui("Aucun script, commande ou lien autonome dans cette rubrique.")+'</div>';
 const groups=new Map();
 a.forEach(x=>{const k=itpTechKey(x,c);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(x)});
 const entries=[...groups.entries()].sort((A,B)=>itpOrder(A[0])-itpOrder(B[0])||itpTechLabel(A[0]).localeCompare(itpTechLabel(B[0])));
 return '<div class="toolbar slimbar"><span class="badge">'+a.length+' '+(state.lang==="en"?"item(s)":"élément(s)")+'</span></div>'+
 entries.map(([k,items])=>'<div class="section-title tech-section-title">'+itpIconForItem(items[0])+'<span>'+esc(itpTechLabel(k))+'</span><span class="tech-count">'+items.length+'</span></div><div class="grid">'+items.map(actionCard).join("")+'</div>').join("");
}
function portalCard(p){
 const v=localizePortal(p),r=JSON.stringify(p._id),f=isFavoriteLink(p._id);
 const shareBody=(v.name||"IT Link")+"\n"+(v.description?String(v.description)+"\n":"")+(v.url||"");
 return '<article class="card itp-portal-card"><h3 class="itp-card-title">'+itpIconForItem(v)+'<span>'+(f?'★ ':'')+esc(v.name)+'</span></h3>'+
 '<div class="meta">'+esc(v.category||"")+' '+(p.builtin?'• '+(state.lang==="en"?"Built-in":"Intégré"):'• '+(state.lang==="en"?"Personal":"Personnel"))+'</div>'+
 (v.description?'<p class="desc">'+esc(v.description)+'</p>':'')+'<pre class="code">'+esc(v.url)+'</pre><div class="actions">'+
 '<button class="btn primary" onclick=\'window.open('+inlineArg(v.url)+',"_blank","noopener")\'>'+ui("Ouvrir")+'</button>'+
 '<button class="btn" onclick=\'copy('+inlineArg(v.url)+')\'>'+ui("Copier le lien")+'</button>'+
 '<button class="btn" onclick=\'shareText('+inlineArg(v.name||"IT Link")+','+inlineArg(shareBody)+')\'>'+ui("Partager")+'</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+inlineArg("[Support] "+(v.name||"Link"))+','+inlineArg(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" onclick=\'toggleFavoriteLink('+r+')\'>'+(f?ui("★ Favori"):ui("☆ Favori"))+'</button>'+
 '<button class="btn" onclick=\'editLink('+r+')\'>'+ui("Modifier")+'</button><button class="btn red" onclick=\'deleteLink('+r+')\'>'+ui("Supprimer")+'</button></div></article>';
}
function portals(){
 const raw=allPortals().map(p=>({...p,_categoryKey:p.category}));
 let ps=filterItems(raw.map(localizePortal),["name","url","category","description"]);
 if(portalFilter==="Favoris")ps=ps.filter(p=>isFavoriteLink(p._id));
 else if(portalFilter!=="Tous")ps=ps.filter(p=>(p._categoryKey||p.category)===portalFilter);
 const cs=[...new Set(raw.map(x=>x._categoryKey||x.category||"Divers"))].sort();
 return '<div class="toolbar"><button class="btn primary" onclick="newLink()">'+ui("+ Ajouter un lien")+'</button>'+
 '<button class="btn" onclick=\'setPortalFilter("Tous")\'>'+ui("Tous")+'</button><button class="btn" onclick=\'setPortalFilter("Favoris")\'>'+ui("★ Favoris")+'</button>'+
 '<span class="badge">'+ps.length+' '+(state.lang==="en"?"link(s)":"lien(s)")+'</span></div>'+
 '<div class="toolbar portal-tech-filters">'+cs.map(c=>'<button class="btn itp-tech-filter" onclick=\'setPortalFilter('+JSON.stringify(c)+')\'>'+itpIconForItem({name:c,category:c})+'<span>'+esc(state.lang==="en"?(PORTAL_CAT_EN[c]||c):c)+'</span></button>').join("")+'</div>'+
 '<div class="grid">'+(ps.map(portalCard).join("")||'<div class="empty">'+ui("Aucun lien trouvé.")+'</div>')+'</div>';
}
function render(){
 try{
   document.body.classList.toggle("light",state.theme==="light");
   nav();
   const title=$("#title"),stats=$("#stats"),content=$("#content");
   if(title)title.innerHTML=itpCategoryIcon(state.cat,"header")+'<span>'+esc(catLabel(state.cat))+'</span>';
   if(stats)stats.textContent=pocketActions().length+(state.lang==="en"?" scripts/actions • ":" scripts/actions • ")+allTemplates().length+(state.lang==="en"?" templates":" modèles");
   let c=state.cat,h=
     c==="Accueil"?home():
     c==="Communications"?communications():
     c==="Portails"?portals():
     c==="Journal & Statistiques"?renderJournal():
     renderActions(c);
   if(content)content.innerHTML=h;
   applyUiLanguage();
 }catch(e){
   console.error("IT Pocket render error",e);
   state={cat:"Accueil",tabs:["Accueil"],theme:"dark",lang:"fr"};
   try{localStorage.setItem("ssitState",JSON.stringify(state))}catch(_){}
   const content=$("#content");if(content)content.innerHTML=home();
   nav();applyUiLanguage();
 }
}
/* === /IT Pocket iconography v1 === */

/* === IT Pocket accordion navigation v1 === */
/* Hierarchie fonctionnelle v2 : famille > sous-theme > action */
const ITP_TREE_VERSION=2;
if(state.itpTreeVersion!==ITP_TREE_VERSION){
 state.itpTreeVersion=ITP_TREE_VERSION;
 state.techFilters={};
 try{localStorage.setItem("ssitState",JSON.stringify(state))}catch(_){}
}
if(!state.techFilters || typeof state.techFilters!=="object")state.techFilters={};

function itpNorm(v){
 return String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}
function itpItemText(item){
 return itpNorm([item&&item.name,item&&item.category,item&&item.webCategory,item&&item.description,item&&item.method,item&&item.shell,item&&item.command,item&&item.script].filter(Boolean).join(" "));
}
function itpEffectiveMenu(item){
 const s=itpItemText(item), n=itpNorm(item&&item.name), cat=itpNorm(item&&item.category);
 const original=String(item&&item.webCategory||"Outils Support");

 /* Collectes spécialisées : priorité au domaine cible. */
 if(/collecte reseau|inventaire reseau|commandes reseau/.test(s))return "Réseau & Accès distant";
 if(/collecte web/.test(s))return "Navigateurs";
 if(/collecte applicatif/.test(s))return "Applications";
 if(/collecte systeme|commandes systeme/.test(s))return "Système";
 if(/collecte complete ticket/.test(s))return "Outils Support";

 /* Microsoft 365 */
 if(/\boutlook\b|\bwinword\b|\bword\b|\bexcel\b|\bpowerpoint\b|\bpowerpnt\b|\bteams\b|\bmsteams\b|\bonedrive\b|office \/ m365|microsoft 365|office add-?in|complements office/.test(s))return "Microsoft 365";

 /* Navigateurs */
 if(/\bedge\b|\bchrome\b|\bfirefox\b|navigateur|browser|collecte web/.test(s))return "Navigateurs";

 /* Gestion Microsoft */
 if(/\bintune\b|\bentra\b|\bsccm\b|configuration manager|\bautopilot\b|microsoft graph|\bpim\b|company portal|portail d.?entreprise|dsregcmd|enterprisemgmt|ccmexec/.test(s))return "Intune / Entra / SCCM";

 /* Sécurité locale Windows */
 if(/\bdefender\b|\bbitlocker\b|\btpm\b|secure boot|windows hello|pare.?feu|firewall|etat securite windows/.test(s))return "Sécurité Windows";

 /* Périphériques / matériel */
 if(/imprim|printer|spooler|pilote|driver|\bbios\b|firmware|bluetooth|peripher|device manager|\bpnp\b|audio|camera|webcam|microphone|haut.?parleur|casque|affichage|display|materiel|hardware/.test(s))return "Périphériques & Pilotes";

 /* Réseau / accès distant */
 if(/\bvpn\b|\bcitrix\b|forticlient|fortinet|\bivanti\b|pulse secure|\brdp\b|bureau a distance|remote desktop|quick assist|assistance distante|\bdns\b|\bdhcp\b|\bping\b|tracert|ipconfig|\broute\b|winsock|ethernet|wi-?fi|carte reseau|proxy|passerelle|gateway/.test(s))return "Réseau & Accès distant";

 /* Winget est de la gestion applicative, pas Windows Update. */
 if(/\bwinget\b|cat==="winget"/.test(s)||cat==="winget")return "Applications";

 /* Windows Update */
 if(/windows update|windowsupdateclient|derniere?s? kb|\bkb\d{4,}\b|reboot pending|redemarrage requis|services wu|\bbits\b.*cryptsvc/.test(s))return "Windows Update";

 /* Applications */
 if(/application|logiciel|software|apps installees|inventaire applications|processus applications|desinstallation|desinstaller|reparer \/ modifier \/ reset|centre applications|lanceur applications/.test(s))return "Applications";

 /* Outils support explicites */
 if(/powershell admin|cmd admin|bibliotheque complete|outil windows|service.?now|controler le classement|rapport local it pocket|journal it pocket/.test(s))return "Outils Support";

 return original;
}

const ITP_TOPIC_LABELS={
 "sys.overview":{fr:"Diagnostic du poste",en:"Workstation diagnostics"},
 "sys.performance":{fr:"Performances",en:"Performance"},
 "sys.process":{fr:"Processus & services",en:"Processes & services"},
 "sys.storage":{fr:"Stockage & nettoyage",en:"Storage & cleanup"},
 "sys.integrity":{fr:"Intégrité Windows",en:"Windows integrity"},
 "sys.bootlogs":{fr:"Démarrage & journaux",en:"Boot & logs"},
 "sys.reports":{fr:"Rapports & escalade",en:"Reports & escalation"},
 "net.connect":{fr:"IP & connectivité",en:"IP & connectivity"},
 "net.dns":{fr:"DNS / DHCP / proxy",en:"DNS / DHCP / proxy"},
 "net.wifi":{fr:"Wi‑Fi & Ethernet",en:"Wi‑Fi & Ethernet"},
 "net.vpn":{fr:"VPN & clients",en:"VPN & clients"},
 "net.remote":{fr:"Accès distant",en:"Remote access"},
 "net.diag":{fr:"Diagnostic & collecte",en:"Diagnostics & collection"},
 "m365.outlook":{fr:"Outlook",en:"Outlook"},
 "m365.word":{fr:"Word",en:"Word"},
 "m365.excel":{fr:"Excel",en:"Excel"},
 "m365.powerpoint":{fr:"PowerPoint",en:"PowerPoint"},
 "m365.teams":{fr:"Teams",en:"Teams"},
 "m365.onedrive":{fr:"OneDrive",en:"OneDrive"},
 "m365.office":{fr:"Office / Microsoft 365",en:"Office / Microsoft 365"},
 "browser.edge":{fr:"Microsoft Edge",en:"Microsoft Edge"},
 "browser.chrome":{fr:"Google Chrome",en:"Google Chrome"},
 "browser.firefox":{fr:"Mozilla Firefox",en:"Mozilla Firefox"},
 "browser.general":{fr:"Navigateurs — général",en:"Browsers — general"},
 "app.center":{fr:"Centre applications",en:"Application center"},
 "app.inventory":{fr:"Inventaire applications",en:"Application inventory"},
 "app.maintenance":{fr:"Maintenance & réparation",en:"Maintenance & repair"},
 "app.process":{fr:"Processus applicatifs",en:"Application processes"},
 "app.winget":{fr:"Winget & mises à jour apps",en:"Winget & app updates"},
 "dev.print":{fr:"Imprimantes",en:"Printers"},
 "dev.audio":{fr:"Audio & vidéo",en:"Audio & video"},
 "dev.bluetooth":{fr:"Bluetooth & USB",en:"Bluetooth & USB"},
 "dev.drivers":{fr:"Pilotes",en:"Drivers"},
 "dev.bios":{fr:"BIOS & firmware",en:"BIOS & firmware"},
 "dev.hardware":{fr:"Matériel & périphériques",en:"Hardware & devices"},
 "sec.summary":{fr:"Vue sécurité",en:"Security overview"},
 "sec.defender":{fr:"Microsoft Defender",en:"Microsoft Defender"},
 "sec.bitlocker":{fr:"BitLocker",en:"BitLocker"},
 "sec.tpm":{fr:"TPM / Secure Boot / Hello",en:"TPM / Secure Boot / Hello"},
 "sec.firewall":{fr:"Pare-feu",en:"Firewall"},
 "mgmt.intune":{fr:"Intune",en:"Intune"},
 "mgmt.entra":{fr:"Entra ID & PIM",en:"Entra ID & PIM"},
 "mgmt.sccm":{fr:"SCCM / Configuration Manager",en:"SCCM / Configuration Manager"},
 "mgmt.autopilot":{fr:"Windows Autopilot",en:"Windows Autopilot"},
 "mgmt.graph":{fr:"Microsoft Graph",en:"Microsoft Graph"},
 "mgmt.portal":{fr:"Company Portal",en:"Company Portal"},
 "wu.status":{fr:"État & recherche de mises à jour",en:"Update status & scan"},
 "wu.kb":{fr:"KB, historique & journaux",en:"KBs, history & logs"},
 "wu.services":{fr:"Services Windows Update",en:"Windows Update services"},
 "wu.reboot":{fr:"Redémarrage requis",en:"Restart required"},
 "support.terminal":{fr:"Terminal & administration",en:"Terminal & administration"},
 "support.inventory":{fr:"Inventaires & exports",en:"Inventories & exports"},
 "support.ticket":{fr:"Ticket, rapport & escalade",en:"Ticket, report & escalation"},
 "support.links":{fr:"Liens & outils",en:"Links & tools"},
 "support.general":{fr:"Outils technicien",en:"Technician tools"}
};
function itpTopicLabel(k){const v=ITP_TOPIC_LABELS[k];return v?(state.lang==="en"?v.en:v.fr):k}

function itpTopicKey(item,menu){
 const s=itpItemText(item), n=itpNorm(item&&item.name), cat=itpNorm(item&&item.category);

 if(menu==="Système"){
   if(/disque|disk|stockage|storage|nettoy|cleanup|\btemp\b|corbeille|crash dump|chkdsk|treesize|espace libre|winsxs/.test(s))return "sys.storage";
   if(/\bsfc\b|\bdism\b|integrite|corruption/.test(s))return "sys.integrity";
   if(/cpu|ram|performance|poste lent/.test(s))return "sys.performance";
   if(/processus|process|service/.test(s))return "sys.process";
   if(/demarrage|arret|boot|uptime|evenement|event|journal|log/.test(s))return "sys.bootlogs";
   if(/rapport|escalade|collecte systeme|centre d.?incident/.test(s))return "sys.reports";
   return "sys.overview";
 }
 if(menu==="Réseau & Accès distant"){
   if(/\bvpn\b|\bcitrix\b|forticlient|fortinet|\bivanti\b|pulse secure/.test(s))return "net.vpn";
   if(/\brdp\b|bureau a distance|remote desktop|quick assist|assistance distante/.test(s))return "net.remote";
   if(/\bdns\b|\bdhcp\b|proxy|\bwinsock\b/.test(s))return "net.dns";
   if(/wi-?fi|ethernet|carte reseau|adapter/.test(s))return "net.wifi";
   if(/collecte reseau|inventaire reseau|diagnostic reseau/.test(s))return "net.diag";
   return "net.connect";
 }
 if(menu==="Microsoft 365"){
   if(/\boutlook\b/.test(s))return "m365.outlook";
   if(/\bonedrive\b/.test(s))return "m365.onedrive";
   if(/\bexcel\b/.test(s))return "m365.excel";
   if(/\bpowerpoint\b|\bpowerpnt\b/.test(s))return "m365.powerpoint";
   if(/\bteams\b|\bmsteams\b/.test(s))return "m365.teams";
   if(/\bword\b|\bwinword\b/.test(s))return "m365.word";
   return "m365.office";
 }
 if(menu==="Navigateurs"){
   if(/\bedge\b/.test(s))return "browser.edge";
   if(/\bchrome\b/.test(s))return "browser.chrome";
   if(/\bfirefox\b/.test(s))return "browser.firefox";
   return "browser.general";
 }
 if(menu==="Applications"){
   if(/\bwinget\b/.test(s))return "app.winget";
   if(/inventaire|liste logiciels|apps installees/.test(s))return "app.inventory";
   if(/processus application/.test(s))return "app.process";
   if(/reparer|modifier|reset|desinstall|fermer une application|forcer fermeture/.test(s))return "app.maintenance";
   return "app.center";
 }
 if(menu==="Périphériques & Pilotes"){
   if(/imprim|printer|spooler/.test(s))return "dev.print";
   if(/audio|camera|webcam|microphone|haut.?parleur|casque|affichage|display/.test(s))return "dev.audio";
   if(/bluetooth|\busb\b/.test(s))return "dev.bluetooth";
   if(/\bbios\b|firmware/.test(s))return "dev.bios";
   if(/pilote|driver/.test(s))return "dev.drivers";
   return "dev.hardware";
 }
 if(menu==="Sécurité Windows"){
   if(/\bdefender\b/.test(s))return "sec.defender";
   if(/\bbitlocker\b/.test(s))return "sec.bitlocker";
   if(/\btpm\b|secure boot|windows hello/.test(s))return "sec.tpm";
   if(/pare.?feu|firewall/.test(s))return "sec.firewall";
   return "sec.summary";
 }
 if(menu==="Intune / Entra / SCCM"){
   if(/\bautopilot\b/.test(s))return "mgmt.autopilot";
   if(/microsoft graph|\bgraph\b/.test(s))return "mgmt.graph";
   if(/company portal|portail d.?entreprise/.test(s))return "mgmt.portal";
   if(/\bsccm\b|configuration manager|ccmexec/.test(s))return "mgmt.sccm";
   if(/\bentra\b|\bpim\b|dsregcmd|identit/.test(s))return "mgmt.entra";
   return "mgmt.intune";
 }
 if(menu==="Windows Update"){
   if(/redemarrage requis|reboot pending/.test(s))return "wu.reboot";
   if(/service|\bbits\b|cryptsvc/.test(s))return "wu.services";
   if(/\bkb\b|windowsupdateclient|historique|journal|log/.test(s))return "wu.kb";
   return "wu.status";
 }
 if(menu==="Outils Support"){
   if(/powershell|cmd|terminal|admin/.test(s))return "support.terminal";
   if(/inventaire|export/.test(s))return "support.inventory";
   if(/ticket|rapport|escalade|collecte complete/.test(s))return "support.ticket";
   if(/lien|navigateur|service.?now|portail/.test(s))return "support.links";
   return "support.general";
 }
 return "support.general";
}

function itpTopicIcon(item,key){
 if(/^sys\.storage/.test(key))return itpSvgIcon("Storage","itp-icon-card");
 if(/^sys\.integrity/.test(key))return itpSvgIcon("Security","itp-icon-card");
 if(/^sys\.performance/.test(key))return itpSvgIcon("Statistics","itp-icon-card");
 if(/^sys\.process/.test(key))return itpSvgIcon("Processes & services","itp-icon-card");
 if(/^sys\.bootlogs/.test(key))return itpSvgIcon("Journal","itp-icon-card");
 if(/^net\./.test(key))return itpIconForItem(item);
 if(/^dev\.print/.test(key))return itpSvgIcon("Printer","itp-icon-card");
 if(/^dev\.audio/.test(key))return itpSvgIcon("Audio / Video","itp-icon-card");
 if(/^dev\./.test(key))return itpSvgIcon("Devices","itp-icon-card");
 if(/^sec\./.test(key))return itpIconForItem(item);
 if(/^wu\./.test(key))return itpSvgIcon("Windows Update","itp-icon-card");
 return itpIconForItem(item);
}
function itpActionsForMenu(cat){
 return pocketActions().filter(x=>itpEffectiveMenu(x)===cat).map(localizeDataItem);
}
function itpGetTechFilter(cat){
 const v=state.techFilters&&state.techFilters[cat];
 return v||"__overview__";
}
function itpSetTechFilter(cat,key){
 if(!state.techFilters || typeof state.techFilters!=="object")state.techFilters={};
 state.techFilters[cat]=key||"__overview__";
 save();
 render();
 if(window.matchMedia&&window.matchMedia("(max-width:800px)").matches){
   requestAnimationFrame(()=>{const m=document.querySelector("main");if(m)m.scrollIntoView({block:"start",behavior:"smooth"})});
 }
}
function itpTechGroupsForCat(cat){
 const items=itpActionsForMenu(cat),seen=new Map();
 for(const item of items){
   const k=itpTopicKey(item,cat);
   if(!seen.has(k))seen.set(k,{key:k,label:itpTopicLabel(k),count:0,item});
   seen.get(k).count++;
 }
 return [...seen.values()].sort((a,b)=>a.label.localeCompare(b.label,state.lang==="en"?"en":"fr"));
}
function itpHasTechSubnav(cat){
 return !["Accueil","Communications","Portails"].includes(cat) && itpTechGroupsForCat(cat).length>1;
}
function openCat(c){
 const changed=state.cat!==c;
 state.cat=c;
 if(!state.tabs.includes(c))state.tabs.push(c);
 if(!state.techFilters || typeof state.techFilters!=="object")state.techFilters={};
 if(changed || !state.techFilters[c])state.techFilters[c]="__overview__";
 save();
 render();
}
function itpSubnavHtml(cat){
 if(!itpHasTechSubnav(cat))return "";
 const groups=itpTechGroupsForCat(cat),active=itpGetTechFilter(cat),items=itpActionsForMenu(cat);
 return '<div class="itp-subnav-wrap">'+
   '<div class="itp-subnav-head"><strong>'+(state.lang==="en"?"Submenus":"Sous-menus")+'</strong><span class="itp-subnav-hint">'+groups.length+' '+(state.lang==="en"?"themes":"thèmes")+'</span></div>'+
   '<div class="itp-subnav">'+
     '<button class="itp-subnav-btn '+(active==="__overview__"?"itp-subnav-active":"")+'" onclick=\'itpSetTechFilter('+JSON.stringify(cat)+',"__overview__")\'>'+
       '<span class="itp-subnav-all">⌂</span><span>'+(state.lang==="en"?"Overview":"Vue des thèmes")+'</span><small>'+groups.length+'</small></button>'+
     '<button class="itp-subnav-btn '+(active==="__all__"?"itp-subnav-active":"")+'" onclick=\'itpSetTechFilter('+JSON.stringify(cat)+',"__all__")\'>'+
       '<span class="itp-subnav-all">≡</span><span>'+(state.lang==="en"?"All actions":"Toutes les actions")+'</span><small>'+items.length+'</small></button>'+
     groups.map(g=>'<button class="itp-subnav-btn '+(active===g.key?"itp-subnav-active":"")+'" onclick=\'itpSetTechFilter('+JSON.stringify(cat)+','+JSON.stringify(g.key)+')\'>'+
       itpTopicIcon(g.item,g.key)+'<span>'+esc(g.label)+'</span><small>'+g.count+'</small></button>').join("")+
   '</div></div>';
}
function nav(){
 $("#nav").innerHTML=cats.map(c=>{
   const active=state.cat===c;
   return '<div class="itp-nav-node">'+
     '<button class="navbtn '+(active?"active":"")+'" onclick=\'openCat('+JSON.stringify(c)+')\' aria-expanded="'+(active&&itpHasTechSubnav(c)?"true":"false")+'">'+
       itpTitle(itpCategoryIcon(c,"nav"),catLabel(c),"itp-nav-title")+
       (itpHasTechSubnav(c)?'<span class="itp-nav-chevron">'+(active?"⌃":"⌄")+'</span>':'')+
     '</button>'+
     (active?itpSubnavHtml(c):"")+
   '</div>';
 }).join("");
}
function itpTopicOverview(cat,groups){
 const prompt=state.lang==="en"?"Choose a theme to display only the relevant actions.":"Choisis un thème pour n’afficher que les actions utiles.";
 return '<div class="itp-tree-intro"><strong>'+esc(catLabel(cat))+'</strong><span>'+prompt+'</span></div>'+
 '<div class="itp-topic-grid">'+groups.map(g=>
   '<button class="itp-topic-card" onclick=\'itpSetTechFilter('+JSON.stringify(cat)+','+JSON.stringify(g.key)+')\'>'+
     itpTopicIcon(g.item,g.key)+'<span class="itp-topic-card-text"><strong>'+esc(g.label)+'</strong><small>'+g.count+' '+(state.lang==="en"?"action(s)":"action(s)")+'</small></span><span class="itp-topic-arrow">›</span>'+
   '</button>').join("")+'</div>';
}
function renderActions(c){
 let a=filterItems(itpActionsForMenu(c),["name","description","command","script","category","webCategory"]);
 if(!a.length)return '<div class="empty">'+ui("Aucun script, commande ou lien autonome dans cette rubrique.")+'</div>';

 const allGroups=itpTechGroupsForCat(c);
 if(allGroups.length<=1){
   return '<div class="toolbar slimbar"><span class="badge">'+a.length+' '+(state.lang==="en"?"item(s)":"élément(s)")+'</span></div>'+
          '<div class="grid">'+a.map(actionCard).join("")+'</div>';
 }

 const active=itpGetTechFilter(c);
 if(active==="__overview__")return itpTopicOverview(c,allGroups);

 if(active!=="__all__")a=a.filter(x=>itpTopicKey(x,c)===active);
 const groups=new Map();
 a.forEach(x=>{const k=itpTopicKey(x,c);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(x)});
 const entries=[...groups.entries()].sort((A,B)=>itpTopicLabel(A[0]).localeCompare(itpTopicLabel(B[0]),state.lang==="en"?"en":"fr"));
 const activeLabel=active==="__all__"?(state.lang==="en"?"All actions":"Toutes les actions"):itpTopicLabel(active);
 return '<div class="toolbar slimbar itp-filter-summary"><span class="badge">'+a.length+' '+(state.lang==="en"?"item(s)":"élément(s)")+'</span>'+
   '<span class="badge itp-current-tech">'+esc(activeLabel)+'</span>'+
   '<button class="btn itp-back-topics" onclick=\'itpSetTechFilter('+JSON.stringify(c)+',"__overview__")\'>'+(state.lang==="en"?"Themes":"Thèmes")+'</button></div>'+
   entries.map(([k,items])=>'<div class="section-title tech-section-title">'+itpTopicIcon(items[0],k)+'<span>'+esc(itpTopicLabel(k))+'</span><span class="tech-count">'+items.length+'</span></div><div class="grid">'+items.map(actionCard).join("")+'</div>').join("");
}
function home(){
 const descFr={
  "Communications":"Modèles et messages corporate.","Portails":"Portails, sites officiels, outils et favoris.",
  "Système":"Diagnostic Windows, performances, stockage, intégrité et journaux.","Réseau & Accès distant":"IP, DNS, Wi‑Fi, VPN et accès distant.",
  "Microsoft 365":"Outlook, Word, Excel, PowerPoint, Teams, OneDrive et Office.","Navigateurs":"Edge, Chrome, Firefox et diagnostic Web.",
  "Applications":"Applications, maintenance, inventaire et Winget.","Périphériques & Pilotes":"Imprimantes, audio/vidéo, Bluetooth, pilotes et BIOS.",
  "Sécurité Windows":"Defender, BitLocker, TPM, Secure Boot et pare-feu.","Intune / Entra / SCCM":"Intune, Entra ID, SCCM, Autopilot et Graph.",
  "Windows Update":"État, KB, historique, services et redémarrage requis.","Outils Support":"Terminal, inventaires, rapports et outils technicien."
 };
 const descEn={
  "Communications":"Corporate messages and communication templates.","Portails":"Official portals, trusted tools and useful resources.",
  "Système":"Windows diagnostics, performance, storage, integrity and logs.","Réseau & Accès distant":"IP, DNS, Wi‑Fi, VPN and remote access.",
  "Microsoft 365":"Outlook, Word, Excel, PowerPoint, Teams, OneDrive and Office.","Navigateurs":"Edge, Chrome, Firefox and web diagnostics.",
  "Applications":"Applications, maintenance, inventory and Winget.","Périphériques & Pilotes":"Printers, audio/video, Bluetooth, drivers and BIOS.",
  "Sécurité Windows":"Defender, BitLocker, TPM, Secure Boot and firewall.","Intune / Entra / SCCM":"Intune, Entra ID, SCCM, Autopilot and Graph.",
  "Windows Update":"Status, KBs, history, services and restart requirements.","Outils Support":"Terminal, inventories, reports and technician tools."
 };
 const sections=cats.filter(c=>c!=="Accueil").map(c=>({
   cat:c,
   count:c==="Communications"?allTemplates().length:c==="Portails"?allPortals().length:itpActionsForMenu(c).length,
   desc:(state.lang==="en"?descEn[c]:descFr[c])||""
 }));
 return '<div class="home-summary all-menu-home">'+sections.map(s=>
  '<article class="card home-kpi itp-home-card"><div class="itp-home-heading">'+itpCategoryIcon(s.cat,"home")+'<h3>'+esc(catLabel(s.cat))+'</h3></div>'+
  '<div class="big-number">'+s.count+'</div><p class="desc">'+esc(s.desc)+'</p>'+
  '<button class="btn primary" onclick=\'openCat('+JSON.stringify(s.cat)+')\'>'+ui("Ouvrir")+'</button></article>').join("")+'</div>';
}
Object.assign(window,{itpSetTechFilter,itpGetTechFilter,itpEffectiveMenu,itpTopicKey});
/* === /IT Pocket accordion navigation v1 === */

Object.assign(window,{setTicketRef,shareTemplate,copyTemplate,applyUiLanguage,ui,catLabel,portalCategoryLabel,toggleTemplatePreview,actionCard,commandCard,toggleInlineDetail,launchTutorial,resourceType,contentSectionTitle,supportSteps,buildSupportShare,cleanMethod,specificCheck,executionProfile,isContainerAction,actionKind,setTypeFilter,pocketActions,isPocketCenterWrapper,shareText,openOutlookText,setTemplateFilter,setActionFilter,renderAllActions,renderJournal,communications,newTemplate,editTemplate,saveTemplateRef,openTemplateOutlook,portals,newLink,editLink,saveLink,deleteLink,toggleFavoriteLink,setPortalFilter,renderActions,tools});
function scrollToTopPocket(){window.scrollTo({top:0,behavior:"smooth"})}
function syncScrollTopButton(){
 const b=document.getElementById("scrollTopBtn");
 if(!b)return;
 b.classList.toggle("show",window.scrollY>420);
}
window.addEventListener("scroll",syncScrollTopButton,{passive:true});
window.scrollToTopPocket=scrollToTopPocket;
syncScrollTopButton();
render();
