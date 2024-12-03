import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { AdmissaoForm } from './components/forms/FormAdmissao';
import { FormDesligamentos } from './components/forms/FormDesligamentos';
import { ScheduleChangeForm } from './components/forms/FormTrocahorario';
import { AjusteAtividade } from './components/forms/FormAjusta-atividade';
import { SolicitaçaoFolga } from './components/forms/Form-Folga';

function App() {
  const [selectedForm, setSelectedForm] = useState<string>('');

  const renderForm = () => {
    switch (selectedForm) {
      case 'admissions':
        return <AdmissaoForm />;
      case 'terminations':
        return <FormDesligamentos />;
      case 'schedule-change':
        return <ScheduleChangeForm />;
      case 'activity-adjustment':
        return <AjusteAtividade />;
      case 'time-off':
        return <SolicitaçaoFolga />;
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700">Bem-vindo a Ferramenta do Planejamento</h2>
            <p className="text-gray-600 mt-2">Selecione um formulário no menu lateral para começar.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onFormSelect={setSelectedForm} />
      <main className="lg:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto p-6 pt-16 lg:pt-6">
          {renderForm()}
        </div>
      </main>
    </div>
  );
}

export default App;