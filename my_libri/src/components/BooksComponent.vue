<template>
    <div>
        <header>
            <h1>Libreria</h1>
            <select v-model="selectedCategory" @change="filterBooks">
                <option value="">Tutte le categorie</option>
                <option v-for="category in allCategories" :key="category" :value="category">
                    {{ category }}
                </option>
            </select>
        </header>

        <main>
            <div v-for="book in displayedBooks" :key="book.title">
                <div class="cover">
                    <img :src="book.coverUrl" :alt="book.title">
                </div>
                <div class="card-details">
                    <h2>{{ book.title }}</h2>
                    <p>Autore: {{ book.author }}</p>
                    <p>Autore: {{ book.first_publish_year }}</p>
                </div>

            </div>
        </main>
    </div>
</template>

<script>
import booksData from '@/assets/books.json';

export default {
    name: 'BooksComponent',
    data() {
        return {
            books: [],
            selectedCategory: ''
        }
    },
    computed: {
        allCategories() {
            const categories = new Set();
            this.books.forEach(book => categories.add(book.category));
            return Array.from(categories);
        },
        displayedBooks() {
            if(!this.selectedCategory){
                return this.books;
            } 
            
            return this.books.filter(book => book.category === this.selectedCategory);
          
        }
    },
    created(){
        this.filterBooks();
    },
    methods: {
        filterBooks() {
            this.books = booksData;
        }
    }
}
</script>