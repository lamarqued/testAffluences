# Test Affluences

Technical test asked by Affluences.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The project being containerized with Docker compose, you'll require Docker compose in order to run it.

### Installing

To run the app, write the following commands on a terminal :

```
docker-compose build
docker-compose up
```

Once it's done, you can access it on your favorite browser at http://localhost:4200/, the server running at http://localhost:80/

## Testing

As mentioned in the exercice, the only available time interval for the reservation will be between 10 (included) and 20 (excluded) on actual date, with id 1337.
Nonetheless, you can change the "id" property in the file home.component.ts if you want to test the app on other ids, or for further implementation.

## Built With

* [Node](https://nodejs.org/) - The back JS framework used
* [Angular](https://angular.io/) - The front TS framework used
* [Angular Material](https://material.angular.io/) - Used to enhance HTML and CSS with Angular
* [Docker](https://www.docker.com/) - Used to containerize the application

## Aknowledgements

Affluences Gitlab repository, providing the back-end of this application (right [here](https://gitlab.com/affluences/affluences-tests/reservation-api)!)

## Authors

**Denis LAMARQUE** - [Linkedin](https://www.linkedin.com/in/denis-lamarque-8b0534141/)
