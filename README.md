# 🎟️ Ticketing Microservices Platform

A full-stack **microservices-based ticketing platform** built with Node.js and designed to demonstrate scalable backend architecture, event-driven communication, containerization, Kubernetes orchestration, ingress routing, and CI/CD automation.

The application is split into independently deployable services for authentication, tickets, orders, and payments.

---

## 🚀 Project Overview

This project demonstrates how a ticketing application can be designed using a **microservices architecture** instead of a single monolithic backend.

The system includes:

* Authentication service
* Ticket service
* Order service
* API Gateway
* Event-driven communication using NATS
* Stripe payment integration
* Docker containerization
* Kubernetes deployments
* Kubernetes Ingress
* CI/CD pipeline
* MongoDB
* JWT authentication

---

# 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │       Client        │
                         │   Web Application   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Kubernetes Ingress  │
                         │       Routing       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     API Gateway     │
                         │      Port 3000      │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
      ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
      │ Auth Service  │     │ Ticket Service│     │ Order Service │
      │    :3001      │     │    :3002      │     │    :3003      │
      └───────┬───────┘     └───────┬───────┘     └───────┬───────┘
              │                     │                     │
              └─────────────────────┼─────────────────────┘
                                    │
                                    ▼
                            ┌──────────────┐
                            │     NATS     │
                            │ Event Bus /  │
                            │ Message Queue │
                            └──────┬───────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │    Stripe    │
                            │   Payments   │
                            └──────────────┘

                    Kubernetes Cluster
                    ───────────────────
                         │
              ┌──────────┴──────────┐
              │                     │
         Deployments             Services
              │                     │
              └──────────┬──────────┘
                         │
                      Ingress
```

---

# 📦 Microservices

## 1. Auth Service

Responsible for user authentication and identity management.

### Responsibilities

* User registration
* User login
* User logout
* JWT authentication
* Current user information
* Authentication middleware

**Port:** `3001`

---

## 2. Ticket Service

Responsible for managing tickets.

### Responsibilities

* Create tickets
* Update tickets
* Retrieve tickets
* Retrieve individual tickets
* Ticket ownership
* Ticket availability

**Port:** `3002`

---

## 3. Order Service

Responsible for ticket orders and order lifecycle management.

### Responsibilities

* Create orders
* Retrieve orders
* Cancel orders
* Order expiration
* Ticket reservation
* Payment-related events

**Port:** `3003`

---

## 4. API Gateway

Acts as the entry point for client requests.

```text
Client
   │
   ▼
API Gateway
   │
   ├──► Auth Service
   ├──► Ticket Service
   └──► Order Service
```

This keeps the internal services isolated from direct client access.

**Port:** `3000`

---

# 🔄 Event-Driven Architecture

Services communicate using **NATS** instead of tightly coupling services together.

Example:

```text
Order Service
     │
     │ OrderCreated
     ▼
    NATS
     │
     ▼
Ticket Service
     │
     ▼
Reserve Ticket
```

Other events can be published and consumed between services as the application grows.

### Benefits

* Loose coupling
* Asynchronous communication
* Independent service development
* Better scalability
* Event-driven workflows

---

# 💳 Payment Integration

The application integrates with **Stripe** for payment processing.

Example flow:

```text
User
 │
 ▼
Create Order
 │
 ▼
Order Service
 │
 ▼
Stripe Payment
 │
 ▼
Payment Confirmation
 │
 ▼
Payment Event
 │
 ▼
Order Service
 │
 ▼
Order Completed
```

Cash on Delivery is also supported in the application.

---

# 🐳 Docker

Each microservice is containerized using Docker.

Example:

```text
Auth Service
     │
     ▼
Docker Image
     │
     ▼
Docker Container
```

The same approach is used for:

* Auth Service
* Ticket Service
* Order Service
* API Gateway

### Benefits

* Consistent runtime environment
* Isolated services
* Reproducible builds
* Easier deployment
* Environment-independent applications

---

# ☸️ Kubernetes

The application is designed to run as multiple Kubernetes workloads.

Each microservice has its own Kubernetes deployment and service.

```text
Kubernetes Cluster
│
├── auth-deployment
│   └── auth-service
│
├── tickets-deployment
│   └── tickets-service
│
├── orders-deployment
│   └── orders-service
│
├── gateway-deployment
│   └── gateway-service
│
└── ingress
```

Kubernetes handles:

* Container orchestration
* Service discovery
* Pod management
* Deployment management
* Scaling
* Internal networking
* Rolling updates

---

# 🌐 Kubernetes Ingress

Kubernetes **Ingress** is used to route external HTTP requests to the appropriate service.

Example:

```text
                    Internet
                       │
                       ▼
                  Kubernetes
                    Ingress
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       /api/users   /api/tickets  /api/orders
          │            │            │
          ▼            ▼            ▼
        Auth         Tickets       Orders
       Service       Service       Service
