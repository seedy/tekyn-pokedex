import { useRouter } from "next/router";
import { ReactNode, useMemo } from "react";

interface RouteProps {
  href: string;
  children?: ReactNode;
}
const Route = ({ href, children }: RouteProps) => {
  const { asPath } = useRouter();
  console.log(href, asPath);

  const matches = useMemo(() => asPath === href, [asPath, href]);

  if (matches) {
    return <>{children}</>;
  }
  return null;
};

export default Route;
