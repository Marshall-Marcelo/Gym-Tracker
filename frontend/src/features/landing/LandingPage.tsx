import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <main className="grid place-items-center h-dvh bg-white">
      <section className="flex flex-col gap-6 p-4">
        <div className="flex flex-col items-center gap-4 p-2">
          <h1 className="text-5xl font-bold text-start">Start your Fitness Journey Now!</h1>
          <Button className="self-start" label={"Go to app"} icon={<FaArrowRight />} />
        </div>
        <div className="flex flex-col items-center gap-4 p-2">
          <h1 className="text-5xl font-bold text-start">Start your Fitness Journey Now!</h1>
          <Button className="self-start" label={"Go to app"} icon={<FaArrowRight />} />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
