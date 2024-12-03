import { ChevronDown, FileText, Menu } from 'lucide-react';
import { useState } from 'react';

interface FormOption {
  id: string;
  title: string;
}

const formOptions: FormOption[] = [
  { id: 'admissao', title: 'Admissões' },
  { id: 'Desligamentos', title: 'Desligamentos' },
  { id: 'Troca-Horario', title: 'Troca de Horário' },
  { id: 'ajuste-atividade', title: 'Ajuste de Atividades' },
  { id: 'solicitacao-folga', title: 'Solicitação de Folga' },
];

interface SidebarProps {
  onFormSelect: (formId: string) => void;
}

export function Sidebar({ onFormSelect }: SidebarProps) {
  const [isFormsOpen, setIsFormsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        <Menu size={24} />
      </button>

      <aside className={`
        fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-4">
          <div className='text-xl font-bold mb-8'><span>P</span></div>
          <h1 className="text-xl font-bold mb-8">Plan Forms</h1>
          
          <div className="space-y-2">
            <button
              onClick={() => setIsFormsOpen(!isFormsOpen)}
              className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-700"
            >
              <div className="flex items-center gap-2">
                <FileText size={20} />
                <span>Formulários</span>
              </div>
              <ChevronDown
                size={20}
                className={`transform transition-transform ${isFormsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isFormsOpen && (
              <div className="ml-6 space-y-1">
                {formOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      onFormSelect(option.id);
                      setIsMobileOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-md hover:bg-gray-700 text-sm"
                  >
                    {option.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}