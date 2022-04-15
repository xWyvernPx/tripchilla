import React from 'react'
import { Field, Form, SubmitButton ,SelectField} from '../UserUpdateForm/UpdateForm'
import {useForm,SubmitHandler,SetValueConfig} from "react-hook-form"
const CreateForm = () => {
   const {register, handleSubmit, watch,formState:{errors}} = useForm();
   const onSubmit:  SubmitHandler<any> = (data)=>{
       const f = data.ava[0];
     const reader = new FileReader();
     reader.onload = (function(theFile) {
        return function(e:any) {
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
   }
   
  return (
    <Form onSubmit={handleSubmit(onSubmit)} action="">
      <h1>Create New User</h1>
      <div className="multi-field">
        <Field>
          <input
            type="text"
            placeholder="Name..."
            id="update-name"
            {...register("name",{required: true,})}
          />
          <label htmlFor="update-name">Name</label>
        </Field>
        <Field>
          <input
            type="text"
            placeholder="Username..."
            id="update-username"
            {...register("username" , {required:true})}
          />
          <label htmlFor="update-username" >Username</label>
        </Field>
      </div>
      <Field width="50%">
        <input
          type="text"
        {...register("email",{required: true })}
          placeholder="Email..."
          id="update-email"
        />
        <label htmlFor="update-email">Email</label>
      </Field>
      <div className="multi-field">
        <Field>
          <input
            type="date"
            {...register("bod",{required: true })}

            placeholder="Birthday..."
            id="update-bod"
            
          />
          <label htmlFor="update-bod">BoD</label>
        </Field>
        <Field>
          <input
            type="text"
            {...register("phone",{required: true })}

            placeholder="Phone..."
            id="update-phone"
          />
          <label htmlFor="update-phone">Phone</label>
        </Field>
        <SelectField>
          <select
           {...register("level",{required: true })}
            placeholder="Level..."
            defaultValue={"Select Level"}
            id="update-level"
          >
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Pro</option>
          </select>
          <label htmlFor="update-level">Level</label>
        </SelectField>
      </div>
      <Field width="50%">
          <input
            type="file"
            {...register("ava",{required: false })}

            placeholder="Avatar..."
            id="update-avatar"
          />
          <label htmlFor="update-avatar">Avatar</label>
        </Field>
        <div className="multi-field">
        <SelectField>
          <select
                    {...register("province",{required: true })}

            placeholder="Level..."
            defaultValue={"Select Province"}
            id="update-Province"
          >
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Pro</option>
          </select>
          <label htmlFor="update-Province">Province</label>
        </SelectField>
        <SelectField>
          <select
                   {...register("district",{required: true })}

            placeholder="Level..."
            defaultValue={"Select district"}
            id="update-district"
          >
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Pro</option>
          </select>
          <label htmlFor="update-district">District</label>
        </SelectField>
        <SelectField>
          <select
                    {...register("ward",{required: true })}

            placeholder="Level..."
            defaultValue={"Select ward"}
            id="update-ward"
          >
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Pro</option>
          </select>
          <label htmlFor="update-ward">Ward</label>
        </SelectField>
        </div>
        <Field width="50%">
          <input
            type="text"
        {...register("detail",{required: true })}
            
            placeholder="Detail adrress..."
            id="update-detail"
          />
          <label htmlFor="update-detail">Detail address</label>
        </Field>
    <SubmitButton type="submit">Create User</SubmitButton>
    </Form>
  )
}

export default CreateForm