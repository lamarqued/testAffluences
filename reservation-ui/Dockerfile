# base image
FROM node:12-alpine

# set working directory
WORKDIR /app

# copy app into the working directory
COPY . /app

# install project dependencies
RUN npm install
RUN npm install -g @angular/cli@10.2.0

# start app
CMD ["ng", "serve", "--host","0.0.0.0"]