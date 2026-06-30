import { ClerkProvider } from "@clerk/react";
import { dark } from "@clerk/themes";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ThemedClerkProvider({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ClerkProvider
      appearance={{
        theme: theme === "dark" ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
}