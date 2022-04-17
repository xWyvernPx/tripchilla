import { IProvince } from "components/common/types/Locations";
import {
  Field,
  Form,
  SubmitButton,
  SelectField,
} from "components/userpage/UserUpdateForm/UpdateForm";
import useLocations from "hooks/useLocations";
import React from "react";
import { useForm, SubmitHandler, SetValueConfig } from "react-hook-form";

const CreateTrip = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { provinces } = useLocations();
  const onSubmit: SubmitHandler<any> = (data) => {
    const f = data.ava[0];
    const reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e: any) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        data.avatar = base64String;
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
    console.log(data);
    // TODO : call API to create user
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} action="">
      <h1>Create New Trips</h1>
      <div className="multi-field">
        <Field>
          <input
            type="text"
            placeholder="Name..."
            id="update-name"
            {...register("name", { required: true })}
          />
          <label htmlFor="update-name">Name</label>
        </Field>
        <SelectField>
          <select
            {...register("location", { required: true })}
            placeholder="Level..."
            defaultValue={"Select Province"}
            id="update-Province"
          >
            {provinces.map((province: IProvince) => (
              <option key={province.code}>{province.name}</option>
            ))}
          </select>
          <label htmlFor="update-Province">Location</label>
        </SelectField>
      </div>
      <div className="multi-field">
        <Field>
          <input
            type="number"
            {...register("limit_participants", { required: true })}
            placeholder="Limit Participants..."
            id="update-limit"
          />
          <label htmlFor="update-limit">Limit Participants</label>
        </Field>
        <Field>
          <input
            type="number"
            {...register("price_per_day", { required: true })}
            placeholder="Cost per day..."
            id="update-cost"
          />
          <label htmlFor="update-cost">Cost Per Day</label>
        </Field>
        <Field width="20%">
          <input
            type="text"
            {...register("limit_rating", { required: true })}
            placeholder="Rating"
            id="update-rating"
          />
          <label htmlFor="update-rating">Rating</label>
        </Field>
      </div>
      <div className="multi-field">
        <Field>
          <input
            type="date"
            {...register("start", { required: true })}
            placeholder="Start"
            id="update-start"
          />
          <label htmlFor="update-bod">Start date</label>
        </Field>
        <Field>
          <input
            type="date"
            {...register("end", { required: true })}
            placeholder="End Date"
            id="update-end"
          />
          <label htmlFor="update-end">End Date</label>
        </Field>
        {/* <SelectField>
          <select
            {...register("level", { required: true })}
            placeholder="Level..."
            defaultValue={"Select Level"}
            id="update-level"
          >
            <option value="1">Beginner</option>
            <option value="2">Intermediate</option>
            <option value="3">Pro</option>
          </select>
          <label htmlFor="update-level">Level</label>
        </SelectField> */}
      </div>
      <Field width="50%">
        <input
          type="file"
          {...register("prime-img", { required: false })}
          placeholder="Primary Image"
          id="update-prime-img"
          multiple
        />
        <label htmlFor="update-prime-img">Primary Image</label>
      </Field>
      <SubmitButton type="submit">Create User</SubmitButton>
    </Form>
  );
};

export default CreateTrip;
