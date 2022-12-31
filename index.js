const blocks = [
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
        "gym": true,
        "school":false ,
        "store": false,
    },
    {
        "gym": true,
        "school": true,
        "store": false,
    },
    {
        "gym": false,
        "school": true,
        "store": false,
    },
    {
    "gym": false,
    "school": true,
    "store": true,
    }
    ]

    function findBuilding(blocks){
         
       let building= blocks.findIndex((x) => x.gym ===true && x.school===true)

       if(building==-1){
        console.log('sorry we cant find Building')
       }
       else{
        console.log(`You Bulding no is - ${building+1}`)
       }
    }
      
    findBuilding(blocks)

       
    
    // 1) first i have take all input blocks 
    // 2) Then buid the function which will argument as block i.e(arrays of blocks)
    // 3) Then with help of findIndex method i find my index if my requirment is match.
    // 4) If its match then simply return the index+1 
    // 5) Othewise it return the Massage 