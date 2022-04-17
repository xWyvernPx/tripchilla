import React from "react";
import {
  Field,
  Form,
  SubmitButton,
} from "components/userpage/UserUpdateForm/UpdateForm";
const UpdateTrip = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
  };
  return (
    <Form action="" onSubmit={handleSubmit}>
      <h1>User Information</h1>
      <div className="multi-field">
        <Field>
          <input
            type="text"
            name="update-name"
            placeholder="Name..."
            id="update-name"
          />
          <label htmlFor="update-name">Name</label>
        </Field>
        <Field>
          <input
            type="text"
            name="update-username"
            placeholder="Username..."
            id="update-username"
            readOnly
          />
          <label htmlFor="update-username">Username</label>
        </Field>
      </div>
      <Field width="50%">
        <input
          type="text"
          name="update-email"
          placeholder="Email..."
          id="update-email"
        />
        <label htmlFor="update-email">Email</label>
      </Field>
      <div className="multi-field">
        <Field>
          <input
            type="text"
            name="update-bod"
            placeholder="Birthday..."
            id="update-bod"
            readOnly
          />
          <label htmlFor="update-bod">BoD</label>
        </Field>
        <Field>
          <input
            type="text"
            name="update-phone"
            placeholder="Phone..."
            id="update-phone"
            readOnly
          />
          <label htmlFor="update-phone">Phone</label>
        </Field>
        <Field>
          <input
            type="text"
            name="update-level"
            placeholder="Level..."
            id="update-level"
          />
          <label htmlFor="update-level">Level</label>
        </Field>
      </div>
      <SubmitButton type="submit">Save</SubmitButton>
    </Form>
  );
};

export default UpdateTrip;
