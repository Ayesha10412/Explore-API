
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts=> displayPosts(posts))
}


function displayPosts(posts){

    const postContainer = document.getElementById('posts-container')
for(const post of posts){

const div = document.createElement('div');
div.innerHTML = `
<div >
<h4>User-${post.userId}</h4>
<h5>Post : ${post.title}</h5>
<p> Post Description: ${post.body}</p>
</div>

`;

postContainer.appendChild(div)

}
}



loadPosts()

