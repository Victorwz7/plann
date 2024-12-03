
export function AjusteAtividade() {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Formulário de Ajuste de Atividades</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome do Funcionário</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cargo Atual</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Atividades Atuais</label>
          <textarea
            className="w-full p-2 border rounded-md h-32"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Novas Atividades Propostas</label>
          <textarea
            className="w-full p-2 border rounded-md h-32"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Justificativa da Mudança</label>
          <textarea
            className="w-full p-2 border rounded-md h-32"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar Formulário
        </button>
      </div>
    </form>
  );
}