## Project Overview
This project demonstrates a multi-container application using three main services:
- Frontend: Client interface
- Backend: API server for business logic
- Database: Data storage for backend operations
 ## Requirements
- Docker and Docker Compose
- Kubernetes
- Basic knowledge linux and container networking

## Setting Up for Project
### clone project
- `git clone <repository-url>`
### Install Docker and Docker Compose
- `sudo apt install docker.io`
- `sudo apt install docker-compose`
### Deploying to Kubernetes on Minikube
- Install Minikube and Kubernetes
### Apply Kubernetes Manifests
- `kubectl apply -f kubernetes/Backend/deployment.yaml`
- `kubectl apply -f kubernetes/Frontend/deployment.yaml`
- `kubectl apply -f kubernetes/Mongodb/deployment.yaml`
### Deployment Strategy
- Containerization: Each component is containerized, ensuring consistency across environments.
- Docker Compose: Simplifies local setup by managing service dependencies and networking.
- Kubernetes: Allows scaling and robust networking between services. This deployment leverages Minikube for a local Kubernetes environment, making it easy to test in a controlled, isolated setup.
