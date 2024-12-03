
export function AdmissaoForm() {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Formulário de Admissão</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome Completo</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">CPF</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Cargo</label>
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
        <div>
          <label className="block text-sm font-medium mb-1">Supervisor</label>
          <select className="w-full p-2 border rounded-md" required>
            <option value="">Selecione...</option>
            <option value="Lais">Lais</option>
            <option value="Lais">Lais</option>
            <option value="Lais">Lais</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Coordenador</label>
          <select className="w-full p-2 border rounded-md" required>
            <option value="">Selecione...</option>
            <option value="Elaine">Elaine neves</option>
            <option value="Lilian">Lilian</option>
            <option value="Cristiane">Cristiane</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pin</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Data de Início</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            required
          />
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