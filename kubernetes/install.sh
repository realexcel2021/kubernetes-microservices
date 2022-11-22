#!/bin/bash

kubectl apply -f ./kubernetes/backend-api-1.svc.yaml -f ./kubernetes/backend-api-2.svc.yaml -f ./kubernetes/frontend.svc.yaml -f ./kubernetes/backend-api-1.deploy.yaml -f ./kubernetes/backend-api-2.deploy.yaml -f ./kubernetes/frontend.deploy.yaml
