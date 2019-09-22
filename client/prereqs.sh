echo 'Instantiating Pre-requisites for Client Application..'

npm i fabric-ca-client

npm i fabric-network

npm install express body-parser --save

npm install ejs --save

npm install

rm -rf wallet

echo 'Enrolling Admin...'

node enrollAdmin.js

echo 'Registering User..'
node registerUser.js

echo 'All Done..Start Querying or Invoking Calls with node *query.js* and *node invoke.js*'
echo 'You can Also Use API server for Querying or invoking Calls .. Run *node apiServer.js* and then Point to your Localhost Port 80..'

exit 1
