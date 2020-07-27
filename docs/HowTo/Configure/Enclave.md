---
description: Configuring Tessera enclave 
---

# Configure Tessera enclave 
 
The configuration for the [Tessera enclave](../../Concepts/Enclave.md) is designed to be the same as for the Transaction Manager.
 
 ### Local Enclave Setup
 The following should be present in the TM configuration:
 ```json
 {
     "keys": {
         "keyData": [{
             "privateKey": "yAWAJjwPqUtNVlqGjSrBmr1/iIkghuOh1803Yzx9jLM=",
             "publicKey": "/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="
         }]
     },
 
     "alwaysSendTo": []
 }
 ```
  
 ### Remote Enclave Setup
 The configuration required is minimal, and only requires the following from the main config (as an example):
 
 In the remote Enclave config:
 ```json
 {
     "serverConfigs": [{
         "app": "ENCLAVE",
         "enabled": true,
         "serverAddress": "http://localhost:8080",
         "communicationType": "REST",
         "bindingAddress": "http://0.0.0.0:8080"
     }],
 
     "keys": {
         "keyData": [{
             "privateKey": "yAWAJjwPqUtNVlqGjSrBmr1/iIkghuOh1803Yzx9jLM=",
             "publicKey": "/+UuD63zItL1EbjxkKUljMgG8Z1w0AJ8pNOR4iq2yQc="
         }]
     },
 
     "alwaysSendTo": []
 }
 ```
 
 and in the TM configuration:
 ```json
 "serverConfigs": [{
     "app": "ENCLAVE",
     "enabled": true,
     "serverAddress": "http://localhost:8080",
     "communicationType": "REST"
 }],
 ```
 The keys are the same as the Transaction Manager configuration, and can use all the key types including vaults.  When using a vault with the Enclave, be sure to include the corresponding jar on the classpath, either:
 
 * `/path/to/azure-key-vault-0.9-SNAPSHOT-all.jar`
 * `/path/to/hashicorp-key-vault-0.9-SNAPSHOT-all.jar`
 
 If using the all-in-one Transaction Manager jar, all the relevant files are included, and just the configuration needs to be updated for the TM.
 
 If using the individual "make-your-own" jars, you will need the "core Transaction Manager" jar along with the "Enclave clients" jar, and add them both to the classpath as such: `java -cp /path/to/transactionmanager.jar:/path/to/enclave-client.jar com.quroum.tessera.Launcher -configfile /path/to/config.json`