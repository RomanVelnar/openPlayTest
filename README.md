# Open Play Challenge 

## App description

This application is meant for the leisure clubs, it displays the sport/leisure activities and their locations. User can log in and search for activities in their vicinity. 

## Technologies used

For this project I used following technologies:

- ReactJS [React documentation](https://reactjs.org/)
- TailwindCSS [TailwindCSS documentation](https://tailwindcss.com/docs/installation)
- Styled-components [Styled-components documentations](https://styled-components.com/)
- FuseJS [FuseJS documentation](https://fusejs.io/)
- Twin.macro [Twin.macro documentation](https://github.com/ben-rogerson/twin.macro) 
- Jest [Jest documentation](https://jestjs.io/docs/tutorial-react)

Reason for using the technologies is, React for performance, Tailwind with styled-components for the practical use, as the syntax is easy to read and there is no need for separate files where CSS is placed. Furthermore, Tailwind is highly performant CSS library and shortens the CSS syntax and it makes it more readable. Twin.macro combines the two, Tailwind and styled-components, where JSX expressions can be declared at the start of the components and used in component functions. Jest was used for testing purposes.

## App requirements and features
App has two data sets, facilities.json and activities.json as mock API responses, they are connected through the id and facility_id. The first dataset, facilities.json displays the locations, while the activities.json displays the name of the activity, start and end time as well as level and location with the facility location. 

**The app must include following features:**

- Facilities have to be listed ordered alphabetically by name, the facilities must be allowed to be filtered by tag (dynamic dropdown ordered alphabetically) and/or by facility name(fuzzy search)
- Upon selecting the facility, we have to display todays timetable of activities ordered by start time, as well as allowing the activities to be filtered by tag (dynamic dropdown ordered alphabetically) and/or by activity name(fuzzy search)

## Challenges faced and features for the future

### Challenges faced

The main issue that we had was to connect and display the activities after selecting the location. Two approached were proposed, first would be to combine the two datasets, by using the reduce. However, we abandoned this approach due to scalability in a large-scale application. 
The second approach was to introduce the useParams and filter the URL related just to the facilty_id. 

### Features for the future

The app doesn’t have the dynamic dropdown implemented as of now, this could be a feature for the future. As well as, working on the design of the app.

## How to install and run the project

First clone the repo from GitHub
```
git clone https://github.com/RomanVelnar/openPlayTest.git

```

Run the npm install to sync with the npm package versions used in the project

```
npm i 

```

To run the project 

```
npm start

```
![image](https://user-images.githubusercontent.com/56118394/183135702-af1badaf-7353-4828-9e16-9212117adbab.png)
