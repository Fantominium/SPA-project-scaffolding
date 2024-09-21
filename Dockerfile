# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Run the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy the build output and necessary files from the builder stage
COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package.json ./

# Expose port 3001
EXPOSE 3001

# Set environment variable
ENV PORT=3001
ENV NODE_ENV=production

# Start the Next.js application
CMD ["yarn", "start"]
