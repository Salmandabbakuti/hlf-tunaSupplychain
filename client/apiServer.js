var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
// Setting for Hyperledger Fabric
const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');
const ccpPath = path.resolve(__dirname,'..', 'basic-network', 'connection.json');

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/app.html');
 
});

app.get('/api/queryallTunas', async function (req, res) {
 try {
// Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
// Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
// Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
// Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
// Get the contract from the network.
        const contract = network.getContract('mycc');
// Evaluate the specified transaction.
          const result = await contract.evaluateTransaction('queryAllTunas');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        res.status(200).json({response: result.toString()});
} catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({error: error});
        process.exit(1);
    }

});
app.get('/api/queryTuna/', async function (req, res) {
 try {
// Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
// Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
// Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
// Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
// Get the contract from the network.
        const contract = network.getContract('mycc');
// Evaluate the specified transaction.
        const result = await contract.evaluateTransaction('queryTuna', req.body.tunaId);
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        res.status(200).json({response: result.toString()});
} catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({error: error});
        process.exit(1);
    }
});

app.post('/api/addTuna/', async function (req, res) {
 try {
// Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
// Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
// Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
// Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
// Get the contract from the network.
        const contract = network.getContract('mycc');
// Submit the specified transaction.
        await contract.submitTransaction('addTuna', req.body.addTunaId, req.body.vessel, req.body.location, req.body.timestamp, req.body.holder);
        console.log('Transaction has been submitted');
        res.send('Transaction has been submitted');
// Disconnect from the gateway.
        await gateway.disconnect();
} catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }

})

app.put('/api/changeTunaOwner/', async function (req, res) {
 try {
// Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);
// Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
// Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
// Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
// Get the contract from the network.
        const contract = network.getContract('mycc');
// Submit the specified transaction.
        await contract.submitTransaction('changeTunaOwner', req.body.tunaId, req.body.owner);
        console.log('Transaction has been submitted');
        res.send('Transaction has been submitted');
// Disconnect from the gateway.
        await gateway.disconnect();
} catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    } 
})
app.listen(8080);
