# Haggat - Simple E-Commerce Site

Welcome to the Haggat e-commerce project! This is a simple e-commerce site built with Next.js and React, featuring core functionalities such as product listings, cart management, and user sessions. Below you'll find details on how to set up and run the project, as well as an overview of the core features and technological specifications.

Go to the [Live Demo](https://haggat.vercel.app/)

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

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the Repository**:

```bash
    git clone [repository-url]
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

## Contact
If you have any questions or need further assistance, feel free to contact us.

Good luck with the project!
