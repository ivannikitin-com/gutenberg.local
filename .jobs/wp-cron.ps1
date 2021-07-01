Set-Location "$PSScriptRoot\..\"

Write-Host "Run all cron events..."
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli cron event run --due-now
