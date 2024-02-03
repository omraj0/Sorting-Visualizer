async function selection(){
    const ele=document.querySelectorAll('.sort');
    for(let i=0; i<ele.length; i++)
    {
        let x=i;
        ele[i].style.background='rgb(255, 105, 105)';
        for(let j=i+1; j<ele.length; j++)
        {
            ele[j].style.background='rgb(255, 105, 105)';
            if(parseInt(ele[j].style.height)<parseInt(ele[x].style.height))
            {
                if(x!==i)
                {
                    ele[x].style.background='rgb(255, 255, 100)';
                }
                x=j;
            }
    
            else
            {
                ele[j].style.background='rgb(255, 255, 100)';
            }
        }
        await delay(time);
        swap(ele[i],ele[x]);
        ele[x].style.background='rgb(255, 255, 100)';
        ele[i].style.background='rgb(40, 255, 205)  ';
    }
    }
    document.getElementById("selection").addEventListener('click', async function(){
        disableNewArray();
        disableSizeSlider();
        disableSortingBtn();
        await selection();
        enableNewArray();
        enableSizeSlider();
        enableSortingBtn();
    });


       