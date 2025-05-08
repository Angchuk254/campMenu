import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuData = [
    {
      category: 'All Day Breakfast',
      items: [
        { name: 'Aloo Paratha', price: 110 },
        { name: 'Gobi Paratha', price: 110 },
        { name: 'Onion Paratha', price: 130 },
        { name: 'Masala Omelette', price: 70 },
        { name: 'Half Fried Omelette', price: 60 },
        { name: 'Plain Omelette', price: 60 },
        { name: 'Cheese Omelette', price: 80 },
        { name: 'Dry Fruits Pancake', price: 100 },
        { name: 'Fresh Fruits Pancake', price: 80 },
        { name: 'Apricot Pancake', price: 70 },
        { name: 'Veg Sandwich', price: 50 },
        { name: 'Cheese Sandwich', price: 70 },
        { name: 'Combo Breakfast (Roti, Peanut, Butter, Jam, Honey, Cornflakes, Choice of Tea)', price: 280 },
        { name: 'Chole Puri', price: 130 },
        { name: 'Chole Bhature', price: 150 }
      ]
    },
    {
      category: 'Pizza',
      items: [
        { name: 'Margherita', price: 280 },
        { name: 'Veggie Delight', price: 300 },
        { name: 'Garlic Pizza', price: 320 },
        { name: 'Mushroom Pizza', price: 350 },
        { name: 'Chicken Pizza', price: 380 }
      ]
    },
    {
      category: 'Soups',
      items: [
        { name: 'Manchow', price: 80 },
        { name: 'Veg Manchow', price: 80 },
        { name: 'Tomato Soup', price: 40 },
        { name: 'Creamo Mushroom', price: 70 },
        { name: 'Mix Veg Soup', price: 70 },
        { name: 'Chicken Soup', price: 90 },
        { name: 'Local Barley & Wild Garlic Soup', price: 60 }
      ]
    },
    {
      category: 'Hunger Busters',
      items: [
        { name: 'French Fries', price: 150 },
        { name: 'Chilli Potato', price: 160 },
        { name: 'Paneer Chilli', price: 220 },
        { name: 'Spring Rolls', price: 120 },
        { name: 'Veg Momos', price: 150 },
        { name: 'Chicken Momos', price: 180 },
        { name: 'Paneer Momos', price: 180 }
      ]
    },
    {
      category: 'Pakoda*',
      items: [
        { name: 'Paneer Pakora', price: 260 },
        { name: 'Onion Pakora', price: 220 },
        { name: 'Veg Pakora', price: 240 },
        { name: 'Chicken Pakora', price: 320 }
      ]
    },
    {
      category: 'Main Course - Vegetarian',
      items: [
        { name: 'Paneer Butter Masala', price: 280 },
        { name: 'Palak Paneer', price: 260 },
        { name: 'Paneer Bhurji', price: 260 },
        { name: 'Mutter Paneer', price: 250 },
        { name: 'Kadai Paneer', price: 250 },
        { name: 'Special Baingan', price: 200 },
        { name: 'Dal Makhani', price: 220 },
        { name: 'Fried Dal', price: 200 },
        { name: 'Mix Veg', price: 250 },
        { name: 'Jeera Aloo', price: 180 },
        { name: 'Aloo Chilli', price: 150 },
        { name: 'Dum Aloo', price: 150 },
        { name: 'Mix Boiled Garlic Veg', price: 180 }
      ]
    },
    {
      category: 'Main Course - Non-Vegetarian',
      items: [
        { name: 'Chicken Curry', price: 300 },
        { name: 'Masala Chicken', price: 320 },
        { name: 'Chicken Korma', price: 350 },
        { name: 'Chilli Chicken', price: 350 },
        { name: 'Egg Curry', price: 200 },
        { name: 'Egg Masala', price: 150 }
      ]
    },
    {
      category: 'Pasta',
      items: [
        { name: 'Red Sauce Pasta', price: 160 },
        { name: 'White Sauce Pasta', price: 180 }
      ]
    },
    {
      category: 'Salads',
      items: [
        { name: 'Kernel Veg Salad', price: 100 },
        { name: 'Green Salad', price: 80 },
        { name: 'Chicken Salad', price: 150 }
      ]
    },
    {
      category: 'Ladakhi Specials',
      items: [
        { name: 'Veg Thukpa', price: 180 },
        { name: 'Chicken Thukpa', price: 200 },
        { name: 'Timok with Shaptak', price: 220 },
        { name: 'Chhamos (Boiled Apricots, Barley/Roti)', price: 150 },
        { name: 'Gangthur with Paba', price: 150 },
        { name: 'Veg Chowmein', price: 150 },
        { name: 'Chicken Chowmein', price: 180 }
      ]
    },
    {
      category: 'Baked & Bites',
      items: [
        { name: 'Local Dry Fruit Cake', price: 100 },
        { name: 'Apricot Cake', price: 120 },
        { name: 'Chocolate Cake', price: 100 },
        { name: 'Coconut Cake', price: 160 }
      ]
    },
    {
      category: 'Rice',
      items: [
        { name: 'Jeera Rice', price: 80 },
        { name: 'Steamed Rice', price: 70 },
        { name: 'Veg Fried Rice', price: 130 },
        { name: 'Egg Fried Rice', price: 160 },
        { name: 'Chicken Fried Rice', price: 180 },
        { name: 'Mushroom Fried Rice', price: 160 }
      ]
    },
    {
      category: 'Roti',
      items: [
        { name: 'Methi Roti', price: 20 },
        { name: 'Butter Roti', price: 20 },
        { name: 'Plain Roti', price: 15 }
      ]
    },
    {
      category: 'Sip Happens',
      items: [
        { name: 'Butter Tea (Gur Gur Chai)', price: 30 },
        { name: 'Kashmiri Kahwa', price: 50 },
        { name: 'Masala Chai', price: 50 },
        { name: 'Black Tea (Lemon / Ginger / Mint)', price: 30 },
        { name: 'Green Tea', price: 30 },
        { name: 'Ginger Lemon Tea', price: 60 },
        { name: 'Coffee (Milk / Black)', price: 50 },
        { name: 'Coffee (Black)', price: 70 }
      ]
    },
    {
      category: 'Milkshake',
      items: [
        { name: 'Chocolate Shake', price: 120 },
        { name: 'Mix Fruit Shake', price: 150 },
        { name: 'Apricot Shake', price: 150 },
        { name: 'Dry Fruit Shake', price: 160 }
      ]
    },
    {
      category: 'Halwa Specials',
      items: [
        { name: 'Sooji Halwa', price: 80 },
        { name: 'Gajar Halwa', price: 80 },
        { name: 'Dry Fruit Halwa', price: 120 },
        { name: 'Fresh Fruits Halwa', price: 110 },
        { name: 'Apricot Halwa', price: 120 }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Any additional initialization logic
  }
  trackByCategory(index: number, category: any) {
    return category.category;  // Assuming category name is unique
  }

  trackByItem(index: number, item: any) {
    return item.name;  // Assuming item name is unique
  }
}
