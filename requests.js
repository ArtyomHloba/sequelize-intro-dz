const { where, Op } = require('sequelize');
const { sequelize, Phone } = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK'))
//   .catch(err => console.log(err));

// додавання нового телефону
// (async function () {
//   try {
//     const phone = {
//       model: 'Xiaomi Note 11 pro',
//       brand: 'Motorola',
//       year: 2024,
//       ram: 6,
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

//отримання списку телефонів
// (async function () {
//   try {
//     const allPhones = await Phone.findAll({ raw: true });
//     console.log(allPhones);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),
// (async function () {
//   try {
//     const foundPhones = await Phone.findAll({
//       raw: true,
//       order: [['year', 'ASC']],
//       limit: 3,
//       offset: 4,
//     });
//     console.log(foundPhones);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// отримання списку телефонів поточного року видання,
// (async function () {
//   try {
//     const phones = await Phone.findAll({
//       raw: true,
//       where: { year: '2024' },
//     });

//     console.log(phones);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// отримання списку телефонів старше 2022 року випуску,
// (async function () {
//   try {
//     const phones = await Phone.findAll({
//       where: { year: { [Op.lt]: 2022 } },
//       raw: true,
//     });

//     console.log(phones);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// оновлення: змінити розмір оперативної пам'яті телефону з id: 1,
// (async function () {
//   try {
//     const updated = await Phone.update(
//       { ram: 10 },
//       { where: { id: 1 }, raw: true, returning: true }
//     );
//     console.log(updated);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// додати NFC всім телефонам 2023 року випуску
// (async function () {
//   try {
//     const phones = await Phone.update({ nfc: true }, { where: { year: 2023 } });
//     console.log(phones);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// видалення телефону з id: 2.
// (async function () {
//   try {
//     const phones = await Phone.destroy({ where: { id: 2 } });
//     console.log(phones);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// видалення телефонів 2015 року випуску.
// (async function () {
//   try {
//     const phones = await Phone.destroy({ where: { year: '2015' } });
//     console.log(phones);
//   } catch (error) {
//     console.log(error);
//   }
// })();
