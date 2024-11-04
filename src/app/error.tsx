"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error }: Props) {
  useEffect(() => {
    console.error(error.message);
  }, []);

  return (
    <>
      <h1>에러페이지</h1>
    </>
  );
}
