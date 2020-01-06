

var internships = new Vue({
  el: '#internships',
  data: {
    ascending: false,
    sortColumn: '',
    rows: [
        
      {  company: "COMPANY", pay: '305-917-1301', notes: 'IT Manager', industry: 'industry' },
      {  company: "COMPANY", pay: '210-684-8953', notes: 'Paleontologist', industry: 'industry' }
    ]
  },
  methods: {
      
    "sortTable": function sortTable(col) {
      if (this.sortColumn === col) {
        this.ascending = !this.ascending;
      } else {
        this.ascending = true;
        this.sortColumn = col;
      }

      var ascending = this.ascending;

      this.rows.sort(function(a, b) {
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