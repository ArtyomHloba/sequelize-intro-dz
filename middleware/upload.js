const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

module.exports.uploadPhonePhoto = upload.single('phonePhoto');
