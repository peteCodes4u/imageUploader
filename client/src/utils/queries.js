import { gql } from '@apollo/client';

export const QUERY_UPLOAD_IMAGES = gql`
    query allUploadImages {
        UploadImages {
            _id
            name
            desc
            img
        }
    }
`;

export const QUERY_SINGLE_IMAGE = gql`
    query singleUploadImage($uploadImageId: ID!) {
        uploadImage(upladImageId: $uploadImageId) {
        _id
        name
        desc
        img
        }
    }
`;