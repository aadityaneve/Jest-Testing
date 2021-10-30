# Jest-Testing

## What is Testing ?

> It is a process that makes sure that your code works as expected. It is used for making sure that all the required cases are handled.

## Why Testing ?

> The purpose of testing is not to find bugs, but to make the product work as expected, improving the product's quality.

## Pros

- To check software adaptability
- To identify errors
- To avoid extra costs
- To accelerate software development
- To optimise business
- To avoid risks

## Cons

- Writing tests take extra effort, and at times it feels like you can test the functionality by manually.

## The different types of tests

> ### Unit tests

> > Unit tests are the most basic type of testing, close to the source of your application. They consist in testing \* individual methods and functions of the classes, components or modules used by your software. Unit tests are in general quite easier to automate and can be run very quickly by a continuous integration server.

> ### Integration tests

> > Integration tests verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

> ### End-to-end tests

> > End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc. Functional tests. Products like cypress.io can be used to do end to end UI testing.

### Other forms of testing:

- Acceptance testing
- Performance testing
- Smoke testing
- Penetration Testing

## Jest

> Jest is a delightful JavaScript Testing Framework with a focus on simplicity, created by facebook.

## Steps for setup:

- npm: `npm install --save-dev jest`
- Add: `"test": "jest"` under scripts in package.json
- run comand: `npm test -- --watch`

## Structure

- describe(name, fn): creates a block that groups together several related tests.
- test: used as loggical blocks to differenciate use case for singlie function inside a describe block.
- expect(value): When you're writing tests, you often need to check that values meet certain conditions. expect gives you access to a number of "matchers" that let you validate different things.

> ## Methods
>
> some of the methods available

> > ## Basic expectations:

> > - `expect(value)`
> > - `.toBe(value)`
> > - `.toEqual(value)`

> > ## Boolean expectations:

> > - `.toBeFalsy()`
> > - `.toBeNull()`
> > - `.toBeTruthy()`
> > - `.toBeUndefined()`
> > - `.toBeDefined()`
> > - `.toBeNaN()`

> > ## Numbers:

> > - `.toBeGreaterThan(number | bigint)`
> > - `.toBeGreaterThanOrEqual(number | bigint)`
> > - `.toBeLessThan(number | bigint)`
> > - `.toBeLessThanOrEqual(number | bigint)`
