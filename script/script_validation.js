	//shows form on click
		function myFunction() {
  var x = document.getElementById("contacts-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

		function search() {
  var x = document.getElementById("search-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(){
  var results;
  if(results !== undefined){
    results = null;
  }
  if(!window.contactList){
    window.contactList = $ab();
  }else{
    results = contactList.search(searchForm.search.value);
  }
  document.getElementById('results').innerHTML = '';
  if(results.length>0){
    
    for(var i = 0;i<results.length;i++){
      document.getElementById('results').innerHTML += '<div class="contact-item">Name:'+results[i].first_name+'<br>Phone:'+results[i].phone+'</div><hr>';
    }
  } else{
   document.getElementById('results').innerHTML += '<div class="contact-item">There are no results for this name</div><hr>';
  }
  
  //do something with the results
  event.preventDefault();
});





