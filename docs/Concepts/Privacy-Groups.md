# Privacy Groups:

When operating on [isbesu]() mode, Tessera supports privacy groups. 

There are two types of Privacy Groups:

1) 'Legacy'
2) 'Pantheon' 

## Legacy Privacy Group

  When [transactions are sent](https://consensys.github.io/tessera/#operation/encryptStoreAndSendJson) to a list of recipients using `privateFor` Tessera creates a Legacy Privacy group. It returns the Legacy privacy group on the `/receive` response back. The same privacy group is also created on all recipients during transaction processing. The legacy privacy group is created using list of recipient keys and it is unique to that list i.e., you cannot have more than one 'legacy' privacy group for list of recipients.

## Pantheon Privacy Group

Tessera supports API methods to create, delete, retrieve and find a privacy group. Please refer our API section for more details on each method.

  When [transactions are sent](https://consensys.github.io/tessera/#operation/encryptStoreAndSendJson) to a privacy group, the transaction payload is distributed to all the members of the privacy group along with the privacy group id. The main difference to 'Legacy' privagy group is you could have more than one 'Pantheon' privacy group for the same list of recipients.

!!! note

    Both Privacy group types created off-chain are non-editable ie., adding a new recipient to a privacy group means creating a new privacy group including the recipient.

These Privacy groups are currently supported for Hyperledger Besu clients which maintains a [private state per privacy group](https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Groups/).
