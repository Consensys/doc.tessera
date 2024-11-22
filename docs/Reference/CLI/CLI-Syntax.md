---
title: Options
description: Tessera command line options.
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tessera command line

This reference describes the syntax of the Tessera command line interface (CLI) options.

To start a Tessera node run:

```bash
tessera [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]
```

## Options

### `configfile`, `config-file`

<Tabs>

  <TabItem value="Syntax" label="Syntax" default>

```bash
--configfile <FILE>
```

  </TabItem>
  <TabItem value="Example" label="Example" >

```bash
--configfile /home/me/me_node/tessera.conf
```

  </TabItem>
</Tabs>

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

<Tabs>

  <TabItem value="Syntax" label="Syntax" default>

```bash
--override <STRING=STRING>
```

  </TabItem>
  <TabItem value="Example" label="Example" >

```bash
--override jdbc.username=admin
```

  </TabItem>
</Tabs>

Overrides a value in the configuration file specified using [`--configfile`](#configfile-config-file). This option can be specified multiple times.

Short syntax for this option is `-o <STRING=STRING>`.

### `pidfile`

<Tabs>

  <TabItem value="Syntax" label="Syntax" default>

```bash
--pidfile <FILE>
```

  </TabItem>
  <TabItem value="Example" label="Example" >

```bash
--pidfile node1PID
```

  </TabItem>
</Tabs>

Creates the specified file containing the process ID (PID) of the Tessera instance.

### `recover`

```bash
--recover
```

Runs Tessera in [data recovery mode](../../HowTo/Use/Data-Recovery.md).

Short syntax for this option is `-r`.
