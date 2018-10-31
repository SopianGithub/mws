
// function findLocation(x,y) {
//  	// console.log(x,y);
// 	for (var i=0; i< places.length;i++) {
//  		if (places[i].lokasi[0]==x && places[i].lokasi[1]==y) {
// 			return i;
//  		}
//  	}
 	
//  	return -1;

// }

// function showLocation(e) {
//     //console.log("You clicked " + e.latlng.lat + " and " + e.latlng.lng);

//     let idx = findLocation(e.latlng.lat, e.latlng.lng);
//     if (idx >= 0) {
//         imgElem.src = places[idx].image;
//         imgElem.alt = places[idx].title;
//         review.innerHTML = places[idx].review;
//     }
// }

// function setView() {
//     places = JSON.parse(localStorage.getItem('places'));
//     console.log(places);
//     if (places) {
//         for (var p of places) {
//             // var marker = L.marker(p.location).addTo(mymap).bindPopup(p.title);
//             // marker.on('click', showLocation);
//             var marker = L.marker(p.location).addTo(mymap);
// 			var circle = L.circle(p.location, {
// 				color: 'yellow',
// 				fillColor: '#f03',
// 				fillOpacity: 0.5,
// 				radius: 100
// 			}).addTo(mymap);

// 			marker.bindPopup(p.title).openPopup();
// 			circle.bindPopup(p.title);
// 			mymap.on('click', showLocation);
//         }
//     }
// }

// /*********========== To Initailize Maps =============*******/
let mymap = L.map('mapid').setView([-7.337608, 108.189514], 13);
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
					{
					  attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
					  maxZoom: 18,
					  id: 'mapbox.streets',
					 accessToken: 'sk.eyJ1IjoicnN1cmVnYXIiLCJhIjoiY2psdnp5MDRuMDd6YTNrcXN0Ym84ODBiZSJ9.WG19xwZy_L3HIU8eboaXXw'
			}).addTo(mymap);



function findLocation(x,y) {
 // console.log(x,y);
	for (var i=0; i< places.length;i++) {
 		if (places[i].lokasi[0]==x && places[i].lokasi[1]==y) {
 			return i;
 		}
 	}
 	return -1;
}

function showLocation(e) {
 //console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
	let ix= findLocation(e.latlng.lat,e.latlng.lng);
 	if (ix >=0) {
 		img.src= places[ix].gambar;
 		par.textContent=places[ix].review;
 	}
}

function setViewMaps() {
    places = JSON.parse(localStorage.getItem('places'));
    
    if(places){
		for (var p of places) {
		 var marker= L.marker(p.lokasi).addTo(mymap)
		 .bindPopup(p.sponsor);
		 marker.on('click', showLocation);
		} 
	}
}

const URL="https://y2nmws-ec474.firebaseapp.com/projfetch/data/peta.json";
fetch(URL)
 		.then(function(response){
 				if (response.status !== 200) { //HTTP Status
	 				console.log('Ada masalah. Status Code: ' + response.status);
 					return;
 				}
 				return response.json()
 		})
 		.then ( resp => {
 						let places= resp.places;
 						localStorage.setItem('places', JSON.stringify(resp.places));
 						setViewMaps();
 		})
 		.catch(function(err){
 			console.log(err);
		});

let gmb = document.getElementById("image");
let rev = document.getElementById("review");
let img = document.createElement('img');
let par = document.createElement('p');
let places = JSON.parse(localStorage.getItem('places'));
gmb.appendChild(img);
rev.appendChild(par);

setViewMaps();



