import {BookId} from "./BookId";
import {Book} from "./Book";

export interface BookRepository {
    find(id: BookId): Book;
    findAll(): Book[];
    save(book: Book): void;
    remove(id: BookId): void;
}