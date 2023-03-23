# Blackbeard's Revenge
A battleship's game made in JavaScript, not fully functional. but I have the goal to complete it and add features as I get better at coding. Adding a scan function for example.

![Responsice Mockup](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/37cb3fc805c1fcb71cda76fc837e757ba4d0bf3b/assets/images/responsive.PNG)

[View Blackbeard's Revenge on live website](https://johanablomqvist.github.io/Blackbeard-s-Revenge-PP2/)
[View Blackbeard's Revenge on Github pages](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2)
# CONTENTS
* [User Experience](#user-experience-ux)
  * [User stories](#user-stories)
* [Existing Features](#existing-features)
* [Features Left to Implement](#features-left-to-implement)
* [Testing and Bugs](#testing-and-bugs)
* [Validator Testing](#validator-testing)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Credits](#credits)

# User Experience (UX)

- Blackbeard's Revenge is the first project Johan has made in JavaScript, made an easy website to access and focused alot on the CSS to make ripples in
the water when a boat is place for example, also animations when you shoot on the board. 

## User Stories

### First time visitor goals
- Hopefully they see a fun game that they want to play again.
- Clean website without clutter

### Returning visitor goals
- People coming back to play the game as I make improvements.
- Them looking up on my new projects.
- Clients or employers getting in contact.

# Existing Features 

- __Header__

![Header of the page](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/d822e8b2d47dacdf278c6456b83c034cf0585967/assets/images/header.PNG)

- __Game page__
 
  - The home page includes a picture and information about me and my journey towards being a Fullstack Developer.
   - The aim is to be engaging and give them a good sense of what I want to accomplish, both now and in the future.

![Home Page](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/d822e8b2d47dacdf278c6456b83c034cf0585967/assets/images/game-board.PNG)


- __The Footer__ 

  - The footer section includes links to the relevant social media sites. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media
  - Made the footer stay at the end of the page without forcing it to be stuck to the end of the page, think it fits in better that way.

![Footer](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/d822e8b2d47dacdf278c6456b83c034cf0585967/assets/images/footer.PNG)

- __Coloring__

  - Made to fit the pirate overall feel of the website.

![Coloring](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/97c1b61db23e47033d8caf303eda1af547d5dca1/assets/images/colors-used.PNG)

# Features Left to Implement

- A scan function every 3 rounds that scans 2x2 on the board
- Framing in the gameboard properly
- Fixing ship placing overlap.

# Testing and Bugs
- Fixed a bug where I forgot to properly link my css style sheet to all my webpage.
- Fixed typo in linking HTML page
- CSS had alot of issues making the ripple effect for the boats, ended up realizing I missed the classList.add for the things 
I wanted to make the ripples with in the Javascript. About 6 hours of intense staring at the screen wondering what was going on right there.
- Spent countless hours on typos and aligning rows the wrong way in JavaScript
- Using arrays and if else functions took me alot of trial and error, probably deleted the project 6 times before my braind wrapped around the basic concepts of it.
- Had problem with function not working the way I intended, fixed by doing a if else statement, can be seen in the changelogs.
- Had issue with event click on board, added a pointer-events: none; to the problem area, now you can shoot on the board like usual again.

## Unfixed bugs
- Ships can be placed ontop of eachother
- mobile drag not fixed.

# Validator Testing 

- HTML
  - Warns about empty heading that serves as a placer for text later. [W3C validator](https://validator.w3.org/nu/)
  
  ![HTML Check](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/8f41643792f00319bf99d732ad125e0a5a08e4ba/assets/images/html-check.PNG)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  
  ![CSS Check](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/b0e27ed40184b01c625b23d9b40b33fdadbd1b2f/assets/images/CSScheck.PNG)

- Lighthouse
  - High percentages when running lighthouse, so I'm really happy about that.

  ![Lighthouse check](https://github.com/JohanABlomqvist/Blackbeard-s-Revenge-PP2/blob/60c052f5fa71f77c161cbf419c0ab3928516a322/assets/images/Lighthouse.PNG)

- JavaScript
  - 

## Full testing
To fully test my website I did the following tests using different browsers (google chrome, mozilla firefox) and devices (Samsung s21pro).
I went through each page using google chrome developer tools to ensure that they responsive on all different screen sizes.

Links
- Tested my social links on index.html, clicking popped out a new tab with the requested site as expected , both on mobile, mozilla, firefox, chrome and opera.
Game
- Ship drag does work for mobile, did not have time to implement mobile viability into the game after squishing out bugs for a minimal working product.


# Technologies Used
## Languages Used
- HTML, CSS and JavaScript were used to create this website


## Frameworks, Media, Libraries & Programs Used

- Git - For version control.
- Github - To save and store the files for the website.
- Google Fonts - To import the fonts used on the website. Roboto (300) and Dancing Script (300) Alltho I mainly used Roboto for the whole page.
- Font Awesome - For the iconography on the website. (Header navigation links and Footer icons)
- [Am I Responsive?](https://ui.dev/amiresponsive) - Used to make the mockup picture for the Readme.

# Deployment
Github Pages was used to deploy the live website. The instructions to achieve this are below:

- Log in (or sign up) to Github.
- Find the repository for this project, Blackbeard-s-Revenge-PP2.
- Click on the Settings link.
- Click on the Pages link in the left hand side navigation bar.
- In the Source section, choose main from the drop down select branch menu. Select Root - From the drop down select folder menu.
- Click Save. Your live Github Pages site is now deployed at the URL shown.

## Local Development
### How to Fork
To fork the  design repository:

- Log in (or sign up) to Github.
- Go to the repository for this project, JohanABlomqvist/Blackbeard-s-Revenge-PP2.
- Click the Fork button in the top right corner..

### How to Clone
To clone the  design repository:

- Log in (or sign up) to GitHub.
- Go to the repository for this project, JohanABlomqvist/Blackbeard-s-Revenge-PP2.
- Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.


# Credits

## Code Used
- Readme help from [Kera Cudmore](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md).
- [Dev-Bowers](https://dev-bowers.com) for serving as an inspiration for the layout of my site.
- [Web Dev Simplified](https://www.youtube.com/watch?v=G6JTM-zt-dQ) helping me with the css for the game.
- [Code with Ania Kubów](https://youtu.be/Ubh_k18sX4E) Helped with the code for the game.
## Content
- All the written content is done by Johan Blomqvist.
## Media
- Midway AI for making the background picture.
- Font Awesome for the nav icons and social icons.
## Acknowledgments
- Chatgpt for being a good learningtool, asking it the right questions can give you alot of clarity on code and how to build it.
- One of my friend's named Thomas Kjos that works in game development, alot of help and talk's with him over the last week.
- Lauren-Nicole, my mentor for all the support.
- Kera Cudmore, for all the information about the Readme-file.
- Stack Overflow for having great examples of JS and CSS working in tandem.