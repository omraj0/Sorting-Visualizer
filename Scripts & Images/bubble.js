async function bubble(){

    const ele=document.querySelectorAll(".sort");
    
    for(let i=0; i<ele.length-1; i++)
    {
        for(j=0; j<ele.length-i-1; j++)
        {
            ele[j].style.background='rgb(255, 105, 105)';
            ele[j+1].style.background='rgb(255, 105, 105)';
    
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                await delay(time);
                swap(ele[j], ele[j+1]);
            }
    
            // ele[j].style.background='yellow';
            ele[j].style.background='rgb(255, 255, 100)';
            ele[j+1].style.background='rgb(255, 255, 100)';
        }
    
        ele[ele.length-i-1].style.background='rgb(40, 255, 205)';
    }
    ele[0].style.background='rgb(40, 255, 205)';
    }
    document.getElementById('bubble').addEventListener("click", async function(){
        disableNewArray();
        disableSizeSlider();
        disableSortingBtn();
        await bubble();
        enableNewArray();
        enableSizeSlider();
        enableSortingBtn();
    });


    
    


    

