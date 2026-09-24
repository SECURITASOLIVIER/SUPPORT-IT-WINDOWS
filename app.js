
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
 '<button class="btn red" onclick=\'deleteTemplate('+r+')\'>'+ui("Supprimer")+'</button>'+
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
   .filter(t=>!hiddenTemplates.includes(t._id))
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
 if(!ref||!confirm(ui("Supprimer ce template ?")))return;
 if(ref[0]==="c")custom.splice(parseInt(ref.slice(1),10),1);
 else if(!hiddenTemplates.includes(ref))hiddenTemplates.push(ref);
 savePocket();render();
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
 localStorage.setItem("itpTicketRef",ticketRef);
 render();
}
function applyTemplateContext(text){
 let s=String(text||"");
 if(!ticketRef)return s;
 return s
  .replace(/\[N° ticket\]/gi,ticketRef)
  .replace(/\[N°\]/gi,ticketRef)
  .replace(/\[Ticket #\]/gi,ticketRef)
  .replace(/\[Ticket number\]/gi,ticketRef)
  .replace(/\[RÉFÉRENCE\]/gi,ticketRef)
  .replace(/\[REFERENCE\]/gi,ticketRef);
}
function looksFrenchTemplateText(v){
 const s=String(v||"");
 return /[àâäçéèêëîïôöùûüÿœ]|\b(?:bonjour|merci|votre|vous|nous|pourriez|afin|concernant|retour|disponibilit|traitement|demande|incident|sujet|cordialement|clôture|problème|équipe|informatique|poursuivre|réinitial|connexion|compte|mot de passe|matériel|expédition|restitution|disponible|réseau|sécurité|collaborateur|application|poste|ordinateur|téléphone|rendez-vous|intervention|résolution|relance)\b/i.test(s);
}
function englishTemplateNameFromFrench(name){
 let s=String(name||"");
 const rules=[
  [/Dernière relance avant clôture/gi,"Final follow-up before closure"],
  [/Clôture administrative/gi,"Administrative closure"],
  [/Premier contact/gi,"First contact"],
  [/Prise en charge/gi,"Acknowledgement"],
  [/Demande d'informations diagnostic/gi,"Diagnostic information request"],
  [/Demande d'informations/gi,"Information request"],
  [/Demande de disponibilité/gi,"Availability request"],
  [/Intervention à distance/gi,"Remote intervention"],
  [/En attente utilisateur/gi,"Waiting for user"],
  [/En attente équipe tierce/gi,"Waiting for third party"],
  [/Résolution proposée/gi,"Proposed resolution"],
  [/Résolution confirmée/gi,"Resolution confirmed"],
  [/Clôture sans retour/gi,"Closure without response"],
  [/Mauvaise catégorie/gi,"Wrong category"],
  [/Hors périmètre/gi,"Out of scope"],
  [/Relance/gi,"Follow-up"],
  [/Mauvais type de ticket/gi,"Wrong ticket type"],
  [/Réinitialisation/gi,"Reset"],
  [/Procédure/gi,"Procedure"],
  [/Déploiement/gi,"Deployment"],
  [/Préparation/gi,"Preparation"],
  [/Expédition/gi,"Shipping"],
  [/Restitution/gi,"Return"],
  [/Mise à disposition/gi,"Availability"],
  [/Installation terminée/gi,"Installation completed"],
  [/Installation/gi,"Installation"],
  [/Désinstallation/gi,"Uninstallation"],
  [/Rendez-vous/gi,"Appointment"],
  [/Matériel/gi,"Hardware"],
  [/Sécurité/gi,"Security"],
  [/Accès/gi,"Access"],
  [/Réseau/gi,"Network"],
  [/Incident majeur/gi,"Major incident"],
  [/Mise à jour/gi,"Update"],
  [/Maintenance/gi,"Maintenance"],
  [/Changement/gi,"Change"],
  [/Arrivée/gi,"Onboarding"],
  [/Départ/gi,"Offboarding"],
  [/Rapport/gi,"Report"],
  [/Demande/gi,"Request"]
 ];
 for(const [re,to] of rules)s=s.replace(re,to);
 return s;
}
function fallbackEnglishTemplate(t){
 const n=String(t&&t.name||"").toLowerCase();
 const subject=englishTemplateNameFromFrench(t&&t.subject||t&&t.name||"IT Support");
 const hello="Hello [First name],\n\n", close="\n\nKind regards,\nIT Support";

 if(/phishing/.test(n))return {subject,content:hello+"Thank you for reporting this suspicious message.\n\n• Do not click any link or open any additional attachment.\n• In Outlook, use Report Message > Phishing when available.\n• If you entered a password or approved an MFA request, contact IT Support immediately."+close};
 if(/mfa|authenticator/.test(n))return {subject,content:hello+"Your multi-factor authentication (MFA) settings have been reset or require reconfiguration.\n\n1. Open https://aka.ms/mfasetup\n2. Add an authentication method.\n3. Select Microsoft Authenticator if required.\n4. Scan the QR code with the mobile application.\n5. Complete the validation test.\n\n⚠️ If the registration fails, contact IT Support."+close};
 if(/mot de passe|password/.test(n))return {subject,content:hello+"Your password has been reset.\n\nUse the temporary password provided through the approved secure channel, then set a new password that complies with your organization's security policy.\n\nIf you experience any issue, contact IT Support."+close};
 if(/demande d'informations|information request|diagnostic/.test(n))return {subject,content:hello+"To continue the diagnosis, please provide the following information:\n\n• the exact error message;\n• a screenshot when possible;\n• the affected device name;\n• the steps required to reproduce the issue;\n• your availability if a remote session is required."+close};
 if(/dernière relance|final follow-up/.test(n))return {subject,content:hello+"We are following up again regarding your request.\n\nWithout a response, the ticket may be administratively closed. If assistance is still required, please reply with your availability or the requested information."+close};
 if(/relance|follow-up/.test(n))return {subject,content:hello+"We are following up regarding your request.\n\nPlease send us your feedback or your next available time slot so that we can continue the investigation."+close};
 if(/clôture|closure|résolu|resolution confirmed/.test(n))return {subject,content:hello+"The requested action has been completed and the service is now considered operational.\n\nPlease confirm that everything is working correctly. The request can then be closed."+close};
 if(/prise en charge|acknowledgement|premier contact|first contact/.test(n))return {subject,content:hello+"Your request has been received and is now being handled by IT Support.\n\nWe will contact you if additional information is required and will keep you informed of progress."+close};
 if(/disponibil|availability|rendez-vous|appointment/.test(n))return {subject,content:hello+"To continue with this request, please send us a time slot when you are available in front of the affected device.\n\nWe will confirm the intervention time once the slot is agreed."+close};
 if(/intervention à distance|remote intervention/.test(n))return {subject,content:hello+"We can continue the diagnosis remotely on the affected device.\n\nPlease save your current work and confirm when you are available for the remote intervention."+close};
 if(/expédition|shipping/.test(n))return {subject,content:hello+"Your equipment is ready for shipping / has been shipped.\n\nEquipment: [Equipment]\nCarrier: [Carrier]\nTracking number: [Tracking number]\n\nPlease confirm the delivery address when required and acknowledge receipt of the parcel."+close};
 if(/restitution|return/.test(n))return {subject,content:hello+"Please arrange the return of the following company equipment:\n\n• [PC]\n• [Charger]\n• [Dock / accessories]\n• [Phone if applicable]\n\nPlease confirm the planned return method and date."+close};
 if(/matériel|hardware|pc |casque|chargeur|dock|écran/.test(n))return {subject,content:hello+"Your requested equipment is being prepared or is now available.\n\nPlease confirm the required delivery / collection method and any relevant accessories."+close};
 if(/installation|déploiement|deployment|logiciel|application/.test(n))return {subject,content:hello+"The requested application action has been processed.\n\nApplication: [Application]\nDevice: [Device]\n\nPlease launch the application and confirm that it works correctly. A restart may be required."+close};
 if(/vpn|wi-fi|wifi|réseau|network/.test(n))return {subject,content:hello+"To continue the network diagnosis, please provide:\n\n• the network or VPN being used;\n• the exact error message;\n• whether Internet access works outside the VPN;\n• whether other nearby users are affected."+close};
 if(/outlook|teams|onedrive|office|microsoft 365/.test(n))return {subject,content:hello+"We are investigating the Microsoft 365 issue.\n\nPlease describe the exact symptom and confirm whether the issue also occurs in the web version when applicable. Save your work before any repair or restart action."+close};
 if(/onboarding|arrivée/.test(n))return {subject,content:"ONBOARDING\n\nEmployee: [Name]\nStart date: [Date]\nManager: [Manager]\n\nTo prepare:\n• user account;\n• workstation;\n• licenses;\n• groups and access;\n• email;\n• MFA;\n• applications;\n• accessories."};
 if(/offboarding|départ/.test(n))return {subject,content:"OFFBOARDING\n\nEmployee: [Name]\nDeparture date: [Date]\n\nTo process:\n• disable account;\n• revoke sessions;\n• handle MFA and licenses;\n• manage mailbox / OneDrive delegation;\n• recover PC, charger, dock, headset and phone."};
 if(/rapport|report|escalade|escalation/.test(n))return {subject,content:"IT SUPPORT REPORT\n\nTicket: [Ticket #]\nUser: [User]\nDevice: [Device]\nImpact: [Impact]\n\nIssue / observation:\n[Details]\n\nTests performed:\n• [Test 1]\n• [Test 2]\n\nActions performed:\n• [Action 1]\n• [Action 2]\n\nResult / next step:\n[Result]"};
 if(/incident majeur|major incident|interruption de service/.test(n))return {subject,content:"Hello,\n\nA general incident is currently affecting [Service]. The technical teams are investigating.\n\nImpact: [Impact]\nStart time: [Time]\nCurrent status: [Status]\nNext update: [Time / when new information is available]\n\nThank you for your understanding."};
 return {subject,content:hello+"This message concerns: "+englishTemplateNameFromFrench(t&&t.name||"IT support request")+".\n\nPlease review the information above and reply with any details required to continue processing the request."+close};
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
 let subject=formalizeTemplateText(applyTemplateContext(v&&v.subject||""));
 let body=formalizeTemplateText(applyTemplateContext(v&&v.content||""));
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
 '<label class="ticket-ref-label">'+(state.lang==="en"?"Ticket #":"N° ticket")+
 '<input id="ticketRef" class="ticket-ref-input" value="'+esc(ticketRef)+'" placeholder="'+(state.lang==="en"?"e.g. INC123456":"ex. INC123456")+'" oninput="setTicketRef(this.value)"></label>'+
 '<span class="badge">'+ts.length+' '+(state.lang==="en"?"template(s)":"modèle(s)")+'</span></div>'+
 '<div class="toolbar"><button class="btn" onclick=\'setTemplateFilter("Tous")\'>'+ui("Tous")+'</button>'+
 cs.map(c=>'<button class="btn" onclick=\'setTemplateFilter('+JSON.stringify(c)+')\'>'+esc(templateCategoryLabel(c))+'</button>').join("")+'</div>'+
 (actionCards.length?'<div class="section-title">'+ui("Actions Communication")+'</div><div class="grid">'+actionCards.map(actionCard).join("")+'</div>':'')+
 '<div class="section-title">'+ui("Modèles corporate")+'</div><div class="grid">'+(ts.map(templateCard).join("")||'<div class="empty">'+ui("Aucun template trouvé.")+'</div>')+'</div>';
}
Object.assign(window,{setTicketRef,shareTemplate,copyTemplate,applyUiLanguage,ui,catLabel,portalCategoryLabel,toggleTemplatePreview,actionCard,commandCard,toggleInlineDetail,launchTutorial,resourceType,contentSectionTitle,supportSteps,buildSupportShare,cleanMethod,specificCheck,executionProfile,isContainerAction,actionKind,setTypeFilter,pocketActions,isPocketCenterWrapper,shareText,openOutlookText,setTemplateFilter,setActionFilter,renderAllActions,renderJournal,communications,newTemplate,editTemplate,saveTemplateRef,deleteTemplate,openTemplateOutlook,portals,newLink,editLink,saveLink,deleteLink,toggleFavoriteLink,setPortalFilter,renderActions,tools});
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
