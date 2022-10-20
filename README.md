
# The README Generator


## The ninth challenge in the UT-Austin Full Stack Development Bootcamp - Create a Weather Dashboard


___


This project was assigned for the ninth project in the UT-Austin Full Stack Development Bootcamp and as one of our first introductions to Node.js. It's meant to test our understanding of some of the basic concepts we'll be using, such as modularity, and also familiarize use with using resources like npm.

Because this isn't a deployed app, there's not a link to a live site showing it's functionality. Instead you can watch a short video here that shows how it works at its most basic.

[Video of the README generator](https://drive.google.com/file/d/1OYFn2Mu4TonzJ0CZnazrBwzHqcFi_4kA/view)


___



## How to use

From the parent folder of the index.js file. Call on index.js and the function will run. Using the `prompt()` method from the inquirer package, several questions will be sent to the command line. These questions are meant to fill in the essential elements of a high-quality README file.

When asked about licenses to use, you'll use the arrow keys to choose which license or 'None.' If you choose 'None,' then text will fill the license section stating that there is no license associated with the project.

Once you answer the last question, the prompts stop and a new README file will be created in the parent folder you're working in. *Be careful:* If there is already a README file in that location, this new file will overwrite all the information in it. So make sure you're folder doesn't have an important file in it.

___


## Changes Made and Lessons Learned

- I learned a lot about the joys of modularity by using the utility script generateMarkdown.js as well as requiring the 'fs' and 'inquirer' modules directly from npm. 

- The simplicity of string literals became very apparent as I was planning this out as I quickly realized how much easier it would be to use those in this use case. At this point I tend to use string literals at every opportunity.

 - I did make a change to one aspect of the criteria for the project. The directions said that if no license was chosen to return blanks. I personally don't like the idea of having an empty section on my README. Because of that I made the decision to add text to the license section saying the project wasn't licensed instead of leaving it blank. While I realize that's not the most accurate description of the situation, it was a simple solution. With some code adjustments I could easily add some conditional statements to completely leave out the license section as well as the link from the Table of Contents. That may be something for continued future development.


___



## Possible Future Changes

- Create more accurate conditions for licenses
- Add more license options.



___



## Credits
Thanks to Leah, Ian, Diem, Negin, and all the other students who keep teaching and talking us through all the twists and turns of coding.
___



## License

MIT License

Copyright (c) 2022 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.