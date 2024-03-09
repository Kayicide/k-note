import { Header } from "../_components/header";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <section>
        {children}
      </section>
    </>

  );
}
