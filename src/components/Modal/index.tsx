interface ModalProps {
 isOpen: boolean;
 children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
 if (!isOpen) return null;

 return (
  <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
   <div className="bg-white w-3/5 min-h-[200px] dark:bg-stone-900  p-4 rounded">
    {children}
   </div>
  </div>
 );
};

export default Modal;