```

This provides a single external entry point while keeping individual services internal to the cluster.

---

# 🔁 CI/CD Pipeline

The project also includes a CI/CD workflow for automating application delivery.

```text
Developer
    │
    ▼
Git Push
    │
    ▼
GitHub
    │
    ▼
CI/CD Pipeline
    │
    ├── Install Dependencies
    │
    ├── Run Tests
    │
    ├── Build Application
    │
    ├── Build Docker Image
    │
    ├── Push Docker Image
    │
    └── Deploy to Kubernetes
              │
              ▼
       Kubernetes Cluster
```

The purpose of the pipeline is to reduce manual deployment steps and provide a repeatable deployment process.

---

# 🧩 Technology Stack

## Backend

* Node.js
* Express.js
* JavaScript
* REST APIs

## Architecture

* Microservices
* API Gateway
* Event-driven architecture
* NATS messaging

## Database

* MongoDB

## Authentication

* JWT

## Payments

* Stripe
* Cash on Delivery

## Containerization

* Docker
* Docker Compose

## Orchestration

* Kubernetes
* Kubernetes Deployments
* Kubernetes Services
* Kubernetes Ingress

## CI/CD

* GitHub
* CI/CD pipeline
* Automated Docker image build
* Kubernetes deployment

---

# 📁 Project Structure

```text
ticketing-app-local/
│
├── auth/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── tickets/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── orders/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── gateway/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── infra/
│   └── kubernetes/
│       ├── auth/
│       ├── tickets/
│       ├── orders/
│       ├── gateway/
│       └── ingress/
│
├── .github/
│   └── workflows/
│       └── ...
│
└── README.md
```

> Directory names may differ slightly depending on the current repository structure.

---

# 🔐 Authentication Flow

```text
User
 │
 ▼
Sign Up / Sign In
 │
 ▼
Auth Service
 │
 ▼
JWT Token
 │
 ▼
Client
 │
 ▼
Authorization Header
 │
 ▼
API Gateway
 │
 ▼
Protected Microservice
```

Example:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# 🎫 Ticket Purchase Flow

```text
1. User signs in
        │
        ▼
2. JWT authentication
        │
        ▼
3. User views available tickets
        │
        ▼
4. User creates an order
        │
        ▼
5. Order Service creates order
        │
        ▼
6. Order event published to NATS
        │
        ▼
7. Ticket Service reserves ticket
        │
        ▼
8. User completes payment
        │
        ▼
9. Payment event is processed
        │
        ▼
10. Order becomes completed
```

---

# 🧠 Key Backend Concepts Demonstrated

This project demonstrates practical experience with:

* Microservices architecture
* REST API development
* API Gateway pattern
* Event-driven architecture
* NATS pub/sub
* JWT authentication
* MongoDB
* Order management
* Ticket reservation
* Payment integration
* Docker containerization
* Kubernetes deployments
* Kubernetes Services
* Kubernetes Ingress
* CI/CD
* Environment configuration
* Service-to-service communication
* Distributed application design

---

# 🛠️ Local Development

### Install dependencies

```bash
cd auth
npm install

cd ../tickets
npm install

cd ../orders
npm install

cd ../gateway
npm install
```

### Start services

```bash
npm start
```

Run the required services individually during local development.

For Kubernetes-based development, apply the Kubernetes manifests:

```bash
kubectl apply -f infra/kubernetes/
```

Check running resources:

```bash
kubectl get pods
kubectl get services
kubectl get ingress
```

---

# 🔒 Environment Variables

Example configuration:

```env
MONGO_URI=mongodb://localhost:27017/ticketing
JWT_KEY=your_jwt_secret

NATS_URL=nats://localhost:4222

STRIPE_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

**Never commit real credentials or `.env` files to GitHub.**

---

# 📌 Project Highlights

### Microservices

Each major business capability runs as an independent service.

### Event-Driven Communication

NATS allows services to communicate through events without tightly coupling their implementation.

### Containerized Deployment

Docker provides consistent environments across development and deployment.

### Kubernetes

Kubernetes manages service deployment, networking, and container orchestration.

### Ingress

Ingress provides external HTTP routing into the Kubernetes cluster.

### CI/CD

The pipeline automates application build and deployment steps after code changes.

---

# 🎯 Learning Objectives

The project was built to gain practical experience in designing and operating a backend application using modern distributed-system concepts.

It combines:

```text
Node.js
   +
Microservices
   +
NATS
   +
Docker
   +
Kubernetes
   +
Ingress
   +
CI/CD
   +
Stripe
```

---

# 👨‍💻 Author

**Antony Marshal**

Node.js Backend Developer

GitHub: https://github.com/Antonymarshal23
