# HeadCount 2.0

In this project, we were given a static data file and asked to dynmically render the data using React. The data files contained education data for the state of Colorado and we had to compare data between different state districts. We imported the data, cleaned the data, and then used React and javascript to implement a card comparison UI as outline in the specification. We made changes to the spec to increase usability and adhere to the 10 essential web application usability guidelines. We also built a comprehensive unit and integration testing suite to test all components in the app. To do this, we used Jest, Enzyme, and the Enzyme adapter. We also built this project using the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate.
  
### Original comp:
![Iteration 2 Comp Screen Shot](http://i.imgur.com/GzhO2EO.png)  

### Our design: 

![image](https://user-images.githubusercontent.com/24358415/35486337-0cf52520-042a-11e8-9bd3-a2975a7840ae.png)


## Our Project Goals

* Separate application logic into small, testable functions.
* Create modular, reusable React components.
* Use propTypes to validate props passed to each component.
* Write meaningful, comprehensive unit and integration tests.
* To adhere and design with the 10 Essential Web Application Usability Guidelines in mind: https://speckyboy.com/10-essential-web-application-usability-guidelines/(https://speckyboy.com/10-essential-web-application-usability-guidelines/)

## Usability changes:

###Added user instructions to guide our user and to make the 'call-to-action' and interactive objects obvious.

![image](https://user-images.githubusercontent.com/24358415/35486455-9006de62-042b-11e8-9528-8020a2d64f71.png)

###Walked the user through the state change (adding a card to be compared) piece by piece so as not to disorient them.

![image](https://user-images.githubusercontent.com/24358415/35486465-bb3ede04-042b-11e8-8b51-1114e57686ff.png)

###Added visual clues (arrows) to orient the user and give feedback about their interaction:

![image](https://user-images.githubusercontent.com/24358415/35486471-d07a0514-042b-11e8-8528-4955a4cceee9.png)

###Added a visual heirarchy, navigation, and default values to guide the user:

![image](https://user-images.githubusercontent.com/24358415/35486539-7a9eea78-042c-11e8-9aa4-49b990d41dee.png)





## Set Up

Fork this project

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

## Testing

Begin running your tests with `npm test`
Initialize the enzyme adapter: [initializing the enzyme adapter](http://airbnb.io/enzyme/docs/installation/react-15.html) 
