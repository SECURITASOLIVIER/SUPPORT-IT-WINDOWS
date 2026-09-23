
const D=window.SSIT_DATA, $=s=>document.querySelector(s);
const cats=["Accueil","Communications","Système","Réseau & Accès distant","Microsoft 365","Navigateurs","Applications","Périphériques & Pilotes","Sécurité Windows","Intune / Entra / SCCM","Windows Update","Outils Support","Portails"];
let state=JSON.parse(localStorage.getItem("ssitState")||'{"cat":"Accueil","tabs":["Accueil"],"theme":"dark"}');
if(state.cat==="Toutes les actions")state.cat="Accueil";
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

let custom=JSON.parse(localStorage.getItem("ssitTemplates")||"[]");
function save(){localStorage.setItem("ssitState",JSON.stringify(state));localStorage.setItem("ssitTemplates",JSON.stringify(custom))}
function esc(s=""){return String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]))}
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
 if(navigator.share){
   const f=makeTextShareFile(subject,full);
   if(f && full.length>10000 && navigator.canShare){
     const withFile={title:subject,text:"Contenu complet IT Pocket en pièce jointe.",files:[f]};
     try{
       if(navigator.canShare(withFile)){await navigator.share(withFile);return}
     }catch(e){if(e&&e.name==="AbortError")return}
   }
   try{await navigator.share({title:subject,text:full});return}
   catch(e){if(e&&e.name==="AbortError")return}
 }
 await copy(full);
 toast("Partage non disponible : contenu complet copié");
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
function nav(){ $("#nav").innerHTML=cats.map(c=>`<button class="navbtn ${state.cat===c?"active":""}" onclick='openCat(${JSON.stringify(c)})'>${icon(c)} ${esc(c)}</button>`).join("")}
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
  {cat:"Portails",icon:"↗",desc:"Portails, sites officiels, outils et favoris.",count:allPortals().length}
 ];
 return '<div class="home-summary all-menu-home">'+sections.map(s=>
  '<article class="card home-kpi"><h3>'+s.icon+' '+esc(s.cat)+'</h3><div class="big-number">'+s.count+'</div><p class="desc">'+esc(s.desc)+'</p><button class="btn primary" onclick=\'openCat('+JSON.stringify(s.cat)+')\'>Ouvrir</button></article>'
 ).join("")+'</div>';
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
 document.body.classList.toggle("light",state.theme==="light");nav();
 $("#title").textContent=state.cat;
 $("#stats").textContent=pocketActions().length+" scripts/actions • "+allTemplates().length+" modèles";
 let c=state.cat, h=
   c==="Accueil"?home():
   c==="Communications"?communications():
   c==="Portails"?portals():
   c==="Journal & Statistiques"?renderJournal():
   renderActions(c);
 $("#content").innerHTML=h
}
$("#search").addEventListener("input",render);
$("#theme").onclick=()=>{state.theme=state.theme==="light"?"dark":"light";save();render()};
window.openCat=openCat;window.closeTab=closeTab;window.copy=copy;window.newTemplate=newTemplate;window.editTemplate=editTemplate;window.duplicateTemplate=duplicateTemplate;window.saveTemplate=saveTemplate;window.deleteTemplate=deleteTemplate;window.quickTemplateSearch=quickTemplateSearch;window.exportTemplates=exportTemplates;window.importTemplates=importTemplates;window.render=render;

