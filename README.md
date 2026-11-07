# L2boats

## Description
This is a simple boat listing app developed using React Native for C346 Mobile App Development Week 02 Exercise 7.

The app displays six powerboats for sale. Each listing shows the boat’s name, description, picture, and a boat icon.

## Features
- Displays six powerboat listings.
- Each boat listing includes its name, description, and picture.
- A boat icon is shown beside each boat name.
- Users can scroll through the boat listings.
- A reusable `Boat` component is used to display each boat.

## Technologies Used
- React Native
- JavaScript
- Expo
- Expo Vector Icons (`@expo/vector-icons`)

## Installation

1. Clone or download the project.
2. Open the project folder in your IDE.
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npx expo start
   ```

## How to Use
1. Launch the application.
2. View the boat names, descriptions, and pictures.
3. Scroll down to view the other boats.

## Project Structure

```text
L2boats/
├── App.js
├── components/
│   └── Boat.js
├── img/
│   ├── bayliner.jpg
│   ├── fairline.jpg
│   ├── flipper.jpg
│   ├── four_winns.jpg
│   ├── princess.jpg
│   └── sea_ray.jpg
├── index.js
├── package.json
└── README.md
```

## Learning Outcomes
Through this exercise, I learnt how to:
- Display local images in a React Native app.
- Display vector icons using Expo Vector Icons.
- Use `ScrollView` to make a page scrollable.
- Create and import a reusable component from a separate file.
- Pass information to a component using props.

## Module Information
**Module:** C346 Mobile App Development  
**Exercise:** Week 02 – Exercise 7  
**Framework:** React Native
