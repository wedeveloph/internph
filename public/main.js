// import data from './internships.json'
var sheet = "https://spreadsheets.google.com/feeds/list/1073N87suMlax63_94Jip5AaQxcq2Hxw5EnTJYMNKbg0/2/public/basic?alt=json";


var main = new Vue({
    el: '#internships',
    data: {
        ascending: false,
        sortColumn: '',
        rows: null
    },

    created: function () {
        this.fetchData()
    },

    watch: {
        currentPage: 'fetchData'
    },

    methods: {

        "fetchData": function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', sheet)
            xhr.onload = function () {
                self.entries = JSON.parse(xhr.responseText)
                self.entries = self.entries.feed.entry
                console.log(self.entry)
            }
            xhr.send()
        },

        "sortTable": function sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            var ascending = this.ascending;

            this.rows.sort(function (a, b) {
                if (a[col] > b[col]) {
                    return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                    return ascending ? -1 : 1
                }
                return 0;
            })
        }
    },

    computed: {
        "columns": function columns() {

            if (this.rows.length == 0) {
                return [];
            }
            return Object.keys(this.rows[0])

        }
    }

});
