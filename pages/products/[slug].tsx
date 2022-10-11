import ProductSlug from "../../components/pages/ProductSlug";
import { Meta } from "../../layouts/Meta";
import { Main } from "../../templates/Main";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="The coffee house"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <ProductSlug />
    </Main>
  );
};

export default Index;
