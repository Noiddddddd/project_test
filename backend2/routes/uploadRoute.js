const express = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/uploadController');
const { getPhotos } = require('../controllers/uploadController');
const { deletePhoto} = require('../controllers/uploadController')

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/photos', getPhotos);
router.delete('/photos/:key', deletePhoto)

module.exports = router;
