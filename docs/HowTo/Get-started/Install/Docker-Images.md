---
title: Run Tessera from Docker image
description: Use Tessera Docker images
sidebar_position: 1
---

# Run Tessera from a Docker image

You can use a Docker image to run a single Tessera node without installing Tessera. You must have [Docker](https://docs.docker.com/get-docker/) installed.

Various images are available (Tessera, Tessera with additional key vault support, etc.) at [`quorumengineering/tessera`](https://hub.docker.com/r/quorumengineering/tessera). See Tessera's [Docker `README`](https://github.com/ConsenSys/tessera/blob/master/docker/README.md) for more information.

## Usage

Pull an image:

```bash
docker pull quorumengineering/tessera:latest # pull latest release version
```

Verify the image:

```bash
docker run quorumengineering/tessera:latest help
```
