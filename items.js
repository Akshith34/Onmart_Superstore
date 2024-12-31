const { Router } = require('express');

const itemRoutes = Router();

itemRoutes.get('/', (req, res) => {
  setTimeout(
    () => res.json([
      {
        itemId: 'ferreroRocher',
        imageId: 'ferreroRocher',
        title: 'Ferrero Rocher',
        price: 10,
        description: 'Delicious hazelnut chocolates in a premium gold wrapper.',
        salesPrice: 8,
      },
      {
        itemId: 'schoolBag',
        imageId: 'schoolBag',
        title: 'School Bag',
        price: 50,
        description: 'Durable and stylish backpack for school and daily use.',
        salesPrice: 45,
      },
      {
        itemId: 'ceraVe',
        imageId: 'ceraVe',
        title: 'CeraVe Moisturizing Cream',
        price: 15,
        description: 'Moisturizing cream for dry skin, recommended by dermatologists.',
        salesPrice: 12,
      },
      {
        itemId: 'eyeLiner',
        imageId: 'eyeLiner',
        title: 'Eye Liner',
        price: 8,
        description: 'Precision eyeliner for bold and beautiful eyes.',
        salesPrice: null,
      },
      {
        itemId: 'lipstick',
        imageId: 'lipstick',
        title: 'Lipstick',
        price: 20,
        description: 'Long-lasting lipstick in various vibrant colors.',
        salesPrice: 18,
      },
      {
        itemId: 'longFrock',
        imageId: 'longFrock',
        title: 'Long Frock',
        price: 80,
        description: 'Elegant long frock for special occasions.',
        salesPrice: 70,
      },
      {
        itemId: 'nightWear',
        imageId: 'nightWear',
        title: 'Night Wear',
        price: 30,
        description: 'Comfortable nightwear for a good night\'s sleep.',
        salesPrice: 25,
      },
      {
        itemId: 'shoes',
        imageId: 'shoes',
        title: 'Shoes',
        price: 100,
        description: 'High-quality athletic shoes for sports and casual wear.',
        salesPrice: 80,
      },
      {
        itemId: 'crocs',
        imageId: 'crocs',
        title: 'Crocs',
        price: 40,
        description: 'Comfortable and light crocs for everyday wear.',
        salesPrice: 35,
      },
      {
        itemId: 'phone',
        imageId: 'phone',
        title: 'Smart Phone',
        price: 999,
        description: 'Latest smartphone with cutting-edge technology.',
        salesPrice: 900,
      },
      {
        itemId: 'instantPot',
        imageId: 'instantPot',
        title: 'Instant Pot',
        price: 120,
        description: 'Multi-functional electric pressure cooker that speeds up cooking.',
        salesPrice: 100,
      },
      {
        itemId: 'riceCooker',
        imageId: 'riceCooker',
        title: 'Rice Cooker',
        price: 60,
        description: 'Convenient rice cooker for perfect rice every time.',
        salesPrice: 55,
      },
    ]),
    // Adds a fake server-side delay
    500,
  );
});

module.exports = itemRoutes;
