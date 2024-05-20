Hello Davide
To start with something, you need to check if your did:ebsi is already whitelisted for being able to use TnT
https://api-pilot.ebsi.eu/track-and-trace/v1/accesses?creator=did:ebsi:123456
https://hub.ebsi.eu/apis/pilot/track-and-trace/v1/head-accesses
Then for each step:
getting an access token with the specific scopes tnt_create/tnt_authorise/tnt_wrtite depending if you are creating a document, authorizing another entity to write events, and write events respectively
then send the json rpc with the right method and params
sign the ethereum transaction and send to the EBSI ledger
You can follow the code here searching for each command of the cli (createDocument, grantAcess, writeEvent, ...). It's very useful and it's a good reference as an example code
https://ec.europa.eu/digital-building-blocks/code/projects/EBSI/repos/test-scripts/browse?at=refs%2Fheads%2Fupcoming2
branch is upcoming2
https://ec.europa.eu/digital-building-blocks/code/projects/EBSI/repos/test-scripts/browse?at=refs%2Fheads%2Fupcoming2





4:15
But apart from that, what we are doing is to develope the component "ebsi-services-wrapper" that will manage all of this interaction
I say that in the case you want to wait for us and make use of the trace4EU component for doing the transactions