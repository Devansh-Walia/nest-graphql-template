# glue-app-server-sequelize

This is a NestJs project that serves as the app server for the Glue application.

## Installation

To install the dependencies for this project, run the following command:

```
npm install
```

## Configuration

This project uses environment variables to configure various settings. These variables are stored in an `.env` file located in the root of the project. See the [Environment Variables](#environment-variables) section for more information.

## Running the application

To start the application in development mode, run the following command:

```
# development
npm run start

# watch mode
npm run start:dev
```

To start the application in production mode, first build the project by running:

```
npm run build
```

Then start the application by running:

```
npm run start:prod
```

## Environment Variables

This application uses environment variables to configure various settings. These variables are stored in an `.env` file located in the root of the project.

Here's a brief description of each environment variable:

- `

# Deepstream

DEEPSTREAM_URL= # The URL of deepstream server

# Kafka

KAFKA_USER= # The username for connecting to Kafka brokers
KAFKA_PASSWORD= # The password for connecting to Kafka brokers
KAFKA_BROKERS= # A comma-separated list of Kafka brokers to connect to
KAFKA_TOPIC= # The Kafka topic to use

# Database

DB_HOST= # The hostname of the database server
DB_USER= # The username for the database
DB_PASSWORD= # The password for the database user
DB_NAME= # The name of the database
DB_PORT= # The port number on which the database server is listening

# AWS

AWS_ACCESS_KEY_ID= # Your AWS access key ID
AWS_SECRET_ACCESS_KEY= # Your AWS secret access key
AWS_REGION= # AWS region to use

# Redis

REDIS_HOST= # The hostname of redis server
REDIS_PORT= # The port number on which the redis server is listening

# Keycloak

KEYCLOAK_REALM= # The Keycloak realm to use for authentication
KEYCLOAK_URL= # The URL of the Keycloak server
KEYCLOAK_ADMIN_USERNAME= # The username of a Keycloak admin user
KEYCLOAK_ADMIN_PASSWORD= # The password of a Keycloak admin user
KEYCLOAK_CLIENT_ID= # The client ID for the application in Keycloak
KEYCLOAK_CLIENT_SECRET= # The client secret for the application in Keycloak
KEYCLOAK_JWT_PRIVATE_KEY= # The private key used to sign JWTs issued by Keycloak
KEYCLOAK_JWT_EXPIRES_IN= # The expiration time (in seconds) for JWTs issued by Keycloak
KEYCLOAK_JWT_KID= # The key ID of the private key used to sign JWTs issued by Keycloak

# Agora

AGORA_APP_ID= # The app id of agora
AGORA_CERTIFICATE= # The certificate of agora

# SMTP

SMTP_HOST= # The hostname of SMTP server
SMTP_USERNAME= # The username of SMTP server
SMTP_PASSWORD= # The password of SMTP server

# Meilisearch

MEILISEARCH_HOST= # The host url of meilisearch server
MEILI_MASTER_KEY= # The secret key of meilisearch

# Basic

USER_PROXY_SERVICE_BASE_URL= # The proxy URL of User Server
FE_BASE_URL= # The URL of frontend
REAL_TIME_SERVER_URL= # The proxy URL of Realtime server
APP_ENV= # The environment in which the application is running (e.g. development, base, beta, qa, qa2)

```

Make sure to replace the placeholder values with your own values before starting the application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```
