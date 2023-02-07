---
title: Generate certificates
description: Generating certificates
sidebar_position: 3
---

# Generating certificates

You can generate certificates to use with [TLS](Configure/TLS.md) using a third-party tool such as OpenSSL or Keytool.

This guide explains how to use [OpenSSL](https://www.openssl.org/source/) to generate certificates when the Common Name (CN) is either the [public DNS](#public-dns-as-cn) or an [IP address](#ip-address-as-cn). Before you begin, ensure OpenSSL is installed.

## Public DNS as CN

Follow these steps to use a public DNS as CN.

### Generating a CA certificate

1. Generate a key file called `tessera_ca.key`:

   ```bash
   openssl genrsa -out tessera_ca.key 2048
   ```

2. Generate a certificate authority (CA) certificate called `tessera_ca.pem` that uses `tessera_ca.key`:

   ```bash
   openssl req -x509 -new -nodes -key tessera_ca.key -sha256 -days 1024 -out tessera_ca.pem
   ```

### Generating a new certificate for a node

We recommend each node has its own certificate. To generate the certificate:

1. Generate a key file called `tessera_cer.key`:

   ```bash
   openssl genrsa -out tessera_cer.key 2048
   ```

2. Generate a certificate signing request (CSR) called `tessera_cer.csr`:

   ```bash
   openssl req -new -key tessera_cer.key -out tessera_cer.csr
   ```

3. Answer each prompt for information to be added to the certificate request. Ensure the value you specify for CN matches the host public DNS so the requests from the server are accepted. The name is also specified in the configuration file for the `nodeurl` and `clienturl` options.

:::info

If running on `localhost`, make sure `localhost` is specified in CN.

:::

4. Generate a certificate called `tessera_cer.pem` signed by the CA certificate:

   ```bash
   openssl x509 -req -in tessera_cer.csr -CA tessera_ca.pem -CAkey tessera_ca.key -CAcreateserial -out tessera_cer.pem -days 500 -sha256
   ```

## IP address as CN

Follow these steps to use a public IP address as CN.

### Updating the `openssl.cnf` file

1. Find the `openssl.cnf` file, and create a copy of it.

2. In your copy of the `openssl.cnf` file, find the `[req]` section, and add:

   ```bash
   req_extensions = v3_req

   [ v3_req ]
   basicConstraints = CA:FALSE
   keyUsage = nonRepudiation, digitalSignature, keyEncipherment
   subjectAltName = @alt_names

   [alt_names]
   DNS.1 = <DNS-PUBLIC-RECORD>
   DNS.2 = <DNS-PRIVATE-RECORD>
   IP.1 = <PUBLIC-IP-ADDRESS>
   IP.2 = <PRIVATE-IP-ADDRESS>
   ```

3. For each DNS you want to use as an alternate name, specify a `DNS.n` entry.

4. For each IP address you want as an alternate IP address, specify an `IP.n` entry.

   :::note

   When running on `localhost`, include `127.0.0.1` as a listed IP address.

   :::

### Generating a new CSR for a node

1. Run the following command. Substitute your values for all variables.

   ```bash
   openssl req -new -key tessera_cer.key -out tessera_cer.csr -config <PATH-TO>/openssl.cnf
   ```

2. Test whether the certificate was generated with the expected subject alternative names:

   <!--tabs-->

   # Command

   ```bash
   openssl req -text -noout -in tessera_cer.csr
   ```

   # Output example

   ```bash
   [...]
   Requested Extensions:
       X509v3 Subject Alternative Name:
   DNS:<DNS-PUBLIC-RECORD>,
   DNS:<DNS-PRIVATE-RECORD>,
   IP Address:<PUBLIC-IP-ADDRESS>,
   IP Address:<PRIVATE-IP-ADDRESS>
   [...]
   ```

   <!--/tabs-->

### Generating a new certificate

1. Run the following command. Substitute your values for all variables.

   ```bash
   openssl x509 -req -in tessera_cer.csr -CA tessera_ca.pem -CAkey tessera_ca.key -CAcreateserial -out tessera_cer.pem -days 500 -sha256 -extfile <PATH-TO>/openssl.cnf -extensions v3_req
   ```

2. Test whether the generated certificate contains the subject alternative names:

   <!--tabs-->

   # Command

   ```bash
   openssl x509 -in tessera_cer.pem -text -noout
   ```

   # Output example

   ```bash
   [...]
   X509v3 extensions:
       X509v3 Subject Alternative Name:
   DNS:<DNS-PUBLIC-RECORD>,
   DNS:<DNS-PRIVATE-RECORD>,
   IP Address:<PUBLIC-IP-ADDRESS>,
   IP Address:<PRIVATE-IP-ADDRESS>
   [...]
   ```

   <!--\tabs-->
