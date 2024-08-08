const ImageList = ({ uploadImages})=> {
    if(!uploadImages.lenght) {
        return <h1>No Uploaded Images Yet!</h1>;
    }

    return (
        <section>
            {
                uploadImages && 
                    uploadImages.map((uploadImage) => (
                        <section>
                            <h2>
                                {uploadImage.name}
                                <br></br>
                                {uploadImage.desc}
                                <br></br>
                            </h2>
                            <section>
                                {uploadImage.img}
                            </section>
                        </section>
                    )) 
            }
        </section>
    );
};

export default ImageList;