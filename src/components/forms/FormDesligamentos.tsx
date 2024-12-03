export function FormDesligamentos() {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Formulário de Desligamento</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome do Funcionário</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Matrícula</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Data do Desligamento</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Motivo do Desligamento</label>
          <select className="w-full p-2 border rounded-md" required>
            <option value="">Selecione...</option>
            <option value="voluntary">Voluntário</option>
            <option value="performance">Performance</option>
            <option value="layoff">Redução de Quadro</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Observações</label>
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