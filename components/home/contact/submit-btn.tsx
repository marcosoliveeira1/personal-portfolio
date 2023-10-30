import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from 'react-dom'

export function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="max-w-[100px] w-3/4 pt-10 pb-5 px-3 border-0 border-b-2 border-gray-500 hover:ring-0 hover:border-white hover:text-white bg-transparent text-slate-400 transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65">
        <span className="flex items-center gap-2">
          {pending ? 'Enviando...' : 'Enviar'}
          <FaPaperPlane />
        </span>
      </button>
    </>
  );
}
