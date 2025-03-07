# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the application files to the container
COPY app.js .

# Expose the application's port
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
