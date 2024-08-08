import { useQuery } from '@apollo/client';

import ImageList from '../components/ImageList';
import UploadImageForm from '../components/UploadImageForm';

import { QUERY_UPLOAD_IMAGES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_UPLOAD_IMAGES);
    const uploadImages = data?.uploadImages || [];

    return (
        <main>
            <section>
                <h2>Upload Image Form</h2>
                <UploadImageForm />
            </section>
            <section>
                {loading? (
                    <section>Loading Please Wait...</section>
                ) : (

                    
                    <ImageList
                    uploadImages={uploadImages}
                    >
                    </ImageList>
                    
                )}
            </section>
        </main>
    );
};

export default Home;