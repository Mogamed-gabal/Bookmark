let bookName=document.getElementById('Name')
let bookUrl=document.getElementById('URL')
let myImage=document.getElementById("idintifyImage")
let submitBtn=document.getElementById('Sbmit')
let visitBtn=document.getElementById('visit')
let deleteBtn=document.getElementById('delete')
let myBox=document.getElementById('the-box')
let myContainer=document.getElementById('container')
let booksArray;
let myBookContainer=document.getElementById('book-container')
let myNom=document.getElementById('nom')
let myAlert=document.getElementById('name-alert')
let myAlertt=document.getElementById('url-alert')
let mySearch=document.getElementById('search')
/**make a local storage memory to the project */
if(localStorage.getItem('books')!=null)
{
    booksArray=JSON.parse(localStorage.getItem('books'))
    displayBook(booksArray)
}
else
{
    booksArray=[];
}
/**end of this function */

/**add new book */
let mycounter=booksArray.length;
    myNom.innerHTML=mycounter+"books";
    if(bookName.value==null)
    {
        myAlert.classList.remove('d-non')
    }
    
    else if(bookName.value==null)
    {
        {
            myAlertt.classList.remove('d-non')
        }
    }
    else
    {
        submitBtn.addEventListener('click',
function ()
{
    let myBook={
        name:bookName.value,
        Url:bookUrl.value,
        // img:myImage.value,
    }
    booksArray.push(myBook)
    localStorage.setItem('books',JSON.stringify(booksArray))
    clear()
    displayBook(booksArray)
    let mycounter=booksArray.length;
    myNom.innerHTML=mycounter+"books";

}
        )
    }


/**end of this function */
/**return the inputs to be ebpety */
function clear()
{
    let myBook={
        name:bookName.value="",
        Url:bookUrl.value="",
    }
    
}
/**end of this function */
/**display what did you add */x
function displayBook(x)
{
    let theBook='';
    for(let i=0;i<x.length;i++)
        {
            theBook +=
            `
            <div class="col-md-4 text-center " id="the-box">
            <div>
            <h5 class="px-2 py-4 text-white">"${x[i].name}"</h5>
            <p class="p-1 d-none">"${x[i].Url}"</p>
            <div class="actions">
            <a href="${x[i].Url}" class=" btn btn-outline-success py-1 px-2 ">Visit</a>    
            <button id="delete" onclick="dod(${i})" class="btn btn-light py-1 px-2">delete</button>
            </div>
        </div>
 
            </div>
            
            `
        }
        myContainer.innerHTML=theBook;
        
}
/**end of this function */
/**delete function */
function dod(index)
{
    booksArray.splice(`${index}`,1)
    localStorage.setItem('books',JSON.stringify(booksArray))
    displayBook(booksArray)
    let mycounter=booksArray.length;
    myNom.innerHTML=mycounter+"books";
}
/**end of function */
/**search by name fi=unction */

function searchBook(term)
{
    let mySearchResult=[];
    for(let i=0;i<booksArray.length;i++)
    {
        if(booksArray[i].name.toLowerCase().includes(term))
        {
            mySearchResult.push(booksArray[i]);
            displayBook(mySearchResult)
            
        }
    }
    
}


