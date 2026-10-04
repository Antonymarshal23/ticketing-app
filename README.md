# 🎟️ Ticketing App — Microservices Architecture

A production-style **ticketing and order management application** built using **Node.js microservices**. The project demonstrates service-to-service communication, authentication, event-driven architecture, payment processing, containerization, Kubernetes deployment, Ingress routing, and CI/CD.

## 🚀 Project Overview

This application is designed using a **microservices architecture**, where authentication, tickets, orders, and API routing are separated into independent services.

The services communicate asynchronously using **NATS**, while the API Gateway acts as the single entry point for client requests.

### Architecture

```text
                         ┌──────────────────┐
                         │      Client      │
                         │  React Frontend  │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │    Ingress       │
                         │   Kubernetes     │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   API Gateway    │
                         │      :3000       │
                         └────────┬─────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
                ▼                 ▼                 ▼
        ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
        │ Auth Service │  │Ticket Service│  │ Order Service│
        │    :3001     │  │    :3002     │  │    :3003     │
        └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
               │                 │                 │
               └─────────────────┼─────────────────┘
                                 │
                                 ▼
                         ┌──────────────────┐
                         │       NATS       │
                         │ Event Messaging  │
                         └──────────────────┘

                         ┌──────────────────┐
                         │     Stripe       │
                         │ Payment Gateway  │
                         └──────────────────┘
```

---

# 🧩 Microservices

## 1. Auth Service

**Port:** `3001`

Responsible for user authentication and authorization.

### Responsibilities

* User registration
* User login
* JWT authentication
* Password hashing
* Authentication middleware
* Publishing authentication-related events

---

## 2. Ticket Service

**Port:** `3002`

Responsible for creating and managing tickets.

### Responsibilities

* Create tickets
* View tickets
* Update ticket information
* Ticket ownership
* Ticket status management
* Publish ticket events
* Consume events from other services

Example ticket states:

```text
OPEN
AWAITING_PAYMENT
CANCELLED
COMPLETED
```

---

## 3. Order Service

**Port:** `3003`

Responsible for purchasing tickets and processing orders.

### Responsibilities

* Create orders
* Order validation
* Payment processing
* Stripe integration
* Cash/alternative payment flow
* Order expiration
* Order status management
* Publish order events

---

## 4. API Gateway

**Port:** `3000`

The API Gateway provides a single entry point for the frontend.

Instead of the frontend communicating directly with every microservice:

```text
Frontend
   │
   ▼
API Gateway
   │
   ├── Auth Service
   ├── Ticket Service
   └── Order Service
```

This provides a cleaner architecture and hides internal service URLs from the client.

---

# 📡 Event-Driven Communication

The application uses **NATS Streaming/Event Messaging** for asynchronous communication between microservices.

Instead of tightly coupling services through direct HTTP requests, services publish events.

Example:

```text
Ticket Created
      │
      ▼
   NATS
      │
      ├──────────────► Order Service
      │
      └──────────────► Other Subscribers
```

### Example Events

```text
ticket:created
ticket:updated
ticket:deleted

order:created
order:updated
order:cancelled

expiration:complete
```

This allows services to remain independently deployable and reduces direct dependencies between services.

---

# 💳 Payment Integration

The Order Service supports payment processing using **Stripe**.

### Payment Flow

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
Stripe
 │
 ├── Payment Successful
 │        │
 │        ▼
 │    Order Completed
 │
 └── Payment Failed
          │
          ▼
      Order Cancelled
```

The project also supports a non-card payment flow such as **Cash on Delivery (COD)**.

---

# 🛠️ Technology Stack

## Backend

* Node.js
* Express.js
* TypeScript
* REST APIs
* JWT
* MongoDB
* Mongoose

## Microservices

* Auth Service
* Ticket Service
* Order Service
* API Gateway

## Messaging

* NATS

## Payments

* Stripe
* COD payment flow

## Frontend

* React
* Next.js

## DevOps

* Docker
* Kubernetes
* Kubernetes Ingress
* CI/CD
* GitHub

---

# 📁 Project Structure

```text
ticketing-app/
│
├── auth/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── tickets/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── orders/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── gateway/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── infra/
│   └── kubernetes/
│       ├── auth-depl.yaml
│       ├── tickets-depl.yaml
│       ├── orders-depl.yaml
│       ├── gateway-depl.yaml
│       ├── ingress-srv.yaml
│       └── ...
│
├── docker-compose.yml
│
└── README.md
```

---

# 🔐 Authentication

Authentication is implemented using **JWT tokens**.

Typical authentication flow:

```text
Register
   │
   ▼
Auth Service
   │
   ▼
Password Hash
   │
   ▼
User Created
```

Login:

```text
Login
  │
  ▼
Auth Service
  │
  ▼
Validate Credentials
  │
  ▼
Generate JWT
  │
  ▼
