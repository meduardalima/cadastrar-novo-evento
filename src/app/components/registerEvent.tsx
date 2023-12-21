"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { CiCirclePlus } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { AnyARecord } from "dns";

interface CadEvent {
  parkName: string;
  zipCode: number;
  state: string;
  city: string;
  neighborhood: string;
  road: string;
  startDate: number;
  endDate: number;
  linkMaps: string;
  bannerImg: string;
  category: string;
  ticketValue: number;
}

export function Event(props: CadEvent) {
  const { register, handleSubmit } = useForm();
  function createUser(data: any) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(createUser)}>
        <div className="flex w-80 flex-wrap  columns-2 gap-4">
          <h2>Cadastro de Evento</h2>
          <Input type="text" label="Nome do Parque">
            {props.parkName}
          </Input>
          <Input type="text" label="Cep" {...register("cep")}>
            {props.zipCode}
          </Input>
          <Input type="text" label="Estado">
            {props.state}
          </Input>
          <Input type="text" label="Cidade">
            {props.city}
          </Input>
          <Input type="text" label="Bairro">
            {props.neighborhood}
          </Input>
          <Input type="text" label="Data de início" {...register("dataInicio")}>
            {props.startDate}
          </Input>
          <Input
            type="text"
            label="Data de término"
            {...register("dataTermino")}
          >
            {props.endDate}
          </Input>
          <Input type="text" label="Insira o link do endereço do parque">
            {props.linkMaps}
          </Input>
          <div className="max-w-lg mx-auto">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="user_avatar"
            >
              insira a imagem do cartaz do seu evento
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />

            <Input type="file">{props.bannerImg}</Input>
          </div>
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
        </div>
        <div className="flex flex-row gap-16 ">
          <Button color="danger">Sair</Button>
          <Button
            type="submit"
            color="success"
            onClick={() => {
              alert("salvo");
            }}
          >
            Salvar
          </Button>
        </div>
      </form>
    </>
  );
}
