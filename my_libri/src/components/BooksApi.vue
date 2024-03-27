<template>
    <div>
        <header>
            <h1>La mia bellissima libreria</h1>
            <nav>
                <ul>
                    <li v-for="category in categories" :key="category" @click="searchByCategory(category)">
                        {{ category }}
                    </li>
                </ul>
            </nav>
            <div>
                <input type="text" v-model="searchTerm" @input="searchBooks">
            </div>
        </header>
        <main>
            <div v-for="book in books" :key="book.key">
                <h2>{{ book.title }} </h2>
                <p>Autore: {{ book.author_name }}</p>
                <img :src="book.coverUrl" :alt="book.title">
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BooksApi',
    data() {
        return {
            categories: ['Romance', 'Mystery', 'Fiction', 'Fantasy'],
            books: [],
            loading: false,
            searchTerm: ''
        }
    },
    methods: {
        searchByCategory(category) {
            this.searchTerm = category;
            this.searchBooks();
        },
        searchBooks() {
            if (!this.searchTerm) {
                return;
            }
            const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(this.searchTerm)}&limit=10`;
            axios.get(url)
                .then(response => {
                    this.books = response.data.docs;
                    this.getBookCovers();
                    console.log(response.data.docs);
                }).catch(error => {
                    console.error('Errore', error);
                });
        },
        getBookCovers() {
            this.books.forEach(book => {
                if (book.cover_i) {
                    const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
                    book.coverUrl = coverUrl;
                }
            });
        }
    }
}

</script>