"use client";
import Image from "next/image";
import classes from "./ImagePicker.module.css";
import React, { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setpickedImage] = useState(null);
  const imageInput = useRef(null);
  function handlePickClick() {
    imageInput.current.click();
  }
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
        setpickedImage(null)
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setpickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="the uploaded image from user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
