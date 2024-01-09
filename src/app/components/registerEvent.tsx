"use client";
import React, { useCallback } from "react";
import { Input, Button } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { Axios } from "axios";
import { useEffect } from "react";

interface CadEvent {
  parkName: string;
  zipCode: number;
  state: string;
  city: string;
  district: string;
  street: string;
  startDate: number;
  endDate: number;
  linkMaps: string;
  bannerImg: string;
  category: string;
  ticketValue: number;
}

const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Por favor, informe um CEP válido"),
      state: z.string().min(1, "Por favor, informe um Estado válido"),
      city: z.string().min(1, "Por favor, informe uma Cidade válida"),
      district: z.string().min(1, "Por favor, informe um Bairro válido"),
      street: z.string().min(1, "Por favor, informe uma Rua válida"),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      city: field.address.city,
      state: field.address.state,
      district: field.address.district,
      street: field.address.street,
    },
  }));

type FormProps = z.infer<typeof schemaForm>;

export function EventNew(props: CadEvent) {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        city: "",
        zipCode: "",
        state: "",
        district: "",
        street: "",
      },
    },
  });
  const zipCode = watch("address.zipCode");

  const handleSubmitForm = (data: FormProps) => {
    console.log(data);
  };
  const handleFetchAddress = useCallback(async (zipCode: string) => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`
    );
    console.log(data);
  }, []);
  console.log(errors);

  useEffect(() => {
    //setValue("address.zipCode", zipCodeMask(zipCode));
    if (zipCode.length !== 9) return;
    handleFetchAddress(zipCode);
  }, [handleFetchAddress, zipCode]);

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex w-80 flex-wrap  columns-2 gap-4">
          <h2>Cadastro de Evento</h2>
          <Input
            type="text"
            label="Nome do Parque"
            placeholder="informe o nome do parque"
          >
            {props.parkName}
          </Input>
          <Input
            type="text"
            label="Cep"
            {...register("address.zipCode")}
            maxLength={9}
          ></Input>{" "}
          {errors.address?.zipCode?.message && (
            <p>{errors.address?.zipCode?.message}</p>
          )}
          <Input type="text" label="Estado" {...register("address.state")}>
            {props.state}
          </Input>
          {errors.address?.state?.message && (
            <p>{errors.address?.state?.message}</p>
          )}
          <Input type="text" label="Cidade" {...register("address.city")}>
            {props.city}
          </Input>
          {errors.address?.city?.message && (
            <p>{errors.address?.city?.message}</p>
          )}
          <Input type="text" label="Bairro" {...register("address.district")}>
            {props.district}
          </Input>
          {errors.address?.district?.message && (
            <p>{errors.address?.district?.message}</p>
          )}
          <Input type="text" label="Rua" {...register("address.street")}>
            {props.street}
          </Input>
          {errors.address?.street?.message && (
            <p>{errors.address?.street?.message}</p>
          )}
          <Input type="text" label="Data de início">
            {props.startDate}
          </Input>
          <Input type="text" label="Data de término">
            {props.endDate}
          </Input>
          <Input type="text" label="Insira o link do endereço do parque">
            {props.linkMaps}
          </Input>
          <h2>Categorias e senhas</h2>
          <div className="flex columns-2 gap-2 ">
            <Input type="text" label="Categoria do evento">
              {props.category}
            </Input>
            <Input type="text" label="Valor da senha">
              {props.ticketValue}
            </Input>
            <Button>
              Adicionar
              <CiCirclePlus />
            </Button>
          </div>
          <div className="max-w-lg mx-auto">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="user_avatar"
            >
              insira a imagem do cartaz do seu evento
            </label>

            <Input type="file">{props.bannerImg}</Input>
          </div>
        </div>
        <div className="flex flex-row gap-16 ">
          <Button color="danger">Sair</Button>
          <Button type="submit" color="success">
            Salvar
          </Button>
        </div>
      </form>
    </>
  );
}
