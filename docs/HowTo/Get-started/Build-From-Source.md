---
description: Build Tessera from source
---

# Build from source

## Prerequisites

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)

  !!! important

      Tessera requires Java 11+; earlier versions are not supported.

- [Maven](https://maven.apache.org)

- [libsodium](https://download.libsodium.org/doc/installation/) (if using kalium as the NaCl implementation)

## Clone the Tessera repository

Clone the `ConsenSys/Tessera` repository:

```bash
git clone https://github.com/ConsenSys/tessera.git
```

### Select an NaCl implementation and build Tessera

Tessera can use either the [jnacl](https://github.com/neilalexander/jnacl) or
[kalium](https://github.com/abstractj/kalium) NaCl cryptography implementations.
The implementation to be used is specified when building the project:

#### jnacl (default)

`mvn install`

#### kalium

Install libsodium as detailed on the [kalium project page](https://github.com/abstractj/kalium), then run

`mvn install -P kalium`
