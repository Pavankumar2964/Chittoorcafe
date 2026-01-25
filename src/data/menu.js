const menu = [
    {
        category: "Breakfast",
        items: [
            { name: "Idli", price: 40, veg: true, image: "/images/menu/idli.png" },
            { name: "Dosa", price: 50, veg: true, image: "/images/menu/dosa.png" },
            { name: "Vada", price: 30, veg: true, image: "/images/menu/vada.png" },
            { name: "Pongal", price: 45, veg: true, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop" },
            { name: "Puri", price: 50, veg: true, image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?q=80&w=2070&auto=format&fit=crop" }
        ]
    },
    {
        category: "Meals",
        items: [
            { name: "Andhra Veg Meals", price: 120, veg: true, image: "/images/menu/meals.png" },
            { name: "Andhra Non-Veg Meals", price: 180, veg: false, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop" },
            { name: "Ragi Sangati + Natu Kodi Pulusu", price: 220, veg: false, image: "https://images.unsplash.com/photo-1546833998-877b37c22521?q=80&w=2070&auto=format&fit=crop" },
            { name: "Chicken Biryani", price: 200, veg: false, image: "/images/menu/biryani.png" }
        ]
    },
    {
        category: "Beverages",
        items: [
            { name: "Filter Coffee", price: 25, veg: true, image: "/images/menu/coffee.png" },
            { name: "Tea", price: 15, veg: true, image: "https://images.unsplash.com/photo-1594631252845-29fc45862cc6?q=80&w=2070&auto=format&fit=crop" },
            { name: "Badam Milk", price: 30, veg: true, image: "https://images.unsplash.com/photo-1550583724-b26cc28df5d1?q=80&w=2070&auto=format&fit=crop" }
        ]
    }
];

export default menu;
