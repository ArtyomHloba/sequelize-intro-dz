const { sequelize, Phone } = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(err => console.log(err));

// додавання нового телефону,
// (async function () {
//   try {
//     const phone = {
//       model: 'Moto G Stylus',
//       brand: 'Motorola',
//       year: 2020,
//       ram: 4,
//       processor: 'Snapdragon 665',
//       screen: 6.4,
//       nfc: false,
//     };

//     const createPhone = await Phone.create(phone);
//     console.log(createPhone);
//   } catch (err) {
//     console.log(err);
//   }
// })();

(async function () {
  try {
    const allPhones = await Phone.findAll({ raw: true });
    console.log(allPhones);
  } catch (err) {
    console.log(err);
  }
})();
