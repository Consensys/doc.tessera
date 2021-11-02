---
description: Monitor Tessera
---

# Monitor Tessera

Tessera can be used with InfluxDB or Prometheus time-series databases to record API usage metrics.
The data recorded can be visualized by using an existing dashboard tool such as Grafana.

In addition, Tessera logs can be searched, analyzed, and monitored using Splunk or Elastic Stack (ELK).
You can set up Splunk such that the logs for multiple Tessera nodes in a network are accessible from a single
centralized Splunk instance.

## API metrics

Tessera can record the following usage metrics for each endpoint of its API:

* Average response time
* Maximum response time
* Minimum response time
* Request count
* Requests per second

You can store these metrics in an InfluxDB or Prometheus time-series database for further analysis.

* Use [InfluxDB](https://www.influxdata.com/time-series-platform/influxdb/) when you prefer for metrics to be "pushed"
  from Tessera to the database.
  For example, Tessera starts a service which periodically writes the latest metrics to the database by calling the
  database's API.
* Use [Prometheus](https://prometheus.io/) when you prefer for metrics to be "pulled" from Tessera by the database.
  For example, Tessera exposes a `/metrics` API endpoint which the database periodically calls to fetch the latest metrics.

Both databases integrate well with the open source dashboard editor [Grafana](https://grafana.com/) to allow for easy
creation of dashboards to visualize the data being captured from Tessera.

### Using InfluxDB

The [InfluxDB documentation](https://docs.influxdata.com/influxdb) provides details on how to set up an InfluxDB database
ready for use with Tessera.
A summary of the steps is as follows:

1. [Install InfluxDB](https://docs.influxdata.com/influxdb/v1.7/introduction/installation/).
1. Start the InfluxDB server:

    ```bash
    influxd -config /path/to/influx.conf
    ```

    For local development and testing, the default configuration file (Linux: `/etc/influxdb/influxdb.conf`,
    macOS: `/usr/local/etc/influxdb.conf`) is sufficient.
    For further configuration options see [Configuring InfluxDB](https://docs.influxdata.com/influxdb/v1.7/administration/config/).
1. Connect to the InfluxDB server using the [`influx` CLI](https://docs.influxdata.com/influxdb/v1.7/tools/shell/) and
   create a new database.
   If using the default configuration, this is as follows:

    ```bash
    influx
    > CREATE DATABASE myDb
    ```

1. To view data stored in the database, use the [Influx Query Language](https://docs.influxdata.com/influxdb/v1.7/query_language/).

    ```bash
    influx
    > USE myDb
    > SHOW MEASUREMENTS
    > SELECT * FROM <measurement>
    ```

!!! info

    You can call the InfluxDB HTTP API directly as an alternative to using the `influx` CLI.

You can optionally configure each Tessera server type (for example, `P2P`, `Q2T`, `ADMIN`, `THIRDPARTY`, `ENCLAVE`) to
store API metrics in an InfluxDB.
You can configure these servers to store metrics to the same database or separate ones.

To configure a server to use an InfluxDB, add `influxConfig` to the server configuration.
For example:

```json
"serverConfigs": [
    {
        "app":"Q2T",
        "enabled": true,
        "serverAddress":"unix:/path/to/tm.ipc",
        "influxConfig": {
            "serverAddress": "https://localhost:8086",  // InfluxDB server address
            "dbName": "myDb",                           // InfluxDB DB name (DB must already exist)
            "pushIntervalInSecs": 15,                   // How frequently Tessera will push new metrics to the DB
            "sslConfig": {                              // Config required if InfluxDB server is using TLS
                "tls": "STRICT",
                "sslConfigType": "CLIENT_ONLY",
                "clientTrustMode": "CA",
                "clientTrustStore": "/path/to/truststore.jks",
                "clientTrustStorePassword": "password",
                "clientKeyStore": "path/to/truststore.jks",
                "clientKeyStorePassword": "password"
            }
        }
    },
    {
        "app":"P2P",
        "enabled": true,
        "serverAddress":"http://localhost:9001",
        "influxConfig": {
            "serverAddress": "http://localhost:8087",
            "dbName": "anotherDb",
            "pushIntervalInSecs": 15
        }
    }
]
```

#### InfluxDB TLS Configuration

InfluxDB supports one-way TLS.
This allows clients to validate the identity of the InfluxDB server and provides data encryption.

See [Enabling HTTPS with InfluxDB](https://docs.influxdata.com/influxdb/v1.7/administration/https_setup/) for details on
how to secure an InfluxDB server with TLS.
A summary of the steps is as follows:

1. Obtain a CA/self-signed certificate and key (either as separate `.crt` and `.key` files or as a combined `.pem` file).
1. Enable HTTPS in `influx.conf`:

    ``` bash
    # Determines whether HTTPS is enabled.
    https-enabled = true

    # The SSL certificate to use when HTTPS is enabled.
    https-certificate = "/path/to/certAndKey.pem"

    # Use a separate private key location.
    https-private-key = "/path/to/certAndKey.pem"
    ```

1. Restart the InfluxDB server to apply the configuration changes.

To allow Tessera to communicate with a TLS-secured InfluxDB, you must provide `sslConfig` in the configuration file.
To configure Tessera as the client in one-way TLS:

```json
"sslConfig": {
    "tls": "STRICT",
    "sslConfigType": "CLIENT_ONLY",
    "clientTrustMode": "CA",
    "clientTrustStore": "/path/to/truststore.jks",
    "clientTrustStorePassword": "password",
    "clientKeyStore": "path/to/truststore.jks",
    "clientKeyStorePassword": "password",
    "environmentVariablePrefix": "INFLUX"
}
```

where `truststore.jks` is a Java keystore format file containing the trusted certificates for the Tessera client (for
example, the certificate of the CA used to create the InfluxDB certificate).

If securing the key store with a password, you must provide this password.
Passwords can be provided either in the configuration (for example `clientTrustStorePassword`) or as environment
variables (using `environmentVariablePrefix` and setting `<PREFIX>_TESSERA_CLIENT_TRUSTSTORE_PWD`).
The [TLS configuration](../Configure/TLS.md) documentation explains this in more detail.

As Tessera expects two-way TLS, a `.jks` file for the `clientKeyStore` must also be provided.
This isn't used so can simply be set as the trust store.

### Using Prometheus

The [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) provides information to set up
Prometheus to integrate with Tessera.
The [Prometheus First Steps](https://prometheus.io/docs/introduction/first_steps/) is a good starting point.
A summary of the steps to store Tessera metrics in a Prometheus database are as follows:

1. Install Prometheus.
1. Create a `prometheus.yml` configuration file to provide Prometheus with the necessary information to pull metrics
   from Tessera.
   You can use [an example Prometheus configuration](https://github.com/ConsenSys/quorum-dev-quickstart/blob/master/files/goquorum/config/prometheus/prometheus.yml)
   with the [Quorum Developer Quickstart](../../Tutorials/Quorum-Dev-Quickstart.md).
1. Start Tessera.
   Tessera always exposes the `metrics` endpoint, so no additional configuration of Tessera is required.
1. Start Prometheus:

    ```bash
    prometheus --config.file=prometheus.yml
    ```

1. To view data stored in the database, access the Prometheus UI (by default `localhost:9090`, this address can be
   changed in `prometheus.yml`) and use the [Prometheus Query Language](https://prometheus.io/docs/prometheus/latest/querying/basics/).

### Using Grafana

You can import a pre-built [GoQuorum Grafana dashboard](https://grafana.com/grafana/dashboards/14360) to visualize
your recorded GoQuorum network data.

## Monitoring Tessera

### Using Splunk

You can use Splunk to search, analyze, and monitor the logs of Tessera nodes.

To consolidate the logs from multiple Tessera nodes, set up Splunk and Splunk Universal Forwarders.
The following pages from the Splunk documentation are a good starting point for understanding how to achieve this:

* [Consolidate data from multiple hosts](http://docs.splunk.com/Documentation/Forwarder/7.1.2/Forwarder/Consolidatedatafrommultiplehosts)
* [Set up the Universal Forwarder](http://docs.splunk.com/Documentation/Splunk/7.1.2/Forwarding/EnableforwardingonaSplunkEnterpriseinstance#Set_up_the_universal_forwarder)
* [Configure the Universal Forwarder](http://docs.splunk.com/Documentation/Forwarder/7.1.2/Forwarder/Configuretheuniversalforwarder)
* [Enable a receiver](http://docs.splunk.com/Documentation/Forwarder/7.1.2/Forwarder/Enableareceiver)

The general steps to consolidate the logs for a Tessera network in Splunk are:

1. Set up a central Splunk instance if one does not already exist.
   Typically this is on a host separate to the hosts running the Tessera nodes.
   This is known as the *Receiver*.
1. Configure the Tessera hosts to forward their nodes' logs to the *Receiver* by:
    1. Configuring the format and output location of the node's logs.
       This is achieved by configuring Logback (the logging framework used by Tessera) at node start-up.

        The following example XML configures Logback to save Tessera's logs to a file.
        See the [Logback documentation](https://logback.qos.ch/manual/configuration.html#syntax) for more information on
        configuring Logback:

        ``` xml
        <?xml version="1.0" encoding="UTF-8"?>
           <configuration>
               <appender name="FILE" class="ch.qos.logback.core.FileAppender">
                   <file>/path/to/file.log</file>
                   <encoder>
                       <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
                   </encoder>
               </appender>

               <logger name="org.glassfish.jersey.internal.inject.Providers" level="ERROR" />
               <logger name="org.hibernate.validator.internal.util.Version" level="ERROR" />
               <logger name="org.hibernate.validator.internal.engine.ConfigurationImpl" level="ERROR" />

               <root level="INFO">
                   <appender-ref ref="FILE"/>
               </root>
           </configuration>
        ```

        To start Tessera with an XML configuration file:

        ``` bash
        tessera -Dlogback.configurationFile=/path/to/logback-config.xml  -configfile /path/to/config.json
        ```

    1. Set up Splunk *Universal Forwarders* (lightweight Splunk clients) on each Tessera host to forward log data for
       its node to the *Receiver*.
    1. Set up the Splunk *Receiver* to listen and receive logging data from the *Universal Forwarders*.

### Using Elastic Stack

You can use Elastic Stack (ELK) to manage logs in Tessera.
Follow the [Quorum Developer Quickstart](../../Tutorials/Quorum-Dev-Quickstart.md) to use Tessera with ELK.
