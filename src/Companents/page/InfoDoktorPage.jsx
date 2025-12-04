import { useParams } from "react-router-dom";
import InfoDoktors from "../data/InfoDoktors.json";
import Breadcrumbs from "../Breadcrumbs";

function InfoDoktorPage() {
  const { productId } = useParams();


  const product = InfoDoktors.find((p) => p.id === Number(productId));

  if (!product) return <h2>Товар не найден</h2>;

  return (
    <div className="p-4">
      <Breadcrumbs
        extraCrumb={{ name: product.name, link: `/catalog/${product.id}` }}
      />

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 rounded-lg"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          <p className="mb-4">{product.description}</p>

          {product.price && (
            <p className="font-semibold text-lg">Цена: ${product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoDoktorPage;
