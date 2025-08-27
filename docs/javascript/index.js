  function  populateYearOfBirth(startY, endY)  {
  	const yearSelect = document.getElementById('dobyear');
  	for(let year= startY; year<=endY; year++){
  		const option = document.createElement('option');
  		option.textContent =year;
  		option.value=year;
  		yearSelect.appendChild(option);	
  	}
  	
  }
    const startY = 1900;
  const currentY= new Date().getFullYear();
  populateYearOfBirth(startY, currentY);
  
  
  
   function populateMonthdropdown(){
  const monthSelect = document.getElementById('dobmonth');
  const month = ["January","Febuary","March","April","May","June","July","August","September","Octomber","November","December"];
  for(let i = 0; i<month.length; i++){
  	const option = document.createElement('option');
  	option.textContent= month[i];
  	option.value= i+1;
  	monthSelect.appendChild(option);
  
  	
  }
  
  }
  	populateMonthdropdown();
  	
  	
  	function populateDatedropdown(){
  		const selectDate = document.getElementById("dobdate");
  		const maxdate = 31;
  		for( let i = 0; i<maxdate; i++){
  			const option = document.createElement('option');
  			option.textContent = i;
  			option.value= i;
  			selectDate.appendChild(option); 
  		
  		}
   	}
   	populateDatedropdown();
   	
   	
   	
   	
   	function timedropdown(){
   		const timeSelect = document.getElementById("hour");
   		const timeMax =12;
   		for( let i = 0; i<timeMax; i++){
   			const option = document.createElement('option');
   			option.textContent= i;
   			option.value = i;
   			timeSelect.appendChild(option);
   		}
   		
   	}
   	timedropdown();
   	
   	
   		function minutedropdown(){
   		const timeSelect = document.getElementById("minute");
   		const timeMax =60;
   		for( let i = 0; i<timeMax; i++){
   			const option = document.createElement('option');
   			option.textContent= i;
   			option.value = i;
   			timeSelect.appendChild(option);
   		}
   		
   	}
   	minutedropdown();
   	
   	
   	function childdropdown(){
   		const childSelect = document.getElementById("child");
   		const timeMax =6;
   		for( let i = 0; i<timeMax; i++){
   			const option = document.createElement('option');
   			option.textContent= i;
   			option.value = i;
   			childSelect.appendChild(option);
   		}
   		
   	}
   childdropdown();




