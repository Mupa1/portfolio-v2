import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuSendHorizonal } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { ContactFormValidation } from "../validations";
import { AnimateOnScroll } from "./ui/AnimateOnScroll";
import { Button } from "./ui/Button";
import { ErrorMessage } from "./ui/ErrorMessage";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

interface IStatus {
  ok: boolean;
  msg: string;
}

type ServerState = {
  submitting: boolean;
  status?: IStatus | null;
};

const Contact = () => {
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    status: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form?: HTMLFormElement | null,
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg } as const,
    });
    if (ok) {
      form?.reset();
    }
  };

  const handleOnSubmit: SubmitHandler<
    z.infer<typeof ContactFormValidation>
  > = async (data) => {
    setServerState({ submitting: true });

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://formspree.io/maypayal", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        await response.json();
        reset();
        handleServerResponse(true, "Message sent successfully!", null);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      if (err instanceof Error) {
        handleServerResponse(false, err.message, null);
      } else {
        handleServerResponse(false, "An unknown error occurred", null);
      }
    }
  };

  return (
    <div
      id="contact"
      className="relative mb-10 bg-[url('/contact-bg.svg')] bg-opacity-50 bg-cover bg-no-repeat h-screen flex flex-col justify-center"
    >
      <section className="w-full">
        <AnimateOnScroll>
          <h2 className="pt-18 md:pt-0">Contact Me</h2>
          <form onSubmit={handleSubmit(handleOnSubmit)} className="grid gap-3">
            <Input
              placeholder="Name"
              id="name"
              type="text"
              error={errors?.name?.message}
              {...register("name")}
            />
            <Input
              placeholder="Email"
              id="email"
              type="email"
              error={errors?.email?.message}
              {...register("email")}
            />
            <Textarea
              placeholder="Enter your message..."
              id="message"
              error={errors?.message?.message}
              {...register("message")}
            />
            <Button type="submit" className="w-full">
              Get In Touch
              <LuSendHorizonal size={18} />
            </Button>
            {serverState.status &&
              (!serverState?.status?.ok ? (
                <ErrorMessage error={serverState.status.msg} />
              ) : (
                <p className="text-center">Message sent successfully</p>
              ))}
          </form>
        </AnimateOnScroll>
        <div className="flex items-center justify-center px-3 ">
          <p className="px-6 text-center pt-16 absolute bottom-0 lg:bottom-4 font-mono text-sm text-gray-500">
            Designed and build by Mupa Nzaphila using React, Tailwind and Framer
            Motion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
