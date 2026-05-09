import { useEffect, useState } from "react";
import { Navbar } from "@/components/icepark/Navbar";
import { Footer } from "@/components/icepark/Footer";

const menuData = [
  // --- Starters ---
  {
    category: "Veg Starters",
    items: ["Veg Manchuria", "Gobi Manchuria", "Gobi 65", "Baby Corn Manchuria", "Mushroom Manchuria", "Chilli Mushroom", "Paneer Manchuria", "Chilli Paneer", "Paneer 65", "Crispy Corn", "Veg Crispy Pakoda"]
  },
  {
    category: "Egg Starters",
    items: ["Omelette", "Egg Manchuria", "Chilli Egg"]
  },
  {
    category: "Non-Veg Starters",
    items: ["Chicken Manchuria", "Chicken 65", "Chicken Wings (7 Pcs)", "Lemon Chicken", "Chilli Chicken", "Apollo Chicken", "Pepper Chicken", "Ginger Chicken", "Chicken Majestic", "Cashewnut Chicken", "Chicken 555", "Chicken Lollipop", "Apollo Fish", "Chilli Fish", "Chilli Prawn", "Loose Prawn"]
  },
  // --- Snacks ---
  {
    category: "Veg Snacks",
    items: ["French Fries with Salt", "French Fries with Masala", "French Fries with Cheese", "Veg Pops (10 Pcs)", "Veg Smilies (6 Pcs)", "Veg Fingers (6 Pcs)"]
  },
  {
    category: "Non-Veg Snacks",
    items: ["Chicken Nuggets (8 Pcs)", "Chicken Popcorn", "Crispy Chicken Strips (4 Pcs)", "Crispy Chicken Strips (7 Pcs)", "Hot & Spicy Wings (4 Pcs)", "Hot & Spicy Wings (8 Pcs)", "Fish Popcorn", "Prawn Popcorn"]
  },
  {
    category: "Garlic Breads",
    items: ["Cheese Garlic Bread", "Chilli & Corn Garlic Bread"]
  },
  // --- Fast Food ---
  {
    category: "Pizzas",
    items: ["Veg Supreme Pizza", "Paneer Pizza", "Cheese & Corn Pizza", "Double Cheese Pizza", "Baby Corn Pizza", "Mushroom Pizza", "Ice Park Special Egg Pizza", "Ice Park Special Veg Pizza", "Chicken Pizza", "Chicken 65 Pizza", "Chicken BBQ Pizza", "Chicken Tikka Pizza", "Ice Park Special Chicken Pizza"]
  },
  {
    category: "Burgers",
    items: ["Veg Burger", "Paneer Burger", "Mushroom Burger", "SP Corn Burger", "Egg Burger", "Chicken Burger", "Special Tikka Burger"]
  },
  {
    category: "Sandwiches",
    items: ["Veg Sandwich", "Cheese & Corn Sandwich", "Paneer Sandwich", "Mushroom Sandwich", "Egg Sandwich", "Chicken Sandwich", "Ice Park SP Tikka Sandwich", "Chocolate Nutella Sandwich"]
  },
  {
    category: "Wraps",
    items: ["Veg Wrap", "Mixed Veg Wrap", "Paneer Wrap", "Egg Wrap", "Chicken Wrap", "Special Chicken Wrap"]
  },
  {
    category: "Frankies",
    items: ["Veg Frankie", "Mixed Veg Frankie", "Paneer Frankie", "Crispy Egg Frankie", "Chicken Frankie", "Special Chicken Frankie"]
  },
  // --- Main Course ---
  {
    category: "Noodles",
    items: ["Veg Noodles", "Veg Schezwan Noodles", "Egg Noodles", "Egg Schezwan Noodles", "Veg Manchuria Noodles", "Egg Manchuria Noodles", "Chicken Noodles", "Chicken Schezwan Noodles"]
  },
  {
    category: "Fried Rice",
    items: ["Veg Fried Rice", "Jeera Rice", "Corn Fried Rice", "Baby Corn Fried Rice", "Paneer Fried Rice", "Mushroom Fried Rice", "Veg Schezwan Fried Rice", "Egg Fried Rice", "Egg Schezwan Fried Rice", "Cashewnut Fried Rice", "Special Veg Fried Rice", "Chicken Fried Rice", "Chicken Lollipop Fried Rice", "Special Chicken Fried Rice"]
  },
  {
    category: "Biryanis",
    items: ["Veg Biryani", "Special Veg Biryani", "Chicken Dum Biryani", "Chicken Mughlai Biryani", "Chicken Lollipop Biryani", "Special Chicken Biryani", "Prawn Biryani", "Fish Biryani"]
  },
  {
    category: "Veg Curries",
    items: ["Mix Veg Curry", "Tomato Curry", "Palak Curry", "Palak Paneer Curry", "Methi Chaman Curry", "Paneer Butter Masala", "Mushroom Curry", "Kaju Tomato Curry"]
  },
  {
    category: "Non-Veg Curries",
    items: ["Chicken Curry", "Chicken Mughlai Curry", "Butter Chicken", "Methi Chicken Curry", "Cashewnut Chicken Curry", "Special Chicken Curry"]
  },
  // --- Combos ---
  {
    category: "Combo Packs",
    items: ["Veg Combo (Veg Supreme Pizza, Veg Burger, Veg Fried Rice, French Fries (Med), Veg Smilies (6 Pcs), Regular Drink)"]
  },
  {
    category: "Mini Combos",
    items: [
      "Veg Mini (Veg Supreme Pizza, Veg Sandwich, French Fries (Med), Regular Soft Drink)",
      "Non Veg Mini (Chicken Pizza, Chicken Sandwich, Chicken Nuggets (6 Pcs), Regular Soft Drink)"
    ]
  },
  {
    category: "Non-Veg Combos",
    items: ["Chicken Pizza", "Chicken Burger", "Chicken Fried Rice", "Chicken Nuggets", "French Fries (Med)", "Regular Drink"]
  },
  // --- Desserts & Ice Creams ---
  {
    category: "Ice Creams",
    items: ["Vanilla Park", "Fruit Delight", "Italian Punch", "Banana Split", "Berry Heaven", "Natural Delight", "Special Fruit Ice Cream", "Black Moon", "Cookies Chocolate"]
  },
  {
    category: "Ice Cream Family Pack (1/2 Ltr)",
    items: ["Vanilla / Strawberry", "Chocolate", "Nuts Base", "Naturals"]
  },
  // --- Beverages ---
  {
    category: "Chocolate Milkshakes",
    items: ["Bourbon Chocolate", "Oreo Milkshake", "KitKat Milkshake", "Dairy Milk Milkshake"]
  },
  {
    category: "Fruit Milkshakes",
    items: ["Banana Nutella Milkshake", "Apple Butter Milkshake", "Strawberry Honey Milkshake", "Mango Coconut Milkshake", "Pineapple Coconut Milkshake", "Sitaphal Honey Milkshake", "Red Wine Honey Milkshake"]
  },
  {
    category: "Yogurt Shakes",
    items: ["Kiwi Vanilla", "Strawberry Delight", "Banana Caramel Crush", "Black Currant Blast", "Almond Honey"]
  },
  {
    category: "Mocktails",
    items: ["Fresh Lemon Soda", "Passion Lemonade", "Blue Curaçao", "Mint Mojito", "Ginger Lemon", "Raspberry", "Green Apple", "Red Wine"]
  },
  {
    category: "Natural Fruit Juices",
    items: ["Banana", "Pineapple", "Grapes", "Papaya", "Carrot", "Pomegranate", "Apple", "Special Dry Fruit Juice"]
  },
  {
    category: "Lassis",
    items: ["Sweet Lassi", "Special Dry Fruit Lassi"]
  },
  // --- Add Ons ---
  {
    category: "Add-Ons",
    items: ["Extra Sauce", "Extra Cheese", "Extra Toppings", "Regular Drink", "Water Bottle", "Mini Parcel", "Parcel"]
  }
];

