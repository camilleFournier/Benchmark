This repository contains the scripts for the benchmarks mobile applications (Android and PWA) developped under my Master Thesis project.

Those apps contains:
  - a home page asking what you want to test
  - a scrolling page displaying all the database inside a scrollable screen
  - a clicking page displaying one item at a time. It can change by clicking on the screen (everywhere but the toolbar).
  
 Both the clicking and the scrolling page can display pictures and text.
 To change the type of content, just press the picture/text icon on the upper right corner.
 
 To start the PWA : 
  - download the folder
  - run npm start inside the foler
 
 To install the PWA and test the offline features it:
  - npm run build
  - npm install serve
  - serve -s build
 
 To start the Android app : 
  - probably just open the project with Android Studio and run it.
