"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
export function Event() {
  //para mosntrar o console abaixo do formulário, vc cria um estado

  const { register, handleSubmit } = useForm();
  function CreateUser(data: any) {
    console.log(data);
  }
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h1 className="gap-6 mb-6 font-bold">Informações sobre o evento </h1>
        <form onSubmit={handleSubmit(CreateUser)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                form="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nome do Parque
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                {...register("parkName")}
              />
            </div>
            <div>
              <label
                form="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Estado
              </label>
              <input
                type="text"
                id="bairro"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                {...register("state")}
              />
            </div>
            <div>
              <label
                form="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cidade
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                {...register("city")}
              />
            </div>
            <div>
              <label
                form="cep"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CEP
              </label>
              <input
                type="tel"
                id="cep"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12-454-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>

            <div>
              <label
                form="bairro"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bairro
              </label>
              <input
                type="text"
                id="bairro"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                form="rua"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rua
              </label>
              <input
                type="text"
                id="rua"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div>
              <label
                form="numero"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Número
              </label>
              <input
                type="numero"
                id="numero"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>

            <div>
              <label
                form="numero"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Data de início:
              </label>
              <input
                type="numero"
                id="numero"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12/01/2024"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label
                form="numero"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Data de Término:
              </label>
              <input
                type="numero"
                id="numero"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12/01/2024"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
        </form>

        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none
           hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Voltar
        </button>
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Continuar
        </button>
      </a>
    </>
  );
}
