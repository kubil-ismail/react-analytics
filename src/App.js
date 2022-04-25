import React from "react";
import "./App.css";

import { analytics } from "./firebase";

const item_jeggings = {
  item_id: "SKU_123",
  item_name: "jeggings",
  item_category: "pants",
  item_variant: "black",
  item_brand: "Google",
  price: 9.99,
};

// Specify order quantity
const item_jeggings_quantity = {
  ...item_jeggings,
  quantity: 2,
};

// Prepare ecommerce bundle
const params4 = {
  currency: "USD",
  value: 19.98,
  items: [item_jeggings_quantity],
};

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("teast aja");
          analytics.logEvent("add_to_cart", params4);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default App;
