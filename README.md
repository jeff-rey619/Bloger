# WinInstallerBuilder
We are creating a package for building windows installer especially for Electron js apps , on top  of nsis .

The main aim of the project is to build a windows installer builder , which can be easily configured with a js file . For an example, 

Installername = "Test app" ;
InstallerIcon = "icon path";
appExe ="Location to the exe of the electron app ";
MainPageContents = "" ;
MainPageTriggerButton = "true" ;
MainPageTriggerButtonName = "Install dependencies" ;
MainPageTriggerButtonScript ="location to the batch file" ;
UninstallerName= "" ;
UninstallerIcon ="icon path"


After the user creates this js file and enters the buliding command for the WinInstallerBuilder . This project needs to provide the windows installer with the help of nsis scripts . Basically under the hood , 
we should provide the nsis scripts with the provided details from the js file for building the installer .  
