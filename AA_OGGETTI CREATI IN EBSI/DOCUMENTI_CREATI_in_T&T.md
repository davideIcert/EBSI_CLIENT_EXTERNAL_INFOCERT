#
Documento con metadati stringa
create document
{
  "documentHash": "0x7a379cd4ea7830db87263c4fa28c1e8501019414eb5dde433d152bab41446c0e",
  "didEbsiCreator": "did:ebsi:zfEmvX5twhXjQJiCWsukvQA",
  "timestamp": 0
}

DOCUMERNTO CON METADATI COMPLESSI ( CODIFICATI BASE64, vuole stringa...)
metadati: {"dataWithQualifiedTimestamps":{"data":{"nome": "davide","cognome": "porro"},"qualifiedTimestamp": "xxxyzzzttqrrr"}}
metadati base64 encoded: eyJkYXRhV2l0aFF1YWxpZmllZFRpbWVzdGFtcHMiOnsiZGF0YSI6eyJub21lIjogImRhdmlkZSIsImNvZ25vbWUiOiAicG9ycm8ifSwicXVhbGlmaWVkVGltZXN0YW1wIjogInh4eHl6enp0dHFycnIifX0=

create document
{
  "documentHash": "0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4",
  "didEbsiCreator": "did:ebsi:zfEmvX5twhXjQJiCWsukvQA",
  "timestamp": 0
}

aggiunta di evento a documento: 
id evento: 0x781aa2dfff40a7455facf47dce1c6c9e33c51b9f18cc36cbac26b0d835465269
metadati: {"dataWithQualifiedTimestamps":{"data":{"nome": "giuseppe","cognome": "garibaldi"},"qualifiedTimestamp": "xxxyzzzttfffr"}}
metadati base 64 encoded: eyJkYXRhV2l0aFF1YWxpZmllZFRpbWVzdGFtcHMiOnsiZGF0YSI6eyJub21lIjogImdpdXNlcHBlIiwiY29nbm9tZSI6ICJnYXJpYmFsZGkifSwicXVhbGlmaWVkVGltZXN0YW1wIjogInh4eHl6enp0dGZmZnIifX0=

Write Event
{
  "documentHash": "0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4",
  "externalHash": "0x781aa2dfff40a7455facf47dce1c6c9e33c51b9f18cc36cbac26b0d835465269",
  "sender": "did:ebsi:zfEmvX5twhXjQJiCWsukvQA"
}

per avere documento e eventi:
tnt get /documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events

Data:
{
  "self": "https://api-pilot.ebsi.eu/track-and-trace/v1/documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events?page[after]=1&page[size]=10",
  "items": [
    {
      "eventId": "0x65b9cf39a35552d79e9ee7198380c722b8535caf95dfbd71e3a6d81e2ef7b9dd",
      "href": "https://api-pilot.ebsi.eu/track-and-trace/v1/documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events/0x65b9cf39a35552d79e9ee7198380c722b8535caf95dfbd71e3a6d81e2ef7b9dd"
    }
  ],
  "total": 1,
  "pageSize": 10,
  "links": {
    "first": "https://api-pilot.ebsi.eu/track-and-trace/v1/documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events?page[after]=1&page[size]=10",
    "prev": "https://api-pilot.ebsi.eu/track-and-trace/v1/documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events?page[after]=1&page[size]=10",
    "next": "https://api-pilot.ebsi.eu/track-and-trace/v1/documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events?page[after]=1&page[size]=10",
    "last": "https://api-pilot.ebsi.eu/track-and-trace/v1/documents/0x836e05361b113f486f1a46b964c4e21bb421375ec2f3556d111fa66267d599d4/events?page[after]=1&page[size]=10"
  }
}