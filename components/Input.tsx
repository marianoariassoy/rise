import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  title: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, title, register }: Input) => {
  return (
    <div>
      <label className="lg:text-xl mb-4">{title}</label>

      <input
        type={type}
        className="w-full h-16 focus:outline-none focus:ring-0 lg:text-xl  mb-2 border-b border-primary"
        {...register}
      />
    </div>
  );
};

export default Input;
