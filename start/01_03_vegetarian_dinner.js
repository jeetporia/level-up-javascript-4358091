const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Stuffed shells",
    isVegetarian: true,
  },
  {
    name: "Spaghetti and meatballs",
    isVegetarian: false,
  },
  {
    name: "Tiramisu",
    isVegetarian: true,
  },
];

const onlyVeg = menu.filter((item) => item.isVegetarian == true);
console.log(onlyVeg);
