<p align="center"><a href="https://alienfishconsulting.com" target="_blank"><img src="https://images2.imgbox.com/d0/fe/1YGgwXjt_o.png" width="400" alt="Alien Fish Logo"></a></p>

<p align="center">
<img src="https://img.shields.io/github/v/tag/TerryLeeAllenJr/alien-fish" alt="Commit Activity">
<img src="https://img.shields.io/badge/NodeJs-20.1.0-green" alt="Language">
<img src="https://img.shields.io/badge/Next-13.4.2-green" alt="Language">
<img src="https://img.shields.io/badge/tests-passing-green" alt="Tests">
<img src="https://img.shields.io/badge/build-passing-green" alt="Build">
<img src="https://img.shields.io/github/license/TerryLeeAllenJr/alien-fish" alt="License">
<a href="https://twitter.com"><img src="https://img.shields.io/twitter/follow/alienfish?style=social" alt="Twitter"></a>
</p>

## Alien Fish Consulting

*Please note that at this time this is a work in progress, and is in it's very early stages.*

Alien Fish Consulting is an open source learning, training, and digital collaboration platform founded by Lee Allen March of 2023, with the help of his lifelong friend Robert Herring. _At this time, AFC is strictly an exercise in application development, and is meant to showcase my skillset as a developer... not be a viable company._

**PLEASE NOTE**: This is a work in progress, and will be updated constantly, if not daily. Any work that is not currently completed will be denoted with a `(TBD)` in the documentation. 

___

<p align="center">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="NextJS"/>
<img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel"/>
<img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white" alt="Socket.io"/>
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS"/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt=""PostgreSQL/>
<img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white" alt="Redis"/>
<img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
</p>

---
## Dependencies

#### _Additional Repositories_
This repository contains the codebase for the Alien Fish front end only, and requires the following applications / repositories in order to run:

* [alienfish-api](https://githib.com/TerryLeeAllenJr/alienfish-api): The Laravel 10 backend API 

* [alienfish-sam](https://githib.com/TerryLeeAllenJr/alienfish-sam): The AWS SAM configuration for setting up the overall infrastructure, and includes configurations for:
  * Various Lambda Microservices (TBD)
  * SQS 
  * SES
  * SNS (TBD)
  * RDS (TBD)
  * Route53 (TBD)
* [alienfish-utilities](https://github.com/TerryLeeAllenJr/alienfish-utilities)(optional): Various bash scripts and utilities helpful in initial development setup, stack deployment, deployment, and maintenance throughout application the stack. (TBD)   

#### _Local Development_

In order to develop locally, you will need the following:

* NodeJS v20: (I prefer [nvm](https://github.com/nvm-sh/nvm)) 
* PHP 8.2 w/ composer
* Docker (required for Local SAM/Lambda development, preferred for Laravel development.)

#### _Deployment Requirements_

Additionally, this application stack currently requires [AWS](https://console.aws.com) to fully function outside of local development. 

**_I can not be held responsible for any charges you may incur by deploying this application._**

---

## Local Development 

**_Please Note:_** These instructions will be constantly updated to reflect the _current_ state of the application stack, and do not represent the final form of the intended CI/CD stack.

1. Pull the [alienfish-api](https://github.com/TerryLeeAllenJr/alienfish-api) repository into it's own directory, and follow the instructions in that repositories README.md to install and setup the Laravel 10 backend using Laravel Sail. It's absolutley possible to set up the backend using whatever local method you prefer for Laravel development, but is not supported in the Alien Fish documentation. There will eventually be custom server configurations required within a dedicated container in order to work within AWS ECR. 
2. Run the development server: 
```bash
   npm run dev
# or
yarn dev
# or
pnpm dev
```
3. Open [http://localhost:3000](http://localhost:3000)

---

## Testing

#### End to End Testing
This application leverages [Cypress](https://docs.cypress.io/guides/overview/why-cypress) to provide full end to end (E2E) testing capabilities. 


#### Unit Testing
This application leverages [Jest](https://jestjs.io/docs/getting-started) for unit testing.  

