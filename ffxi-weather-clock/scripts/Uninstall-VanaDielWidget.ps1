$ErrorActionPreference = "Stop"

$shortcuts = @(
  (Join-Path ([Environment]::GetFolderPath("DesktopDirectory")) "VanaDiel Weather Clock.lnk"),
  (Join-Path ([Environment]::GetFolderPath("Programs")) "VanaDiel Weather Clock.lnk"),
  (Join-Path ([Environment]::GetFolderPath("Startup")) "VanaDiel Weather Clock.lnk")
)

foreach ($shortcut in $shortcuts) {
  if (Test-Path $shortcut) {
    Remove-Item $shortcut
  }
}

Write-Host "Removed VanaDiel Weather Clock shortcuts."
Write-Host "The widget folder was left in place so you can keep or delete it yourself."
