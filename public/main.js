
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
            
            var uwu = [];
            
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
                        temp.pay = durr[1]; break;
                    case "role":
                        temp.role = durr[1]; break;
                    case "notes":
                        temp.notes = durr[1]; break;
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
            
                uwu = test;
            
                /* this.entries =  [
    {company: "COMPANY", pay: '305-917-1301', notes: 'IT Manager', industry: 'industry' },
    {  company: "COMPANY", pay: '210-684-8953', notes: 'Paleontologist', industry: 'industry' }]; */
            
                console.log(test);
            
            });
            
            setTimeout(() => {
            
            document.getElementById("count").innerHTML = uwu.length;
            this.entries = uwu;
            
    
            
            }, 1000);
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
