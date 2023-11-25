import logosrc from "../assets/logo.svg";
console.log("this loads (logo.tsx)");

function Logo() {
  return (
    <>
      <img src={logosrc} className="logo" alt="MRDOOM" />
    </>
  );
}

export default Logo;
