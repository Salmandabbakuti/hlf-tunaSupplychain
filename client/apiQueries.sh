echo 'Queryina All tunas from ledger..'
curl http://localhost:8080/api/queryallTunas

echo 'Querying single tuna..'

curl http://localhost:8080/api/queryTuna/Tuna0

echo 'Changing Tuna owner..'

curl -d '{"owner":"Kowshik"}' -H "Content-Type: application/json" -X PUT http://localhost:8080/api/changeTunaOwner/Tuna0

echo 'All Done.. bye..'

exit 1
