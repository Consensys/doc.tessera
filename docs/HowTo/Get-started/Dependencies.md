---
description: Tessera dependencies
---

# Dependencies

## Java JDK

Tessera requires [Java JDK 11+](https://www.oracle.com/java/technologies/javase-downloads.html). Earlier versions are not supported.

## libsodium (optional)

[libsodium (the Sodium cryptographic library)](https://libsodium.gitbook.io/doc/)) must be installed if using [kalium](https://github.com/abstractj/kalium) instead of the default [jnacl](https://github.com/neilalexander/jnacl) NaCl implementation.

See the [libsodium installation docs](https://libsodium.gitbook.io/doc/) or install using [brew](https://brew.sh/) (macOS only):

```bash
brew install libsodium
```
