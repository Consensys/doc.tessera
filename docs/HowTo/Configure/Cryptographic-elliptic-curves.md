---
description: Configure an alternative cryptographic elliptic curve
---

# Cryptographic elliptic curves

By default Tessera's Enclave uses the [`jnacl`](https://github.com/neilalexander/jnacl) implementation
of the [`NaCl`](https://nacl.cr.yp.to/) library to encrypt and decrypt private payloads.

NaCl provides public-key authenticated encryption by using `curve25519xsalsa20poly1305`, a
combination of the:

1. **Curve25519 Diffie-Hellman key-exchange function**: based on fast arithmetic on a strong elliptic curve
1. **Salsa20 stream cipher**: encrypts a message using the shared secret
1. **Poly1305 message-authentication code**: authenticates the encrypted message using a shared secret.

The NaCl primitives provide good security and speed and is sufficient in most circumstances.

## Configure an alternative cryptographic elliptic curve

You can replace the NaCl primitives with alternative curves and symmetric ciphers by supplying a
compatible JCA provider (for example [SunEC provider]) and the necessary [Tessera configuration].

The same [enclave encryption process] is used regardless of whether the NaCl or JCA encryptor is
configured.

!!! example "Example JCA encryptor configuration"
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

If `type` is set to `CUSTOM`, it provides support for an external encryptor implementation to
integrate with Tessera. The pilot third party integration is [Unbound Tech's Unbound Key Control (UKC) encryptor](https://github.com/unbound-tech/unbound-integration/tree/master/tessera) (jar available at `com.github.unbound-tech:encryption-ub:<version>`).

<!--links-->
[enclave encryption process]: https://docs.goquorum.consensys.net/Concepts/Privacy/PrivateTransactionLifecycle/
[SunEC provider]: https://docs.oracle.com/javase/8/docs/technotes/guides/security/SunProviders.html#SunEC
[Tessera configuration]: ../../Reference/SampleConfiguration.md#encryptor
*[JCA]: Java Cryptography Architecture
