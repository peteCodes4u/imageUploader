const { Schema, model } = require('mongoose');

const uploadImageSchema = new Schema({

    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

});


const UploadImage = model('UploadImage', uploadImageSchema)

module.exports = UploadImage;