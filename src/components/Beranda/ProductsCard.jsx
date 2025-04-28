import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useProductStore, { fetchProducts } from "../../../service/api";
import { CardHeader, CardBody, Card, CardFooter } from "./Card";

const ProductPage = () => {
  const { productList } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full grid grid-cols-auto-fill gap-6 flex-col">
      {productList.map((product, i) => (
        <div key={i} onClick={() => navigate(`/detailproduct/${product.id}`)}>
          <Card>
            <CardHeader image={product.imgProduct} />
            <CardBody
              title={product.title}
              description={product.text}
              photo={product.imgProfile}
              name={product.author}
              jabatan={product.position}
              work={product.work}
            />
            <CardFooter
              count={product.count}
              rate={product.rate}
              price={product.price}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
