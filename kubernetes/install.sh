#!/bin/bash

kubectl apply -f ./backend-api-1.svc.yaml -f ./backend-api-2.svc.yaml -f ./frontend.svc.yaml -f ./backend-api-1.deploy.yaml -f ./backend-api-2.deploy.yaml -f ./frontend.deploy.yaml
