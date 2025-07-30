'use client'

import { use, useEffect, useRef, useState } from "react";
import { Copy, ExternalLink, SquarePen } from "lucide-react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

function Modal({ isOpen, onClose }: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [showLink, setShowLink] = useState<boolean>(false);
    const formsLink: string = 'https://forms.office.com/r/test-forms-ms'

    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        isOpen ? modal.showModal() : modal.close();

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
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

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error('Failed to copy the text:', err)
        }
    }

    return (
        <div>
            <dialog ref={modalRef} id="my_modal_4" className="modal overflow-hidden">
                {showLink ? (
                    <div className="modal-box max-w-5xl h-[60vh] flex flex-col gap-12 pb-15">
                        <h2 className="m-2 text-zinc-700 font-semibold text-2xl">Link para o formualario de Novos Projetos!</h2>
                        <p className="text-zinc-700 text-center mt-6">Utilize o link a baixa para coletar informações sobre novos porjetos! Encaminhe para os solicitantes e volte na plataforma para continuar o registro do projeto</p>
                        <div className="flex justify-center">
                            <span className="text-base p-2 px-5 bg-base-200 rounded-l border border-zinc-300">{formsLink}</span>
                            <div className="cursor-pointer flex gap-2 p-2 items-center text-zinc-500 bg-base-300 rounded-r border-1 border-zinc-300 hover:bg-zinc-300 hover:border-zinc-400">
                                <Copy size={19}/>
                                <button onClick={() => {copyToClipboard(formsLink)}}>Copiar</button>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-center mt-auto underline">PS: O link é utilizado para todos os times e projetos, mas depois é possivel escolher o time responsavel</p>
                    </div>
                ) : (
                <div className="modal-box max-w-5xl h-[60vh] flex flex-col gap-6">
                    <div className="flex flex-col gap-2 m-2">
                        <h3 className="font-bold text-3xl text-zinc-700">Nova demanda</h3>
                        <p className=" text-gray-600">Escolha como deseja coletar as informações do projeto</p>
                    </div>

                    <div className="flex justify-center gap-6 flex-grow">
                        <div 
                            className="card w-[410px] bg-base-100 card-sm shadow-sm border-2 border-gray-300 cursor-pointer hover:border-blue-300" 
                            onClick={() => {setShowLink(true)}}>   
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
                                <p className="text-center text-sm text-gray-600">Preencha as informações do projeto manualmente dentro da plataforma</p>
                            </div>
                        </div>                            
                    </div>

                    <div className="modal-action flex justify-center">
                        <form method="dialog">
                            <button className="btn text-zinc-600" onClick={onClose}>Cancelar</button>
                        </form>
                    </div>
                </div>
                )}
            </dialog>                    
        </div>
    )
}

export default Modal;