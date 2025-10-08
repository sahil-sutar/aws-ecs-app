# AWS ECS App

This is a Dockerized Node.js application ready to deploy on **AWS ECS (Elastic Container Service)**.

## Features

- Node.js backend
- Dockerized for container deployment
- AWS ECS compatible
- Sample AWS configuration included

## Project Structure


## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/sahil-sutar/aws-ecs-app.git
cd aws-ecs-app
docker build -t aws-ecs-app .
docker run -p 3000:3000 aws-ecs-app
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <your_account_id>.dkr.ecr.ap-south-1.amazonaws.com
docker tag aws-ecs-app:latest <your_account_id>.dkr.ecr.ap-south-1.amazonaws.com/aws-ecs-app:latest
docker push <your_account_id>.dkr.ecr.ap-south-1.amazonaws.com/aws-ecs-app:latest
