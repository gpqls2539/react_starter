import { useContext, createContext, useState } from "react";

// 데이터를 공유할 저장 공간 생성
const ThemeContext = createContext();

export default function Context() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeContextRender />
        <ThemeChangeButton />
      </ThemeContextProvider>
    </>
  );
}

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeContextRender() {
  // Provider value에 할당된 상태나 핸들러를 사용 가능
  const { theme } = useContext(ThemeContext);
  return <div>{theme}</div>;
}

function ThemeChangeButton() {
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme((curretTheme) => (curretTheme === "light" ? "dark" : "light"));
  };
  return <button onClick={handleClick}>change</button>;
}
