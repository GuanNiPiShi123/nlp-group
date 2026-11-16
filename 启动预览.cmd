@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Please install Node.js 24 or newer, then run this file again.
  pause
  exit /b 1
)
if not exist "node_modules\astro\bin\astro.mjs" (
  echo Dependencies are missing. Run pnpm install in this folder first.
  pause
  exit /b 1
)
set ASTRO_TELEMETRY_DISABLED=1
echo Open http://127.0.0.1:4321/ after the server is ready.
echo Press Ctrl+C to stop the preview.
node node_modules/astro/bin/astro.mjs dev --host 127.0.0.1 --port 4321
pause
