  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
  
    const foodItems = [
    {
      name: "Cheese Pizza",
      img: "/Images/pizza.png",
      section: "Pizza",
      price: 1
    },
    {
      name: "Pepperoni Pizza",
      img: "/Images/pizza2.jpeg",
      section: "Pizza",
      price: 1.5
    },
    {
      name: "Chicken Pizza",
      img: "/Images/chicken-pizza.jpeg",
      section: "Pizza",
      price: 2
    },
    {
      img: "/Images/healthy-pizza.jpeg",
      name: "Veggie Pizza",
      section: "Pizza",
      price: 2
    },
    {
      img: "/Images/burger.jpeg",
      name: "Burger",
      section: "Sandwich",
      price: 3
    },
    { img: "/Images/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 4.5 },
    {
      img: "/Images/sandwich.jpeg",
      name: "Shrimp PoBoy",
      section: "Sandwich",
      price: 6
    },
    {
      img: "/Images/fries.jpeg",
      name: "Fries",
      section: "Sides",
      price: 1
    },
    {
      price: 1,
      name: "Soda",
      section: "Drinks",
      choices: ["Coke", "Sprite", "Root Beer"]
    }
  ];
  
    const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
      res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
  }, {});
  
  
let value = Object.entries(foods).map(([key, value]) => {
    console.log('****************')
      
    console.log(key)
      console.log('---------------')

      console.log(value)
    console.log('****************')

  })


console.log(value)