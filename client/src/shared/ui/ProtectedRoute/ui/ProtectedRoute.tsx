import {
  logout,
  selectAdminRole,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "@/app/redux";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const isAuthenticated = useAppSelector(selectUser);

  if (!isAuthenticated) {
    return <Navigate to={PAGE_ROUTES.SIGNIN} replace />;
  }

  return <Outlet />;
}

export function ProtectedAdminRoute() {
  const isAdmin = useAppSelector(selectAdminRole);
  const dispatch = useAppDispatch();

  if (!isAdmin) {
    dispatch(logout());
    return <Navigate to={PAGE_ROUTES.SIGNIN} replace />;
  }

  return <Outlet />;
}
