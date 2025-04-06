import type { Options } from "../types/fetcher";
import useSWR from "swr";
import { fetcher } from "./fetcher";
import { notes } from "@noto/database";

export function useNote(refresh_token: Options["refresh_token"]) {
	const { data, error, isLoading, mutate } = useSWR("/api/v1/notes", () =>
		fetcher({
			refresh_token,
			method: "GET",
			url: "/api/v1/notes",
		}),
	);

	return {
		notes: data as notes[],
		isLoading,
		mutate,
		isError: error,
	};
}
