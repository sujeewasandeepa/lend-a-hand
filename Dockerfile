# Use a base image with Node.js and npm pre-installed
FROM node:16-alpine


# Set the working directory in the container
WORKDIR /app

COPY package*.json ./
# Copy the built files to the container
RUN npm install

COPY . .

# Install serve to serve the built files

EXPOSE 8000

CMD ["npm", "run", "dev", "--host"]
