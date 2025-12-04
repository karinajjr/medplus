import { Link, useLocation } from "react-router-dom";

function Breadcrumbs({ extraCrumb }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm mb-4">
      <Link to="/">Главная</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const displayName = isLast && extraCrumb ? extraCrumb.name : decodeURIComponent(name);
        return (
          <span key={routeTo}>
            {" > "}
            {isLast ? <span>{displayName}</span> : <Link to={routeTo}>{displayName}</Link>}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
