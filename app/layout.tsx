import React from "react";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <html lang="pl">
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
