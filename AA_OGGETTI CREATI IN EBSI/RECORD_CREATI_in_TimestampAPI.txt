url: https://hub.ebsi.eu/tools/cli/upcoming-apis/create-timestamp

IMPORTANTE: nei record l'id viene generato e non preimpostato come nei documenti

creazione di un record da cli:
==> timestamp timestampRecordHashes {"data": "my data"}

aggiungere versione al record, si usa l'id del record
==> timestamp timestampRecordVersionHashes 0x2f4798ebbc9b1def905d73fabd848a8338a047ddfbe165422398cb0e1b8f1f54 {"data": "my data updated"}

PROVA DI AGGIUNTA DI DATI CON Q-TIMESTAMP
==> timestamp timestampRecordVersionHashes 0x2f4798ebbc9b1def905d73fabd848a8338a047ddfbe165422398cb0e1b8f1f54  {"dataWithQualifiedTimestamps":{"data":{"nome": "davide","cognome": "porro"},"qualifiedTimestamp": "xxxyzzzttqrrr"}}

avere elenco delle versioni di un record, si usa il base64 encoded id del record
==> timestamp get /records/uL0eY67ybHe-QXXP6vYSKgzigR9374WVCI5jLDhuPH1Q   //base64 encoded id del record

avere versioni di un record , si usa l'id bese64 enc. dell'id
==> timestamp get /records/uL0eY67ybHe-QXXP6vYSKgzigR9374WVCI5jLDhuPH1Q/versions

Timestamp record hashes. Record Id:
{
  "blockNumber": "0x55d92a",
  "recordId": "0x2f4798ebbc9b1def905d73fabd848a8338a047ddfbe165422398cb0e1b8f1f54",
  "multibase64urlRecordId": "uL0eY67ybHe-QXXP6vYSKgzigR9374WVCI5jLDhuPH1Q",
  "hashValue": "0x37926887dc319ac87cda01caf411bccb9ab8933d97cf3c2d57d3e13aa8bad580"
}