const FullMenu = () => {
  const [activeTab, setActiveTab] = useState(menuData[0].category);

  useEffect(() => {
    document.title = "Full Menu | Ice Park Restaurant";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4">
              DISCOVER OUR
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Complete <span className="text-gradient">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our wide variety of delicious offerings, from refreshing shakes and mocktails to mouth-watering pizzas and curries. Everything is crafted with perfection to satisfy your cravings.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/4 shrink-0">
              <div className="sticky top-28 bg-card rounded-2xl shadow-elevate p-4 border border-border/50 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
                <h3 className="font-display text-lg font-bold px-4 mb-4 text-foreground/80">Categories</h3>
                <nav className="flex flex-col gap-1">
                  {menuData.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(category.category)}
                      className={`text-left px-4 py-2.5 rounded-xl transition-smooth text-sm font-medium ${
                        activeTab === category.category
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {category.category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              <div className="bg-card rounded-3xl p-6 sm:p-10 shadow-elevate border border-border/50 min-h-[500px]">
                {menuData.map((category, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      activeTab === category.category ? "block animate-fade-in" : "hidden"
                    }`}
                  >
                    <div className="mb-8 pb-4 border-b border-border">
                      <h2 className="text-3xl font-display font-bold text-foreground">
                        {category.category}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-2">
                        Delight in our selection of {category.category.toLowerCase()}.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group flex items-center p-4 rounded-2xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors mr-4 shrink-0" />
                          <span className="text-base font-medium text-foreground/90 group-hover:text-foreground">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default FullMenu;
