import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="bg-slate-200 p-10 rounded-md w-[500px]">{children}</div>
    </>
  );
};

export default AuthLayout;
