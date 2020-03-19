## App Top Level Structure
> Use short lowercase names at least for the top-level files and folders except

We would now set up our directories like this:

```
.
├── app.ts
├── assets
│   ├── components
│   └── langs
├── bin
│   └── www
├── components
│   ├── dashboard
│   └── database
├── config
│   ├── envrionments
│   ├── index.ts
│   └── interface
├── global
│   ├── error
│   ├── exception
│   ├── interface
│   ├── middleware
│   ├── modules
│   ├── route
│   ├── service
│   └── util
├── types
└── views
    └── modules
```

### Configuration Files

Configuration files require it's interface to reflect and maintain standard between various configuration environments. You can add
new configuration file which interface exits on interface directory. If you are not able to find configuration interface you can create one and 
start working.

```
.
├── envrionments
│   ├── development
│   │   ├── app.ts
│   │   ├── database.ts
│   │   ├── i18n.ts
│   │   ├── index.ts
│   │   ├── mail.ts
│   │   └── storage.ts
│   ├── production
│   │   ├── app.ts
│   │   ├── database.ts
│   │   ├── i18n.ts
│   │   ├── index.ts
│   │   ├── mail.ts
│   │   └── storage.ts
│   ├── qa
│   │   ├── app.ts
│   │   ├── database.ts
│   │   ├── i18n.ts
│   │   ├── index.ts
│   │   ├── mail.ts
│   │   └── storage.ts
│   └── staging
│       ├── app.ts
│       ├── database.ts
│       ├── i18n.ts
│       ├── index.ts
│       ├── mail.ts
│       └── storage.ts
├── index.ts
└── interface
    ├── app.ts
    ├── cookie.ts
    ├── cors.ts
    ├── database.ts
    ├── datatime.ts
    ├── health.ts
    ├── i18n.ts
    ├── index.ts
    ├── logging.ts
    ├── mail.ts
    ├── monitor.ts
    ├── profiler.ts
    ├── security.ts
    └── storage.ts

```

### Component Files
With this structure, each `components` has its own directory to hold its
modules. In other words, we've introduced "scope" into our application
file structure.

```
.
├── user
│   ├── controller      // include require controller files
│   ├── dashboard.ts    // for future purpose
│   ├── dto             // Data Transfer object files
│   ├── expection       // component level exception file
│   ├── interface       // component level interface file
│   ├── middleware      // component level middleware file
│   ├── model           // component level model or entity file
│   ├── route           // component level route file
│   └── util            // component level util file

```

## Global Files

If component require any `global or shared` setup codes, we 
put the shared code in "global". Here is our growing app with some new global,
and not global modules.

```
.
├── error
│   └── error-handler.ts
├── exception
│   ├── AuthenticationTokenMissingException.ts
│   ├── FileNotFoundException.ts
│   ├── HttpException.ts
│   ├── NotAuthenticatedException.ts
│   └── NotAuthorizedException.ts
├── interface
│   ├── ExceptionParserInterface.ts
│   └── HttpException.interface.ts
├── middleware
│   ├── error.middleware.ts
│   ├── maintenance.middleware.ts
│   ├── passportAuthentication.ts
│   └── role.middleware.ts
├── modules
├── route
│   ├── health.ts
│   └── v1.ts
├── service
│   ├── database
│   ├── dot
│   ├── parser
│   └── route
└── util
```

### Tests

Tests reside on top level

```
├── test
|
|── Some component
│   ├── create.spec.ts
│   ├── updated.spec.ts
|
├── config.test.ts
├── exceptionParser.test.ts
├── exception.test.ts
├── lang.test.ts
└── sample.test.ts

```
