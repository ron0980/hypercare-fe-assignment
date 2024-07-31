# Hypercare Frontend Assignment

## Project Overview
This project is a frontend application developed as part of a coding challenge for Hypercare. The application displays user cards with details fetched from an API. Each user card includes the user's avatar, first name, last name, and a "View More" button. Clicking the "View More" button opens a modal with additional user details such as role, join date, and description.
This project is a frontend application built with React and TypeScript.

## Features

+ User Cards: Display user information on cards.
+ Responsive Design: Ensure the application works well on different screen sizes.
+ Image Handling: User images of various aspect ratios are handled.
+ Modal for Detailed Information: Show more details about a user in a modal when "View More" is clicked.
+ Lazy Loading: Load images lazily to improve performance.
+ Infinite Scrolling: Load more users as you scroll down.
+ Loading States: Show loading indicators while data is being fetched.

## Technologies Used
+ React: Library for building user interfaces.
+ TypeScript: Superset of JavaScript that adds static typing.
+ Redux: State management library.
+ Material-UI: UI component library for React.
+ Axios: Promise-based HTTP client.
+ Jest: Testing framework.
+ React Testing Library: Tools for testing React components.

## Getting Started

### Prerequisites
+ Node.js (version compatible with React 18)
+ npm or yarn

### Installation

    Clone the repository
    cd hypercare-fe-assignment    
    npm install --legacy-peer-deps

### Running the app

    In the project directory, you can run:
    npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### Testing the app

    To run the test suite,
    npm test

### Test Coverage

Tests cover various components and functionalities including:
+ App Component
+ HomePage Component
+ LazyLoadImage Component
+ PageWrapper Component
+ ResultsInfo Component
+ UserCard Component
+ UserModal Component

### Additional Notes
+ Code Readability: Emphasis was placed on code readability and structure.
+ Performance Considerations: Implemented lazy loading for images and optimized infinite scrolling.
+ This project uses ESLint for code linting
+ The application is set up to work with modern browsers and IE11+
+ Custom hooks can be found in the hooks/ directory
+ Redux is used for state management

For more detailed information about the project setup and configuration, please refer to the `package.json` and `tsconfig.json`files.
