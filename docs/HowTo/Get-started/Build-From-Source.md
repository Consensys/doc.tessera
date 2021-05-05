---
description: Build Tessera from source
---

# Build from source

## Prerequisites

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)

!!! important

    Tessera version 0.10.3 or later requires Java version 11, and Tessera version 0.10.2 or earlier requires Java version 8 or 11.

- [libsodium](https://download.libsodium.org/doc/installation/)

## Clone the Tessera repository

Clone the `ConsenSys/tessera` repository:

``` bash
git clone https://github.com/ConsenSys/tessera.git
```

### Build Tessera

After cloning, go to the `tessera` directory.

Build Tessera with the Gradle wrapper `gradlew`:

```bash
./gradlew installDist
```

Go to the distribution directory:

```bash
cd tessera-dist/build/install/tessera-dist
```

Display the Tessera help to confirm installation.

````bash
bin/tessera-dist --help
````
