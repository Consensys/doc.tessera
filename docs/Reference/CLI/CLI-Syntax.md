---
Description: Tessera command line options.
---

# Tessera command line

This reference describes the syntax of the Tessera Command Line Interface (CLI) options.

## Options

### configfile

=== "Syntax"

    ```bash
    --configfile <FILE>
    ```

=== "Example"

    ```bash
    --config-file /home/me/me_node/tessera.conf
    ```

The path to the [Node's configuration file](../../HowTo/Configure/Tessera.md).

### debug

=== "Syntax"

    ```bash
    --debug
    ```

Prints full exception stack traces to STDOUT.

### override

=== "Syntax"

    ```bash
    --override <STING=STRING>
    ```

=== "Example"

    ```bash
    --override jdbc.username=admin
    ```

Overrides a value in the configuration file specified using [`--configfile`](#configfile). This
option can be specified multiple times.

Alternate syntax for this option is `-o <STING=STRING>`.

### pidfile

=== "Syntax"

    ```bash
    --pidfile <FILE>
    ```

=== "Example"

    ```bash
    --pidfile node1PID
    ```

Creates the specified file containing the process ID (PID) of the Tessera instance.

### recover

=== "Syntax"

    ```bash
    --recover
    ```

Runs Tessera in [data recovery mode](../../HowTo/Configure/Data-Recovery.md).

