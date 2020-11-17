---
description: Install Tessera from jar
---

# Install Tessera jar

## Prerequisites 

* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Tessera requires Java
JDK 11+. Earlier versions are not supported. 
* [libsodium](https://download.libsodium.org/doc/), if using the [kalium](https://github.com/abstractj/kalium)
NaCI cryptography implementation.

## Install jar 

1. Download the [`tessera-app-VERSION-app.jar`](https://github.com/ConsenSys/tessera/releases/latest)
from the `ConsenSys/tessera` repository. `VERSION` is the version of the latest release.

2. Create an alias to the Tessera jar. 
 
    ```bash
    alias tessera="java -jar ~/Downloads/tessera-VERSION-app.jar" 
    ```

3. Display the Tessera help to confirm installation. 

    ```
    tessera --help
    ```

