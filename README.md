# Car Dealer Application

## Overview

The Car Dealer Application is a Next.js-based web application that allows users to filter vehicles by type and model year. It features a home page with filter options and a result page displaying vehicle models based on the selected criteria.

### Key Features

- Filter vehicles by type and model year
- Dynamic result page for displaying vehicle models
- Responsive design using Tailwind CSS
- Server-side rendering and static site generation capabilities

## Architecture

The application is built using the following technologies and patterns:

- **Next.js**: For server-side rendering and routing
- **React**: For building user interface components
- **Tailwind CSS**: For styling and responsive design
- **API Integration**: Fetching data from the NHTSA API

## Views

### Home View

![Home View](https://github.com/francopolesel/car-dealer-app/blob/master/images/home.png?raw=true)

### Results View

![Results View](https://github.com/francopolesel/car-dealer-app/blob/master/images/results.png?raw=true)


## Installation

1. Clone the repository: git clone [https://github.com/francopolesel/car-dealer-app.git](https://github.com/francopolesel/car-dealer-app.git)
   cd car-dealer-app

2. Install dependencies: npm install

3. Create a `.env.local` file in the root directory and add NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api

## Running the Application

To run the application in development mode: npm run dev

The application will be available at `http://localhost:3000`.

## Project Structure

- `page.js/`: Home page with filter options
  - `result/[makeId]/[year].js`: Result page for displaying vehicle models
- `components/`: Reusable React components
- `services/`: API calls
- `public/`: Static assets

## Development

- ESLint and Prettier are configured for code quality and consistency.
- Run `npm run lint` to check for linting issues.
- Run `npm run format` to automatically format code using Prettier.
