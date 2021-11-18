---
description: Overriding configuration file settings on the command line
---

# Override configuration file settings on the command line

You can use the [`-o, --override`](../../Reference/CLI/CLI-Syntax.md#override) command line option to define overrides
as key/value pairs.
The key is the JSON path of the field to be overwritten.

For example, in the following [configuration file](Tessera.md):

```json
{
    ...,
    "jdbc" : {
        "username" : "sa",
        "password" : "",
        "url" : "jdbc:h2:/path/to/db1;MODE=Oracle;TRACE_LEVEL_SYSTEM_OUT=0",
        "autoCreateTables" : true,
        "fetchSize" : 0
    },
    "peer" : [
        {
            "url" : "http://127.0.0.1:9001"
        }
    ]
}
```

The command:

```bash
tessera --configfile configfile.json -o jdbc.username=username-override --override peer[1].url=http://peer-override:9001
```

Starts Tessera with the following effective configuration:

```json
{
    ...,
    "jdbc" : {
        "username" : "username-override",
        "password" : "",
        "url" : "jdbc:h2:/path/to/db1;MODE=Oracle;TRACE_LEVEL_SYSTEM_OUT=0",
        "autoCreateTables" : true,
        "fetchSize" : 0
    },
    "peer" : [
        {
            "url" : "http://127.0.0.1:9001"
        },
        {
            "url" : "http://peer-override:9001"
        }
    ]
}
```
