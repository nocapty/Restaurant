import React from "react";

function Menu() {
  const menuItems = [
    {
      name: "Grilled Chicken",
      description: "Served with seasonal veggies.",
      price: "$12.99",
    },
    {
      name: "Pasta Primavera",
      description: "Pasta with fresh vegetables in a creamy sauce.",
      price: "$10.99",
    },
    {
      name: "Cheeseburger",
      description: "A juicy beef patty with cheese and fries.",
      price: "$9.99",
    },
    {
      name: "Margherita Pizza",
      description: "Tomato, mozzarella, and fresh basil.",
      price: "$11.99",
    },
    {
      name: "Caesar Salad",
      description: "Crisp lettuce with Caesar dressing.",
      price: "$7.99",
    },
    {
      name: "Seafood Paella",
      description: "Rice with shrimp, mussels, and clams.",
      price: "$14.99",
    },
    {
      name: "Beef Tacos",
      description: "Three tacos with seasoned beef and toppings.",
      price: "$8.99",
    },
    {
      name: "Eggplant Parmesan",
      description: "Fried eggplant with marinara and cheese.",
      price: "$11.49",
    },
    {
      name: "Steak Frites",
      description: "Grilled steak served with crispy fries.",
      price: "$18.99",
    },
    {
      name: "Chocolate Cake",
      description: "Rich and moist with a chocolate glaze.",
      price: "$5.99",
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
