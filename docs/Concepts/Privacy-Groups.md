---
description: Privacy Groups
---

# Privacy groups

When running in [Orion](../HowTo/Configure/Orion-Mode.md) mode, Tessera supports operations
related to [privacy groups] such as managing privacy group data and handling transactions that are
intended for a privacy group.

## Database Storage

A table called `PRIVACY_GROUP` stores privacy group data.

!!! example
    ```sql
    CREATE TABLE PRIVACY_GROUP(ID LONGVARBINARY NOT NULL, LOOKUP_ID LONGVARBINARY NOT NULL, DATA LONGVARBINARY NOT NULL, TIMESTAMP BIGINT, PRIMARY KEY (ID));
    ```

[DDLs are provided] to create new privacy group tables if [configuring an alternate database].

Before being persisted into the database, privacy group data is encoded using `BinaryEncoder`
(the same mechanism Tessera uses to encode its `EncodedPayload` data).

## API Versioning

A node running a version of Tessera that does not support privacy groups is unable to understand
requests containing `privacyGroupId`.  This could cause inconsistency between data persisted on
different nodes.

API version **3.0** has been introduced to include the privacy group in the
encoded payload in `/push` to only those recipients supporting the correct version, else the transaction
is failed with `PrivacyGroupNotSupportedException`.

## Privacy Group APIs

Privacy group compatible blockchain clients (for example Besu) can be used to create, delete, find,
and retrieve privacy groups. Tessera's `Q2T` API adds support for these operations. Please refer to
[API reference](https://consensys.github.io/doc.tessera/) for more details.

<!-- links -->
[DDLs are provided]: https://github.com/ConsenSys/tessera/tree/master/ddls/create-table
[privacy groups]: https://besu.hyperledger.org/en/stable/Concepts/Privacy/Privacy-Groups/
[configuring an alternate database]: ../HowTo/Configure/Database.md##configure-an-alternate-database
