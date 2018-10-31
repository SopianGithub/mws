var URL="data/catatan.json";

fetch(URL).then(function(response){
	if (response.status !== 200) { //HTTP Status
 		console.log('Ada masalah. Status Code: ' +
					 response.status);
 		return;
 	}
 	return response.json()
})
 .then( res => {
 		// let t = document.getElementById('hasil');
 		// t.textContent = text;
 		console.log(res.judul);
 		console.log(res.lokasi);
 } )
 .catch( err => console.log(err) );


var URL="data/catatan.json";

// fetch(URL)
//  .then(response=> response.json())
//  .then(	rsp => {
//  		console.log(rsp.judul);
//  		console.log(rsp.lokasi)
//  })
//  .catch((err)=> console.log(err));