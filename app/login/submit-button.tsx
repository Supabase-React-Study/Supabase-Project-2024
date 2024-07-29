"use client";

import { useFormStatus } from "react-dom";  //폼 상태와 관련된 정보제공 훅  //폼이 제출중인지, 특정 액션이 진행중인지 확인
import { type ComponentProps } from "react"; //html 요소에 적용 될 수 있는 모든 속성 

type Props = ComponentProps<"button"> & { //버튼의 모든 속성과 pendingText를 Props 타입으로 받음
  pendingText?: string;                   //제출 대기중일때 버튼에 표시될 text
};

export function SubmitButton({ children, pendingText, ...props }: Props) { //위에서 선언한 props구조 분해 //...props : 모든 props속성 
  const { pending, action } = useFormStatus();                            //폼 상태중 pending 과 액션을 가져옴

  const isPending = pending && action === props.formAction;               //폼 제출이 대기중이고 현재 액션이 폼 액션(로그인)과 같은지

  return ( 
    <button {...props} type="submit" aria-disabled={pending}>             {/*aria-disable가 true이면 요소 비활성화, false이면 활성화*/}
      {isPending ? pendingText : children}                                {/*대기중이면 text, 아니면 children*/}
    </button>                 
  );
}
