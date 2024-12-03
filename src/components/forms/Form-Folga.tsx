
export function SolicitaçaoFolga() {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Formulário de Solicitação de Folga</h2>
      
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
          <label className="block text-sm font-medium mb-1">Area</label>
          <select className="w-full p-2 border rounded-md" required>
            <option value="">Selecione...</option>
            <option value="Arcelor">Arcelor</option>
            <option value="Norte Energia">Norte Energia</option>
            <option value="Hersheys">Hersheys</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Data da folga</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tipo de Folga</label>
          <select className="w-full p-2 border rounded-md" required>
            <option value="">Selecione...</option>
            <option value="vacation">Férias</option>
            <option value="personal">Particular</option>
            <option value="medical">Médica</option>
            <option value="compensation">Compensação</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Observações</label>
          <textarea
            className="w-full p-2 border rounded-md h-32"
            placeholder="Adicione informações relevantes sobre sua solicitação"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar Solicitação
        </button>
      </div>
    </form>
  );
}