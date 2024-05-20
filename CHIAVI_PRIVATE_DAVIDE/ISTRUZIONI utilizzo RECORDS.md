#records
## url istruzioni del cli
https://hub.ebsi.eu/tools/cli/upcoming-apis/create-timestamp

IMPORTANTE: nei record l'id viene generato e non preimpostato come nei documenti

## creazione di un record da cli:
==> timestamp timestampRecordHashes {"data": "my data"}

## aggiungere versione al record, si usa l'id del record
==> timestamp timestampRecordVersionHashes 0x2f4798ebbc9b1def905d73fabd848a8338a047ddfbe165422398cb0e1b8f1f54 {"data": "my data updated"}

## avere elenco DEI LINK delle versioni di un record, si usa il base64 encoded id del record
==> timestamp get /records/uL0eY67ybHe-QXXP6vYSKgzigR9374WVCI5jLDhuPH1Q   //base64 encoded id del record

## avere versioni di un record , si usa l'id bese64 enc. dell'id
==> timestamp get /records/uL0eY67ybHe-QXXP6vYSKgzigR9374WVCI5jLDhuPH1Q/versions