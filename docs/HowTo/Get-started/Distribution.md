---
description: Install Tessera
---

# Install Tessera

* Install necessary [dependencies](Dependencies.md)

* Download and unpack the latest `tessera-app-<VERSION>-app.zip|tar` distribution from the
    [`ConsenSys/tessera` repository](https://github.com/ConsenSys/tessera/releases/latest)

```shell
$ tar xvf tessera-[version].tar
$ tree tessera-[version]
tessera-[version]
├── bin
│   ├── tessera
│   └── tessera.bat
└── lib
    ├── HikariCP-3.2.0.jar
    ...
```

* Add tessera script to path (optional but rest of documentation assumes its in the path)

```shell
export PATH=$PATH:tessera-dist-[version]/bin
```

* Run Tessera help to verify installation (use correct `/bin` script for your system): 

```shell
./tessera-dist-[version]/bin/tessera help
```

## Supplementing the distribution

Additional functionality can be added to a distribution by adding `.jar` files to the `/lib` directory.

### Adding Tessera artefacts

Download and unpack the artefact:

```shell
$ tar xvf aws-key-vault-[version].tar
$ tree aws-key-vault-[version]
aws-key-vault-[version].tar
└── lib
    ├── annotations-2.10.25.jar
    ...
```

Copy the contents of the artefact's `/lib` into the distribution `/lib` (make sure to resolve any version conflicts/duplicated `.jar` files introduced during the copy):

```shell
 cp -a aws-key-vault-[version]/lib/. tessera-[version]/lib/
```
