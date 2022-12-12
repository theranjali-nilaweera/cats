#!/usr/bin/env bash
echo "Change nvm"
source ~/.bash_profile
nvm use || { echo "Error changing node version NVM not found"; exit 1; }

echo "Starting up local cat API"
npm run start || { echo "Error running local cat API"; exit 1; }
