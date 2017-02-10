# brunch-with-vuety
An opinionated Brunch skeleton for using Vue2, Vuex and VueRouter. Comes packed with axios and Store

## Instructions

Simply download this skeleton using brunch by opening a terminal and executing:

`brunch new --skeleton srodriki/brunch-with-vuety`

## Building

As with any brunch project, you can use the `brunch b` command to generate a build. 

## Running locally

Again, as with any brunch project, you may use `brunch w --server` to run this project locally. 

## Features

### Project structure

All the source files should live inside the **app** folder, and this includes styles and static assets. The **index.js** file is the main entry point for our application and that's where all the Vue app is setup, including routes, route-hooks and the store. 
The rest of the folders are pretty much obvious but it's good to mention them:

* **api** -> A boilerplate api connection structure thinking about a REST server (specifically a FeathersJS server). 
* **assets** -> All static assets that should simply be copied to the deploy folder instead of compiled by brunch. Only file included there by default is the index.html file. 
* **components** -> Contains all visual components defined in your Vue application, either pages or reusable bits. There are 2 components included in this bundle: A generic error.vue page and a simple hello.vue page, copied from Vue-Cli's default.
* **config** -> Configuration stuff, like the routes setup, server address and axios configuration. Take a closer look and bear in mind a lot of things can be improved here. 
* **store** -> This module contains all files needed for you to use a Vuex Store in your application. Includes a very simple auth store that lets you handle user's session globablly in your application.
* **App.vue** -> Main component, simply defines a router-view tag to handle your different routes.
* **index.js** -> Entry point for your application. make sure you read it carefully.

### The Vuex Store

It's recommended that you read [Vuex's Docs](https://vuex.vuejs.org) before making changes and/or using the store, as it requires a bit of knowledge on when to call what, how to use the mutations, etc. However, the boilerplate should give you a good and extensible organization for your future needs. 

### The Config Folder

I still think it might be weird to find the main routes definition here, but I haven't found a better place to centralize all that information. That being said, it's good if you define sub-routes files containing partial routes for your modules, so that the config/routes package just includes them and does not grow exponentially with each new module/component.

### Defining new components

I know I gave you a plain "components" folder, but that does not mean you should keep it plain. Try to organize your components around the features or "modules" they implement, creating sub-folders as needed. It's not a good idea for a big application to have all components under the same root folder and without any imperative structure. 

## Ideas and suggestions

This is a fairly simple project that should help you organize your code, at least a little bit. You may always have a different point of view than mine around a project's structure and any suggestions are always welcomed (either by a suggestion via issue or pull-request). 
