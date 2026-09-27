interface BalaoFalaProps {
  texto: string;
}

export default function BalaoFala({ texto }: BalaoFalaProps) {
  return (
    <p className="rounded-2xl bg-white px-5 py-3 font-semibold text-tinta shadow-sm">
      {texto}
    </p>
  );
}