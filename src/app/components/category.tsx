export function Category() {
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h1 className="gap-6 mb-6 font-bold">Categorias</h1>
        <form>
          <label
            form="countries_multiple"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Selecione as Categorias
          </label>
          <select
            multiple
            id="countries_multiple"
            className=" gap-6 mb-6 font-bold bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Profissional</option>
            <option value="">Amador</option>
            <option value="">Aspirante</option>
            <option value="">Feminino</option>
          </select>
          <div>
            <label
              form="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              Valor da senha
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 gap-6 mb-6"
              placeholder="R$ 240,00"
              required
            />
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
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Continuar
        </button>
      </a>
    </>
  );
}
