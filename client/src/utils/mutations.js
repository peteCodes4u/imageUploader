import { gql } from '@apollo/client';

export const ADD_UPLOAD_IMAGE = gql`
    mutation addUploadImage($name: String, $desc: String, $img: String) {
        addUploadImage(name: $name, desc: $desc, img: $img) {
            img {
            _id
            name
            }
        }
    }
`;