Client
```

Protected requests include the JWT token:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# 🌐 API Gateway

The gateway exposes the application's public API.

Example routes:

```text
/api/users/*
/api/tickets/*
/api/orders/*
```

The gateway forwards requests to the appropriate internal microservice.

Example:

```text
POST /api/tickets
        │
        ▼
    API Gateway
        │
        ▼
   Ticket Service
```

---

# 🐳 Docker

Each microservice has its own Docker configuration.

Example:

```text
Auth Service       → Docker Container
Ticket Service     → Docker Container
Order Service      → Docker Container
Gateway             → Docker Container
NATS                → Docker Container
```

This provides consistent development and deployment environments.

Build the services using:

```bash
docker compose build
```

Run the application:

```bash
docker compose up
```

Stop the application:

```bash
docker compose down
```

---

# ☸️ Kubernetes

The application is designed to run using Kubernetes.

Each microservice can be independently deployed and scaled.

Example:

```text
Kubernetes Cluster
│
├── Auth Deployment
│   └── Auth Pods
│
├── Ticket Deployment
│   └── Ticket Pods
│
├── Order Deployment
│   └── Order Pods
│
├── Gateway Deployment
│   └── Gateway Pods
│
└── NATS
```

Example Kubernetes commands:

```bash
kubectl get pods
```

```bash
kubectl get services
```

```bash
kubectl get deployments
```

Apply Kubernetes configuration:

```bash
kubectl apply -f infra/kubernetes/
```

---

# 🌍 Kubernetes Ingress

Kubernetes Ingress provides external routing into the application.

Example:

```text
http://ticketing.local/api/users
http://ticketing.local/api/tickets
http://ticketing.local/api/orders
```

The Ingress routes requests to the API Gateway.

```text
                 Internet
                    │
                    ▼
              Kubernetes
                 Ingress
                    │
                    ▼
              API Gateway
               /    |    \
              /     |     \
           Auth   Tickets  Orders
```

This avoids exposing every microservice directly to the outside world.

---

# 🔄 CI/CD

The project includes a CI/CD workflow using GitHub.

Typical pipeline:

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
    ├── Run Tests
    ├── Build Application
    ├── Build Docker Images
    └── Deploy
```

This helps automate application validation and deployment.

---

# 🧪 Testing

The application can be tested at the individual service level and through API integration.

Example:

```bash
npm test
```

Tests can cover:

* Authentication
* Ticket creation
* Ticket updates
* Order creation
* Payment flow
* Event handling
* Authorization

---

# ⚙️ Environment Variables

Create environment variables for each service.

Example:

```env
JWT_KEY=your_jwt_secret

MONGO_URI=mongodb://...

NATS_URL=nats://nats:4222

STRIPE_KEY=your_stripe_secret

STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

Do not commit `.env` files or secrets to GitHub.

---

# 🚀 Running Locally

## 1. Clone the repository

```bash
git clone https://github.com/Antonymarshal23/ticketing-app.git
```

```bash
cd ticketing-app
```

## 2. Install dependencies

Install dependencies for each service:

```bash
cd auth
npm install
```

Repeat for:

```text
tickets
orders
gateway
```

## 3. Configure environment variables

Create the required `.env` files for each service.

## 4. Start the application

Using Docker:

```bash
docker compose up
```

Or run services individually during development.

Example:

```bash
npm run dev
```

---

# 📊 Core Architecture Concepts Demonstrated

This project demonstrates practical experience with:

* Microservices architecture
* REST API development
* API Gateway pattern
* Event-driven architecture
* Asynchronous communication
* NATS messaging
* JWT authentication
* Service-to-service communication
* Distributed application design
* Payment integration
* Order management
* Ticket management
* Docker containerization
* Kubernetes deployments
* Kubernetes Services
* Kubernetes Ingress
* CI/CD pipelines
* Independent service deployment
* Horizontal scalability

---

# 🎯 Why This Project?

The project was built to demonstrate how a monolithic application can be divided into independently deployable services.

Instead of:

```text
Single Application
├── Authentication
├── Tickets
├── Orders
└── Payments
```

the application separates responsibilities:

```text
Auth Service
Ticket Service
Order Service
API Gateway
NATS
```

This architecture improves service isolation, scalability, maintainability, and independent deployment.

---

# 🔮 Future Improvements

Potential improvements include:

* Redis caching
* Centralized logging
* Distributed tracing
* Prometheus monitoring
* Grafana dashboards
* Kubernetes Horizontal Pod Autoscaling
* Retry and dead-letter queues
* Additional automated tests
* Cloud deployment
* More payment providers
* Notification service
* Email notifications

---

# 👨‍💻 Author

**Antony Marshal**

Node.js Backend Developer

GitHub:
https://github.com/Antonymarshal23

LinkedIn:
https://linkedin.com/in/antony-marshal-288aaa200
