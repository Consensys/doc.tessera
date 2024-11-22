---
title: Quorum Developer Quickstart
description: Rapidly generate local Quorum blockchain networks.
sidebar_position: 1
---

# Quorum Developer Quickstart

## Prerequisites

- [Docker and Docker-compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/)
- On Windows:
  - Windows Subsystem for Linux 2
  - Docker desktop configured to use the WSL2-based engine

:::caution Important

Allow Docker up to 6G of memory. Refer to the **Resources** section in [Docker for Mac](https://docs.docker.com/docker-for-mac/) and [Docker Desktop](https://docs.docker.com/docker-for-windows/) for details.

:::

## Usage

To create the docker-compose file and artifacts, run:

```bash
npx quorum-dev-quickstart
```

Follow the prompts displayed.

When installation is complete, refer to `README.md` in the installation directory for more information on your test network.
