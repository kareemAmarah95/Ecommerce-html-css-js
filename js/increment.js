let count = 1;


    

    function decrementer(count){
            if(count <= 1 ){
                count = 1;
            }else{
             count -= 1;
                document.querySelector(".quantity-value").innerHTML = count;
            }
            
         }

    function incrementer(count){
        count +=1;
        
        document.querySelector(".quantity-value").innerHTML = count;
    }
 

 
 
 

 