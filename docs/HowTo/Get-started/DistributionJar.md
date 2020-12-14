---
description: Install Tessera from jar
---

# Install Tessera jar

1. Install necessary [dependencies](Dependencies.md)

1. Download the latest `tessera-app-<VERSION>-app.jar` from [`ConsenSys/tessera` repository](https://github.com/ConsenSys/tessera/releases/latest)

1. (Optional) Create an alias

    ```bash
    alias tessera="java -jar ~/Downloads/tessera-VERSION-app.jar"
    ```

1. Verify installation.

    ```bash
    tessera --help

      Usage:

      Tessera private transaction manager for Quorum

      tessera [OPTIONS] [COMMAND]

      Description:

      Start a Tessera node.  Other commands exist to manage Tessera encryption keys

      Options:
      -configfile, --configfile <config>
      Path to node configuration file
      --debug                Print full exception stack traces
      -o, --override KEY=VALUE
      -pidfile, --pidfile <pidFilePath>
      the path to write the PID to
      -r, --recover              Start Tessera in recovery mode

      Commands:
      help                        Displays help information about the specified
      command
      keygen, -keygen             Generate Tessera encryption keys
      keyupdate, -updatepassword  Update the password for a key
    ```
