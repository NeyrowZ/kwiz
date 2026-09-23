# Kwiz
The goal is to make a <u>robust</u>, <u>scalable</u> and <u>market grade</u> quiz creation website with modern features.

This repository contains the [Frontend](./website/) & [Backend](./api/) code, docker configurations and ultimatly Kubernetes kustomizations of the project.

## How to run
Clone this repository
```sh
git clone https://github.com/NeyrowZ/kwiz.git
cd kwiz
```

Create and configure a `.env` file according to the `.env.example`
```sh
docker compose up --build -d
```

## Later
To transfer from `docker + nginx` to kubernetes just build docker images like so
```sh
docker build -t kwiz-website:latest ./website
docker build -t kwiz-api:latest ./api
```

Then create services named after each images and route their trafic with Ingress accordingly
| Service      | Path    |
|--------------|---------|
| kwiz-website | `/`     |
| kwiz-api     | `/api/` |

And finaly get rid of `docker-compose.yml` and `edge/nginx.conf`.