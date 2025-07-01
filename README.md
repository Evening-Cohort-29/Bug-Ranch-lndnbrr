# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > The `drovers` variable is one that calls the function to select specific drovers(aka herders) from database.js under the drovers object. The number of drovers is based on the number of cattle that are REQUIRED to be drove. This will return an array of objects which will be used in the console.log() messages near the bottom of the main.js file
2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > At the bottom of the main module where we see `for (const drover of drovers)`, drover is the current object being identified inside of the drovers array, meanwhile drovers is the array being iterated over. This syntax is unique to the for...of loop as it seeks to make all iterated items in an array of objects accessible in a duplicated fasion.
3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.
   > [Question #3 Loom](https://www.loom.com/share/d63bef8b1ce249fa9aca4b85f0533fb3?sid=366a003a-7f68-454a-a29c-ae1faabea119)
4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > This is a standard for loop. The first portion of the statement is the intialization, where the value of the variable is started at(let forestNumber = 0). The second portion of the statement is the condition, where everytime the loop is triggered it will determine if the condition is true or false. The condition at hand is determining whether or not the current value of forestNumber is still less than the generated number of forests(areas.forests). When forestNumber is no longer less than areas.forests, the condition is false and thus the for loop is complete. The last portion of the statement is the incrementation, where we decide whether the forestNumber value is increasing or decreasing. The use of the double + is increasing the value by one, but it can also be -- for decreasing a value by one or +=3/-=3 to increase/decrease a value by 3 for example. Lastly we enter the for loop, where we see an array method. This method says that for everytime the loop is executed the string labeled "forest" will be added to the journey array.

5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   > The database variable in the **database** module is an object that two significant key:value pairs inside of it. The first key:value pair is dataset for cattle types and the second key:value pair is dataset for drovers. Both key:value pairs share a similar format, in that both have a proper name to represent the key and contents in the value, and both have an array that hold objects defining their contents as the value. Having the properties of an array allow for object searching through array index methods, and the objects inside of these arrays hold defining information that can be utilized in other files.
6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   > Due to confusing naming convention, I changed the name from `(herdSize)` to `(cattleHerdSize)`. cattleHerdSize is defining the number of cattle that are going to be drove during the journey, which will impact the number of drovers that are needed for hire. By default it is 50 cattle, so there needs to be 5 drovers, but if there were 100 cattle then there would need be 10 drovers. As to where `(cattleHerdSize)` receives it's value, it comes from the main.js file where the application is centralized, and where hireDrovers() is being called.

## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
