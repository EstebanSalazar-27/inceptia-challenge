interface ChatMessageProps {
 text: string;
 timestamp: number;
}
const ChatMessage = ({ text, timestamp }: ChatMessageProps) => {
 // Función para formatear la fecha y hora legible
 const formattedDate = new Date(timestamp * 1000).toLocaleString();

 return (
  <div className="flex px-2 flex-col gap-1 border-l-2 border-l-blue-400">
   <p className="text-slate-800 dark:text-slate-200">{text}</p>
   <span className="text-gray-500  text-sm">{formattedDate}</span>
  </div>
 );
};
export default ChatMessage;
