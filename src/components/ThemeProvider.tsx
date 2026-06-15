import { type ReactNode, useEffect } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { useAppSelector } from "../hooks/reduxHooks";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const mode = useAppSelector((state) => state.theme.mode);

  // Keep the document in sync so CSS can react to the active theme.
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 8,
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
