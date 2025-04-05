import useSWR from "swr";
import { fetcher } from "./fetcher";
import { notes, Prisma } from "@noto/database";

export function addNote(input: Prisma.notesCreateInput, refresh_token: string | undefined) {
	const { data, error, isLoading } = useSWR(`http://localhost:1111/api/v1/notes`, (url) =>
		fetcher(url, {
			method: "post",
			body: JSON.stringify(input),
			headers: { Authorization: `Bearer ${refresh_token}` },
		}),
	);

	return {
		notes: data as notes,
		isLoading,
		isError: error,
	};
}
