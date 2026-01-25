const menu = [
    {
        category: "Breakfast",
        items: [
            { name: "Idli", price: 40, veg: true, image: "/images/menu/idli.png" },
            { name: "Dosa", price: 50, veg: true, image: "/images/menu/dosa.png" },
            { name: "Vada", price: 30, veg: true },
            { name: "Pongal", price: 45, veg: true },
            { name: "Puri", price: 50, veg: true }
        ]
    },
    {
        category: "Meals",
        items: [
            { name: "Andhra Veg Meals", price: 120, veg: true, image: "/images/menu/meals.png" },
            { name: "Andhra Non-Veg Meals", price: 180, veg: false },
            { name: "Ragi Sangati + Natu Kodi Pulusu", price: 220, veg: false },
            { name: "Chicken Biryani", price: 200, veg: false, image: "/images/menu/biryani.png" }
        ]
    },
    {
        category: "Beverages",
        items: [
            { name: "Filter Coffee", price: 25, veg: true, image: "/images/menu/coffee.png" },
            { name: "Tea", price: 15, veg: true },
            { name: "Badam Milk", price: 30, veg: true }
        ]
    }
];

export default menu;
