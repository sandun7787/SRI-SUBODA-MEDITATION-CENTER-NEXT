import Navbar from "@/components/Nav/Navbar";
import React from "react";

const foodData = [
  {
    id: 1,
    name: "Vegetarian Rice Bowl",
    description: "A hearty bowl of rice with mixed vegetables, tofu, and a savory sauce.",
    price: "$10",
    image: "/assets/food/vegetarian-rice-bowl.jpg",
  },
  {
    id: 2,
    name: "Grilled Chicken Salad",
    description: "Fresh greens topped with grilled chicken, avocado, and a tangy vinaigrette.",
    price: "$12",
    image: "/assets/food/grilled-chicken-salad.jpg",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    description: "Creamy Alfredo pasta topped with parmesan and fresh herbs.",
    price: "$14",
    image: "/assets/food/pasta-alfredo.jpg",
  },
  {
    id: 4,
    name: "Fruit Smoothie Bowl",
    description: "A refreshing smoothie bowl with fresh fruits, granola, and honey.",
    price: "$8",
    image: "/assets/food/fruit-smoothie-bowl.jpg",
  },
];

const FoodPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Our Food Menu</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodData.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{food.name}</h2>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <p className="text-pink-500 font-bold">{food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodPage;
