# Pre-work - *Memory Game*

Funky Lights is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Gabriel Bremo

Time spent: 20 hours spent in total

Link to project: https://glitch.com/edit/#!/bristle-bitter-intelligence

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added assets to display the number of mistakes done
- [x] Added funky, very groovy background music
- [x] Unique sound assets for the victory / defeat event.
- [x] Formatted button display to conserve a grid-like presentation.
- [x] Added level tag in order to show the user how much progress they're done.

## Video Walkthrough (GIF)
http://g.recordit.co/tSm03vfJQN.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/js/js_events.asp
https://www.w3schools.com/jsref/jsref_random.asp
https://support.glitch.com/t/images-uploaded-to-asset-file-not-working/18139
https://programminghead.com/how-to-play-audio-in-html-using-javascript/
https://www.w3schools.com/tags/tag_img.asp
https://www.tutorialspoint.com/HTML5-audio-control-stop-button#:~:text=Try%20the%20following%20code%20to%20add%20a%20stop,%28%29%20%7B%20audio.pause%20%28%29%3B%20audio.currentTime%20%3D%200%3B%20%7D%29%3B
https://www.educba.com/javascript-button/
https://www.bing.com/search?q=buttons+appear+vertically+CSS&qs=n&form=QBRE&sp=-1&pq=buttons+appear+vertically+c&sc=6-27&sk=&cvid=58C935A36CDF4E4D82A6815EF1E39B8A
https://www.w3schools.com/Css/css_align.asp
https://www.w3schools.com/jsref/event_onmouseout.asp
https://www.w3schools.com/cssref/pr_background-image.asp
https://www.w3schools.com/js/js_timing.asp
https://www.javatpoint.com/javascript-timer#:~:text=In%20JavaScript%2C%20a%20timer%20is%20created%20to%20execute,we%20can%20delay%20the%20execution%20of%20the%20code.
https://www.educba.com/timer-in-javascript/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Creating a project like this one requires of at least a little bit of knowledge in certain programming languages, such as HTML, or JavaScript, which I did not. For that, Codepath's pre-work page provided more than enough resources in order to become familiar with the basics needed. However, I encountered some challenges while developing one of the required features: the guess function. At first, at took the wrong approach to this problem, and started following the given flow chart from top to bottom, instead of bottom to top. Then, after several time spent in trial and error, I decided to take a peek at Codepath's given solution, which looked almost identical to my version. It worked pretty well, apart from the fact that the function would not reset the progress variable every time the playSequence() function was executed, therefore only accepting the last clue of the pattern as a "correct" guess. Finally, it was quite frustrating and funny to find out that all the problem was the lack of "else" statements in my code.
Similarly, although quite more reasonable, I had a tough time dealing with the two last optional features, sprucing up the buttons and setting up a ticking clock. Although I spent an exaggerated amount of time looking up stock sound effects for the buttons, I ended up finding out they could not be used as a continuous, or spammable node, such as the oscillator; no matter how much I tried to shorten the time duration of the audio clips, they could not be pressed repeatedly without a noticeable sound gap between them. Thus, I decided to stick to the base oscillator node even though it was not really "funky". Finally, the biggest challenge I faced with this project was implementing a timer. I had no prior experience working with the setInterval() or clearInterval() methods, and every outside source I sought for help gave solutions that I found too abstract to be included in this program. Furthermore, once I understood what the .innerHTML() method does, I figured that I only needed to create a function to reduce the time left and update it every time by using the setInterval() method.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Before working on this project, I did not know about the implementation of CSS, JavaScript and HTML for web development. I thought the whole styling and scripting process was also written inside the HTML file. Now that I am aware of the collaborating property of web development, I am curious whether other programming languages are broadly used in this manner as well, or if it is mainly only these three. Furthermore, I wonder how flash games websites work now, do they copy and paste every source code into their own page, meaning they work pretty much as interactive folders? Finally, I would like to know how pages that deal with the transfer and store of information work, do they have an additional file that stores such external information and references it whenever prompted? Web development is way more interesting and fascinating that I found it to be before Codepath introduced me to it; I do not think I will see websites as I used to after experiencing this.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had found about this opportunity with a lot more of anticipation, I would have added several optional features to my project. Firstly, I would have styled it more appropriately so the title of the program would give a more accurate presentation of the game itself; less generic fonts, custom button sounds, and 60s themed images. Additionally, I would've loved to implement a "how to play" button that would display a little description of the game mechanics plus a centered gif for an example. Even though I am glad and proud of what I developed in a short time frame and with not prior experience, I cannot see my program without thinking of the big room for improvement it has, which makes me look forward to what I work in next. If this program was good, next one will be even better!

## Interview Recording URL Link

[My 5-minute Interview Recording]
(https://www.loom.com/share/7b25b7b8a2cf4296b771c34d0c9bfcc4)


## License

    Copyright Gabriel Bremo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.