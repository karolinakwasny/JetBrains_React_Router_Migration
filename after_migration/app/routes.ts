import { 
  type RouteConfig, 
  index, 
  route 
} from "@react-router/dev/routes";

export default [
 
  index("routes/_index.tsx"),

  route("lp/mobile", "components/index/header-section/index.jsx"),

] satisfies RouteConfig;