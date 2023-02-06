---
title: Options
description: Tessera command line options.
sidebar_position: 1
---

# Tessera command line

This reference describes the syntax of the Tessera command line interface (CLI) options.

To start a Tessera node run:

```bash
tessera [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]
```

## Options

### `configfile`, `config-file`

<!--tabs-->

# Syntax

```bash
--configfile <FILE>
```

# Example

```bash
--configfile /home/me/me_node/tessera.conf
```

<!--/tabs-->

Path to the node's [configuration file](../../HowTo/Configure/Tessera.md).

### `debug`

```bash
--debug
```

Prints full exception stack traces to `stdout`.

### `help`

```bash
--help
```

Shows the help message and exits.

### `override`

<!--tabs-->

# Syntax

```bash
--override <STRING=STRING>
```

# Example

```bash
--override jdbc.username=admin
```

<!--/tabs-->

Overrides a value in the configuration file specified using [`--configfile`](#configfile-config-file). This option can be specified multiple times.

Short syntax for this option is `-o <STRING=STRING>`.

### `pidfile`

<!--tabs-->

# Syntax

```bash
--pidfile <FILE>
```

# Example

```bash
--pidfile node1PID
```

<!--/tabs-->

Creates the specified file containing the process ID (PID) of the Tessera instance.

### `recover`

```bash
--recover
```

Runs Tessera in [data recovery mode](../../HowTo/Use/Data-Recovery.md).

Short syntax for this option is `-r`.