let hiddenTemplates=JSON.parse(localStorage.getItem("itpHiddenTemplates")||"[]");
let customLinks=JSON.parse(localStorage.getItem("itpCustomLinks")||"[]");
let hiddenLinks=JSON.parse(localStorage.getItem("itpHiddenLinks")||"[]");
let favoriteLinks=JSON.parse(localStorage.getItem("itpFavoriteLinks")||"[]");
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
 (usefulText?'<button class="btn '+(p.standalone?'primary':'')+'" onclick=\'copy('+JSON.stringify(usefulText)+')\'>'+esc(r.copy)+'</button>':'')+
 '<button class="btn" onclick=\'shareText('+JSON.stringify(a.name||"Fiche support")+','+JSON.stringify(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+JSON.stringify("[Support] "+(a.name||"Fiche"))+','+JSON.stringify(shareBody)+')\'>Outlook</button>'+
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
 '<div class="actions compact-actions"><button class="btn primary" onclick=\'copy('+JSON.stringify(c.command)+')\'>'+esc(r.copy)+'</button>'+
 '<button class="btn" onclick=\'shareText('+JSON.stringify(c.name||"Fiche support")+','+JSON.stringify(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+JSON.stringify("[Support] "+(c.name||"Fiche"))+','+JSON.stringify(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" data-detail-btn="'+id+'" onclick=\'toggleInlineDetail("'+id+'")\'>Voir plus</button></div>'+
 detailHtml(c,id)+'</article>';
}
function allTemplates(){return D.templates.map((t,i)=>({...t,builtin:true,_id:"b"+i})).filter(t=>!hiddenTemplates.includes(t._id)).concat(custom.map((t,i)=>({...t,custom:true,_id:"c"+i})))}
function getTemplateByRef(ref){if(!ref)return null;let i=parseInt(ref.slice(1),10);return ref[0]==="b"?D.templates[i]:custom[i]}
function openTemplateOutlook(ref){let t=getTemplateByRef(ref);if(!t)return;openOutlookText(t.subject||t.name||"Communication IT",t.content||"")}
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
 let actionCards=filterItems(pocketActions().filter(x=>x.webCategory==="Communications"),["name","description","method","command","script","category"]);
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
function portalCard(p){
 let r=JSON.stringify(p._id),f=isFavoriteLink(p._id);
 const shareBody=(p.name||"Lien IT")+"\n"+(p.url||"");
 return '<article class="card"><h3>'+(f?'★ ':'')+esc(p.name)+'</h3><div class="meta">'+esc(p.category||"Divers")+' '+(p.builtin?'• Intégré':'• Personnel')+'</div>'+
 '<pre class="code">'+esc(p.url)+'</pre><div class="actions">'+
 '<button class="btn primary" onclick=\'window.open('+JSON.stringify(p.url)+',"_blank","noopener")\'>Ouvrir</button>'+
 '<button class="btn" onclick=\'copy('+JSON.stringify(p.url)+')\'>Copier le lien</button>'+
 '<button class="btn" onclick=\'shareText('+JSON.stringify(p.name||"Lien IT")+','+JSON.stringify(shareBody)+')\'>Partager</button>'+
 '<button class="btn outlook" onclick=\'openOutlookText('+JSON.stringify("[Support] "+(p.name||"Lien"))+','+JSON.stringify(shareBody)+')\'>Outlook</button>'+
 '<button class="btn" onclick=\'toggleFavoriteLink('+r+')\'>'+(f?'★ Favori':'☆ Favori')+'</button>'+
 '<button class="btn" onclick=\'editLink('+r+')\'>Modifier</button><button class="btn red" onclick=\'deleteLink('+r+')\'>Supprimer</button></div></article>'
}
function portals(){let ps=filterItems(allPortals(),["name","url","category"]);if(portalFilter==="Favoris")ps=ps.filter(p=>isFavoriteLink(p._id));else if(portalFilter!=="Tous")ps=ps.filter(p=>(p.category||"Divers")===portalFilter);let cs=[...new Set(allPortals().map(x=>x.category||"Divers"))].sort();return '<div class="toolbar"><button class="btn primary" onclick="newLink()">+ Ajouter un lien</button><button class="btn" onclick=\'setPortalFilter("Tous")\'>Tous</button><button class="btn" onclick=\'setPortalFilter("Favoris")\'>★ Favoris</button><span class="badge">'+ps.length+' lien(s)</span></div><div class="toolbar">'+cs.map(c=>'<button class="btn" onclick=\'setPortalFilter('+JSON.stringify(c)+')\'>'+esc(c)+'</button>').join("")+'</div><div class="grid">'+(ps.map(portalCard).join("")||'<div class="empty">Aucun lien trouvé.</div>')+'</div>'}
function newLink(ref=null){let p=ref?{...getLinkByRef(ref)}:{name:"",category:"Favoris",url:"https://"};$("#content").innerHTML='<div class="card"><h3>'+(ref?'Modifier le lien':'Ajouter un lien favori')+'</h3><div class="editor"><div><div class="meta">Nom</div><input id="lname" value="'+esc(p.name||"")+'"></div><div><div class="meta">Catégorie</div><input id="lcat" value="'+esc(p.category||"Favoris")+'"></div><div class="full"><div class="meta">URL</div><input id="lurl" value="'+esc(p.url||"https://")+'"></div><div class="full actions"><button class="btn primary" onclick=\'saveLink('+JSON.stringify(ref||"")+')\'>Enregistrer</button><button class="btn" onclick="render()">Annuler</button></div></div></div>'}
function editLink(r){newLink(r)}
function saveLink(r){let name=$("#lname").value.trim(),category=$("#lcat").value.trim()||"Favoris",url=$("#lurl").value.trim();if(!name||!/^https?:\/\//i.test(url)){alert("Nom obligatoire et URL http/https valide.");return}let p={name,category,url,custom:true};if(r&&r[0]==="c")customLinks[parseInt(r.slice(1),10)]=p;else{if(r&&r[0]==="b"&&!hiddenLinks.includes(r))hiddenLinks.push(r);customLinks.push(p)}savePocket();toast("Lien enregistré");render()}
function deleteLink(r){if(!r||!confirm("Supprimer ce lien ?"))return;if(r[0]==="c")customLinks.splice(parseInt(r.slice(1),10),1);else if(!hiddenLinks.includes(r))hiddenLinks.push(r);favoriteLinks=favoriteLinks.filter(x=>x!==r);savePocket();render()}
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
Object.assign(window,{actionCard,commandCard,toggleInlineDetail,launchTutorial,resourceType,contentSectionTitle,supportSteps,buildSupportShare,cleanMethod,specificCheck,executionProfile,isContainerAction,actionKind,setTypeFilter,pocketActions,isPocketCenterWrapper,shareText,openOutlookText,setTemplateFilter,setActionFilter,renderAllActions,renderJournal,communications,newTemplate,editTemplate,saveTemplateRef,deleteTemplate,openTemplateOutlook,portals,newLink,editLink,saveLink,deleteLink,toggleFavoriteLink,setPortalFilter,renderActions,tools});
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
