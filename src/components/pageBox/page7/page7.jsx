import React from "react";
import style from "./page7.module.scss";
import { IconList } from "./iconsList";

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input className={style.page7__pageInput} {...register(label, { required })} />
  </>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20+</option>
      <option value="30">30+</option>
    </select>
  </>
));

export const Page7 = ({ handleSubmit, onSubmit, register }) => {
  return (
     <>
      <form onSubmit={handleSubmit(onSubmit)} className={style.page7}>
        <Input label="First Name" register={register} required autocomlete="off"/>
        <Select label="Age" {...register("Age")} />
        <input type="submit"  className={style.page7__btn}/>
      </form>
      <IconList/>
      </>
  
  );
};
