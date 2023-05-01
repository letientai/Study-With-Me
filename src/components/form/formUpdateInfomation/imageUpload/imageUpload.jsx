import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
export const ImageUpload = (prop) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    prop.changeAvatar(imageList[0])
  };
  return (
    <div className="imageUpload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          // imageList,
          onImageUpload,
          // onImageRemoveAll,
          // onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div
            className="upload__image-wrapper"
            onClick={onImageUpload}
            style={isDragging ? { color: "red" } : undefined}
            {...dragProps}
          >
            <div className="drop__image">
              {/* <CloudUploadIcon className="icon__upload" /> */}
              <FontAwesomeIcon className="icon__upload" icon={faCloudArrowUp} />
              <p>Click or drop here</p>
            </div>
            <div className="listImg">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="image-item mx-2 my-2 position-relative"
                >
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <FontAwesomeIcon
                      onClick={() => onImageRemove(index)}
                      className="btn-delete"
                      icon={faTrash}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
