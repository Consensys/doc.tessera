---
description: Configure AWS Secrets Manager key pairs.
---

# AWS Secrets Manager key pairs

Key pairs are stored as secrets in AWS Secrets Manager. You need to provide the secret IDs for both
keys with an optional endpoint.

!!! Note

    The endpoint is optional because the AWS SDK can fallback to its builtin property retrieval
    chain. For example using the environment variable `AWS_REGION` or `~/.aws/config` file.

    [The AWS SDK documentation](https://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/credentials.html)
    provides an explanation of using credentials.

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

This example configuration retrieves the secrets `secretIdPub` and `secretIdKey` from
AWS Secrets Manager using the endpoint `https://secretsmanager.us-west-2.amazonaws.com`.

!!! info

    A `Credential should be scoped to a valid region` error when starting means that the region
    specified in the `endpoint` differs from the region the AWS SDK has retrieved from its
    [property retrieval chain](https://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/credentials.html).
    This can be resolved by setting the `AWS_REGION` environment variable to the same region as
    defined in the `endpoint`.
    
    [Environment variables must be set if using AWS Secrets Manager](../KeyVault/AWS-Secrets-Manager.md).
