"use client";

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const res = await fetch(`/api/revalidate?tag=${tag}`, { method: "POST" });
  };

  return <button onClick={handleClick}>캐시비우기</button>;
}
