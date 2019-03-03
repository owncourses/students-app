import * as Loadable from "react-loadable";

// @ts-ignore
import LoadingIndicator from "components/LoadingIndicator";

export default Loadable({
  loader: () => import("./index"),
  loading: LoadingIndicator
});
