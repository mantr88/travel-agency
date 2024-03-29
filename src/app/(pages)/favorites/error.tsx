"use client";

import React from "react";
import Button from "@/app/ui/Button/Button";

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button>Try again</Button>
    </div>
  );
}
