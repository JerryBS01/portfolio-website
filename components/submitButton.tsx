import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {

    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-105 hover:text-gray-100 hover:bg-gray-950 disabled:bg-opacity-60 dark:bg-white/10 dark:hover:bg-white/20"
            disabled={pending}
        >
            {
                pending ?
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    :
                    <>
                        Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
            }
        </button>
    )
}

export default SubmitButton;