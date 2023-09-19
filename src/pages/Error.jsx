import { useRouteError } from "react-router-dom";
import "../styles/Error.css"
import LayoutBase from "../components/layout/LayoutBase";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <LayoutBase>
      <div id="error-page">
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </LayoutBase>
  );
}