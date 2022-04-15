import React from "react";
import styled from "styled-components";
export interface FormProps {

}
const UpdateForm: React.FC = (props) => {
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(data)
    }
  return (
    <Form action=""  onSubmit={handleSubmit}>
      <h1>User Information</h1>
      <Avatar />
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
          <label htmlFor="update-username" >Username</label>
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
export const Form = styled.form`
  /* dimension */
  width: 90%;
  height: 90%;
  //display:
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  /* justify-content:center; */
  overflow: scroll;
  /* background-color:aqua; */
  .multi-field {
    width: 50%;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
`;
interface AvaProps {
  backgroundUrl?: string;
}
const Avatar = styled.div`
  width: 10%;
  height: auto;
  aspect-ratio: 1;
  margin-bottom:2rem;
  /* display */
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////F2t3B19vA19rF2d3u9PXM3uH2+frV5Oba5+ny9vfp8fL5+/vi7O7J3N/R4eTY3TbjAAAFUklEQVR4nO2d2ZarIBBFw+CASvz/v70ac1diNGmFOuHQzX7Ko2dR1AjkcikUCoVCoVAoFAqFQuG7NFXvnWtb53xfNam/RpjOt1dtjNZWzejpt6pdn/qzhOh8rY3aw5gxf5GVs1rZXX0zVmuXs712Tu0v3go9Zqpx8NcD8hZrbYfUX3ueqtUH5S0au9QffI7hkHWuTbVK/dEn6EZ9av3uq5iNVx3GAHm3VfSpP/0Y/qx5PkkcXc+/HcdwgTPGGDsyr+UQJW/BTmuZWsdbGv0+eTkFq8TBCgmkdTpC8mYMZY4zCipUbWo1O/SBYXAfxkWMCxMbXGo9G1pZgUqnFvTKILyESrOlqdJLyGem0kuorE0taY2XFjiZKZc3raWymQdc9eIgGgvvUG1E2Wh/p06t6hl5TzqTWtUzEIFMrgayDZUm6mhU4tFwxhD1Fz1kDRVRuHAQgUwKMa6UKeTXEIVMa3iFCGTyNPJJKZtCiMA/oJAp4oMUEmVtIIWpZT2BUchUW2B86TW1rCcw8ZBpAIXJaZhGF5i8lKlPg6ktmGaIgG4pV2lx6RE1PlPSdukgComSNkwnimtGChBIlZZiAqJJLWoFIiByKYSEi9SiViBawlwTUvEpPp1CSP2UWtMagKvh8jQQhVxXFAAKyQ7UyAskm3JjUm+m4gJT5BN50wYzITU8Vb7o2dknaIJ+AxnjK6KdCMm7b7C022AKLUvAgDSibrBkbhXGlSqeTgYk3t9g6bfBfCmNQkT9y6VQ/pA3nUKUwL+gkKUKBp36IjqsACqeFE/9BDp9yZO1YY7qz9CM8mFJDU0JjAr5NPUhLFwQDUlBzpToVBTosD5LiX9BVRdE2xB0so0mo5mBtGqIjBQTLzRL2r0ASNxoEpo78gpTK3qlk3q5ZUFfeaL9fzolGRRpMtIVjRca0RANnbZImKpl6c7sItDQoEpltgjYKdMZ/R3i4yLZGYwN8ekby7zpHfF1FFFRuEv8LJEtWXslvilFVVHsEF9kMEf7G9H7kF5h7BqyB4v4fgbVZaBdYtM28pztEt86pRkZviU2bWNPaaKTGkvXvNjQR64he0oTfbkkg4fL407T8kx9PxAVLmiOl3wiZhGpW1APIgoofjezEBwwctiECy5MItFQ+0fCHvvMYxMuBHkbqoHoj4znF9GS90lfCDkllZORBrVr+Iv7B5UPymuuo/N5/BubMsFZjTYmg5gY2RNmeqXtDbGNGnqXGn2BhuyQyZb4t8vJ02+Bw7Tk3baAZCavRewkTpxQ70SZmxfE7lToriVxTJQ6+EU76Q6s7bewdqRE3MxdImdDQ0zfVA5T2qnsDTZCfyp8Rc9wSWx86J+PfkCPniP0D317+q9xD4tUbZ/Y53TuGl7RH2Kq+l26BOD431LHYJWpk3SpGqdkD69/Emms+7a1VvU3lu8ZM35zPOxhvuUD1ly/lMw1bcjfbotgjMMHkL5OJW9Bg43Vf8+7vMMa3ISjaRPsvj20hhhravNcI2+sk/dMbZ5rZI01off8xGSsMmkAl3mukUgDkgT341gdlwZM5plaws9EeFZm81wT5Fmn0oHMe35Eq3MNgcFns3wPdO2PutZ8rPMVMx4olftRJ089IzCm/bgl57o99TdGo9Vb3/r9uh2FGfeaV122u28Hq8fNOuYQ20+h1xcZq9Tfg+D5Xj/oFaTUPO7B/VKBD4m4l46Ts1zBwT2SS8BtmBx/TouZFvXX7zSYDvbsPwm2xT2Ry0JRmD9FYf4UhflTFOZPUZg/RWH+FIX5UxTmT1GYP0Vh/hSF+VMU5k9RmD9FYf4UhflTFObP71f4Dzk3bgrdsRGLAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${(props: AvaProps) =>
    props.backgroundUrl ? `background: url(${props.backgroundUrl});` : ""}
  border-radius: 50%;
  box-shadow: 0px 0px 0px 2px white, 0px 0px 0px 4px var(--primary-color);
`;
interface FieldProps {
  width?: string;
}
export const Field = styled.div`
  /* dimension */
  ${(props: FieldProps) =>
    props.width ? `width:${props.width};` : "width:100%;"}
  height: fit-content;
  padding: .75rem 0.5rem;

  flex-shrink: 1;
  margin-top: 1rem;
  /* display */
  border: 2px solid var(--dark);
  border-radius: var(--radius);
  /* position */
  position: relative;
  input {
    width: 100%;
    font-size: var(--fs-medium);
    & + label {
      background-color: white;
      padding: 0 0.15rem;
      position: absolute;
      color: var(--dark);
      transition: all 0.2s linear;
      top: -10%;

      left: 0.25rem;
      transform: translateY(-50%);
      &:hover {
        cursor: text;
      }
    }
    &::placeholder {
      color: var(--dark);
    }
    &::-ms-browse{
        border: unset;
    }
    &::-webkit-file-upload-button{
        background: black;
    color: red;
    padding: 1em;
    }

  }
 
`;
// TODO : Create a customizable SelectField 
export const SelectField = styled.div`
  /* dimension */
  ${(props: FieldProps) =>
    props.width ? `width:${props.width};` : "width:100%;"}
  height: fit-content;

  flex-shrink: 1;
  margin-top: 1rem;
  /* display */
  border: 2px solid var(--dark);
  border-radius: var(--radius);
  /* position */
  position: relative;
  select {
    width: 100%;
    padding: .75rem 0.5rem;
    border-radius: var(--radius);
    background-color:transparent;
    font-size: var(--fs-medium);
    & + label {
      background-color: white;
      padding: 0 0.15rem;
      position: absolute;
      color: var(--dark);
      transition: all 0.2s linear;
      top: -10%;
      left: 0.25rem;
      transform: translateY(-50%);
      &:hover {
        cursor: text;
      }
    }
    option {
        border:  2px red solid;
    }
    &::placeholder {
      color: var(--dark);
    }
  }
 
`;
export const SubmitButton = styled.button`
    /* dimension */
    width: fit-content;
    height: fit-content;
    padding : 1rem 2rem;
    margin-top: 2rem;
    //display 
    display: block;
    background-color: var(--primary-color);
    border-radius: var(--radius);
    /* typo */
    color : white ;
    font-weight: bold;
    font-size: var(--fs-medium);

`
export default UpdateForm;
