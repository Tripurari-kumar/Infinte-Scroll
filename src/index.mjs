const conatiner= document.querySelector('.container');


let limit =4;

let pageCount=1;

let postCount=1;



const getPosts= async ()=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);

  const data= await response.json();

  data.map((curElem, index)=>{
   const htmlData=`<div class="posts">
   <p id="post-id">
      ${pageCount++}
   </p>
   <h2 class="title">
    ${curElem.title}
   </h2>
   <p class="post-info">
     ${curElem.body}
   </p>
 </div>`;
 conatiner.insertAdjacentHTML('beforeend', htmlData);
  })
}

getPosts();

const showData =()=>{
  setTimeout(()=>{
    //  pageCount++;
     getPosts();
  }, 300)
}

window.addEventListener('scroll', ()=>{
   const {scrollHeight, scrollTop, clientHeight}= document.documentElement;

   //scrollHeight content at the moment height
   //clientHeight broswer window height
   //scrollTop is the height gone above the window while scrolling
   console.log('scrollTop =', scrollTop, 'clientHeight =',clientHeight, 'scrollHeight =',  scrollHeight);

   if(scrollTop + clientHeight >=scrollHeight){
     console.log('i am at bottom');
     showData();
   }
})