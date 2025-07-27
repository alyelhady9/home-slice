import photo1 from '../../public/images/menu/1.jpg'
import photo2 from '../../public/images/menu/2.jpg'
import photo3 from '../../public/images/menu/3.jpg'
import photo4 from '../../public/images/menu/4.jpg'
import photo5 from '../../public/images/menu/5.jpg'
import photo6 from '../../public/images/menu/6.jpg'
import photo7 from '../../public/images/menu/7.jpg'
import photo8 from '../../public/images/menu/8.jpg'
import photo9 from '../../public/images/menu/9.jpg'
import photo10 from '../../public/images/menu/10.jpg'
export const menu = [
    {
        id: 1,
        photo: photo1,
        name: "Aglio e olio",
        description: "Tomato sauce, Garlic, Olive oil",
        price: 20,
    },
    {
        id: 2,
        photo: photo2,
        name: "Margherita",
        description: "Tomato sauce, Mozzarella, Olive oil, Basil leaves",
        price: 25
    },
    {
        id: 3,
        photo: photo3,
        name: "Napoli",
        description: "Tomato sauce, Mozzarella, Capers, Anchovies, Olive oil",
        price: 19
    },
    {
        id: 4,
        photo: photo4,
        name: "Peperoni	",
        description: "Tomato sauce, Mozzarella, Chili peppers",
        price: 20
    },
    {
        id: 5,
        photo: photo5,
        name: "Regina",
        description: "Tomato sauce, Mozzarella, Ham, Champignons",
        price: 28
    },
    {
        id: 6,
        photo: photo6,
        name: "Salmone",
        description: "Tomato sauce, Mascarpone cheese, Smoked salmon and rocket salad (arugula)",
        price: 29
    },
    {
        id: 7,
        photo: photo7,
        name: "Vegetariana ",
        description: "Tomato sauce, Mozzarella, Vegetables",
        price: 30
    },
    {
        id: 8,
        photo: photo8,
        name: "Buffalo Chicken",
        description: "Hot sauce, Monterey Jack cheese, Blue cheese, Chicken breast cutlets, Spring onions, Olive oil",
        price:17,
    },
    {
        id: 9,
        photo: photo9,
        name: "All-dressed",
        description: "Spicy tomato sauce, Onions, Pepperoni, Green chili pepper slices, Mushrooms",
        price: 10
    },
    {
        id: 10,
        photo: photo10,
        name: "Olives	",
        description: "Tomato sauce, Manchego cheese, Spanish olives, Garlic, Olives oil",
        price: 15
    },
]




export const menuData = [
    {
      id: 1,
      name: "Margherita Classic",
      description: "San Marzano tomatoes, fresh mozzarella di bufala, basil, extra virgin olive oil",
      price: 18,
      category: "Classic",
      isVegetarian: true,
      isPopular: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Truffle Supreme",
      description: "Truffle cream base, wild mushrooms, prosciutto di Parma, arugula, parmesan",
      price: 34,
      category: "Premium",
      isVegetarian: false,
      isPopular: true,
      rating: 4.9,
      // image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
      image: "https://plus.unsplash.com/premium_photo-1667682939994-4c9e874dc175?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Spicy Diavola",
      description: "Spicy tomato sauce, mozzarella, spicy salami, 'nduja, hot peppers, oregano",
      price: 22,
      category: "Spicy",
      isVegetarian: false,
      isPopular: true,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Mediterranean Veggie",
      description: "Roasted vegetables, sun-dried tomatoes, olives, feta cheese, pesto drizzle",
      price: 20,
      category: "Vegetarian",
      isVegetarian: true,
      isPopular: false,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "BBQ Meat Lovers",
      description: "BBQ sauce, mozzarella, pepperoni, sausage, bacon, red onions, cilantro",
      price: 26,
      category: "Meat",
      isVegetarian: false,
      isPopular: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Burrata Delight",
      description: "White sauce base, burrata cheese, cherry tomatoes, prosciutto, arugula",
      price: 28,
      category: "Premium",
      isVegetarian: false,
      isPopular: false,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Quattro Stagioni",
      description: "Four seasons: mushrooms, artichokes, ham, olives on tomato mozzarella base",
      price: 24,
      category: "Classic",
      isVegetarian: false,
      isPopular: false,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Vegan Paradise",
      description: "Tomato base, vegan mozzarella, roasted peppers, mushrooms, spinach, herbs",
      price: 19,
      category: "Vegan",
      isVegetarian: true,
      isPopular: false,
      rating: 4.4,
      // image: "https://images.unsplash.com/photo-1566843972142-a306d2609e1e?w=400&h=300&fit=crop"
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      name: "Seafood Special",
      description: "White wine base, mozzarella, prawns, calamari, mussels, garlic, parsley",
      price: 32,
      category: "Seafood",
      isVegetarian: false,
      isPopular: false,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Buffalo Chicken",
      description: "Buffalo sauce, mozzarella, grilled chicken, red onions, blue cheese crumbles",
      price: 23,
      category: "Spicy",
      isVegetarian: false,
      isPopular: true,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop"
    },
    {
      id: 11,
      name: "Pesto Genovese",
      description: "Basil pesto, mozzarella, cherry tomatoes, pine nuts, parmesan shavings",
      price: 21,
      category: "Vegetarian",
      isVegetarian: true,
      isPopular: false,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=300&fit=crop"
    },
    {
      id: 12,
      name: "Carbonara Pizza",
      description: "Cream base, pancetta, egg yolk, pecorino romano, black pepper, parsley",
      price: 25,
      category: "Classic",
      isVegetarian: false,
      isPopular: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop"
    }
  ]

export const pizzaSizes = [
    { id: 'small', name: 'Small (10")', multiplier: 0.8 },
    { id: 'medium', name: 'Medium (12")', multiplier: 1.0 },
    { id: 'large', name: 'Large (14")', multiplier: 1.3 },
    { id: 'xl', name: 'Extra Large (16")', multiplier: 1.6 }
  ]
  


export const toppings = [
    { id: 'cheese', name: 'Extra Cheese', price: 3 },
    { id: 'pepperoni', name: 'Pepperoni', price: 4 },
    { id: 'mushrooms', name: 'Mushrooms', price: 2 },
    { id: 'olives', name: 'Olives', price: 2 },
    { id: 'peppers', name: 'Bell Peppers', price: 2 },
    { id: 'onions', name: 'Red Onions', price: 2 },
    { id: 'bacon', name: 'Bacon', price: 5 },
    { id: 'chicken', name: 'Grilled Chicken', price: 6 }
  ]
  
