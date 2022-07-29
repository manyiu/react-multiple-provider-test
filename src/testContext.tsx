import { createContext, useContext, useState } from "react";

interface TestContextProps {
  title: string;
  setTitle: (title: string) => void;
}

const initialTestContext: TestContextProps = {
  title: "",
  setTitle: (title: string) => {},
};

const TestContext = createContext<TestContextProps>(initialTestContext);

interface TestProviderProps {
  children: React.ReactNode;
}

export const TestProvider = ({ children }: TestProviderProps) => {
  const [title, setTitle] = useState("");

  return (
    <TestContext.Provider value={{ title, setTitle }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => useContext(TestContext);
