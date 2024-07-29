"use client";

import { useFormStatus } from "react-dom";  //폼 상태와 관련된 정보제공 훅  //폼이 제출중인지, 특정 액션이 진행중인지 확인
import { type ComponentProps } from "react"; //html 요소에 적용 될 수 있는 모든 속성 

type Props = ComponentProps<"button"> & {
  pendingText?: string;  //제출 대기중일때 버튼에 표시될 text
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;  //폼 제출이 대기중이고 현재 액션이 폼 액션(로그인)과 같은지

  return ( //aria-disable가 true이면 요소 비활성화, false이면 활성화
    <button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children} 
    </button> //대기중이면 text, 아니면 children
  );
}
