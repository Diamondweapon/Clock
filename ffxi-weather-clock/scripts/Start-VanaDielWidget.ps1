$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$appPath = Join-Path $root "index.html"
$appUri = ([System.Uri](Resolve-Path $appPath).Path).AbsoluteUri

$browserCandidates = @(
  (Join-Path ${env:ProgramFiles(x86)} "Microsoft\Edge\Application\msedge.exe"),
  (Join-Path $env:ProgramFiles "Microsoft\Edge\Application\msedge.exe"),
  (Join-Path $env:LocalAppData "Microsoft\Edge\Application\msedge.exe"),
  (Join-Path ${env:ProgramFiles(x86)} "Google\Chrome\Application\chrome.exe"),
  (Join-Path $env:ProgramFiles "Google\Chrome\Application\chrome.exe"),
  (Join-Path $env:LocalAppData "Google\Chrome\Application\chrome.exe")
)

$browser = $browserCandidates | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if ($browser) {
  $arguments = @(
    "--app=$appUri",
    "--window-size=460,720",
    "--window-position=60,60",
    "--no-first-run"
  )
  Start-Process -FilePath $browser -ArgumentList $arguments
  exit
}

Start-Process $appUri
