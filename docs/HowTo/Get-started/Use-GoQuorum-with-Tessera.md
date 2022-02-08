---
description: Use GoQuorum with Tessera to create private networks and send private transactions
---

# Use GoQuorum or Besu with Tessera

You can use Tessera as the private transaction manager for [GoQuorum](https://consensys.net/docs/goquorum/en/stable/) or
[Hyperledger Besu](https://besu.hyperledger.org/en/stable/).
Get started with the following tutorials:

- [Create a privacy-enabled GoQuorum network](https://consensys.net/docs/goquorum//en/stable/tutorials/create-privacy-enabled-network/).
- [Send a private transaction on GoQuorum](https://consensys.net/docs/goquorum/en/stable/tutorials/send-private-transaction/).
- [Create a privacy-enabled Besu network](https://besu.hyperledger.org/en/stable/Tutorials/Privacy/Configuring-Privacy/).
- [Configure a multi-tenant Besu network](https://besu.hyperledger.org/en/stable/Tutorials/Privacy/Configuring-Multi-Tenancy/).
- [Use the Besu multi-node example in the web3js-quorum library](https://besu.hyperledger.org/en/stable/Tutorials/Privacy/web3js-quorum-Multinode-example/).

!!! Note

    All Tessera nodes included in a private transaction must be running when the private transaction is sent.
    Otherwise, the transaction doesn't propagate and an error is returned.
