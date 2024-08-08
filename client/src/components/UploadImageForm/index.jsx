import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_UPLOAD_IMAGE } from '../../utils/mutations';

const UploadImageForm = () => {
    const [uploadImage, setUploadImage] = useState('');

    const [addUploadImage, { error }] = useMutation(ADD_UPLOAD_IMAGE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await addUploadImage({
                variables: { uploadImage },
            });
            setUploadImage('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section>
            <form
                onSubmit={handleFormSubmit}
            >
                <section>
                    <label for="name">Image Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="name"
                        required
                    >
                    </input>
                </section>
                <section>
                    <label for="desc">Image Description</label>
                    <textarea
                        id="desc"
                        name="desc"
                        rows="2"
                        placeholder="Description"
                        required
                    >
                    </textarea>
                </section>
                <section>
                    <label for="image">Upload Image</label>
                    <input type="file" id="image" name="image" required />
                </section>
                <section>
                    <button type="submit">Submit</button>
                </section>
            </form>
        </section>
    );
};

export default UploadImageForm;