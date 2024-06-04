import { createContext, useState, ReactNode, useContext } from 'react';

interface SelectContextType {
  select: string;
  setSelect: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const SelectProvider = ({ children }: { children: ReactNode }) => {
  const [select, setSelect] = useState<string>('');

  return (
    <SelectContext.Provider value={{ select, setSelect }}>
      {children}
    </SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelectContext must be used within a SelectProvider');
  }
  return context;
};
