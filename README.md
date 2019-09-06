# hlf-tunaSupplychain

This Repository utilizes ```fabric-samples/basic-network```

**This is the nodejs version of chaincode implemented from go version of tuna-app owned by Hyperledger-fabric contributors**

Tuna fishing 🎣 supplychain on nodejs for demonstration.

###### Pre-requisites

```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh

chmod u+x prereqs-ubuntu.sh

./prereqs-ubuntu.sh

```

###### Quick Demo:

```
git clone https://github.com/Salmandabbakuti/hlf-tunaSupplychain.git

cd hlf-tunaSupplychain/client

./start.sh

```
for making calls from client Side (From```client/``` directory),run:
```
chmod a+x prereqs.sh

./prereqs.sh

node query.js  // by default queries for All tunas on the ledger. You can simply modify function for other calls

node invoke.js//Submits a transaction to change tuna owner

node apiServer.js // Server Runs at port 80. You can make calls by pointing to your Local host Port 80.

```
