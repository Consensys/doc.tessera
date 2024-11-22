---
title: Build from source
description: Build Tessera from source
sidebar_position: 3
---

# Build from source

## Prerequisites

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html) version 11 or higher.
- [libsodium](https://libsodium.gitbook.io/doc/) is required if using [kalium](https://github.com/abstractj/kalium) instead of the default [jnacl](https://github.com/neilalexander/jnacl) NaCl implementation. See the [libsodium installation docs](https://libsodium.gitbook.io/doc/) or install using [brew](https://brew.sh/) (macOS only):

  ```bash
  brew install libsodium
  ```

## Build Tessera

Clone the `ConsenSys/tessera` repository:

```bash
git clone https://github.com/ConsenSys/tessera.git
```

After cloning, go to the `tessera` directory.

Build Tessera with the Gradle wrapper `gradlew`, omitting tests as follows:

```bash
./gradlew build -x test
```

If you get errors about code coverage, you can exclude those tasks:

```bash
./gradlew build -x test -x :cli:spotlessGroovyGradle -x :config:jacocoTestCoverageVerification -x spotlessJava -x jacocoTestCoverageVerification -x spotlessGroovyGradle -x jacocoTestCoverageVerification -x javadoc
```

Verify the installation with the `help` command:

```bash
./tessera-dist/build/install/tessera/bin/tessera help
```
