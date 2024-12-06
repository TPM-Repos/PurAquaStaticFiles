@REM Version 1.3.0
@echo off
echo This script will download the latest version of the Modified Corporate Theme from the TPM-Repos GitHub repository.
echo It will download them into the current folder which is
echo %cd%
echo .
echo If you already have a version of the theme installed, it will be overwritten.
echo Your configUser.js file will not be affected.
echo.
echo Press any key to continue...
pause > nul

echo Cloning repository...
git clone "https://github.com/TPM-Repos/PurAquaStaticFiles"

echo Copying files...
xcopy /Y /E ".\PurAquaStaticFiles\*" .

echo Cleaning up...
rmdir /S /Q "PurAquaStaticFiles"

echo Done!
echo Press any key to close this window...
pause > nul