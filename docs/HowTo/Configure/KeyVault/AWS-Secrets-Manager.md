---
description: Configuring AWS Secrets Manager for storing private keys
---

# Configuring AWS Secrets Manager

You can configure an AWS Secrets Manager to use with Tessera.

The private/public key pairs used by Tessera can be [stored] in and [retrieved] from the secrets manager, without the
need to store the keys locally.

The [AWS Secrets Manager documentation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) provides
the information you need to get started.

## Accessing the AWS Secrets Manager

You need an AWS profile to use AWS Secrets Manager.

## Enabling Tessera to use the AWS Secrets Manager

You can [provide AWS Secrets Manager configuration credentials](https://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/credentials.html)
in many ways.

To use environment variables, set the following:

1. `AWS_REGION` - region to connect to (for example, `us-west-2`)
1. `AWS_ACCESS_KEY_ID` - your access key ID
1. `AWS_SECRET_ACCESS_KEY` - your secret access key

You can get the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for a particular user from the
[AWS IAM Management Console](https://console.aws.amazon.com/iam).

### Dependencies

Unpack `aws-key-vault-<version>.zip|tar` and `cp aws-key-vault-<version>/lib/* tessera-dist/lib/`.

<!-- links -->
[stored]: ../../Generate-Keys/AWS-Secrets-Manager.md
[retrieved]: ../Keys/AWS-Secrets-Pairs.md
