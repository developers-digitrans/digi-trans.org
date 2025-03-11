import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./JsonLd";

interface BreadcrumbsProps {
  customPaths?: { [key: string]: string };
  omitHome?: boolean;
}

export default function Breadcrumbs({
  customPaths = {},
  omitHome = false,
}: BreadcrumbsProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Generate breadcrumb items for schema
  const schemaItems = [];
  if (!omitHome) {
    schemaItems.push({ name: "Home", url: "/" });
  }

  let currentPath = "";
  pathnames.forEach((path) => {
    currentPath += `/${path}`;
    const displayName =
      customPaths[path] ||
      path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
    schemaItems.push({ name: displayName, url: currentPath });
  });

  if (pathnames.length === 0 && omitHome) {
    return null;
  }

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-400">
          {!omitHome && (
            <li className="flex items-center">
              <Link
                to="/"
                className="flex items-center hover:text-white transition-colors"
              >
                <Home className="h-4 w-4 mr-1" />
                <span>Home</span>
              </Link>
            </li>
          )}

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName =
              customPaths[name] ||
              name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");

            return (
              <li key={name} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 text-gray-600" />
                {isLast ? (
                  <span className="text-white font-medium" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-white transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
