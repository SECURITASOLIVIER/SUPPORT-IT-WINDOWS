window.SSIT_DATA = {
  "version": "WEB FULL 1.0",
  "actions": [
    {
      "category": "Accueil",
      "name": "Résumé machine",
      "description": "Vue rapide des informations utiles au support.",
      "method": "CIM + Environment + réseau",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Accueil",
      "name": "Top applications détectées",
      "description": "Affiche les applications prioritaires de support détectées sur le poste.",
      "method": "Registre Uninstall HKLM/HKCU",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Applications",
      "name": "Centre applications support",
      "description": "Vue technicien des principales applications : installation, version, état, PID, démarrage et dernière exécution observée.",
      "method": "Registre App Paths + processus + Prefetch Windows",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Applications",
      "name": "Inventaire applications",
      "description": "Liste les logiciels installés hors applications Store.",
      "method": "Registre Windows Uninstall",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Applications",
      "name": "Processus applications métier",
      "description": "Affiche les processus non système les plus consommateurs.",
      "method": "Get-Process tri RAM/CPU",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Applications",
      "name": "Ouvrir Apps installées",
      "description": "Ouvre la page Windows Applications installées.",
      "method": "ms-settings:appsfeatures",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Applications"
    },
    {
      "category": "Applications",
      "name": "Réparer / Modifier / Reset",
      "description": "Sélectionne une application et lance sa maintenance, une réparation MSI ou les options de reset quand elles existent.",
      "method": "ModifyPath + Windows Installer + options spécifiques connues",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Applications",
      "name": "Fermer une application",
      "description": "Permet de choisir un processus graphique puis tente une fermeture propre.",
      "method": "Process.CloseMainWindow()",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Faible : l’application peut demander d'enregistrer.",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Applications",
      "name": "Forcer fermeture d'une application",
      "description": "Termine le processus sélectionné comme Fin de tâche.",
      "method": "Stop-Process -Force",
      "command": "",
      "language": "",
      "rights": "Selon le processus, administrateur",
      "risk": "Moyen : données non enregistrées perdues.",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Microsoft 365",
      "name": "Gérer les compléments Office",
      "description": "Permet de lire, désactiver ou réactiver les COM Add-ins Word, Excel, Outlook et PowerPoint.",
      "method": "LoadBehavior registre Office : 0=désactivé, 3=chargement normal",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : peut modifier le comportement d'Office.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - diagnostic technicien",
      "description": "Collecte version, processus, comptes, dossiers, démarrage, connectivité Microsoft et logs OneDrive.",
      "method": "Registre OneDrive + processus + DNS/TCP 443 + logs locaux",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - rapport d'escalade",
      "description": "Exporte un rapport technique OneDrive en TXT + JSON sans questionnaire générique.",
      "method": "Diagnostic OneDrive structuré pour ticket/escalade",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - ouvrir logs",
      "description": "Ouvre le dossier de logs OneDrive local pour analyse avancée.",
      "method": "%LOCALAPPDATA%\\Microsoft\\OneDrive\\logs",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - ouvrir dossier synchronisé",
      "description": "Ouvre le dossier OneDrive professionnel détecté.",
      "method": "OneDriveCommercial / OneDrive",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - tester services Microsoft",
      "description": "Teste DNS et TCP 443 vers les principaux endpoints Microsoft utiles au client OneDrive.",
      "method": "Resolve-DnsName + Test-NetConnection login.microsoftonline.com / onedrive.live.com / graph.microsoft.com",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - redémarrage complet",
      "description": "Ferme OneDrive proprement, attend quelques secondes puis relance le client.",
      "method": "OneDrive.exe /shutdown puis OneDrive.exe",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Faible à moyen : synchronisation interrompue temporairement.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Nettoyer cache Office Documents",
      "description": "Nettoie le cache documentaire Microsoft Office avec rapport avant/après.",
      "method": "%LOCALAPPDATA%\\Microsoft\\Office\\16.0\\OfficeFileCache",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : fichiers Office pourront être resynchronisés.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Nettoyer cache Web Add-ins Office",
      "description": "Nettoie le cache WEF utilisé par les compléments Web Office avec rapport avant/après.",
      "method": "%LOCALAPPDATA%\\Microsoft\\Office\\16.0\\Wef",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : les compléments Web rechargeront leurs ressources.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Nettoyer Outlook RoamCache",
      "description": "Nettoie le RoamCache Outlook après fermeture du client et génère un rapport avant/après.",
      "method": "%LOCALAPPDATA%\\Microsoft\\Outlook\\RoamCache",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : certaines données locales seront recréées.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "État Office / Click-to-Run",
      "description": "Affiche version, canal et configuration Microsoft 365 Apps.",
      "method": "Registre ClickToRun Configuration",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Compléments Word / Excel / Outlook / PowerPoint",
      "description": "Inventorie les COM Add-ins Office et leur LoadBehavior.",
      "method": "Registre Office 16.0 <App>\\Addins",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Options macros Word / Excel / PowerPoint",
      "description": "Lit les paramètres utilisateur de sécurité VBA sans les modifier.",
      "method": "Registre Office Security : VBAWarnings / AccessVBOM",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Lecture seule",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Outlook - état processus",
      "description": "Affiche PID, RAM et CPU Outlook.",
      "method": "Get-Process OUTLOOK",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Outlook - Safe Mode",
      "description": "Lance Outlook avec les extensions limitées pour isoler certains incidents.",
      "method": "outlook.exe /safe",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Outlook - Reset Navigation Pane",
      "description": "Réinitialise le volet de navigation Outlook.",
      "method": "outlook.exe /resetnavpane",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Faible : réinitialise la personnalisation du volet.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Outlook - fichiers OST/PST",
      "description": "Inventorie les fichiers de données Outlook et leur taille.",
      "method": "Get-ChildItem AppData Outlook + Documents\\Outlook Files",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Ouvrir Panneau Mail / Profils Outlook",
      "description": "Ouvre le panneau Mail Outlook classique pour gérer les profils.",
      "method": "Recherche MLCFG32.CPL Office puis ouverture via control.exe.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Ouvrir dossier OST Outlook - AppData",
      "description": "Ouvre le dossier Outlook local de l'utilisateur, emplacement habituel des OST.",
      "method": "%LOCALAPPDATA%\\Microsoft\\Outlook",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Ouvrir dossier PST Outlook - Documents",
      "description": "Ouvre le dossier Outlook Files, emplacement courant des PST.",
      "method": "%USERPROFILE%\\Documents\\Outlook Files",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - état",
      "description": "Affiche processus et dossier OneDrive.",
      "method": "Get-Process OneDrive + variables environnement",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - fermer proprement",
      "description": "Demande à OneDrive de se fermer.",
      "method": "OneDrive.exe /shutdown",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - forcer fermeture",
      "description": "Force la fin du processus OneDrive comme le Gestionnaire des tâches.",
      "method": "Stop-Process OneDrive -Force",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : synchronisation interrompue immédiatement.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - relancer",
      "description": "Relance le client OneDrive.",
      "method": "Start OneDrive.exe",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - Reset",
      "description": "Réinitialise le client OneDrive puis permet de le relancer.",
      "method": "OneDrive.exe /reset",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : resynchronisation possible, pas de suppression des fichiers cloud.",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Teams - état / processus",
      "description": "Affiche les processus Teams et leur consommation.",
      "method": "Get-Process *teams*",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Réparation Office Windows",
      "description": "Ouvre les applications installées pour accéder à Modifier/Réparer Microsoft 365.",
      "method": "ms-settings:appsfeatures",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Navigateurs",
      "name": "Nettoyer caches Edge - tous profils",
      "description": "Nettoie Cache, Code Cache et GPUCache de tous les profils Edge avec rapport avant/après.",
      "method": "Profils Edge Default / Profile *",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : pages et ressources seront rechargées.",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Nettoyer caches Chrome - tous profils",
      "description": "Nettoie Cache, Code Cache et GPUCache de tous les profils Chrome avec rapport avant/après.",
      "method": "Profils Chrome Default / Profile *",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : pages et ressources seront rechargées.",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "État Chrome / Edge / Firefox",
      "description": "Affiche les processus et versions détectées.",
      "method": "Processus + inventaire registre",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Taille des caches",
      "description": "Mesure les caches principaux Chrome et Edge.",
      "method": "Analyse dossiers Cache / Code Cache",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Nettoyage cache Chrome",
      "description": "Ferme Chrome puis supprime Cache et Code Cache du profil Default.",
      "method": "Suppression ciblée des dossiers Cache",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : sessions web/caches peuvent être rechargés. Les mots de passe ne sont pas supprimés.",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Nettoyage cache Edge",
      "description": "Ferme Edge puis supprime Cache et Code Cache du profil Default.",
      "method": "Suppression ciblée des dossiers Cache",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : caches web rechargés. Favoris et mots de passe non supprimés.",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Sauvegarder favoris Chrome / Edge",
      "description": "Copie les fichiers Bookmarks des profils dans un dossier de sauvegarde sur le Bureau.",
      "method": "Copie des fichiers JSON Bookmarks",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Gestionnaire mots de passe Edge",
      "description": "Ouvre le gestionnaire officiel des mots de passe Edge. Super Support IT ne lit ni ne déchiffre les mots de passe.",
      "method": "edge://wallet/passwords",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Gestionnaire mots de passe Chrome",
      "description": "Ouvre le gestionnaire officiel Chrome. L'export éventuel reste soumis à l'authentification Windows.",
      "method": "chrome://password-manager/passwords",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Extensions Edge",
      "description": "Ouvre la page des extensions Edge.",
      "method": "edge://extensions",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Extensions Chrome",
      "description": "Ouvre la page des extensions Chrome.",
      "method": "chrome://extensions",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Effacer données navigateur Edge",
      "description": "Ouvre directement l'écran officiel de suppression des données.",
      "method": "edge://settings/clearBrowserData",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Navigateurs",
      "name": "Effacer données navigateur Chrome",
      "description": "Ouvre directement l'écran officiel de suppression des données.",
      "method": "chrome://settings/clearBrowserData",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Réseau",
      "name": "Résumé réseau SIMPLE",
      "description": "Affiche en priorité interface active, IPv4, MAC, passerelle et DNS.",
      "method": "Get-NetIPConfiguration / Get-NetAdapter",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Tester Internet",
      "description": "Teste la connectivité IP sans dépendre du DNS.",
      "method": "ping 1.1.1.1",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Tester DNS",
      "description": "Teste une résolution DNS publique.",
      "method": "Resolve-DnsName microsoft.com",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Ouvrir passerelle / box",
      "description": "Détecte la passerelle IPv4 et ouvre son interface HTTP.",
      "method": "Get-NetRoute / navigateur",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "IPCONFIG /ALL",
      "description": "Affiche la configuration réseau complète Windows.",
      "method": "ipconfig /all",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "ARP / appareils vus",
      "description": "Affiche les adresses IP/MAC présentes dans le cache ARP local.",
      "method": "arp -a",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Routes",
      "description": "Affiche la table de routage Windows.",
      "method": "route print",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Flush DNS",
      "description": "Vide uniquement le cache DNS local.",
      "method": "ipconfig /flushdns",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Faible",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Renew DHCP",
      "description": "Renouvelle les baux DHCP.",
      "method": "ipconfig /renew",
      "command": "",
      "language": "",
      "rights": "Peut nécessiter admin",
      "risk": "Moyen : coupure réseau momentanée.",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau",
      "name": "Reset Winsock",
      "description": "Réinitialise le catalogue Winsock.",
      "method": "netsh winsock reset",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "Moyen : redémarrage souvent nécessaire.",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Imprimantes",
      "name": "Liste imprimantes / ports",
      "description": "Affiche imprimantes, drivers, ports et statut.",
      "method": "Get-Printer",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Imprimantes",
      "name": "Ouvrir imprimantes Windows",
      "description": "Ouvre les paramètres imprimantes.",
      "method": "ms-settings:printers",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Imprimantes",
      "name": "État Spooler",
      "description": "Affiche l'état du service d'impression.",
      "method": "Get-Service Spooler",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Imprimantes",
      "name": "Redémarrer Spooler",
      "description": "Redémarre le service d'impression.",
      "method": "Restart-Service Spooler",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "Moyen : impressions momentanément interrompues.",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Imprimantes",
      "name": "Vider file Spooler",
      "description": "Arrête le service, supprime les jobs du spool puis redémarre.",
      "method": "Stop-Service Spooler; suppression PRINTERS; Start-Service",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "Élevé : supprime tous les travaux d'impression en attente.",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Imprimantes",
      "name": "Interfaces Web imprimantes",
      "description": "Détecte les ports TCP/IP d'imprimantes et propose leurs adresses.",
      "method": "Get-PrinterPort",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques",
      "name": "Périphériques en erreur",
      "description": "Affiche les périphériques PnP non OK.",
      "method": "Get-PnpDevice",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques",
      "name": "Bluetooth détecté",
      "description": "Liste les périphériques de classe Bluetooth.",
      "method": "Get-PnpDevice -Class Bluetooth",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques",
      "name": "Ouvrir Bluetooth",
      "description": "Ouvre la page Windows Bluetooth pour ajout/suppression.",
      "method": "ms-settings:bluetooth",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques",
      "name": "Gestionnaire de périphériques",
      "description": "Ouvre Device Manager.",
      "method": "devmgmt.msc",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques",
      "name": "Rescan matériel",
      "description": "Demande à Windows de rescanner les périphériques.",
      "method": "pnputil /scan-devices",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Windows Update",
      "name": "Ouvrir Windows Update",
      "description": "Ouvre Windows Update.",
      "method": "ms-settings:windowsupdate",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Windows Update",
      "name": "Redémarrage requis ?",
      "description": "Contrôle plusieurs indicateurs de reboot pending.",
      "method": "Registre CBS / Windows Update",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Windows Update",
      "name": "Services Windows Update",
      "description": "Affiche les services WU, BITS et CryptSvc.",
      "method": "Get-Service wuauserv,bits,cryptsvc",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Intune / Entra",
      "name": "Centre SCCM / Intune",
      "description": "Informations poste + synchronisation complète SCCM + synchronisation locale Intune/MDM + accès Company Portal.",
      "method": "SMS_Client TriggerSchedule + EnterpriseMgmt + dsregcmd",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "SCCM - Tout synchroniser",
      "description": "Déclenche les cycles principaux Configuration Manager et génère un rapport.",
      "method": "Machine/User Policy, Hardware/Software Inventory, Updates Scan/Evaluation, Application Evaluation",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "Intune / MDM - Synchroniser",
      "description": "Déclenche les tâches locales EnterpriseMgmt disponibles et compare avant/après.",
      "method": "Scheduled Tasks EnterpriseMgmt / PushLaunch / Schedule*",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "DSREGCMD - résumé",
      "description": "Affiche uniquement les informations Entra/MDM utiles au support.",
      "method": "dsregcmd /status puis extraction des champs utiles",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "DSREGCMD - sortie complète",
      "description": "Affiche la sortie brute complète pour diagnostic avancé.",
      "method": "dsregcmd /status",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "Comptes professionnels",
      "description": "Ouvre Accès professionnel ou scolaire.",
      "method": "ms-settings:workplace",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "SCCM - état client",
      "description": "Vérifie service CcmExec et namespace client.",
      "method": "Get-Service CcmExec / WMI CCM",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra",
      "name": "SCCM - panneau client",
      "description": "Ouvre le panneau Configuration Manager si présent.",
      "method": "control.exe smscfgrc",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "VPN / Citrix",
      "name": "Détecter VPN / Citrix",
      "description": "Recherche les principaux clients VPN et Citrix installés.",
      "method": "Inventaire applications + processus",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "VPN / Citrix",
      "name": "Processus VPN / Citrix",
      "description": "Affiche les processus correspondant aux principaux clients.",
      "method": "Get-Process filtré",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "VPN / Citrix",
      "name": "Citrix Workspace - Reset",
      "description": "Lance l’outil de reset Citrix s'il existe.",
      "method": "SelfServicePlugin.exe -clean / Receiver reset selon installation",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : sessions/configuration locale Citrix affectées.",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Nettoyage",
      "name": "Analyser tous les nettoyages",
      "description": "Mesure plusieurs zones sans supprimer.",
      "method": "Analyse TEMP, Windows TEMP, dumps, caches navigateurs.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Nettoyage",
      "name": "Nettoyer TEMP utilisateur",
      "description": "Supprime le contenu temporaire accessible du profil courant.",
      "method": "Remove-Item $env:TEMP\\*",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Faible à moyen : fichiers verrouillés ignorés.",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Nettoyage",
      "name": "Nettoyer Windows TEMP",
      "description": "Supprime les fichiers temporaires Windows accessibles.",
      "method": "Remove-Item C:\\Windows\\Temp\\*",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "Moyen",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Nettoyage",
      "name": "Vider Corbeille",
      "description": "Vide la corbeille de l'utilisateur.",
      "method": "Clear-RecycleBin -Force",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Élevé : suppression définitive de la corbeille.",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Nettoyage",
      "name": "Crash Dumps",
      "description": "Supprime les dumps applicatifs du profil courant.",
      "method": "Suppression %LOCALAPPDATA%\\CrashDumps",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : perdez des éléments utiles à un diagnostic futur.",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "CPU / RAM / Processus",
      "description": "Affiche les processus les plus consommateurs.",
      "method": "Get-Process",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "Disques / espace libre",
      "description": "Affiche capacité et espace libre.",
      "method": "Win32_LogicalDisk",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "Événements critiques / erreurs 24h",
      "description": "Récupère System et Application Level 1/2 sur 24h.",
      "method": "Get-WinEvent FilterHashtable",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "SFC /verifyonly",
      "description": "Vérifie l'intégrité des fichiers système sans réparation.",
      "method": "sfc /verifyonly",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "SFC /scannow",
      "description": "Analyse et répare les fichiers système Windows.",
      "method": "sfc /scannow",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "Moyen : modification des composants système.",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "DISM CheckHealth",
      "description": "Vérifie si l'image Windows est marquée comme corrompue.",
      "method": "DISM /Online /Cleanup-Image /CheckHealth",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "DISM ScanHealth",
      "description": "Analyse l'image Windows pour détecter une corruption.",
      "method": "DISM /Online /Cleanup-Image /ScanHealth",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "DISM RestoreHealth",
      "description": "Tente de réparer l'image Windows.",
      "method": "DISM /Online /Cleanup-Image /RestoreHealth",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "Moyen : réparation système, peut utiliser Windows Update.",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Système",
      "name": "CHKDSK scan C:",
      "description": "Analyse en ligne le volume C: sans planifier de réparation au reboot.",
      "method": "chkdsk C: /scan",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Winget",
      "name": "Winget list",
      "description": "Liste les applications connues de Winget.",
      "method": "winget list",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Winget",
      "name": "Mises à jour disponibles",
      "description": "Affiche les packages pouvant être mis à jour.",
      "method": "winget upgrade",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Winget",
      "name": "Mettre tout à jour",
      "description": "Lance la mise à jour de tous les packages Winget compatibles.",
      "method": "winget upgrade --all",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : plusieurs applications sont modifiées.",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Winget",
      "name": "Winget source list",
      "description": "Affiche les sources Winget configurées.",
      "method": "winget source list",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Outils Tech",
      "name": "Ouvre l’outil Windows $n.",
      "description": "$exe $args",
      "method": "Direct",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Outils Support"
    },
    {
      "category": "Outils Tech",
      "name": "PowerShell Admin",
      "description": "Ouvre PowerShell avec élévation UAC.",
      "method": "powershell.exe (RunAs)",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Outils Support"
    },
    {
      "category": "Outils Tech",
      "name": "CMD Admin",
      "description": "Ouvre CMD avec élévation UAC.",
      "method": "cmd.exe (RunAs)",
      "command": "",
      "language": "",
      "rights": "Administrateur",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Outils Support"
    },
    {
      "category": "Liens Microsoft",
      "name": "Ouvre $name dans le navigateur.",
      "description": "Direct",
      "method": "Open-Uri '$url'",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Outils Support"
    },
    {
      "category": "Liens Microsoft",
      "name": "Configurer liens entreprise",
      "description": "Crée/ouvre un fichier texte où noter ServiceNow, KPI, KB, Remote Support et autres portails internes.",
      "method": "Fichier SuperSupportIT\\custom-links.txt",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Liens Microsoft",
      "name": "Ouvre $name dans le navigateur.",
      "description": "Direct",
      "method": "Open-Uri '$url'",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Outils Support"
    },
    {
      "category": "Edge",
      "name": "Ouvrir Edge",
      "description": "Lance Microsoft Edge directement depuis Super Support IT.",
      "method": "msedge.exe",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Mes favoris Edge",
      "description": "Affiche tous les favoris Edge locaux, tous profils, avec recherche, ouverture et copie de lien.",
      "method": "Lecture locale des fichiers Bookmarks Edge",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Extensions Edge",
      "description": "Ouvre la gestion des extensions Edge.",
      "method": "edge://extensions",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Mots de passe Edge",
      "description": "Ouvre le gestionnaire officiel des mots de passe Edge.",
      "method": "edge://wallet/passwords",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Effacer données Edge",
      "description": "Ouvre la page officielle de suppression des données de navigation.",
      "method": "edge://settings/clearBrowserData",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Diagnostic Edge",
      "description": "Collecte version, processus, profils, favoris et paramètres proxy pour ticket.",
      "method": "Registre + processus + profils Edge + Internet Settings",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Mes Apps",
      "name": "Toutes les applications visuelles",
      "description": "Affiche toutes les applications détectées avec leur icône, état, ouverture, diagnostic et maintenance.",
      "method": "Icône executable + processus + version + Prefetch",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Mes Apps",
      "name": "Lanceur applications",
      "description": "Lance vos applications principales depuis Super Support IT sans passer par le menu Démarrer.",
      "method": "Inventaire local + App Paths + InstallLocation",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Mes Apps",
      "name": "Centre applications support",
      "description": "État, version, PID, dernière exécution observée, fermeture et actions support.",
      "method": "Processus + App Paths + Prefetch",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Mes Apps",
      "name": "Réparer / Modifier / Reset",
      "description": "Ouvre la console de maintenance applicative.",
      "method": "ModifyPath + MSI + options spécifiques",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Diagnostic & Escalade",
      "name": "Collecte complète ticket",
      "description": "Collecte poste, applicatif, réseau, système/infra et Web dans un TXT + JSON prêts pour escalade.",
      "method": "CIM + Event Logs + réseau + dsregcmd + applications + navigateurs",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Diagnostic & Escalade",
      "name": "Collecte Applicatif",
      "description": "Prépare les données utiles pour une équipe applicative : versions, processus, erreurs et contexte poste.",
      "method": "Applications + processus + Event Log Application",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Diagnostic & Escalade",
      "name": "Collecte Réseau",
      "description": "Prépare IP/MAC/DNS/passerelle, tests, VPN, proxy et routes pour l'équipe réseau.",
      "method": "Get-NetIPConfiguration + Test-NetConnection + route + proxy",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Diagnostic & Escalade",
      "name": "Collecte Système / Infra",
      "description": "Prépare services, événements système, périphériques et état du poste pour infra/sysadmin.",
      "method": "Services + Event Log System + PnP + CIM",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Diagnostic & Escalade",
      "name": "Collecte Web",
      "description": "Prépare versions navigateurs, proxy, PAC et informations Edge pour équipe Web.",
      "method": "Navigateurs + Internet Settings + favoris Edge",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire matériel local",
      "description": "Collecte constructeur, modèle, serial, BIOS, Windows, CPU, RAM, disque et réseau puis exporte CSV + JSON.",
      "method": "CIM / WMI + Get-NetIPConfiguration",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire applications",
      "description": "Exporte les logiciels installés, versions, éditeurs et chemins.",
      "method": "Registre Uninstall HKLM/HKCU",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire drivers",
      "description": "Exporte les pilotes installés avec version, fournisseur, date et INF.",
      "method": "Win32_PnPSignedDriver",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire réseau",
      "description": "Exporte cartes réseau, MAC, IPv4, passerelle, DNS et vitesse.",
      "method": "Get-NetAdapter + Get-NetIPConfiguration",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire imprimantes",
      "description": "Exporte imprimantes, pilotes, ports et statut.",
      "method": "Get-Printer",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire compléments Office",
      "description": "Exporte les add-ins Office détectés et leur LoadBehavior.",
      "method": "Registre Office Addins",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire SCCM local",
      "description": "Collecte client SCCM, CcmExec, version, site et cache.",
      "method": "root\\ccm + registre CCM",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Inventaire Intune / Graph",
      "description": "Lance directement l inventaire Windows Intune et exporte C:\\Export\\Inventaire_Intune.csv.",
      "method": "Microsoft Graph Device Management",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Script SCCM inventaire",
      "description": "Affiche une version réutilisable du script d'inventaire SCCM local.",
      "method": "PowerShell / CIM root\\ccm",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Winget - inventaire",
      "description": "Exporte la liste Winget pour joindre à un ticket ou comparer un poste.",
      "method": "winget list",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Logs Windows pour ticket",
      "description": "Exporte les erreurs System et Application des dernières 24 h en CSV.",
      "method": "Get-WinEvent",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "DSREGCMD pour ticket",
      "description": "Exporte dsregcmd /status dans un fichier texte.",
      "method": "dsregcmd /status",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "ServiceNow - modèle navigateur",
      "description": "Retrouve le modèle d'automatisation navigateur quand API/rapport ne sont pas disponibles.",
      "method": "Edge + WScript.Shell / navigation clavier",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Dell - BIOS / Drivers",
      "description": "Inventaire Dell et détection de Dell Command Update s'il est déjà présent.",
      "method": "CIM + dcu-cli si présent",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "HP - BIOS / Drivers",
      "description": "Inventaire HP et détection des commandes HP CMSL si présentes.",
      "method": "CIM + HP CMSL si présent",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Entra PIM - activation rôles",
      "description": "Lance directement Azure Tools Hub sur la partie PIM.",
      "method": "Azure Tools Hub / Microsoft Graph",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Scripts & Inventaires",
      "name": "Entra Admin Center",
      "description": "Ouvre Entra pour gestion des identités et PIM.",
      "method": "https://entra.microsoft.com",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Outils Support"
    },
    {
      "category": "Rapport",
      "name": "Voir rapport session",
      "description": "Affiche toutes les actions/diagnostics ajoutés pendant cette session.",
      "method": "Liste interne de session",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Rapport",
      "name": "Exporter rapport TXT",
      "description": "Ouvre Enregistrer sous : vous choisissez le nom et l'emplacement.",
      "method": "UTF-8 TXT - aucun enregistrement automatique",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Rapport",
      "name": "Ouvrir journal Super Support IT",
      "description": "Ouvre le journal technique de l’application.",
      "method": "",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Périphériques",
      "name": "Centre de gestion périphériques",
      "description": "Activer, désactiver, désinstaller, consulter le pilote, copier les informations et gérer la veille des cartes réseau.",
      "method": "Get-PnpDevice / Enable-PnpDevice / Disable-PnpDevice / pnputil / Get-NetAdapterPowerManagement",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Applications",
      "name": "Maintenance / Désinstallation logiciels",
      "description": "Réparer, modifier, désinstaller ou copier les informations des logiciels installés.",
      "method": "Registre Uninstall + MSIExec / UninstallString",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Commandes & Scripts",
      "name": "Bibliothèque complète",
      "description": "Commandes et scripts prêts à copier-coller pour l'assistance distante.",
      "method": "Réseau / Système / Office / Applications / Intune / SCCM / Sécurité / Impression",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Commandes & Scripts",
      "name": "Commandes Réseau",
      "description": "IP, DNS, DHCP, Winsock, routes, proxy et tests TCP.",
      "method": "PowerShell + CMD",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Commandes & Scripts",
      "name": "Commandes Système",
      "description": "SFC, DISM, CHKDSK, événements et services.",
      "method": "PowerShell + outils Windows",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Commandes & Scripts",
      "name": "Commandes Office / M365",
      "description": "Outlook, OneDrive et diagnostics Office.",
      "method": "PowerShell + switches Office",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Commandes & Scripts",
      "name": "Commandes SCCM / Intune",
      "description": "DSREGCMD, EnterpriseMgmt et cycles Configuration Manager.",
      "method": "PowerShell / CIM / dsregcmd",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Outils Tech",
      "name": "Contrôler le classement des menus",
      "description": "Vérifie Winget, Windows Update, Navigateurs et Microsoft 365 avant distribution.",
      "method": "Contrôle interne de routage",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Outils Support"
    },
    {
      "category": "Poste Windows",
      "name": "Analyse disque avancee",
      "description": "Analyse recursive type TreeSize avec navigation dans les dossiers, affichage des fichiers, tailles, applications et caches.",
      "method": "Analyse locale en lecture seule avec explorateur integre",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Journal & Statistiques",
      "name": "Journal de l'application",
      "description": "Historique local des actions et erreurs Super Support IT.",
      "method": "CSV local",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Journal & Statistiques"
    },
    {
      "category": "Réseau",
      "name": "Centre tests réseau personnalisés",
      "description": "Crée, modifie et lance des tests personnalisés pour sites, serveurs, VM, routeurs, switchs, modems 4G/5G et services.",
      "method": "PING, DNS, TCP, HTTP/HTTPS et traceroute avec groupes, chrono, annulation et historique.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Diagnostic & Escalade",
      "name": "Centre d'incident",
      "description": "Playbooks guidés pour les incidents support les plus fréquents avec détection d’anomalies, actions proposées et validation.",
      "method": "Diagnostic local structuré : PC lent, Internet, Outlook, OneDrive, impression, VPN et Windows Update.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Applications",
      "name": "Diagnostic applications actives",
      "description": "Analyse rapidement les applications réellement en cours : RAM, CPU, version, éditeur, chemin et erreurs Application récentes.",
      "method": "Get-Process + FileVersionInfo + Event Log • lecture seule",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Microsoft 365",
      "name": "Diagnostic M365 rapide",
      "description": "Contrôle Office, Outlook, Word, Excel, PowerPoint, OneDrive, OST, compléments et erreurs récentes sans lancer de réparation.",
      "method": "Click-to-Run + processus + OST + Add-ins + Event Log • lecture seule",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Système",
      "name": "Diagnostic système rapide",
      "description": "Contrôle en quelques secondes mémoire, disque, uptime, périphériques, services et erreurs système récentes.",
      "method": "CIM + PnP + Services + Event Log • cache session",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Système",
      "name": "Diagnostic système approfondi",
      "description": "Lance des contrôles plus poussés à la demande : DISM CheckHealth, CHKDSK scan, Defender, TPM et BitLocker.",
      "method": "DISM + CHKDSK + Defender + TPM + BitLocker",
      "command": "",
      "language": "",
      "rights": "Administrateur recommandé",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Edge",
      "name": "Diagnostic Edge complet",
      "description": "Version, processus, RAM, profils, caches, extensions, strategies entreprise, proxy et erreurs recentes.",
      "method": "Lecture locale Edge + registre + Event Log",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Edge",
      "name": "Profils Edge",
      "description": "Liste les profils, favoris observes, taille de cache et chemin local.",
      "method": "Local State + User Data",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Extensions Edge détaillées",
      "description": "Affiche les extensions réellement installees par profil avec ID, version et chemin.",
      "method": "Manifestes locaux des extensions Edge",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Stratégies Edge entreprise",
      "description": "Affiche les strategies Edge imposees localement au niveau machine et utilisateur.",
      "method": "HKLM/HKCU Software Policies Microsoft Edge",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Processus Edge",
      "description": "Affiche PID, RAM, CPU, heure de demarrage et executable.",
      "method": "Get-Process msedge",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Analyser cache Edge",
      "description": "Mesure les caches de tous les profils sans suppression.",
      "method": "Cache + Code Cache + GPUCache + Service Worker",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Nettoyer cache Edge ciblé",
      "description": "Ferme Edge puis nettoie uniquement les caches techniques avec comparaison avant/apres.",
      "method": "Cache + Code Cache + GPUCache",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "Moyen : les pages rechargeront leurs ressources.",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Erreurs et crashs Edge",
      "description": "Affiche les erreurs Edge et WebView2 recentes depuis les journaux Windows.",
      "method": "Application Error + Windows Error Reporting",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "Réseau / proxy Edge",
      "description": "Teste DNS, TCP 443 et affiche les proxys utilisateur et WinHTTP.",
      "method": "Resolve-DnsName + Test-NetConnection + proxy",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Edge",
      "name": "WebView2",
      "description": "Affiche le runtime WebView2 installe et les processus actifs.",
      "method": "EdgeUpdate + msedgewebview2",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Navigateurs"
    },
    {
      "category": "Intune / Entra",
      "name": "Azure Tools Hub",
      "description": "Lance directement Azure Tools Hub.",
      "method": "PIM Entra / Microsoft Graph / Azure Arc",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Intune / Entra / SCCM",
      "name": "Centre Intune Azure MS",
      "description": "Accès centralisé à Intune, Entra, Azure, appareils, groupes, applications et identité.",
      "method": "Centre Microsoft.",
      "command": "Ouvre le centre Intune Azure MS.",
      "language": "Microsoft Cloud",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Applications",
      "name": "Centre Applications",
      "description": "Un seul centre pour voir, rechercher, lancer, diagnostiquer, forcer la fermeture, redemarrer, reparer, modifier ou reset une application.",
      "method": "Fusion de Toutes les applications visuelles + Centre applications support + Lanceur + Reparer/Modifier/Reset.",
      "command": "Ouvre le Centre Applications Super Support IT.",
      "language": "PowerShell / WinForms / Registre / Processus",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Poste Windows",
      "name": "Etat Windows & mises a jour",
      "description": "Regroupe dernier demarrage, uptime, arret propre/inattendu, reboot pending, derniere KB connue et historique reel Windows Update.",
      "method": "CIM + System Event Log + Microsoft.Update.Session + Get-HotFix.",
      "command": "Win32_OperatingSystem; Microsoft.Update.Session; Get-HotFix",
      "language": "PowerShell + COM Windows Update + Event Log",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Pilotes / BIOS constructeur",
      "description": "Detecte HP, Dell ou Lenovo, affiche modele/serial/BIOS et ouvre directement les pages officielles de support et telechargement pilotes/BIOS.",
      "method": "Aucune installation automatique d outil constructeur.",
      "command": "Win32_ComputerSystem; Win32_BIOS; ouvre le support officiel HP/Dell/Lenovo",
      "language": "PowerShell + CIM + liens officiels constructeur",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Microsoft 365",
      "name": "Word - diagnostic complet",
      "description": "Controle installation, version, processus, complements COM, securite macros, cache et derniere execution.",
      "method": "Diagnostic local sans modification.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Microsoft 365",
      "name": "Excel - diagnostic complet",
      "description": "Controle installation, version, processus, complements COM, securite macros, cache et derniere execution.",
      "method": "Diagnostic local sans modification.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Microsoft 365",
      "name": "PowerPoint - diagnostic complet",
      "description": "Controle installation, version, processus, complements COM, securite macros, cache et derniere execution.",
      "method": "Diagnostic local sans modification.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Microsoft 365",
      "name": "Word - nettoyer le cache",
      "description": "Ferme Word puis nettoie uniquement les caches locaux cibles.",
      "method": "OfficeFileCache + Content.Word.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Excel - nettoyer le cache",
      "description": "Ferme Excel puis nettoie uniquement les caches locaux cibles.",
      "method": "OfficeFileCache + Content.MSO.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "PowerPoint - nettoyer le cache",
      "description": "Ferme PowerPoint puis nettoie uniquement les caches locaux cibles.",
      "method": "OfficeFileCache + Content.MSO.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "Teams - nettoyer le cache",
      "description": "Ferme Teams puis nettoie les caches locaux du nouveau et de l ancien client.",
      "method": "LocalCache / Cache / Code Cache / GPUCache.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Microsoft 365",
      "name": "OneDrive - nettoyer cache et logs temporaires",
      "description": "Ferme OneDrive et nettoie les journaux temporaires locaux sans supprimer les fichiers synchronises.",
      "method": "Logs OneDrive uniquement; aucun dossier utilisateur synchronise.",
      "command": "",
      "language": "",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Poste Windows",
      "name": "Diagnostic express du poste",
      "description": "Informations systeme et hardware directement utiles au support : uptime, dernier boot/arret, CPU, RAM, disque, BIOS, derniere KB et reboot pending.",
      "method": "PowerShell + CIM + Event Log + Get-HotFix + Registry.",
      "command": "(Get-LmsSystemSnapshotCommand)",
      "language": "PowerShell + CIM + Event Log",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Poste Windows",
      "name": "Historique demarrage / arret",
      "description": "Affiche les derniers boots, arrets propres, arrets inattendus et redemarrages demandes.",
      "method": "Get-WinEvent System IDs 41,1074,6005,6006,6008.",
      "command": "Get-WinEvent -FilterHashtable @{LogName='System';Id=41,1074,6005,6006,6008} -MaxEvents 50",
      "language": "PowerShell + Event Log",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Poste Windows",
      "name": "Performance instantanee",
      "description": "Vue rapide CPU, RAM et top processus memoire pour un poste lent.",
      "method": "CIM Win32_OperatingSystem/Processor + Get-Process.",
      "command": "Get-CimInstance Win32_OperatingSystem; Get-CimInstance Win32_Processor; Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 10",
      "language": "PowerShell + CIM",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Poste Windows"
    },
    {
      "category": "Sécurité Windows",
      "name": "Etat securite Windows",
      "description": "Synthese BitLocker, TPM, Secure Boot, Defender et pare-feu.",
      "method": "Get-BitLockerVolume + Get-Tpm + Confirm-SecureBootUEFI + Get-MpComputerStatus + Get-NetFirewallProfile.",
      "command": "Get-BitLockerVolume; Get-Tpm; Confirm-SecureBootUEFI; Get-MpComputerStatus; Get-NetFirewallProfile",
      "language": "PowerShell",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Sécurité Windows"
    },
    {
      "category": "Sécurité Windows",
      "name": "BitLocker - etat local",
      "description": "Diagnostic robuste BitLocker avec fallback manage-bde et indication claire si une elevation est necessaire.",
      "method": "Get-BitLockerVolume + manage-bde -status. Aucune cle de recuperation n est lue.",
      "command": "Get-BitLockerVolume ; manage-bde -status",
      "language": "PowerShell / BitLocker",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Sécurité Windows"
    },
    {
      "category": "Sécurité Windows",
      "name": "Defender - etat et signatures",
      "description": "Diagnostic Defender lisible : service, protection temps reel, signatures, scans et PUA.",
      "method": "Get-MpComputerStatus + Get-MpPreference + WinDefend.",
      "command": "Get-MpComputerStatus; Get-MpPreference; Get-Service WinDefend",
      "language": "PowerShell / Defender",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Sécurité Windows"
    },
    {
      "category": "Sécurité Windows",
      "name": "TPM / Secure Boot - diagnostic",
      "description": "Affiche TPM present/pret/active, ownership, redemarrage requis et Secure Boot.",
      "method": "Get-Tpm + Confirm-SecureBootUEFI.",
      "command": "Get-Tpm; Confirm-SecureBootUEFI",
      "language": "PowerShell / TPM / UEFI",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Diagnostic & Escalade"
    },
    {
      "category": "Windows Update",
      "name": "Dernieres KB - synthese",
      "description": "Liste les derniers correctifs installes avec date et compte.",
      "method": "Get-HotFix trie par InstalledOn.",
      "command": "Get-HotFix | Where-Object InstalledOn | Sort-Object InstalledOn -Descending | Select-Object -First 30 HotFixID,Description,InstalledOn,InstalledBy",
      "language": "PowerShell",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Windows Update",
      "name": "Logs Windows Update recents",
      "description": "Affiche les derniers evenements du journal WindowsUpdateClient/Operational.",
      "method": "Get-WinEvent Microsoft-Windows-WindowsUpdateClient/Operational.",
      "command": "Get-WinEvent -LogName 'Microsoft-Windows-WindowsUpdateClient/Operational' -MaxEvents 40",
      "language": "PowerShell + Event Log",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Windows Update"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Inventaire complet des pilotes",
      "description": "Liste device, fabricant, version, date et fichier INF.",
      "method": "Win32_PnPSignedDriver via CIM.",
      "command": "Get-CimInstance Win32_PnPSignedDriver | Where-Object DeviceName | Select-Object DeviceName,Manufacturer,DriverVersion,DriverDate,InfName",
      "language": "PowerShell + CIM",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Pilotes / peripheriques en anomalie",
      "description": "Affiche uniquement les peripheriques PnP dont le statut n est pas OK.",
      "method": "Get-PnpDevice filtre Status.",
      "command": "Get-PnpDevice | Where-Object {$_.Status -ne 'OK'} | Select-Object Status,Class,FriendlyName,InstanceId",
      "language": "PowerShell + PnP",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "BIOS / Hardware",
      "description": "Fabricant, modele, serial, BIOS, date BIOS et carte mere.",
      "method": "CIM Win32_BIOS / Win32_ComputerSystem / Win32_BaseBoard.",
      "command": "Get-CimInstance Win32_BIOS; Get-CimInstance Win32_ComputerSystem; Get-CimInstance Win32_BaseBoard",
      "language": "PowerShell + CIM",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Rescan materiel PnP",
      "description": "Relance la detection des changements materiels. Si necessaire Super Support propose une elevation UAC.",
      "method": "pnputil /scan-devices avec gestion de l elevation.",
      "command": "pnputil /scan-devices",
      "language": "CMD / PnPUtil",
      "rights": "Administrateur",
      "risk": "Faible a moyen : rescane les peripheriques.",
      "actionType": "",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Microsoft 365",
      "name": "Centre commandes Office / M365",
      "description": "Toutes les commandes support utiles pour Outlook, Word, Excel, PowerPoint, Teams, OneDrive et Office Click-to-Run.",
      "method": "Bibliotheque de commandes copiables et executables, classees par application.",
      "command": "Ouvre le centre de commandes Microsoft 365.",
      "language": "PowerShell + switches Office + Win32",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Microsoft 365"
    },
    {
      "category": "Intune / Entra / SCCM",
      "name": "Derniere authentification / SSO",
      "description": "Affiche les informations AzureAdPrt / SSO de DSREGCMD et les journaux AAD / WebAuth disponibles.",
      "method": "DSREGCMD + journaux AAD, User Device Registration et WebAuth.",
      "command": "dsregcmd /status; Get-WinEvent Microsoft-Windows-AAD/Operational",
      "language": "PowerShell + Event Log + DSREGCMD",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Intune / Entra / SCCM"
    },
    {
      "category": "Applications",
      "name": "Assistance navigateurs Edge / Chrome",
      "description": "Centre de diagnostic et d actions pour Edge et Chrome : processus, version, sans extensions, fermeture forcee, redemarrage, extensions et policies.",
      "method": "PowerShell + processus + switches navigateurs.",
      "command": "Ouvre le centre navigateurs Super Support IT.",
      "language": "PowerShell / Edge / Chrome",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Applications"
    },
    {
      "category": "Réseau & Accès distant",
      "name": "Scanner reseau",
      "description": "Recherche les appareils d une plage IPv4 et affiche IP, nom, MAC, latence, type probable et services détectés.",
      "method": "Scan rapide ou complet.",
      "command": "Ouvre le scanner réseau.",
      "language": "Réseau",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau & Accès distant",
      "name": "Carte du reseau local",
      "description": "Vue du poste, de la passerelle et des appareils détectés sur le réseau local, avec accès au scanner réseau.",
      "method": "Analyse locale du réseau.",
      "command": "Get-NetIPConfiguration; Get-NetNeighbor -AddressFamily IPv4",
      "language": "PowerShell + WinForms + TCP/IP",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Réseau & Accès distant",
      "name": "Centre Citrix / FortiClient / Ivanti",
      "description": "Diagnostic separe par client : processus, services, interfaces, routes et logs.",
      "method": "Aucune remediation d un client n est appliquee a un autre.",
      "command": "Ouvre le centre VPN / acces distant.",
      "language": "PowerShell + Windows Networking",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Réseau & Accès distant"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Parametres audio Windows",
      "description": "Ouvre directement les parametres Son pour sortie, entree et peripheriques audio.",
      "method": "URI Windows ms-settings:sound.",
      "command": "Start-Process \"ms-settings:sound\"",
      "language": "Windows Settings URI",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Parametres Bluetooth Windows",
      "description": "Ouvre directement Bluetooth et appareils.",
      "method": "URI Windows ms-settings:bluetooth.",
      "command": "Start-Process \"ms-settings:bluetooth\"",
      "language": "Windows Settings URI",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Parametres imprimantes Windows",
      "description": "Ouvre directement Imprimantes et scanners.",
      "method": "URI Windows ms-settings:printers.",
      "command": "Start-Process \"ms-settings:printers\"",
      "language": "Windows Settings URI",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Parametres affichage Windows",
      "description": "Ouvre directement les parametres d affichage et ecrans.",
      "method": "URI Windows ms-settings:display.",
      "command": "Start-Process \"ms-settings:display\"",
      "language": "Windows Settings URI",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Périphériques & Pilotes",
      "name": "Gestionnaire de peripheriques Windows",
      "description": "Ouvre Device Manager pour le diagnostic avance du materiel.",
      "method": "devmgmt.msc.",
      "command": "Start-Process devmgmt.msc",
      "language": "MMC / Windows",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Périphériques & Pilotes"
    },
    {
      "category": "Communications",
      "name": "Centre Communications",
      "description": "Centralise les modèles et messages de support : rechercher, copier, préparer dans Outlook, créer, modifier, dupliquer ou supprimer.",
      "method": "Centre Communications Super Support IT.",
      "command": "Ouvre le Centre Communications.",
      "language": "Communications",
      "rights": "",
      "risk": "",
      "actionType": "",
      "webCategory": "Communications"
    },
    {
      "category": "Communications",
      "name": "Nouveau modele",
      "description": "Crée un nouveau modèle de communication réutilisable.",
      "method": "Éditeur intégré.",
      "command": "Ouvre l éditeur de modèle.",
      "language": "Communications",
      "rights": "",
      "risk": "",
      "actionType": "Direct",
      "webCategory": "Communications"
    }
  ],
  "commands": [
    {
      "category": "Réseau",
      "name": "IPCONFIG complet",
      "description": "Configuration réseau complète.",
      "command": "ipconfig /all",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Résumé PowerShell",
      "description": "Interface active, IPv4, passerelle et DNS.",
      "command": "Get-NetIPConfiguration",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Vider cache DNS",
      "description": "Vide le cache DNS local.",
      "command": "ipconfig /flushdns",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "DHCP release / renew",
      "description": "Renouvelle le bail DHCP.",
      "command": "ipconfig /release; ipconfig /renew",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Winsock reset",
      "description": "Réinitialise Winsock.",
      "command": "netsh winsock reset",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Reset TCP/IP",
      "description": "Réinitialise la pile TCP/IP.",
      "command": "netsh int ip reset",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Routes",
      "description": "Table de routage.",
      "command": "route print",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "ARP",
      "description": "Voisins ARP vus par le poste.",
      "command": "arp -a",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Test TCP 443",
      "description": "Test vers Microsoft.",
      "command": "Test-NetConnection microsoft.com -Port 443",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Réseau",
      "name": "Proxy WinHTTP",
      "description": "Proxy système.",
      "command": "netsh winhttp show proxy",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "SystemInfo",
      "description": "Résumé Windows et matériel.",
      "command": "systeminfo",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "SFC",
      "description": "Vérifie/répare les fichiers système.",
      "command": "sfc /scannow",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "DISM CheckHealth",
      "description": "État rapide du magasin de composants.",
      "command": "DISM /Online /Cleanup-Image /CheckHealth",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "DISM ScanHealth",
      "description": "Analyse approfondie.",
      "command": "DISM /Online /Cleanup-Image /ScanHealth",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "DISM RestoreHealth",
      "description": "Répare le magasin de composants.",
      "command": "DISM /Online /Cleanup-Image /RestoreHealth",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "CHKDSK scan",
      "description": "Analyse C: en ligne.",
      "command": "chkdsk C: /scan",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "Erreurs 24h",
      "description": "Erreurs/critique du journal System.",
      "command": "Get-WinEvent -FilterHashtable @{LogName=\"System\";Level=1,2;StartTime=(Get-Date).AddHours(-24)} -ErrorAction SilentlyContinue | Select TimeCreated,Id,ProviderName,Message",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Système",
      "name": "Services auto arrêtés",
      "description": "Services automatiques non démarrés.",
      "command": "Get-CimInstance Win32_Service | Where-Object {$_.StartMode -eq \"Auto\" -and $_.State -ne \"Running\"} | Select Name,DisplayName,State",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Applications",
      "name": "Winget list",
      "description": "Applications connues Winget.",
      "command": "winget list",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Applications",
      "name": "Winget upgrade",
      "description": "Mises à jour disponibles.",
      "command": "winget upgrade",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Applications",
      "name": "Top CPU",
      "description": "Top processus CPU.",
      "command": "Get-Process | Sort CPU -Descending | Select -First 15 Name,Id,CPU",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Office / M365",
      "name": "Outlook Safe",
      "description": "Outlook sans compléments classiques.",
      "command": "outlook.exe /safe",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Office / M365",
      "name": "Reset NavPane",
      "description": "Réinitialise le volet Outlook.",
      "command": "outlook.exe /resetnavpane",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Office / M365",
      "name": "OneDrive reset",
      "description": "Réinitialise OneDrive.",
      "command": "& \"$env:LOCALAPPDATA\\Microsoft\\OneDrive\\OneDrive.exe\" /reset",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Intune / Entra",
      "name": "DSREGCMD",
      "description": "Join, Tenant, Device ID, SSO, MDM.",
      "command": "dsregcmd /status",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Intune / Entra",
      "name": "Tâches MDM",
      "description": "Tâches EnterpriseMgmt.",
      "command": "Get-ScheduledTask | Where-Object {$_.TaskPath -like \"\\Microsoft\\Windows\\EnterpriseMgmt\\*\"} | Select TaskName,TaskPath,State",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Intune / Entra",
      "name": "Forcer MDM",
      "description": "Démarre les tâches EnterpriseMgmt.",
      "command": "Get-ScheduledTask | Where-Object {$_.TaskPath -like \"\\Microsoft\\Windows\\EnterpriseMgmt\\*\"} | Start-ScheduledTask",
      "rights": "",
      "risk": ""
    },
    {
      "category": "SCCM",
      "name": "Client SCCM",
      "description": "Informations SMS_Client.",
      "command": "Get-CimInstance -Namespace root\\ccm -ClassName SMS_Client",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Sécurité",
      "name": "Defender",
      "description": "État Defender.",
      "command": "Get-MpComputerStatus",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Sécurité",
      "name": "BitLocker",
      "description": "État BitLocker.",
      "command": "Get-BitLockerVolume",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Sécurité",
      "name": "TPM",
      "description": "État TPM.",
      "command": "Get-Tpm",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Impression",
      "name": "Imprimantes",
      "description": "Liste imprimantes.",
      "command": "Get-Printer | Select Name,DriverName,PortName,PrinterStatus",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Impression",
      "name": "Restart Spooler",
      "description": "Redémarre Spooler.",
      "command": "Restart-Service Spooler -Force",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Assistance distante",
      "name": "RDP",
      "description": "Bureau à distance.",
      "command": "mstsc.exe",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Assistance distante",
      "name": "Quick Assist",
      "description": "Assistance rapide Windows.",
      "command": "Start-Process \"ms-quick-assist:\"",
      "rights": "",
      "risk": ""
    },
    {
      "category": "Assistance distante",
      "name": "WhoAmI",
      "description": "Identité et groupes.",
      "command": "whoami /all",
      "rights": "",
      "risk": ""
    }
  ],
  "templates": [
    {
      "category": "Tickets",
      "name": "Incident - prise en charge",
      "subject": "Prise en charge de votre incident",
      "content": "Bonjour,\n\nVotre incident a bien été pris en charge. Nous analysons actuellement les éléments disponibles et reviendrons vers vous dès que possible.\n\nCordialement,"
    },
    {
      "category": "Tickets",
      "name": "Incident - informations complémentaires",
      "subject": "Informations nécessaires pour poursuivre le diagnostic",
      "content": "Bonjour,\n\nAfin de poursuivre le diagnostic, pourriez-vous nous transmettre :\n• le message d’erreur exact ;\n• une capture d’écran si possible ;\n• les étapes permettant de reproduire le problème ;\n• vos prochaines disponibilités.\n\nMerci d’avance.\n\nCordialement,"
    },
    {
      "category": "Tickets",
      "name": "Incident - clôture",
      "subject": "Résolution de votre incident",
      "content": "Bonjour,\n\nL’incident a été traité. Les actions réalisées ont permis de rétablir le fonctionnement.\n\nMerci de nous confirmer que tout est désormais opérationnel. Sans anomalie complémentaire, le ticket pourra être clôturé.\n\nCordialement,"
    },
    {
      "category": "Tickets",
      "name": "Demande - prise en charge",
      "subject": "Prise en charge de votre demande",
      "content": "Bonjour,\n\nVotre demande a bien été prise en charge. Nous revenons vers vous dès que les éléments nécessaires auront été vérifiés.\n\nCordialement,"
    },
    {
      "category": "Tickets",
      "name": "Relance utilisateur",
      "subject": "Relance concernant votre ticket",
      "content": "Bonjour,\n\nNous revenons vers vous concernant votre ticket. Sans retour de votre part, nous ne pouvons pas poursuivre le traitement.\n\nPourriez-vous nous transmettre votre retour ou vos prochaines disponibilités ?\n\nCordialement,"
    },
    {
      "category": "Tickets",
      "name": "Utilisateur injoignable",
      "subject": "Tentative de contact",
      "content": "Bonjour,\n\nNous avons tenté de vous joindre concernant votre ticket, sans succès.\n\nMerci de nous indiquer un créneau de disponibilité afin de poursuivre le traitement.\n\nCordialement,"
    },
    {
      "category": "Tickets",
      "name": "Dernière relance avant clôture",
      "subject": "Dernière relance concernant votre ticket",
      "content": "Bonjour,\n\nMalgré plusieurs tentatives de contact, nous n’avons pas reçu de retour. Sans réponse, le ticket pourra être clôturé administrativement.\n\nSi le besoin est toujours d’actualité, merci de nous transmettre vos disponibilités.\n\nCordialement,"
    },
    {
      "category": "Rendez-vous",
      "name": "Prise de rendez-vous",
      "subject": "Proposition de rendez-vous support",
      "content": "Bonjour,\n\nAfin de poursuivre le traitement, je vous propose une intervention le [DATE] à [HEURE], pour une durée estimée de [DURÉE].\n\nMerci de me confirmer si ce créneau vous convient.\n\nCordialement,"
    },
    {
      "category": "Rendez-vous",
      "name": "Confirmation de rendez-vous",
      "subject": "Confirmation de rendez-vous support",
      "content": "Bonjour,\n\nVotre rendez-vous est confirmé pour le [DATE] à [HEURE].\n\nMotif : [MOTIF]\nDurée estimée : [DURÉE]\n\nCordialement,"
    },
    {
      "category": "Rapports",
      "name": "Escalade N2/N3",
      "subject": "Escalade technique",
      "content": "Bonjour,\n\nEscalade du ticket [RÉFÉRENCE].\n\nContexte : [CONTEXTE]\nSymptôme : [SYMPTÔME]\nActions déjà réalisées : [ACTIONS]\nRésultat : [RÉSULTAT]\nÉléments collectés : [LOGS / CAPTURES / COMMANDES]\n\nMerci pour votre analyse."
    },
    {
      "category": "Rapports",
      "name": "Résolution temporaire / contournement",
      "subject": "Contournement temporaire",
      "content": "Bonjour,\n\nUn contournement temporaire a été mis en place afin de permettre la continuité d’activité.\n\nContournement : [DÉTAIL]\nLimite connue : [LIMITE]\nSuite prévue : [ACTION]\n\nCordialement,"
    },
    {
      "category": "Matériel",
      "name": "Mise à disposition matériel",
      "subject": "Mise à disposition de matériel",
      "content": "Bonjour,\n\nLe matériel suivant est prêt à être mis à disposition :\n• Équipement : [PC / CASQUE / CHARGEUR / AUTRE]\n• Référence / numéro de série : [RÉFÉRENCE]\n• Date : [DATE]\n• Modalité de remise : [DÉTAIL]\n\nCordialement,"
    },
    {
      "category": "Matériel",
      "name": "Restitution matériel",
      "subject": "Restitution de matériel",
      "content": "Bonjour,\n\nMerci de prévoir la restitution du matériel suivant : [MATÉRIEL].\n\nRéférence : [RÉFÉRENCE]\nDate / créneau : [DATE]\nLieu / modalité : [DÉTAIL]\n\nCordialement,"
    },
    {
      "category": "Sécurité",
      "name": "Alerte sécurité utilisateur",
      "subject": "Action de sécurité requise",
      "content": "Bonjour,\n\nUne action de sécurité est nécessaire concernant votre poste ou votre compte.\n\nMerci de ne pas communiquer vos mots de passe et de suivre uniquement les instructions transmises par votre support informatique.\n\nAction demandée : [ACTION]\n\nCordialement,"
    },
    {
      "category": "Communication",
      "name": "Interruption de service",
      "subject": "Information - interruption de service",
      "content": "Bonjour,\n\nUne interruption de service est actuellement en cours sur [SERVICE]. Les équipes techniques sont mobilisées.\n\nImpact : [IMPACT]\nDébut : [HEURE]\nProchaine information : [HEURE / DÈS ÉVOLUTION]\n\nMerci de votre compréhension."
    },
    {
      "category": "Communication",
      "name": "Retour à la normale",
      "subject": "Retour à la normale",
      "content": "Bonjour,\n\nLe service [SERVICE] est de nouveau opérationnel.\n\nNous vous invitons à reprendre votre activité normalement et à signaler toute anomalie persistante via un ticket.\n\nCordialement,"
    }
  ],
  "portals": [
    {
      "name": "admin.exchange.microsoft.com",
      "url": "https://admin.exchange.microsoft.com"
    },
    {
      "name": "admin.microsoft.com",
      "url": "https://admin.microsoft.com"
    },
    {
      "name": "admin.microsoft.com",
      "url": "https://admin.microsoft.com/Adminportal/Home#/servicehealth"
    },
    {
      "name": "admin.teams.microsoft.com",
      "url": "https://admin.teams.microsoft.com"
    },
    {
      "name": "config.office.com",
      "url": "https://config.office.com/officeSettings/serviceprofile"
    },
    {
      "name": "copilot.microsoft.com",
      "url": "https://copilot.microsoft.com"
    },
    {
      "name": "entra.microsoft.com",
      "url": "https://entra.microsoft.com"
    },
    {
      "name": "entra.microsoft.com",
      "url": "https://entra.microsoft.com/#view/Microsoft_AAD_Devices/DevicesMenuBlade/~/Devices"
    },
    {
      "name": "entra.microsoft.com",
      "url": "https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade/~/AllGroups"
    },
    {
      "name": "entra.microsoft.com",
      "url": "https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/UserManagementMenuBlade/~/AllUsers"
    },
    {
      "name": "entra.microsoft.com",
      "url": "https://entra.microsoft.com/#view/Microsoft_Azure_PIMCommon/ActivationMenuBlade/~/aadmigratedroles"
    },
    {
      "name": "graph.microsoft.com",
      "url": "https://graph.microsoft.com/v1.0/me?$select=id,displayName,userPrincipalName"
    },
    {
      "name": "graph.microsoft.com",
      "url": "https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignmentScheduleInstances/filterByCurrentUser(on='principal')?"
    },
    {
      "name": "graph.microsoft.com",
      "url": "https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignmentScheduleRequests"
    },
    {
      "name": "graph.microsoft.com",
      "url": "https://graph.microsoft.com/v1.0/roleManagement/directory/roleDefinitions?$select=id,displayName"
    },
    {
      "name": "graph.microsoft.com",
      "url": "https://graph.microsoft.com/v1.0/roleManagement/directory/roleEligibilityScheduleInstances/filterByCurrentUser(on='principal')?"
    },
    {
      "name": "intune.microsoft.com",
      "url": "https://intune.microsoft.com"
    },
    {
      "name": "intune.microsoft.com",
      "url": "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/AppsMenu/~/allApps"
    },
    {
      "name": "intune.microsoft.com",
      "url": "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesMenu/~/allDevices"
    },
    {
      "name": "intune.microsoft.com",
      "url": "https://intune.microsoft.com/#view/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/~/windowsDevices"
    },
    {
      "name": "intune.microsoft.com",
      "url": "https://intune.microsoft.com/#view/Microsoft_Intune_Enrollment/AutopilotDevices.ReactView/filterOnManualRemediationRequired~/false"
    },
    {
      "name": "learn.microsoft.com",
      "url": "https://learn.microsoft.com"
    },
    {
      "name": "learn.microsoft.com",
      "url": "https://learn.microsoft.com/troubleshoot/"
    },
    {
      "name": "learn.microsoft.com",
      "url": "https://learn.microsoft.com/windows/release-health/"
    },
    {
      "name": "msrc.microsoft.com",
      "url": "https://msrc.microsoft.com"
    },
    {
      "name": "myaccount.microsoft.com",
      "url": "https://myaccount.microsoft.com/"
    },
    {
      "name": "outlook.office.com",
      "url": "https://outlook.office.com"
    },
    {
      "name": "pcsupport.lenovo.com",
      "url": "https://pcsupport.lenovo.com/fr/fr/"
    },
    {
      "name": "pcsupport.lenovo.com",
      "url": "https://pcsupport.lenovo.com/fr/fr/products/downloads/"
    },
    {
      "name": "portal.azure.com",
      "url": "https://portal.azure.com"
    },
    {
      "name": "portal.azure.com",
      "url": "https://portal.azure.com/"
    },
    {
      "name": "portal.manage.microsoft.com",
      "url": "https://portal.manage.microsoft.com/"
    },
    {
      "name": "purview.microsoft.com",
      "url": "https://purview.microsoft.com"
    },
    {
      "name": "security.microsoft.com",
      "url": "https://security.microsoft.com"
    },
    {
      "name": "support.hp.com",
      "url": "https://support.hp.com/fr-fr"
    },
    {
      "name": "support.hp.com",
      "url": "https://support.hp.com/fr-fr/drivers"
    },
    {
      "name": "support.microsoft.com",
      "url": "https://support.microsoft.com"
    },
    {
      "name": "www.catalog.update.microsoft.com",
      "url": "https://www.catalog.update.microsoft.com"
    },
    {
      "name": "www.dell.com",
      "url": "https://www.dell.com/support/home/fr-fr"
    },
    {
      "name": "www.dell.com",
      "url": "https://www.dell.com/support/home/fr-fr/product-support/servicetag/$serial/drivers"
    }
  ]
};
