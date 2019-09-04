echo 'Queryina All tunas from ledger..'
curl http://localhost:8080/api/queryallTunas

echo 'Querying single tuna..'

curl http://localhost:8080/api/queryTuna/Tuna0

echo 'Changing Tuna owner..'

curl -d '{"owner":"Kowshik"}' -H "Content-Type: application/json" -X PUT http://localhost:8080/api/changeTunaOwner/Tuna0

echo 'Querying Tuna Again for Change status..'

curl http://localhost:8080/api/queryTuna/Tuna0

echo 'Adding Tuna into ledger..'
curl -d '{"tunaId":"Tuna21","vessel":"437J2V","location":"78.34,23.5638","timestamp":"153478843757","owner":"Tom"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/addTuna

echo 'All Done.. bye..'

exit 1
