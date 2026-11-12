import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isPending,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page: Math.max(1, page) }),
  });

  // PRE-FETCHING
  const pageCount = Math.max(1, Math.ceil((count ?? 0) / PAGE_SIZE));

  const safePage =
    count === undefined ? Math.min(page, 1) : Math.min(page, pageCount);

  useEffect(() => {
    if (typeof count === "number" && page > pageCount) {
      const nextSearchParams = new URLSearchParams(searchParams);
      nextSearchParams.set("page", String(pageCount));
      setSearchParams(nextSearchParams, { replace: true });
    }
  }, [count, page, pageCount, searchParams, setSearchParams]);

  if (safePage < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, safePage + 1],
      queryFn: () => getBookings({ filter, sortBy, page: safePage + 1 }),
    });

  if (safePage > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, safePage - 1],
      queryFn: () => getBookings({ filter, sortBy, page: safePage - 1 }),
    });

  return { isPending, error, bookings, count };
}
