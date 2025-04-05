import useSWR from "swr";
import { fetcher } from "./fetcher";
import { notes } from "@noto/database";

export function useNote(refresh_token: string | undefined) {
	const { data, error, isLoading } = useSWR(`http://localhost:1111/api/v1/notes`, (url) => fetcher(url, { method: "get", headers: { Authorization: `Bearer ${refresh_token}` } }));

	return {
		notes: data as notes,
		isLoading,
		isError: error,
	};
}
