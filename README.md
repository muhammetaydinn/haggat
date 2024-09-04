# Haggat - Simple E-Commerce Site

Welcome to the Haggat e-commerce project! This is a simple e-commerce site built with Next.js and React, featuring core functionalities such as product listings, cart management, and user sessions. Below you'll find details on how to set up and run the project, as well as an overview of the core features and technological specifications.

Go to the [Live Demo](https://haggat.vercel.app/)

### Access the Application

You can access the application at <http://localhost:3000>.

## Core Features

### Homepage

- **Slider**: Displays popular products using a carousel component (e.g., Embla Carousel).
- **Categories**: Cards showcasing various product categories.

### Product Listing

- **Filter & Sort**: Users can filter products by categories and perform sorting operations.
- **Server-Side Rendering (SSR)**: Used for listing products to ensure up-to-date content.

### Product Details

- **Product Features**: Detailed view of product features.
- **Image Carousel**: Carousel for products with multiple images.
- **Add to Cart**: Option to add products to the cart.

### Cart Management

- **View & Manage**: Users can view and manage their cart.
- **Persistence**: Cart items persist across page refreshes.

### User Session

- **Authentication**: Users can log in using NextAuth for session management.

### Password Reset Integration

- **Password Reset Feature**: The API does not support password reset operations. You will not be able to perform any actions related to resetting or recovering forgotten passwords through the API.
- **Future Plans**: Password reset and security enhancements are planned for future releases. For updates on these features, please check the [project updates](#) page.

## Technological Specifications

- **Frontend**:
  - Next.js ( Next 14)
  - React
  - CSS-in-JS (e.g., styled-components)
  - UI Framework (e.g., Mantine)

- **Backend**:
  - Fake API provided by [fakeapi.platzi.com](https://fakeapi.platzi.com)

- **Session Management**:
  - NextAuth

## Getting Started

If you wanto run it locally manual, follow the instructions below.
Or you can use the docker image to run it in a container.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the Repository**:

```bash
    git clone https://github.com/muhammetaydinn/haggat.git
    cd haggat
```

2. **Install Dependencies**:

```bash
   git clone [repository-url]
   cd haggat
```

3. Configure Environment Variables: Look at to the Create a .env.local file in the root directory and add the necessary environment variables. Refer to the .env.example for a template.
4. Run the Development Server:

```bash
   npm run dev
```

# Haggat Docker

This project provides a Docker image for a [Next.js](https://nextjs.org/) web application.

## Features

- Next.js application
- Runs on port 3000

## Requirements

- Docker: [Docker](https://www.docker.com/get-started) must be installed.

## Installation

You can pull and run the Docker image from [Docker Hub](https://hub.docker.com/).

### Pull the Docker Image

To download the image, run the following command:

```bash
docker pull muhammetaydin/haggat-docker:latest
```

### Run the Docker Image

To run the image, use this command:

```bash
docker run -p 3000:3000 muhammetaydin/haggat-docker:latest
```

## Contact

If you have any questions or need further assistance, feel free to contact us.

Good luck with the project!
