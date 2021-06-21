---
description: Install Tessera
---

# Install Tessera

1. Install necessary [dependencies](Dependencies.md)

1. Download and unpack the latest `tessera-app-<VERSION>-app.zip|tar` from the
    [`ConsenSys/tessera` repository](https://github.com/ConsenSys/tessera/releases/latest)
    ```shell
    tar xvf tessera-dist-[version].tar
    ./tessera-dist-[version]/bin/tessera --help
    ```
2. Add tessera script to path (optional but rest of documentation assumes its in the path)
```shell
export PATH=$PATH:tessera-dist-[version]/bin
```
