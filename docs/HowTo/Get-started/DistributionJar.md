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

1. Download the [`tessera-app-VERSION-app.jar`](https://github.com/ConsenSys/tessera/releases/tag/tessera-20.10.0)
from the `ConsenSys/tessera` repository.

2. Create an alias to the Tessera jar. 
 
    ```bash
    alias tessera="java -jar ~/Downloads/tessera-app-0.11.0-app.jar" 
    ```

3. Display the Tessera help to confirm installation. 

    ```
    tessera --help
    ```

