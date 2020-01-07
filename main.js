
document.getElementById("last").innerHTML = document.lastModified;


// import data from './internships.json'
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
            
            let n = data.content.$t.split(',');
            
            for(let i of n){
 
                let durr = i.split(":");
                
                switch(durr[0].replace(/ /g,'')){
                    case "pay":
                        temp.pay = durr[1].trim().toLowerCase(); break;
                    case "notes":
                        temp.notes = durr[1].trim(); break;
                } 
            }
            
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
            
                console.log(test);
            
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
