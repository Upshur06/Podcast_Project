
let bearer_token = ''
let url = '';
let bearer = 'Bearer ' + bearer_token;

function fetch_featured(){
    let show_id = "";
    fetch(url+"?ids="+show_id+"&market=US", {
        method:"GET",
        headers:{
            'Authorization':bearer,
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    })
    .then((data)=>{return data.json()})
   
    .then((data)=>{
        let show = data.shows[0];
        let featured_html = `
            <div class="featured">
            <img src='${show.images[1].url}' />
                <div>
                    <h2>${show.name}</h2>
                    <h4>${show.description}</h4>
                <h3>Don't forget to lisent to today's episode!</h3>
                <button>Listen now</button>
                </div>
            </div>
        `
        document.getElementById('featured').innerHTML = featured_html;
    })
 
}

function fetch_latest(){
    let show_id = "";
    fetch(url+'?ids='+shshow_id+'&market=US', {
        method: 'GET',
        headers:{
            "Authorization" : bearer,
            "Accept" : 'application/json',
            "Content-Type" : 'application/json'
        }
    })
    .then((data)=>{return data.json()})
    .then(console.log)
    .then((data)=>{
        data.forEach(element => {
            
        });
    })
}

