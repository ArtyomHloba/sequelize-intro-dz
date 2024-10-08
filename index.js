const { sequelize, Phone } = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(err => console.log(err));

// (async function () {
//   try {
//     const phone = {
//       model: '14',
//       brand: 'Iphone',
//       year: 2023,
//       ram: 6,
//       processor: 'A14',
//       screen: 6.1,
//       nfc: true,
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
