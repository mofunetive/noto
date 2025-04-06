import { NoteService } from "./services/notes";

export default new NoteService();

export * from "./swr/fetcher";
export * from "./swr/useNote";
export * from "./swr/addNote";
export * from "./swr/delNote";
export * from "./swr/editNote";

export * from "./types/fetcher";
export * from "./types/http-method";
