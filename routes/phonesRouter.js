const { Router } = require('express');
const { phonesController } = require('../controllers');
const multer = require('multer');

const upload = multer({ dest: 'public/images/' });

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

phonesRouter.get('/:phoneId/preorders', phonesController.getPhonePreorder);

phonesRouter.patch(
  '/:phoneId/images',
  upload.single('phonePhoto'),
  phonesController.updateImage
);

module.exports = phonesRouter;
