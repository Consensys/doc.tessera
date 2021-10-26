---
description: Configure an alternative cryptographic elliptic curve
---

# Configure cryptographic elliptic curves

By default, the Tessera [enclave](../../Concepts/Privacy-Manager/Enclave.md) uses the
[`jnacl`](https://github.com/neilalexander/jnacl) implementation of the [`NaCl`](https://nacl.cr.yp.to/) library to
encrypt and decrypt private payloads.

The `NaCl` primitives provide good security and speed and is sufficient in most circumstances.

You can configure an alternative cryptographic elliptic curve by specifying
[`encryptor`](../../Reference/SampleConfiguration.md#encryptor) in the [configuration file](Tessera.md).

## Configure an alternative cryptographic elliptic curve

You can replace the `NaCl` primitives with alternative curves and symmetric ciphers by providing a compatible JCA
provider (for example, [SunEC provider]).

The same enclave encryption process is used regardless of whether the `NaCl` or JCA encryptor is configured.

!!! example "JCA encryptor configuration"

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

If `type` is set to `CUSTOM`, support is provided for an external encryptor implementation to integrate with Tessera.
The kalium support module is configured as a custom encryptor.
The pilot third party integration is [Unbound Tech's Unbound Key Control (UKC) encryptor](https://github.com/unbound-tech/unbound-integration/tree/master/tessera)
(jar available at `com.github.unbound-tech:encryption-ub:<version>`).

<!--links-->
[SunEC provider]: https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC
*[JCA]: Java Cryptography Architecture
