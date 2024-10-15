import { createContext, useContext, useState } from "react";

// Crear el contexto
export const JumpKeyContext = createContext<
  | { currentJumpKey: string; setCurrentJumpKey: (key: string) => void }
  | undefined
>(undefined);

// Crear el proveedor de contexto
export const JumpKeyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentJumpKey, setCurrentJumpKey] = useState<string>(" ");

  return (
    <JumpKeyContext.Provider value={{ currentJumpKey, setCurrentJumpKey }}>
      {children}
    </JumpKeyContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useJumpKey = () => {
  const context = useContext(JumpKeyContext);
  if (!context) {
    throw new Error("useJumpKey must be used within a JumpKeyProvider");
  }
  return context;
};
