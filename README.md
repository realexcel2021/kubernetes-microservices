![Build status](https://spylkkanen.visualstudio.com/kubernetes-microservices/_apis/build/status/kubernetes-microservices-Docker%20container-CI)
![Release status](https://spylkkanen.vsrm.visualstudio.com/_apis/public/Release/badge/91705780-23f2-4c51-8f8d-bd251a855be4/1/1)

# Overview
This is simple nodejs based application designed to showcase microservices in docker and kubernetes. Application contains one web application and two REST api services where one of the service is internal which is not directly accessible from internet.

Configuration demonstrates basics how to setup local docker registry and local kubernetes hosting. e.g. If you want to create own private cloud solution.

:grey_exclamation: Please notice that example is documented based on Windows host.


# Architecture

All application services used in showcase are written with NodeJS.

## Docker hosted application
Simplyfied overal structure of application networking.
![Docker application structure](https://github.com/spylkkanen/kubernetes-microservices/blob/master/docs/docker-application-structure.PNG)

## Kubernetes hosted application
Simplyfied overal structure of application networking.
![Kubernetes application structure](https://github.com/spylkkanen/kubernetes-microservices/blob/master/docs/kubernetes-application-structure.PNG)


# Repository Structure
The main levels of the repository directory tree are laid out as follows 
```
.
├── backend-api1            NodeJS backend service 1.
│   └── api                 REST api's.
├── backend-api2            NodeJS internal backend service 2.
│   ├── api                 REST api's.
├── docs                    Documentation
├── frontend                NodeJS hosted webapp.
├── kubernetes              Kubernetes installation scripts to setup application to kubernetes.
├── docker-compose.yml      Docker compose to setup application to docker.
```


# Kubernetes application quick launch

To build docker images run 
```
./build.sh
```

To deploy microservice on kubernetes run
```
./kubernetes/install.sh
```
