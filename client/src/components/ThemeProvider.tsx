"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [flag, setFlag] = React.useState<boolean>(false);

  React.useEffect(() => {
    setFlag(true);
  }, []);

  if (!flag) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
