const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full bg-white items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
