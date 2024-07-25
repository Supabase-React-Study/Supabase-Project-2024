"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { login } from "./actions";


type Props = Omit<ComponentProps<"button">, "formAction"> & {
  formAction?: string;
  pendingText?: string;
};

//입력중일때 제출 불가, 입력 완료 후 제출
export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </button>
  );
}

