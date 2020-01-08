/* iM SORRY */


document.getElementById("last").innerHTML = document.lastModified;


var sheet = "https://spreadsheets.google.com/feeds/list/1073N87suMlax63_94Jip5AaQxcq2Hxw5EnTJYMNKbg0/2/public/basic?alt=json";

var main = new Vue({
    el: '#internships',
    data: {
        search: "",
        by: "company",
        reverse: false,
        entries: []
    },
    
    mounted(){
      this.fetchData();
       
    },
    
    methods: {
        
        fetchData: function(){
            
            var self = this;
            
             var url = "https://spreadsheets.google.com/feeds/list/1073N87suMlax63_94Jip5AaQxcq2Hxw5EnTJYMNKbg0/2/public/basic?alt=json";
        
        
            
        function parse(data){
            
            
            let temp = {
                company: data.title.$t,
                role: null,
                pay: null,
                notes: null
            };
            
            
            temp.pay = data.content.$t.split(',')[0].substr(4).trim().toLowerCase();
            
            temp.notes = (data.content.$t.split(',').slice(1).join(',')).substr(8);
            
            
            return temp;
            
        }

        $.getJSON(url, function(res) {

               
            })
            .done(function(res) {
            
                let test = [];
            
            
                for(let i of res.feed.entry){
                 test.push(parse(i));
                }
            
            
             document.getElementById("count").innerHTML = test.length;
            
            self.entries = test;
            
               // console.log(test);
            
            });
        },
        
        sort: function(key){
            
    
        }
        
    },
    
    computed: {
        
        query() {
          return this.entries.filter(entry => {
            return entry.company.toLowerCase().includes(this.search.toLowerCase())
          })
        }

    }

});
