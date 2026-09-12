$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$launcher = Join-Path $root "Start VanaDiel Widget.bat"
$desktopShortcut = Join-Path ([Environment]::GetFolderPath("DesktopDirectory")) "VanaDiel Weather Clock.lnk"
$startMenuShortcut = Join-Path ([Environment]::GetFolderPath("Programs")) "VanaDiel Weather Clock.lnk"
$startupShortcut = Join-Path ([Environment]::GetFolderPath("Startup")) "VanaDiel Weather Clock.lnk"

function New-WidgetShortcut {
  param(
    [string]$Path,
    [string]$Target
  )

  $shell = New-Object -ComObject WScript.Shell
  $shortcut = $shell.CreateShortcut($Path)
  $shortcut.TargetPath = $Target
  $shortcut.WorkingDirectory = $root
  $shortcut.Description = "VanaDiel Weather Clock desktop widget"
  $shortcut.IconLocation = "$env:SystemRoot\System32\shell32.dll,13"
  $shortcut.Save()
}

New-WidgetShortcut -Path $desktopShortcut -Target $launcher
New-WidgetShortcut -Path $startMenuShortcut -Target $launcher

Write-Host "Installed Desktop and Start Menu shortcuts for VanaDiel Weather Clock."
$startupAnswer = Read-Host "Start this widget automatically when Windows starts? (Y/N)"

if ($startupAnswer -match "^[Yy]") {
  New-WidgetShortcut -Path $startupShortcut -Target $launcher
  Write-Host "Startup shortcut installed."
} else {
  Write-Host "Startup shortcut skipped."
}

Write-Host ""
Write-Host "Use the Desktop shortcut or Start VanaDiel Widget.bat to launch the widget."
