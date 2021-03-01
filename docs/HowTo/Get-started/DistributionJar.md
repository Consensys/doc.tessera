---
description: Install Tessera from the jar file
---

# Install Tessera

1. Install necessary [dependencies](Dependencies.md)

1. Download the latest `tessera-app-<VERSION>-app.jar` from the
    [`ConsenSys/tessera` repository](https://github.com/ConsenSys/tessera/releases/latest)

    !!! important
    
        Multiple distributions are available for download, but the `tessera-app-<VERSION>-app.jar`
        contains all Tessera modules.

1. (Optional) Create an alias

    ```bash
    alias tessera="java -jar ~/Downloads/tessera-VERSION-app.jar"
    ```

1. Display Tessera command line help to verify installation.

    ```bash
    tessera --help
    ```
