---
description: Use GoQuorum with Tessera to create private networks and send private transactions
---

# Use GoQuorum with Tessera

You can use Tessera as the private transaction manager for [GoQuorum](https://docs.goquorum.consensys.net)
to create private networks and send private transactions.

## Create Private Networks

Refer to the GoQuorum [create a privacy-enabled network tutorial](https://docs.goquorum.consensys.net/en/stable/Tutorials/Create-Privacy-enabled-network/)
to create a private network with GoQuorum using Tessera.

## Send private transactions

Refer to the GoQuorum [send a private transaction tutorial](https://docs.goquorum.consensys.net/en/stable/Tutorials/Send-private-transaction/)
 to send a private transactions with GoQuorum using Tessera.

!!! Important

    All Tessera nodes listed in [`privateFor`](https://docs.goquorum.consensys.net/en/stable/Concepts/Privacy/PrivateAndPublic/#private-transactions)
    must be running when the private transaction is sent. Otherwise, the transaction doesn't propagate and an error is returned.
