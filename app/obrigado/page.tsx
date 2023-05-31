"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();
  useEffect(() => {
    if (seconds == 0) {
      router.replace("/");
    }
    const timer = setTimeout(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [seconds, router]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            Obrigado por particiar da pesquisa!
          </h1>
          {/* <Link href={"/"}>
            <button className="btn btn-success">Voltar</button>
          </Link> */}
          <div
            className="radial-progress bg-success"
            style={{
              // @ts-ignore
              "--value": seconds * 20,
              "--size": "6rem",
              "--thickness": "2px",
            }}
          >
            {seconds}
          </div>
        </div>
      </div>
    </div>
  );
}
