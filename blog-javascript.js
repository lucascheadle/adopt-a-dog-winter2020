
const blogContent = [
    {
        blogHeadline: 'Traveling With Your Dog',
        blogPicture: './images/blog-1.jpg',
        blogText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id, sapiente deleniti impedit laudantium facilis nobis tenetur animi aliquid adipisci fugit provident fuga possimus quam quisquam ab magni dolore aliquam.'
    },

    {
        blogHeadline: 'How to Walk Multiple Dogs',
        blogPicture: './images/blog-2.jpg',
        blogText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id, sapiente deleniti impedit laudantium facilis nobis tenetur animi aliquid adipisci fugit provident fuga possimus quam quisquam ab magni dolore aliquam.'
    },

    {
        blogHeadline: 'Teach Your Dog to Fetch',
        blogPicture: './images/blog-3.jpg',
        blogText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id, sapiente deleniti impedit laudantium facilis nobis tenetur animi aliquid adipisci fugit provident fuga possimus quam quisquam ab magni dolore aliquam.'
    },
];

const target = document.getElementById('blog-container');

blogContent.forEach(function(dogBlog) {
    const box = document.createElement('div');
    box.setAttribute('class', 'box');
    box.setAttribute('id', 'firstBox')
    box.innerHTML += '<h2>' + dogBlog.blogHeadline + '</h2>';
    box.innerHTML += `<img src="${dogBlog.blogPicture}">`
    box.innerHTML += '<p>' + dogBlog.blogText + '</p>';

    target.appendChild(box);
})
/*
const div = document.createElement('div');
document.body.appendChild(div);

const blogPic = document.createElement('img');
blogPic.src = "./images/blog-1.jpg";
document.body.appendChild(blogPic);

const blogTitle = document.createElement('h2');
document.body.appendChild(blogTitle);

const blogText = document.createElement('p');
document.body.appendChild(blogText);*/
