---
description: Tessera dependencies
---

# Dependencies

## libsodium

If using the [kalium](https://github.com/abstractj/kalium) NaCI cryptography implementation, Tessera
requires the [Sodium cryptographic library](https://download.libsodium.org/doc/) (libsodium) to provide the encryption primitives.

!!! tip 
    If using the default NaCI cryptography implementation, [jnacl](https://github.com/neilalexander/jnacl),
    [libsodium](https://download.libsodium.org/doc/) is not required. 

### Install libsodium

#### MacOS

Install using [Homebrew](https://brew.sh/):

```bash
brew install libsodium
```

#### Linux

Download the [latest stable version](https://download.libsodium.org/libsodium/releases/LATEST.tar.gz)
of libsodium.

Execute:

```bash
./configure
make && make check
sudo make install
```

#### Other systems

See the [libsodium installation docs](https://download.libsodium.org/doc/installation/).
