---
description: How to use mandatory recipients
---

# Mandatory recipients

Tessera allows you to define one or more recipients as "mandatory" for a private contract.

The mandatory recipient is included in all subsequent transactions to the contract and has full private state, while
normal recipients may only have partial state of the contract.

Define mandatory recipients if you need "governing" or "central" nodes to have full private state for any contracts
deployed in the network.

## Using mandatory recipients

To enable mandatory recipients, set the `enablePrivacyEnhancements` parameter in the
[Tessera configuration file](../../Reference/SampleConfiguration.md) to `true`.

When using the [`/send`](https://consensys.github.io/tessera/#operation/send) API method, set the `mandatoryRecipients`
parameter to a list of mandatory recipients for the contract.

You can get a list of mandatory recipients for a contract using the
[`/transaction/{hash}/mandatory`](https://consensys.github.io/tessera/#operation/getMandatoryRecipients) API method.
