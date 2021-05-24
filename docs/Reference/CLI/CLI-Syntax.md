---
Description: Tessera command line options.
---

# Tessera command line

This reference describes the syntax of the Tessera Command Line Interface (CLI) options.

## Options

To start a Tessera node run:

```bash
tessera [OPTIONS] [COMMAND] [COMMAND OPTIONS]
```

### `configfile`

=== "Syntax"

    ```bash
    --configfile <FILE>
    ```

=== "Example"

    ```bash
    --configfile /home/me/me_node/tessera.conf
    ```

Path to the node's [configuration file](../../HowTo/Configure/Tessera.md).

### `debug`

=== "Syntax"

    ```bash
    --debug
    ```

Prints full exception stack traces to `stdout`.

### `help`

=== "Syntax"

    ```bash
    --help
    ```

Shows the help message and exits.

### `override`

=== "Syntax"

    ```bash
    --override <STRING=STRING>
    ```

=== "Example"

    ```bash
    --override jdbc.username=admin
    ```

Overrides a value in the configuration file specified using [`--configfile`](#configfile).
This option can be specified multiple times.

Short syntax for this option is `-o <STRING=STRING>`.

### `pidfile`

=== "Syntax"

    ```bash
    --pidfile <FILE>
    ```

=== "Example"

    ```bash
    --pidfile node1PID
    ```

Creates the specified file containing the process ID (PID) of the Tessera instance.

### `recover`

=== "Syntax"

    ```bash
    --recover
    ```

Runs Tessera in [data recovery mode](../../HowTo/Configure/Data-Recovery.md).

Short syntax for this option is `-r`.
