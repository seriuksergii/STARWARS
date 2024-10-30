# Check out the live demo

# [Demo](https://starwars-one-mu.vercel.app)

## Installation

## To run this project locally:

1.	Clone the Repository:

        https://github.com/seriuksergii/STARWARS.git

2.	Install dependencies:

          npm install

3.      Start check tests

          npm test

5.	Start the application:
 
          npm run dev

 ## TASK CONDITION
 
Main Requirements:

List of Heroes: Using the API sw-api.starnavi.io, display a list of all Star Wars heroes.  The list should be paginated or have infinite scroll, based on your choice.  
Detailed Information about a Hero: When clicking on a specific hero, display detailed information in the form of a graph, where:
The main node is the selected hero.
There are connections from the hero to the movies in which they appeared.  
From each movie, there are connections to the starships that the hero traveled on.  
Technologies:

React.js
1. Graph Visualization: React Flow
2. Testing: Jest or Vitest
3. TypeScript is recommended.

## Technologies Used:

1. React.js:
For building the user interface and creating components.

2. SCSS:
For styling components (e.g., index.scss, App.scss, HeroGraph.scss, FilmNode.scss).

3. React Flow:
For visualizing graphs and managing nodes and edges.

4. TypeScript:
For adding type safety to the code and defining component props (e.g., HeroGraphProps, FilmNodeProps).

5. Vitest:
For testing components, including assertions (e.g., @testing-library/react, @testing-library/jest-dom).

6. Fetch API:
For making asynchronous requests to the Star Wars API to retrieve hero and film data.

Functions and Features  
Hero Details and Graph Visualization:  
Fetches and displays details of a selected hero using a visual graph with nodes for films and starships.  
Pagination or Infinite Scroll:  
The design suggests implementing pagination for the hero list.  
Modal Component:  
Utilizes a modal (HeroModal) to display additional information about the hero.
