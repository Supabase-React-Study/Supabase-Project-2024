"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";

type Props = Omit<ComponentProps<"button">, "formAction"> & {
  formAction?: string;
  pendingText?: string;
};


export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}
