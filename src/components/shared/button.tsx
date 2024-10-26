export default function Button({
  color,
  innerText,
  onClick,
}: {
  color: string;
  innerText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={"text-white font-bold py-2 px-4 rounded"}
      onClick={onClick}
    >
      {innerText}
    </button>
  );
}
