# Blackbeard's Revenge
A battleship's game made in JavaScript, not fully functional. but I have the goal to complete it and add features as I get better at coding. Adding a scan function for example, making the playboard not bug out when playing and alot more. 

![Responsice Mockup](https://github.com/JohanABlomqvist/johan-dev-cv/blob/178767a103fb3b2f6aaebfc975b307c8f80c707e/assets/images/amiresp.PNG)

[View Johan's Dev Journey on Github pages](https://johanablomqvist.github.io/johan-dev-cv/index.html)

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

Johan's Dev Journey is a website that will build over time, and get expanded upon as Johan gathers knowledge in coding, the goals are simple, make is easy to access and a clear goal for the user has to be set.

I want for user experience is that they a calm as they enter the website, nothing out of the ordinary that makes you wonder how to find anything, it should be really easy to see what you can click and use as you come in for the first time. 
## User Stories

### First time visitor goals
- Know more about me as a developer.
- Seeing what I am capable of. 

### Returning visitor goals
- Them looking up on my new projects.
- Clients or employers getting contact.

# Existing Features 

- __Header of the page__

  - Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, Portfolio and Contact Me page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

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

  - Made to be easy on the eye's and give off a soothing comforting feel.

![Coloring](https://github.com/JohanABlomqvist/johan-dev-cv/blob/6fae0e57436933ffb205419feccc2f1458a46c38/assets/images/coloringwebsite.PNG)

# Features Left to Implement

- Fully functional board 
- A scan function every 3 rounds on 2x2 on the board
- Framing in the gameboard properly

# Testing and Bugs
- Fixed a bug where I forgot to properly link my css style sheet to all my webpages.
- Fixed typo in linking HTML page
- CSS had alot of issues making the ripple effect for the boats, ended up realizing I missed the classList.add for the things 
I wanted to make the ripples with in the Javascript. About 6 hours of intense staring at the screen wondering what was going on right there.
- Spent countless hours on typos and aligning rows the wrong way in JavaScript
- Using arrays and if else functions took me alot of trial and error, probably deleted the project 6 times before my braind wrapped around the basic concepts of it.
- Had problem with function not working the way I intended, fixed by doing a if else statement, can be seen in the changelogs.
- Had issue with event click on board, added a pointer-events: none; to the problem area, now you can shoot on the board like usual again.

## Unfixed bugs
- Ships can be placed ontop of eachother
- 

# Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/)
  
  ![HTML Check](https://github.com/JohanABlomqvist/johan-dev-cv/blob/240e631298527273e0ab07ee05196ee97743086b/assets/images/htmlcheck.PNG)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  
  ![CSS Check](https://github.com/JohanABlomqvist/johan-dev-cv/blob/240e631298527273e0ab07ee05196ee97743086b/assets/images/csspass.PNG)

- Lighthouse
  - High percentages when running lighthouse, so I'm really happy about that.

  ![Lighthouse check](https://github.com/JohanABlomqvist/johan-dev-cv/blob/712d3f4aeb3cab8c6aeab4fab5088efd05d219dc/assets/images/Validator_test.PNG)

- JavaScript
  - 

## Full testing
To fully test my website I did the following tests using different browsers (google chrome, mozilla firefox) and devices (Samsung s21pro).

I went through each page using google chrome developer tools to ensure that they responsive on all different screen sizes.

Links
1. Tested my social links on index.html, clicking popped out a new tab with the requested site as expected , both on mobile, mozilla, firefox, chrome and opera.


I did the same type of testing on my navigation links.


# Technologies Used
## Languages Used
- HTML, CSS and JavaScript were used to create this website


## Frameworks, Media, Libraries & Programs Used

- Balsamiq - Used to create wireframes.  
  - Used this to draw up a basic concept before I got to work on the design, I think the original sketch didnt deviate alot from the final product!  
  ![Balsamiq](https://github.com/JohanABlomqvist/johan-dev-cv/blob/ef60a3f80162da6f6854bb0ec3b8a2ff1924229c/assets/images/balsamic.PNG)
- Git - For version control.
- Github - To save and store the files for the website.
- Google Fonts - To import the fonts used on the website. Roboto (300) and Dancing Script (300) Alltho I mainly used Roboto for the whole page.
- Font Awesome - For the iconography on the website. (Header navigation links and Footer icons)
- [Am I Responsive?](https://ui.dev/amiresponsive) - Used to make the mockup picture for the Readme.

# Deployment
Github Pages was used to deploy the live website. The instructions to achieve this are below:

- Log in (or sign up) to Github.
- Find the repository for this project, johan-dev-cv.
- Click on the Settings link.
- Click on the Pages link in the left hand side navigation bar.
- In the Source section, choose main from the drop down select branch menu. Select Root - From the drop down select folder menu.
- Click Save. Your live Github Pages site is now deployed at the URL shown.

## Local Development
### How to Fork
To fork the  design repository:

- Log in (or sign up) to Github.
- Go to the repository for this project, JohanABlomqvist/johan-dev-cv.
- Click the Fork button in the top right corner..

### How to Clone
To clone the  design repository:

- Log in (or sign up) to GitHub.
- Go to the repository for this project, JohanABlomqvist/johan-dev-cv.
- Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
- Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
- Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.


# Credits

## Code Used
- Readme help from [Kera Cudmore](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md).
- [Dev-Bowers](https://dev-bowers.com) for serving as an inspiration for the layout of my site.
- [Web Dev Simplified](https://www.youtube.com/watch?v=G6JTM-zt-dQ) helping me with the css for the game.
- [Code with Ania Kubów](https://youtu.be/Ubh_k18sX4E) Help with the code for the game.
## Content
All the written content is done by Johan Blomqvist.
## Media
- Midway AI for making the background picture.
- Font Awesome for the nav icons and social icons.
## Acknowledgments
- Chatgpt for being a good learningtool, asking it the right questions can give you alot of clarity on code and how to build it.
- One of my friend's named Thomas Kjos that works in game development, alot of help and talk's with him over the last week.
- Lauren-Nicole, my mentor
- Kera Cudmore, for all the information about the Readme-file.
- Stack Overflow for having great examples of JS