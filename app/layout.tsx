export const metadata = {
  title: "Dub School Festival 2026",
  description: "Festival reggae et dub à Dardagny, Genève.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
