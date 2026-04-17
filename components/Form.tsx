"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { FieldError } from "react-hook-form";
import Input from "./Input";
import Loader from "./Loader";
import { Contact } from "@/types/types";
import { Forward } from "../lib/icons";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mb-4 text-secondary">{error.message}</div>;
};

const Page = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    setSending(true);
    const sender = {
      to: "riiseyasociados@gmail.com",
      from: "no-reply@riiseyasociados.com.ar",
      from_name: "Rise",
      subject: "Contacto",
    };

    try {
      const response = await axios.post(
        "https://backend.riiseyasociados.com.ar/send-email.php",
        { ...data, ...sender },
      );
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = "Este dato es obligatorio";

  if (sended)
    return (
      <div>
        <h1 className="text-secondary text-xl">Contacto</h1>
        <h2 className="font-bold text-3xl lg:text-5xl">
          ¡Su mensaje fue enviado con éxito!
        </h2>
      </div>
    );

  return (
    <div>
      <div>
        <h1 className="text-secondary text-xl">Contacto</h1>
        <h2 className="font-bold text-4xl lg:text-6xl mb-12 pr-8">
          Envianos tu consulta
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <Input
              type="text"
              title="Nombre"
              register={register("name", {
                required: errorMessage,
                maxLength: 20,
              })}
            />
            <Error error={errors.name} />
          </div>
          <div>
            <Input
              type="text"
              title="Apellido"
              register={register("lastname", {
                required: errorMessage,
                maxLength: 20,
              })}
            />
            <Error error={errors.lastname} />
          </div>
          <div>
            <Input
              type="text"
              title="Cel."
              register={register("phone", {
                required: errorMessage,
                maxLength: 20,
              })}
            />
            <Error error={errors.phone} />
          </div>
          <div>
            <Input
              type="email"
              title="Email"
              register={register("email", {
                required: errorMessage,
                maxLength: 50,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Dirección de correo electrónico inválida",
                },
              })}
            />
            <Error error={errors.email} />
          </div>
        </div>

        <div>
          <label className="lg:text-xl mb-6">Consulta</label>

          <textarea
            className="w-full focus:outline-none focus:ring-0 lg:text-xl mb-2 border-b border-primary resize-none"
            id="message"
            rows={4}
            {...register("message", { required: errorMessage })}
          ></textarea>
          <Error error={errors.message} />
        </div>
        <div className="flex items-center justify-end mt-4">
          {sending ? (
            <Loader />
          ) : (
            <button className="flex items-center gap-x-4 pr-2 pl-6 py-2 rounded-full bg-primary text-white hover:gap-x-6 transition-all cursor-pointer">
              <span className="font-bold lg:text-lg">Enviar</span>
              <span className="bg-white text-primary h-8 w-8 rounded-full flex items-center justify-center">
                <Forward />
              </span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Page;
