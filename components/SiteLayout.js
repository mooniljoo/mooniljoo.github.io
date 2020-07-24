import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
const SiteLayout = (props) => {
  const router = useRouter();
  return (
    <>
      <Header pathname={router.pathname} />
      {props.children}
      <Footer />
    </>
  );
};
export default SiteLayout;
