FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
# Install dependencies based on the preferred package manager
COPY package*.json ./
RUN npm install
FROM deps AS build
COPY . .  

EXPOSE 3000

RUN npm run build
CMD ["npm", "start"]
