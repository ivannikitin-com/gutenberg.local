Set-Location "$PSScriptRoot\..\"

Write-Host "Update WordPress..."
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli core update --force
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli language core update

Write-Host "Update plugins..."
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli plugin update --all
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli language plugin update --all

Write-Host "Update themes..."
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli theme update --all
docker run -it --rm --volumes-from wordpress --network container:wordpress wordpress:cli language theme update --all
