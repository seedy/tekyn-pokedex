import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";

interface RouteProps {
  href: string;
  children?: ReactNode;
}
const Route = ({ href, children }: RouteProps) => {
  const { asPath } = useRouter();

  const matches = useMemo(
    () => (href.startsWith("!") ? asPath !== href.slice(1) : asPath === href),
    [asPath, href]
  );

  if (matches) {
    return <>{children}</>;
  }
  return null;
};

export default Route;
