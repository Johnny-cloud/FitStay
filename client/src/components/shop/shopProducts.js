
const shopProducts = [
    {
        name: "Dumbel",
        price: 18,
        category: "dumbell",
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Nike Sneakers",
        price: 50,
        category: "shoes",
        image: "https://images.unsplash.com/photo-1533680937690-d59ab2543468?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Face Towel",
        price: 10,
        category: "towel",
        image: "https://images.unsplash.com/photo-1610122748280-d0ae76b10750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Yoga Pants",
        price: 15,
        category: "pants",
        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Yoga Matt",
        price: 20,
        category: "matt",
        image: "https://images.unsplash.com/photo-1637157216470-d92cd2edb2e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Water Bottle",
        price: 5,
        category: "bottle",
        image: "https://images.unsplash.com/photo-1530711654140-23ef9ad45094?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Smart Watch",
        price: 15,
        category: "watch",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Wheel Abs Roller",
        price: 30,
        category: "roller",
        image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Gym Gloves",
        price: 12,
        category: "gloves",
        image: "https://images.unsplash.com/photo-1522956957021-9f2437e01594?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Jump Rope",
        price: 10,
        category: "rope",
        image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Fitness Planner",
        price: 5,
        category: "book",
        image: "https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Headbands",
        price: 5,
        category: "headband",
        image: "https://images.unsplash.com/photo-1655848640348-2ebbc9b19e05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Gym Bag",
        price: 12,
        category: "bag",
        image: "https://images.unsplash.com/photo-1535879335191-618713ec3e3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Back pack",
        price: 11,
        category: "bag",
        image: "https://images.unsplash.com/photo-1514524865930-188150490d83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sleeveless Shirt",
        price: 100,
        category: "shirt",
        image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sweat Towel",
        price: 7,
        category: "towel",
        image: "https://images.unsplash.com/photo-1700004058880-f3d97630c19a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ankle Strap",
        price: 7,
        category: "strap",
        image: "https://plus.unsplash.com/premium_photo-1661698472241-c9106ef65f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Running Shorts",
        price: 5,
        category: "shorts",
        image: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

export default shopProducts