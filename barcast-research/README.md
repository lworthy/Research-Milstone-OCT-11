# BarCast Research Milestone

This repository contains my individual research prototype for CSCE 490 Research Milestone. Specifically for my groups BarCast application

## Project Idea

BarCast is a mobile application designed to help users see what bars (in Five Points) are like before they arrive. The full project may eventually include information such as crowd levels, music, cover charges, events, and other nightlife information.

For this research milestone, I created a smaller prototype focused on the crowd levels.

## Technologies Researched

### React Native

I chose React Native because BarCast is intended to be a mobile application. I researched what the best technology for an mobile application would be and this was one I chose. React Native allows developers to create mobile applications using JavaScript and TypeScript while sharing much of the same code between iOS and Android.

Advantages:
- Works on both iOS and Android
- Large developer community
- Works well with TypeScript

Disadvantages:
- Some native features may require extra libraries
- Mobile development can require additional setup compared to a basic web application

### Expo

I used Expo with React Native to create and test the application. Expo made it easy to run the prototype directly on my iPhone using Expo Go. It also provided the development server and tools needed to test changes while developing the app.

### TypeScript

I used TypeScript for the project instead of plain JavaScript. TypeScript allowed me to define types such as the Bar and CrowdLevel types. This can help catch errors while developing and makes the structure of the program easier to understand.

### npm

I used npm as the package manager as it was something I am use to using before in previous classes

## Prototype Features

The BarCast prototype currently allows a user to:

- View Rooftop, Social, and Breakers
- See each bar's crowd level
- See music genre and cover information
- Filter bars by crowd level
- Select a bar
- Choose a new crowd level throw a crowd report


## What I Learned

Through this milestone, I learned how to create a React Native mobile application using Expo and TypeScript. I also learned how Expo can be used to test a mobile application directly on a physical iPhone.