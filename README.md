# TestSiteAv
This is e2e test application which tests some functional of site av.by.
You can see in the file "test-cases" what exactly is being tested.
This application is written using webstrom ide, protractor and jasmin frameworks.

Protractor: See the Protractor Website for most documentation.  http://www.protractortest.org/#/
Protractor is an end-to-end test framework for Angular and AngularJS applications.
Protractor is a Node.js program built on top of WebDriverJS.
Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Jasmine:  http://jasmine.github.io 
Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. 
Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.

List of required software
You need install:
1.Java SE Development Kit 8
2.NodeJs 6 
3.node modules
4.IDE WebStorm 2017.1.4 
5.Protractor framework
6.Jasmine framework

Instalation:
1.http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html download and install JDK 8
2.Download and install NodeJs https://nodejs.org/en/
3.In command line you need write:
npm install  (it install node modules)
4.Download and install Webstorm ide https://www.jetbrains.com/webstorm/    (You will need to activate it.)
5.Read http://www.protractortest.org/#/
6.Read https://github.com/jasmine/jasmine-npm


To run application:
download project zip file from github.
Unzip file.
Run webstorm ide.
Open project in webstrom file->open->you directory where you unzip project
Choose Terminal Comand line in ide.
You need to run webdriver
Write in command line :

1.  npm update

2.  webdriver-manager update

3.  webdriver-manager start

Create new command line in ide and write:

protractor conf.js --suite startAll

And watch how it works.



