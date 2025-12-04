import { Link } from "react-router-dom";
import InfoDoktors from "../data/InfoDoktors.json";
import Breadcrumbs from "../Breadcrumbs";

function DoctorDirectory() {
  return (
    <div className="p-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-4">Каталог товаров</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {InfoDoktors.map((item) => (
          <Link
            to={`/catalog/${item.id}`}
            key={item.id}
            className="border p-4 rounded hover:shadow"
          >
         
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-2"
            />

            <h2 className="font-bold">{item.name}</h2>
          
            {item.price && <p>Цена: ${item.price}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DoctorDirectory;
