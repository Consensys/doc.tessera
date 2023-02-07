---
title: Install binary distribution
description: Install Tessera
sidebar_position: 2
---

# Install binary distribution

## Prerequisites

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) version 11 or higher.
- [libsodium](https://libsodium.gitbook.io/doc/) is required if using [kalium](https://github.com/abstractj/kalium) instead of the default [jnacl](https://github.com/neilalexander/jnacl) NaCl implementation. See the [libsodium installation docs](https://libsodium.gitbook.io/doc/) or install using [brew](https://brew.sh/) (macOS only):

  ```bash
  brew install libsodium
  ```

## Install binaries

Download and unpack the latest `tessera-dist-<VERSION>.zip|tar` distribution from the [`ConsenSys/tessera` repository](https://github.com/ConsenSys/tessera/releases/latest):

```bash
$ tar xvf tessera-[version].tar
$ tree tessera-[version]
tessera-[version]
├── bin
│   ├── tessera
│   └── tessera.bat
└── lib
    ├── HikariCP-3.2.0.jar
    ...
```

Verify the installation with the `help` command:

```bash
./tessera-<version>/bin/tessera help
```

You can optionally add the `tessera` script to path:

```bash
export PATH=$PATH:tessera-[version]/bin
tessera help
```

## Supplement the distribution

You can add functionality to a distribution by adding `.jar` files to the `/lib` directory.

### Add Tessera artifacts

Download and unpack the artifact:

```bash
$ tar xvf aws-key-vault-[version].tar
$ tree aws-key-vault-[version]
aws-key-vault-[version].tar
└── lib
    ├── annotations-2.10.25.jar
    ...
```

Copy the contents of the artifact's `/lib` into the distribution `/lib` (resolve any version conflicts or duplicated `.jar` files introduced during the copy):

```bash
 cp -a aws-key-vault-[version]/lib/. tessera-[version]/lib/
```
