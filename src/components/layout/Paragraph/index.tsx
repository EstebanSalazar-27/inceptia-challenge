interface ParagraphProps {
 children: React.ReactNode;
 size?: "sm" | "md" | "lg";
}

const sizeClasses = {
 sm: "text-sm",
 md: "text-base",
 lg: "text-lg",
};

export function Paragraph({ children, size = "sm" }: ParagraphProps) {
 return (
  <p
   className={`text-blue-500 hover:text-blue-400 cursor-pointer ${sizeClasses[size]}`}
  >
   {children}
  </p>
 );
}
