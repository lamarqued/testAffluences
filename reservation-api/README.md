# reservation-api

This api fetchs information from reservation database.

## Routes

### Timetables

This route checks if a resource is available for a datetime

**URI** : /resource/:resourceId/available

**Method** : GET

**Parameters**

| name | type | required |
| ------ | ------ | ------|
| datetime | date in format YYYY-MM-DDThh:mm:ss | yes |
| resourceId | int | yes |

**Example**

GET http://ip:port/resource/1337/available?datetime=2020-03-19T12:00:00

Response

```json
{
    "available": true
}
```

## Build and run

The prefered method to run the service is to run it with docker. 
There is a Dockerfile available. You should build the image before running it
with "docker build" command. The container will expose the API through port 
8080. Don't forget to bind the port when launching the container 
with "docker run" command to access the API !

If you are not confortable with Docker, you can deploy the API by installing 
the dependencies by running the command "npm install" from a terminal
and then run the API with "npm run start".