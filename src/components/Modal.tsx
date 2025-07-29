'use client'

import { useEffect, useRef } from "react";
import { ExternalLink, SquarePen } from "lucide-react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const modal = modalRef.current;
        if (modal) {
            if (isOpen) {
                modal.showModal();
            } else {
                modal.close();
            }
        }
    }, [isOpen]);

    useEffect(() => {
        const modal = modalRef.current;
        if (modal) {
            modal.addEventListener('close', onClose);
            return () => {
                modal.removeEventListener('close', onClose);
            };
        }
    }, [onClose]);

    return (
        <div>
            <dialog ref={modalRef} id="my_modal_4" className="modal overflow-hidden">
                <div className="modal-box max-w-5xl h-[60vh] flex flex-col gap-6">
                    <div className="flex flex-col gap-2 m-2">
                        <h3 className="font-bold text-3xl text-zinc-700">Nova demanda</h3>
                        <p className=" text-gray-600">Escolha como deseja coletar as informações do projeto</p>
                    </div>

                    <div className="flex justify-center gap-6 flex-grow">
                        <div 
                            className="card w-[410px] bg-base-100 card-sm shadow-sm border-2 border-gray-300 cursor-pointer hover:border-blue-300" 
                            onClick={() => {console.log('clicked')}}>   
                            <div className="card-body flex flex-col items-center justify-center gap-4 mt-10">
                                <div className="bg-blue-200 rounded-full p-4">
                                    <ExternalLink color="#2563EB" size={40} strokeWidth={1.5}/>                                    
                                </div>                                
                                <h2 className="card-title text-2xl text-zinc-600 font-semibold">Microsoft Forms</h2>
                                <p className="text-center text-sm text-gray-600">Envie um formulário estruturado para o solicitante preencher externamente</p>
                            </div>
                        </div>
                        <div 
                            className="card w-[410px] bg-base-100 card-sm shadow-sm border-2 border-gray-300 cursor-pointer hover:border-green-300" 
                            onClick={() => {console.log('clicked')}}>   
                            <div className="card-body flex flex-col items-center justify-center gap-4 mt-10">
                                <div className="bg-green-200 rounded-full p-4">
                                    <SquarePen color="#16A34A" size={40} strokeWidth={1.5}/>                                    
                                </div>                                
                                <h2 className="card-title text-2xl text-zinc-600 font-semibold">Preenchimento manual</h2>
                                <p className="text-center text-sm text-gray-600">Preencha as informações do projeto manualmente</p>
                            </div>
                        </div>                            
                    </div>

                    <div className="modal-action flex justify-center">
                        <form method="dialog">
                            <button className="btn" onClick={onClose}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </dialog>                    
        </div>
    )
}

export default Modal;