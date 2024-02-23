"use client";
import React from "react";
import {useFormStatus} from "react-dom";
export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "submitting" : " Share Meal"}</button>
  );
}
