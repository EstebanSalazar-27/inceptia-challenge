import { Bot, Message } from "@/models/api";
import Header from "@components/Layout/Header";
import ChatMessage from "@components/Chat/ChatMessage";

function BotChat({ messages, bot }: { messages: Message[]; bot: Bot }) {
 return (
  <div className="grid gap-4">
   <Header>Conversacion - {bot.name}</Header>

   <div className="grid gap-2">
    {messages.map((item) => (
     <ChatMessage text={item.text} timestamp={item.time} />
    ))}
   </div>
  </div>
 );
}
export default BotChat;
