---
description: Configure Tessera
---

# Configure Tessera

A `.json` file including required configuration details must be provided using the `--configfile`
command-line property when starting Tessera.

Many configuration options can be overridden using the command-line.
See the [Using CLI to override configuration](Override-config.md) page for more information.

## Configuration options

The configuration options are explained in more detail in this section.
Configuration options that require more than a brief explanation are covered in separate pages.

### Alternative cryptographic elliptic curves

By default Tessera's Enclave uses the [`jnacl`](https://github.com/neilalexander/jnacl) implementation
of the [`NaCl`](https://nacl.cr.yp.to/) library to encrypt/decrypt private payloads.

NaCl provides public-key authenticated encryption by using `curve25519xsalsa20poly1305`, a combination of the:

1. **Curve25519 Diffie-Hellman key-exchange function**: based on fast arithmetic on a strong elliptic curve
1. **Salsa20 stream cipher**: encrypts a message using the shared secret
1. **Poly1305 message-authentication code**: authenticates the encrypted message using a shared secret

The NaCl primitives provide good security and speed and should be sufficient in most circumstances.

However, the Enclave also supports the JCA framework.
Supplying a compatible JCA provider (for example [SunEC provider](https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC))
and the necessary Tessera configuration allows the NaCl primitives to be replaced with alternative curves and symmetric ciphers.

The same Enclave encryption process as described in
[Lifecycle of a private transaction](https://docs.goquorum.consensys.net/Concepts/Privacy/PrivateTransactionLifecycle/)
is used regardless of whether the NaCl or JCA encryptor are configured.

If an encryptor configuration is not specified, the default NaCl encryptor is used.

```json
"encryptor":{
    "type":"EC",
    "properties":{
        "symmetricCipher":"AES/GCM/NoPadding",
        "ellipticCurve":"secp256r1",
        "nonceLength":"24",
        "sharedKeyLength":"32"
    }
}
```

| Field | Default Value | Description                                                         |
|--------|---------------|---------------------------------------------------------------------|
| `type` | `NACL`        | The encryptor type. Possible values are `EC`, `NACL`, and `CUSTOM`. |

If `type` is set to `EC`, the following `properties` fields can also be configured:

Field|Default Value|Description
-------------|-------------|-----------
`ellipticCurve`|`secp256r1`|The elliptic curve to use. See [SunEC provider](https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC) for other options. Depending on the JCE provider you are using there may be additional curves available.
`symmetricCipher`|`AES/GCM/NoPadding`|The symmetric cipher to use for encrypting data (GCM IS MANDATORY as an initialisation vector is supplied during encryption).
`nonceLength`|`24`|The nonce length (used as the initialization vector - IV - for symmetric encryption).
`sharedKeyLength`|`32`|The key length used for symmetric encryption (keep in mind the key derivation operation always produces 32 byte keys and that the encryption algorithm must support it).

If `type` is set to `CUSTOM`, it provides support for external encryptor implementation to integrate
with Tessera. The pilot third party integration is [Unbound Tech's Unbound Key Control (UKC) encryptor](https://github.com/unbound-tech/ub-integration/tree/master/Tessera) (jar available at `com.github.unbound-tech:encryption-ub:<version>`).

### Always-send-to

It is possible to configure a node that will be sent a copy of every transaction, even if it is not
specified as a party to the transaction. This could be used, for example, to send a copy of every
transaction to a node for audit purposes. Specify the public keys to forward transactions onto, and
these will be included as if you had specified them on the `privateFor` field to start with.

```json
"alwaysSendTo":["<public key 1", "<public key 2"]
```

### Bootstrap Node

If set to true, then the Tessera instance functions as a bootstrap for other nodes (and no Q2T entry
should exist in the serverConfigs):

```json
"bootstrapNode": true,
```

### Besu Mode

If set to true, Tessera will support Besu client with below behaviour:

  * Instructs envlave to generate 32 byte hash for encrypted payload and return back to Besu.
  * Creates a ‘legacy’ privacy group type if transaction is send using ‘privateFor’ with list of recipients.     
  * Includes Besu specific response object for ‘receive’ that includes privacy group and sender public key (for sender validation) and removes Quorum specific  fields to support enhanced privacy.
  * Accepts standard json and headers for ‘/receive’ requests using POST.
 
 ```json
"isBesu": true,
```

### Privacy Enhancements Flag

Privacy enhancement features to support Party Protection (PP) and Private State Validation (PSV) are enabled by setting the flag to true. The default value is set to FALSE

```json
"features" : {
   "enablePrivacyEnhancements" : "true"
  }
```

### CORS: Server sub-config

For the ThirdParty server type it may be relevant to configure CORS.

```json
{
    "app":"ThirdParty",
    "enabled": true,
    "serverAddress": "http://localhost:9081",
    "communicationType" : "REST",
    "cors" : {
        "allowedMethods" : ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
        "allowedOrigins" : ["http://localhost:63342"],
        "allowedHeaders" : ["content-type"],
        "allowCredentials" : true
    }
}
```

The configurable fields are:

* `allowedMethods` : the list of allowed HTTP methods. If omitted the default list containing
    `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS` and `HEAD` is used.
* `allowedOrigins` : the list of domains from which to accept cross origin requests (browser enforced).
    Each entry in the list can contain the "*" (wildcard) character which matches any sequence of characters.
    Example: `*locahost` would match `http://localhost` or `https://localhost`. This field has no default value.
* `allowedHeaders` : the list of allowed headers. If omitted the request `Access-Control-Request-Headers`
    are copied into the response as `Access-Control-Allow-Headers`.
* `allowCredentials` : the value for the `Access-Control-Allow-Credentials` response header.
    If omitted the default `true` value would be used.

### Cryptographic Keys

See [Keys page](Keys.md).

### Database

Tessera's database uses JDBC to connect to an external database.
Any valid JDBC URL may be specified, refer to your providers details to construct a valid JDBC URL.

```json
"jdbc": {
  "url": "[JDBC URL]",
  "username": "[JDBC Username]",
  "password": "[JDBC Password]"
}
```

### Disabling peer discovery

See [Configure peer discovery](Peer-discovery.md).

#### Obfuscate database password in configuration file

Certain entries in the Tessera configuration file must be obfuscated in order to prevent any attempts from
attackers to gain access to critical parts of the application (for example the database).
The database password can be encrypted using [Jasypt](http://www.jasypt.org) to avoid it being
exposed as plain text in the configuration file.

To enable this feature, simply replace your plain-text database password with its encrypted value
and wrap it inside an `ENC()` function.

```json
"jdbc": {
    "username": "sa",
    "password": "ENC(ujMeokIQ9UFHSuBYetfRjQTpZASgaua3)",
    "url": "jdbc:h2:/qdata/c1/db1",
    "autoCreateTables": true
}
```

Being a Password-Based Encryptor, Jasypt requires a secret key (password) and a configured algorithm
to encrypt/decrypt this configuration entry. This password can either be loaded into Tessera from file system
or user input. For file system input, the location of this secret file needs to be set in environment
variable `TESSERA_CONFIG_SECRET`

If the database password is not wrapped inside `ENC()`, Tessera will simply treat it as a plain-text
password however this approach is not recommended for production environments.

!!! note
    Jasypt encryption is currently only available for the `jdbc.password` field

##### How to encrypt database password

1. Download and unzip [Jasypt](http://www.jasypt.org) and redirect to the `bin` directory
1. Encrypt the password

    === "Command"

        ```bash
        ./encrypt.sh input=dbpassword password=quorum
        ```

    === "Output"

        ```bash
        ----ENVIRONMENT-----------------

        Runtime: Oracle Corporation Java HotSpot(TM) 64-Bit Server VM 25.171-b11

        ----ARGUMENTS-------------------

        input: dbpassword
        password: quorum

        ----OUTPUT----------------------

        rJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb
        ```

1. Place the wrapped output, `ENC(rJ70hNidkrpkTwHoVn2sGSp3h3uBWxjb)`, in the configuration JSON file

### InfluxDB Configuration: Server sub-config

Configuration details to allow Tessera to record monitoring data to a running InfluxDB instance.

```json
"influxConfig": {
  "hostName": "[Hostname of Influx instance]",
  "port": "[Port of Influx instance]",
  "pushIntervalInSecs": "[How often to push data to InfluxDB]",
  "dbName": "[Name of InfluxDB]"
}
```

### Peers

See [Configure peer discovery](Peer-discovery.md).

### Remote key validation

See [Configure peer discovery](Peer-discovery.md).

### Servers for Tessera API

See [Configure Tessera API](TesseraAPI.md).

### Server for remote enclave

If using an [remote enclave](../../Concepts/Enclave-types.md#remote-http-enclave), configure the
`ENCLAVE` server.

```json
"serverConfigs": [
   {
     "app": "ENCLAVE",
     "enabled": true,
     "serverAddress": "http://localhost:9081",
     //Where to find the remote enclave
     "communicationType": "REST"
   }
 ...
 ]
```

### TLS/SSL: Server sub-config

See [TLS/SSL](TLS.md) page.

### Whitelist

See [Configure peer discovery](Peer-discovery.md).

*[JCA]: Java Cryptography Architecture
