async function insertion(){
    const ele=document.querySelectorAll('.sort');

    ele[0].style.background='rgb(95, 255, 218)';
    for(let i=1; i<ele.length; i++)
    {
        ele[i].style.background='rgb(255, 105, 105)';
        let key=ele[i].style.height;
        let j=i-1;

        while(j>=0 && (parseInt(key)<parseInt(ele[j].style.height)))
        {
            ele[j].style.background='rgb(255, 105, 105)';
            ele[j+1].style.height=ele[j].style.height;
            j--;
            
            await delay(time);
            for(let k=0; k<i; k++)
            {
                ele[k].style.background='rgb(40, 255, 205)';
            }
        }

        ele[j+1].style.height=key;
        ele[i].style.background='rgb(40, 255, 205)';
    }
}

document.getElementById('insertion').addEventListener('click',async function(){
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableNewArray();
    enableSizeSlider();
    enableSortingBtn();
});

