# Cost Manager

A node application to display costs (WIP)

## Running locally

`npm start`

`http://localhost:3000/`

`http://localhost:3000/users`

## Running in docker


`docker build -t cost-manager .`
`docker-compose up -d`
`http://localhost:49160/`

Note this project is intended to form part of the kafka cluster here
https://github.com/adambirse/kafka-docker-compose

This project provides an external network on which this project depends.
If you dont want this then you can just remove the external network from docker-compose



