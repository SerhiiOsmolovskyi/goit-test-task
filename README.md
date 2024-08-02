# Camper Rental Application

This project is a web application designed for a company providing camper rental services in Ukraine. The application consists of three main pages:

1. **Home Page**: Provides a general overview of the services offered by the company.
2. **Catalog Page**: Displays a catalog of campers of different configurations, which users can filter by location, equipment, and type.
3. **Favorites Page**: Shows advertisements added by the user to their favorites list.

## Technical Specifications

### Frontend

The frontend of the application is built using React.js and styled according to the provided mockup. React Router is used for routing between different pages.

### Backend

For managing advertisements, a custom backend is implemented using the UI service [MockAPI.io](https://mockapi.io/). The Advert resource is created with the following fields:

- `_id`: Unique identifier for each advertisement.
- `name`: Name of the camper.
- `price`: Rental price of the camper.
- `rating`: Rating of the camper.
- `location`: Location of the camper.
- `adults`: Capacity for adults.
- `children`: Capacity for children.
- `engine`: Engine details.
- `transmission`: Transmission type.
- `form`: Form factor.
- `length`: Length of the camper.
- `width`: Width of the camper.
- `height`: Height of the camper.
- `tank`: Tank capacity.
- `consumption`: Fuel consumption.
- `description`: Description of the camper.
- `details`: Additional details.
- `gallery`: Images of the camper.
- `reviews`: Reviews of the camper.

### Features

- Displaying 4 advertisements on the catalog page initially, with the ability to load more.
- Adding advertisements to favorites list with a heart-shaped button, which changes color upon selection.
- Persisting user actions (e.g., adding to favorites) even after page refresh.
- Modal window for detailed information about a camper, including its features and reviews.
- Form within the modal window for booking the camper, with validation for mandatory fields.
- Pagination for the advertisements, displaying 4 ads per page.

## Routes

- `/`: Home page with general information about the company's services.
- `/catalog`: Catalog page displaying campers of different configurations.
- `/favorites`: Favorites page showing advertisements added by the user.

If a user navigates to a non-existent route, they will be redirected to the home page.

## How to Run

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application in your browser at `http://localhost:3000`.

## Credits

This project is created by Serhii Osmolovskyi.
