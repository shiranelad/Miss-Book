import { bookService } from '../services/book-service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookDetails from '../views/book-details.cmp.js'

export default {
    // props: [""],
    template: `
        <section class="main-layout">
            <!-- <h1>Miss Book</h1> -->
            <book-filter @filtered="setFilter" ></book-filter>
            <!-- <p>{{displayMsg}}</p> -->
            <book-list :books="booksToShow" @remove="removeBook" @selected="selectBook"></book-list>
            <book-details :book="selectedBook" v-if="selectedBook"></book-details>
        </section>
    `,
    components: {
        bookService,
        bookFilter,
        bookList,
        bookDetails,
    },
    data() {
        return {
            books: null,
            filterBy: {
                title: '',
                fromPrice: 0,
                toPrice: 2000,
            },
            selectedBook: null,
            booksFound: -1,
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books);
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },

        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        removeBook(id) {
            bookService.remove(id)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === id)
                    this.books.splice(idx, 1)
                })
        }
    },
    computed: {
        booksToShow() {
            if (!this.books || !this.books.length) return;
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.title, 'i');
            const min = this.filterBy.fromPrice || 0;
            const max = this.filterBy.toPrice || 2000;
            return this.books.filter(book => regex.test(book.title) && (min <= book.listPrice.amount) && max >= book.listPrice.amount)
        },
        // displayMsg() {
        //     if(this.booksFound === -1) {
        //         this.booksFound = this.books.length
        //         return `${this.booksFound} books found`
        //     }
        //     if (!this.books || !this.books.length) return;
        //     this.booksFound = this.books.length
        //     if (this.booksFound === 0)
        //         if (this.booksFound > 1) return `${this.booksFound} books found`
        //         else if (this.booksFound === 1) return `1 book found`
        //     if (this.booksFound <= 0 || !this.books || !this.books.length) return 'No books found'
        // }
    },

    unmounted() { },
}