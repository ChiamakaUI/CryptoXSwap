"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
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
    <div className="w-[88%] mx-auto my-2 lg:w-[45%]">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold my-3">
        Contact us 
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-6 rounded-md text-black my-5"
      >
        <div className="my-3.5">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("name")}
            placeholder="Your Name"
          />
          <p className="text-red-600 text-sm capitalize">
            {errors.name?.message}
          </p>
        </div>
        <div className="my-3.5">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("email")}
            placeholder="Your Email"
          />
          <p className="text-red-600 text-sm capitalize">
            {errors.email?.message}
          </p>
        </div>
        <div className="my-3.5">
          <label className="font-semibold">Message</label>
          <textarea
            className="w-full p-2 rounded focus:outline-none border border-gray-400 mt-2"
            {...register("message")}
            placeholder="Your Message"
          ></textarea>
          <p className="text-red-600 text-sm capitalize">
            {errors.message?.message}
          </p>
        </div>

        <div className="my-3.5 mx-auto w-[99%] flex flex-row justify-between items-center">
          <button className="border px-2.5 py-1.5 rounded bg-primary text-white w-[38%] lg:w-[20%]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Main;
