let bearer_token = ''
let url = '';
let bearer = ;

function fetch_featured(){
    let show_id = "";
    fetch(url+"?ids="+show_id+"&market=US", {
        method:"GET",
        headers:{
            'Authorization':,
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
    let show_ids = "";
    fetch(url+'?ids='+show_ids+'&market=US', {
        method: 'GET',
        headers:{
            "Authorization" : ,
            "Accept" : 'application/json',
            "Content-Type" : 'application/json'
        }
    })
    .then((data)=>{return data.json()})
    .then((data)=>{
        data.shows.forEach(show => {
            let show_html = `
            <div class="show" onclick='location.href="show.html?id=${show.id}"'>

            <img src='${show.images[1].url}' />
                <div>
                    <h4>${show.name}</h4>
                    <h5>${show.publisher}</h5>
                </div>
            </div>
            `
            document.getElementById('shows').innerHTML += show_html;
        });
    })
    .catch(console.log)
}


function fetch_all(){
    fetch_featured();
    fetch_latest();
}

function get_Show(id){
    fetch(url+"/"+id+"?market=US",{
        method:"GET",
        headers:{
            'Authorization':,
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    })
    .then((data)=>{return data.json()})
    .then((data)=>{
        document.title = "pod - "+data.name;
        let header_html = `
            <img src='${data.images[1].url}' />
            <div>
                <p>PODCAST</p>
                <h2>${data.name}</h2>
                <h5>${data.publisher}</h5>
            </div>
        `
        document.getElementById('header').innerHTML = header_html
    })

}


function get_Episodes(id){
    fetch(url+"/"+id+"/episodes?market=US",{
        method:"GET",
        headers:{
            'Authorization':,
            'Accept':'application/json',
            'Content-Type':'application/json',
        }
    })
    .then((data)=>{return data.json()})
    .then((data)=>{
        data.items.forEach(episode => {
            let episode_html = `
                <div class="episode">
                    <img src="${episode.images[1].url}" />
                    <div class="episode_details">
                        <h2>${episode.name}</h2>
                    </div>
                        <div class='audio'>
                            <div class='play_button'>
                                <audio src="${episode.audio_preview_url}"controls></audio>                               
                            </div>
                            <p>Preview</p>
                        </div>
                </div>
            `
            document.getElementById('episodes').innerHTML += episode_html
        });
    })
}

