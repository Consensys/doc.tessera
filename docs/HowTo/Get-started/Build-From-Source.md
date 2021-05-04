---
description: Build Tessera from source
---

# Build from source

## Prerequisites

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)

!!! important

    Tessera requires Java 11+; earlier versions are not supported.

- [libsodium](https://download.libsodium.org/doc/installation/) (if using kalium as the NaCl implementation)

## Clone the Tessera repository

Clone the `ConsenSys/tessera` repository:

``` bash
git clone https://github.com/ConsenSys/tessera.git
```

### Build Tessera

After cloning, go to the `tessera` directory.

Build Tessera with the Gradle wrapper `gradlew`, omitting tests as follows:

```bash
./gradlew build -x test
```

Go to the distribution directory:

```bash
cd tessera-dist/build/distributions/
```

Expand the distribution archive:

```bash
tar -xzf tessera-dist-<version>.tar.gz
```

Move to the expanded folder and display the Orion help to confirm installation.

````bash
cd tessera-<version>/
bin/tessera-dist --help
````
