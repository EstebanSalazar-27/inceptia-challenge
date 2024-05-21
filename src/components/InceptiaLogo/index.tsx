interface LogoProps {
 size?: "sm" | "md" | "lg";
}

const LogoSizes = {
 sm: "w-44",
 md: "w-60",
 lg: "w-80",
};
function Logo({ size = "sm" }: LogoProps) {
 return (
  <img
   className={`${LogoSizes[size]} rounded-sm shadow-sm`}
   src="/inceptia.png"
   alt="Inceptia Logo"
  />
 );
}
export default Logo;
