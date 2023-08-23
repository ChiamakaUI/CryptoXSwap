"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone number is required"),
  })
  .required();

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-[88%] mx-auto my-2 lg:w-[40%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-6 rounded-md"
      >
        <h2 className="text-center text-2xl lg:text-3xl font-semibold my-3">
          Sign Up
        </h2>
        <p className="text-center lg:text-lg">
          Please fill form to create an account.
        </p>
        <div className="my-3.5 flex flex-row justify-between items-center">
          <div className="w-[49%]">
          <label className="font-semibold">First Name</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("firstName")}
            placeholder="Your first name"
          />
          <p className="text-red-600 text-sm">
            {errors.firstName?.message}
          </p>
          </div>
          <div className="w-[49%]">
          <label className="font-semibold">Last Name</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("name")}
            placeholder="Your last name"
          />
          <p className="text-red-600 text-sm">
            {errors.lastName?.message}
          </p>
          </div>
        </div>

        <div className="my-3.5">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("email")}
            placeholder="Your Email"
          />
          <p className="text-red-600 text-sm">
            {errors.email?.message}
          </p>
        </div>

        <div className="my-3.5">
          <label className="font-semibold">Phone</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("phone")}
            placeholder="Your Phone number"
          />
          <p className="text-red-600 text-sm">
            {errors.phone?.message}
          </p>
        </div>

        <div className="my-3.5 mx-auto w-[99%] flex flex-row justify-between items-center">
          <Link href="login">
            <button className="border px-3.5 py-1.5 rounded font-semibold bg-transparent hover:bg-[#8d67e6] hover:text-white">
              Sign In
            </button>
          </Link>
          <button className="border px-2.5 py-1.5 rounded bg-primary text-white w-[38%] lg:w-[20%]">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;

//htmlFor="vendor"