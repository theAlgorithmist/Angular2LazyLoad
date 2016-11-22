# Angular2 Micro-Application With Lazy-Loaded Routes

This is a near production-quality micro-application built with Angular 2.  It is intended to bring together numerous concepts important to production applications in a self-contained demo that is still small enough to be easily deconstructed.  Lazy-loading of routes is very important for a variety of applications, so the primary goal of this micro-app is to illustrate how to lazy-load routes within the Angular 2 _NgModule_ ecosystem.  At the same time, a Flux/Redux style model and architecture are employed in the code.  A key concept of the Redux model is that there is a single (global) source of truth across the entire application.  This observation requires that the model be a Singleton across both eagerly and lazy-loaded routes.  Since Angular 2 dependency injection is heirarchical, a _Model_ listed as a provider in a lazy-loaded route would be injected as a different instance than the Singleton used for all eagerly-loaded routes in the root module.  A solution to application-wide Singletons across all routes (eager or lazy) has been documented in a few places online.  That solution is now fully illustrated in a complete, working, micro-app.

The process of deploying a production application to an actual server is also discussed.

Other features of the application include

  - load data from actual back-end services (although the data is mocked on the back end)
  - disable the main menu while data is loaded
  - enforce one-time load of application data when routes are reloaded
  - maintain compile- and run-time immutability of the global store in line with Redux contract
  - completely reactive
  - components derive from a baseline flux component that handles subscribe/unsubscribe to model updates
  - handle route not found (i.e. 404)
  - pay tribute to The Three Stooges
 

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Angular: 2.1.0

Angular CLI: 1.0 Beta 20-4


## Installation

Installation involves all the usual suspects

  - npm, typings, and Angular CLI (1.0.0-beta.20-4) installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and Running the demo

After installation, _ng-build_ or _ng-build --prod_ will work, but services must be setup in order to use _ng-serve_ to test the application.  PHP services are used to return data for various routes.  These are provided in the _app/php_ folder.  Now, my PHP is very rusty, so try not to laugh too hard :)  These have to be setup somewhere to run in the _services_ folder.

Note that the online version discussed below was created without AOT compilation.  That will be covered in a separate blog post and url so that the two version can be easily compared.

Deployment to a server requires possible adjustment of the base _href_ attribute in the _index.html_ file.  For example, I deployed a production build to www.algorithmist.net/threestooges.  The build command was _ng-build --prod --base-href /threestooges/_  .  The PHP files were transferred to the _/threestooges/services_ folder on my server.  The files in the _dist_ folder were then transferred to _/threestooges_ as shown below.

![Image of File Structure]
(http://algorithmist.net/image/ftp.jpg)

The demo may be run at http://algorithmist.net/threestooges.  


After loading, you should see the following (note the default routing to /script),

![Default application route]
(http://algorithmist.net/image/stooges-main.jpg)

If you look at network traffic in the console, you should see something like main.[hash].bundle.js loaded initially, followed later by [hash].chunk.js when lazily-loaded routes are requested.

A future blog post will compare the JIT- and AOT-compiled versions of this code.  I will also apologize for lack of specs and proper E2E tests, but time is short and I wanted to get this one pushed out in order to get back to other open-source efforts.


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>
