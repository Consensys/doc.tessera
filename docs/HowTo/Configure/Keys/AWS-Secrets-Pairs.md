---
description: Configure AWS Secrets Manager key pairs.
---

# AWS Secrets Manager key pairs

To configure Tessera to use AWS Secrets Manager [key pairs](Overview.md), provide the vault information in the
[configuration file](../../../Reference/SampleConfiguration.md#keys).
You can use Tessera to [generate AWS Secrets Manager keys](../../Generate-Keys/AWS-Secrets-Manager.md).

Provide the secret IDs for both keys with an optional endpoint.

!!! note

    The endpoint is optional because the AWS SDK can fall back to its built-in property retrieval chain, for example,
    using the environment variable `AWS_REGION` or the `~/.aws/config` file.

    [The AWS SDK documentation](https://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/credentials.html)
    explains using credentials.

!!! example "AWS Secrets Manager key pair configuration"

    ```json
    "keys": {
        "keyVaultConfigs": [
            {
                "keyVaultConfigType": "AWS",
                "properties": {
                    "endpoint": "https://secretsmanager.us-west-2.amazonaws.com"
                }
            }
        ],
        "keyData": [
            {
                "awsSecretsManagerPublicKeyId": "secretIdPub",
                "awsSecretsManagerPrivateKeyId": "secretIdKey"
            }
        ]
    }
    ```

This example configuration retrieves the secrets `secretIdPub` and `secretIdKey` from AWS Secrets Manager using the
endpoint `https://secretsmanager.us-west-2.amazonaws.com`.

!!! info

    If you receive a `Credential should be scoped to a valid region` error when starting Tessera, the region specified
    in the `endpoint` differs from the region the AWS SDK has retrieved from its
    [property retrieval chain](https://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/credentials.html).
    You can resolve this by setting the `AWS_REGION` environment variable to the same region as defined in the `endpoint`.

    [Environment variables must be set if using AWS Secrets Manager](../KeyVault/AWS-Secrets-Manager.md).
