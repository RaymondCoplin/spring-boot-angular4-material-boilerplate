# Spring Boot + Angular 4 + Material

Author: @Saka7
Contributor: @raymondcoplin

## Includes:

Front-end:

- angular-cli boilerplate files
- JWT authentication service
- +HttpClient
- +Login page
- +Roles Permissions
- +Navigation Menu
- +Material Design

Back-end:

- gradle build file
- boilerplate files
- JWT authentication

## Setup

You can use `setup.sh` script to change name and version of the app and database connection properties.
Just run `sh setup.sh` and follow the instructions.

## Build and Run

First of all you need to configure the database. Properties are located in `./backend/src/main/resources/application.properties` file.

> By default application is using PostgreSQL database(name: `test`, user: `test`, password: `test`).

Also you need to configure JWT secret in file listed above.

1. Run `npm install --prefix frontend` to install front-end dependencies.
2. Run `npm run build:prod --prefix frontend` to build angular application.
3. Run `./init_db` to create database, dbuser and dump default schema.
4. Run `gradle build -p backend` to build a spring boot application.
5. Run `gradle bootRun -p backend ` or `java -jar backend/build/libs/app-name-[version].jar` to start spring boot application on embedded server.

> By default server will be running on port `8080`.


## Depelopment

- `npm start --prefix frontend` to start front-end server for development.
- `npm run start:prod --prefix frontend` to start front-end server with service-workers.
- `gradle bootRun -p backend ` to start spring boot application on embedded server.

> By default server will be running on port `4200`

## Testing

- `npm test --prefix frontend` - to run front-end unit tests.
- `npm run e2e --prefix frontend` - to run end to end tests.
- `gradle test -p backend` - to run server tests.

## Technologies used

- [spring-boot 1.5.3](https://projects.spring.io/spring-boot/)
- [spring-mvc 4.3.6](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html)
- [spring-data-jpa 1.11.0](http://projects.spring.io/spring-data-jpa/)
- [spring-security 4.2.1](https://projects.spring.io/spring-security/)
- [jjwt 0.7.0](https://github.com/jwtk/jjwt)
- [lombok 1.16.12](https://projectlombok.org/)
- [junit 4.11](http://junit.org/junit4/)
- [gradle 3.3](https://gradle.org/)
- [postgresql 9.5](https://www.postgresql.org/)
- [h2 1.4](http://www.h2database.com/html/main.html)
- [angular-cli 1.1.1](https://cli.angular.io/)
- [angular 4.4.4](https://angular.io/)
- [rxjs 5](http://reactivex.io/rxjs/)
- [jasmine 2.5](https://jasmine.github.io/)
- [karma 1.0](https://karma-runner.github.io/1.0/index.html)
- [protractor 4](http://www.protractortest.org/#/)
- [angular material2](https://material.angular.io/)
- [ngx-permissions 2.1.0](https://github.com/AlexKhymenko/ngx-permissions)

## License
spring-boot-angular4-boilerplate is released under the [MIT License](https://opensource.org/licenses/MIT).
