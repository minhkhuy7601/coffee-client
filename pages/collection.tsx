import CollectionPage from "../components/pages/CollectionPage";
import { Meta } from "../layouts/Meta";
import { Main } from "../templates/Main";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Tất cả sản phẩm - The coffee house"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <CollectionPage />
    </Main>
  );
};

export default Index;
