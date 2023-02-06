import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
  {
    path: "/__docusaurus/debug",
    component: ComponentCreator("/__docusaurus/debug", "adf"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/config",
    component: ComponentCreator("/__docusaurus/debug/config", "c9c"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/content",
    component: ComponentCreator("/__docusaurus/debug/content", "ca8"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/globalData",
    component: ComponentCreator("/__docusaurus/debug/globalData", "286"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/metadata",
    component: ComponentCreator("/__docusaurus/debug/metadata", "013"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/registry",
    component: ComponentCreator("/__docusaurus/debug/registry", "5e8"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/routes",
    component: ComponentCreator("/__docusaurus/debug/routes", "732"),
    exact: true,
  },
  {
    path: "/api",
    component: ComponentCreator("/api", "acf"),
    exact: true,
  },
  {
    path: "/markdown-page",
    component: ComponentCreator("/markdown-page", "8d8"),
    exact: true,
  },
  {
    path: "/search",
    component: ComponentCreator("/search", "497"),
    exact: true,
  },
  {
    path: "/docs",
    component: ComponentCreator("/docs", "250"),
    routes: [
      {
        path: "/docs",
        component: ComponentCreator("/docs", "f31"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/command-line",
        component: ComponentCreator("/docs/category/command-line", "65e"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/concepts",
        component: ComponentCreator("/docs/category/concepts", "a0c"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/configure",
        component: ComponentCreator("/docs/category/configure", "154"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/generate-keys",
        component: ComponentCreator("/docs/category/generate-keys", "a06"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/get-started",
        component: ComponentCreator("/docs/category/get-started", "c57"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/how-to",
        component: ComponentCreator("/docs/category/how-to", "0d5"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/install",
        component: ComponentCreator("/docs/category/install", "bd2"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/keys",
        component: ComponentCreator("/docs/category/keys", "95b"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/keyvault",
        component: ComponentCreator("/docs/category/keyvault", "255"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/migrate",
        component: ComponentCreator("/docs/category/migrate", "8e2"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/privacy-manager",
        component: ComponentCreator("/docs/category/privacy-manager", "dcb"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/reference",
        component: ComponentCreator("/docs/category/reference", "9ef"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/tutorials",
        component: ComponentCreator("/docs/category/tutorials", "593"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/category/use",
        component: ComponentCreator("/docs/category/use", "806"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/Multitenancy",
        component: ComponentCreator("/docs/Concepts/Multitenancy", "88e"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/p2p-discovery",
        component: ComponentCreator("/docs/Concepts/p2p-discovery", "47a"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/Privacy-Groups",
        component: ComponentCreator("/docs/Concepts/Privacy-Groups", "843"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/Privacy-Manager",
        component: ComponentCreator("/docs/Concepts/Privacy-Manager", "96b"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/Privacy-Manager/Enclave",
        component: ComponentCreator(
          "/docs/Concepts/Privacy-Manager/Enclave",
          "8e0",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/Privacy-Manager/Enclave-types",
        component: ComponentCreator(
          "/docs/Concepts/Privacy-Manager/Enclave-types",
          "19b",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Concepts/Privacy-Manager/Transaction-manager",
        component: ComponentCreator(
          "/docs/Concepts/Privacy-Manager/Transaction-manager",
          "c39",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Cryptographic-elliptic-curves",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Cryptographic-elliptic-curves",
          "4a8",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Database",
        component: ComponentCreator("/docs/HowTo/Configure/Database", "9ea"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Enclave",
        component: ComponentCreator("/docs/HowTo/Configure/Enclave", "cda"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/High-availability",
        component: ComponentCreator(
          "/docs/HowTo/Configure/High-availability",
          "56f",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/AWS-Secrets-Pairs",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/AWS-Secrets-Pairs",
          "dde",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/Azure-Key-Vault-Pairs",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/Azure-Key-Vault-Pairs",
          "8a4",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/Direct-Key-Pairs",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/Direct-Key-Pairs",
          "dab",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/File-Based-Key-Pairs",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/File-Based-Key-Pairs",
          "260",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/Hashicorp-Vault-Pairs",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/Hashicorp-Vault-Pairs",
          "41f",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/Inline-Key-Pairs",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/Inline-Key-Pairs",
          "413",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/Overview",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/Overview",
          "8a8",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Keys/Secure-Keys",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Keys/Secure-Keys",
          "225",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/KeyVault/AWS-Secrets-Manager",
        component: ComponentCreator(
          "/docs/HowTo/Configure/KeyVault/AWS-Secrets-Manager",
          "1c5",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/KeyVault/Azure-Key-Vault",
        component: ComponentCreator(
          "/docs/HowTo/Configure/KeyVault/Azure-Key-Vault",
          "e93",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/KeyVault/Hashicorp-Vault",
        component: ComponentCreator(
          "/docs/HowTo/Configure/KeyVault/Hashicorp-Vault",
          "787",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Multiple-private-state",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Multiple-private-state",
          "363",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Orion-Mode",
        component: ComponentCreator("/docs/HowTo/Configure/Orion-Mode", "7f4"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Override-config",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Override-config",
          "c00",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Peer-discovery",
        component: ComponentCreator(
          "/docs/HowTo/Configure/Peer-discovery",
          "933",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/Tessera",
        component: ComponentCreator("/docs/HowTo/Configure/Tessera", "b80"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/TesseraAPI",
        component: ComponentCreator("/docs/HowTo/Configure/TesseraAPI", "23a"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Configure/TLS",
        component: ComponentCreator("/docs/HowTo/Configure/TLS", "232"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Generate-certificates",
        component: ComponentCreator("/docs/HowTo/Generate-certificates", "58c"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Generate-Keys",
        component: ComponentCreator("/docs/HowTo/Generate-Keys", "56c"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Generate-Keys/AWS-Secrets-Manager",
        component: ComponentCreator(
          "/docs/HowTo/Generate-Keys/AWS-Secrets-Manager",
          "41b",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Generate-Keys/Azure-Key-Vault",
        component: ComponentCreator(
          "/docs/HowTo/Generate-Keys/Azure-Key-Vault",
          "5be",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Generate-Keys/File-Stored-Keys",
        component: ComponentCreator(
          "/docs/HowTo/Generate-Keys/File-Stored-Keys",
          "b6d",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Generate-Keys/Hashicorp-Vault",
        component: ComponentCreator(
          "/docs/HowTo/Generate-Keys/Hashicorp-Vault",
          "6af",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Get-started/Install/Build-From-Source",
        component: ComponentCreator(
          "/docs/HowTo/Get-started/Install/Build-From-Source",
          "cc1",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Get-started/Install/Distribution",
        component: ComponentCreator(
          "/docs/HowTo/Get-started/Install/Distribution",
          "66a",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Get-started/Install/Docker-Images",
        component: ComponentCreator(
          "/docs/HowTo/Get-started/Install/Docker-Images",
          "081",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Get-started/Start-Tessera",
        component: ComponentCreator(
          "/docs/HowTo/Get-started/Start-Tessera",
          "d96",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Get-started/Use-GoQuorum-with-Tessera",
        component: ComponentCreator(
          "/docs/HowTo/Get-started/Use-GoQuorum-with-Tessera",
          "29e",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Migrate/MigrateFromOrion",
        component: ComponentCreator(
          "/docs/HowTo/Migrate/MigrateFromOrion",
          "4a2",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Migrate/Migration-Multitenancy",
        component: ComponentCreator(
          "/docs/HowTo/Migrate/Migration-Multitenancy",
          "821",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Migrate/Upgrade",
        component: ComponentCreator("/docs/HowTo/Migrate/Upgrade", "cf7"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Use/Data-Recovery",
        component: ComponentCreator("/docs/HowTo/Use/Data-Recovery", "049"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Use/Logging",
        component: ComponentCreator("/docs/HowTo/Use/Logging", "e1a"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Use/Mandatory-Recipients",
        component: ComponentCreator(
          "/docs/HowTo/Use/Mandatory-Recipients",
          "ed4",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/HowTo/Use/Monitoring",
        component: ComponentCreator("/docs/HowTo/Use/Monitoring", "fdb"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Reference/BootstrapSampleConfiguration",
        component: ComponentCreator(
          "/docs/Reference/BootstrapSampleConfiguration",
          "637",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Reference/CLI/CLI-Subcommands",
        component: ComponentCreator(
          "/docs/Reference/CLI/CLI-Subcommands",
          "98c",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Reference/CLI/CLI-Syntax",
        component: ComponentCreator("/docs/Reference/CLI/CLI-Syntax", "d4a"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Reference/SampleConfiguration",
        component: ComponentCreator(
          "/docs/Reference/SampleConfiguration",
          "d83",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Reference/TesseraAPI",
        component: ComponentCreator("/docs/Reference/TesseraAPI", "596"),
        exact: true,
        sidebar: "docSidebar",
      },
      {
        path: "/docs/Tutorials/Quorum-Dev-Quickstart",
        component: ComponentCreator(
          "/docs/Tutorials/Quorum-Dev-Quickstart",
          "9d1",
        ),
        exact: true,
        sidebar: "docSidebar",
      },
    ],
  },
  {
    path: "/",
    component: ComponentCreator("/", "e69"),
    exact: true,
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];
