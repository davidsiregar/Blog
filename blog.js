let blogs = [];

function addBlog() {
  let title = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let desc = document.getElementById("desc-area").value;
  let checkbox = displayByImage();
  // document.getElementById("checkbox");

  let image = document.getElementById("input-image").files[0];

  image = URL.createObjectURL(image);

  let blog = {
    title: title,
    startDate: startDate,
    endDate: endDate,
    desc: desc,
    image: image,
    checkbox: checkbox,
    author: "boys",
    postedAt: new Date(),
  };

  blogs.push(blog);
  // displayByImage();
  renderBlog();
}

function displayByImage() {
  let getIcon1 = document.getElementById("tech1");
  let getIcon2 = document.getElementById("tech2");
  let getIcon3 = document.getElementById("tech3");
  let getIcon4 = document.getElementById("tech4");
  let printIcon = "";

  if (getIcon1.checked == true) {
    printIcon += '<img src="asset/nodejs.png"  alt="">';
  }
  else{
    printIcon+="";
  }

  if (getIcon2.checked == true) {
    printIcon += '<img src="asset/nextjs.png"  alt="">';
  }
  else{
    printIcon+="";
  }

  if (getIcon3.checked == true) {
    printIcon += '<img src="asset/react.png"  alt="">';
  }
  else{
    printIcon+="";
  }

  if (getIcon4.checked == true) {
    printIcon += '<img src="asset/typescript.png"   alt="">';
  }
  else{
    printIcon+="";
  }

  return printIcon;
}

function renderBlog() {
  let blogContainer = document.getElementById("content-list");

  blogContainer.innerHTML = `<div class="content-list-item" >
  <div class="foto">
    <img src="asset/samsung.webp" alt="samsung" />
  </div>

  <div class="blog-content">
  <div class="title">
    <h1 onclick="renderBlogDetail()"><a href="my-project-detail.html"  target="_blank">Mobile Apps </a></h1>
    <h3>durasi: 3 bulan</h3>
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
    veniam placeat, non sapiente illum quis error blanditiis repellat at
    quia reprehenderit ipsam aliquid soluta consectetur quasi expedita
    provident nostrum accusamus.
  </p>
  <div class="logo-js">
    <img src="asset/nodejs.png"   alt="">
    <img src="asset/react.png"  alt="">
    <img src="asset/nextjs.png"  alt="">
    <img src="asset/typescript.png"  alt="">

  </div>
  <div class="btn-group">
    <a href="#" class="btn-edit">Edit post</a>
    <a href="tugas.html" class="btn-delete" onclick="deletePost()">Delete Post</a>
  </div>
</div>
</div>`;

  for (let i = 0; i < blogs.length; i++) {
    let startDate = new Date(blogs[i].startDate);
    let endDate = new Date(blogs[i].endDate);

    let difference = endDate - startDate;
    let days = difference / (1000 * 60 * 60 * 24);
    // let month = Math.round(difference / (1000 * 60 * 60 * 24 * 30));

    let month = 0,
      years = 0,
      weeks = 0,
      day = 0;
    while (days) {
      if (days >= 365) {
        years++;
        days -= 365;
      } else if (days >= 30) {
        month++;
        days -= 30;
      } else if (days >= 7) {
        weeks++;
        days -= 7;
      } else {
        day++;
        days--;
      }
    }

    blogContainer.innerHTML += `<div class="content-list-item" >
    <div class="foto">
      <img src="${blogs[i].image}" alt="samsung" />
    </div>

    <div class="blog-content">
    <div class="title">
      <h1><a href="my-project-detail.html" target="_blank" onclick="renderBlogDetail()">${blogs[i].title}</a></h1>
      <h3>durasi: ${years} years ${month} month ${weeks} weeks ${day} day</h3>
    </div>
    <p>
    ${blogs[i].desc}
    </p>
    <div class="logo-js" >
     ${blogs[i].checkbox}


    </div>
    <div class="btn-group">
      <a href="#" class="btn-edit" onsubmit="editPost()">Edit post</a>
      <a href="#" class="btn-delete" onclick="deletePost()" >Delete Post</a>
    </div>
  </div>
</div>`;
  }
}

function renderBlogDetail() {
  let blogDetailContainer = document.getElementById("project-detail");

  // for (let i = 0; i < blogs.length; i++) {
  blogDetailContainer.innerHTML = `<h1>${blogs[i].title}</h1>
      <div class="content-detail">
        <div class="left">
          <img src="${blogs[i].image}" alt="">
        </div>
        <div class="right">
          <h2>Duration</h2>
          <div class="duration-date">
            <img src="asset/date.png" alt="">
            <h3>${blogs[i].startDate} - ${blogs[i].endDate}</h3>
          </div>
          <div class="month">
            <img src="asset/clock.jpg" alt="">
            <h3>${years} years ${month} month ${weeks} weeks ${day} day 1 Month</h3>
          </div>

          <h2>Technology</h2>
          <div class="tech-post">
            <div class="left">
              <div class="tech">
                <img src="asset/react.png" alt="">
                <h3>React js</h3>
            </div>

            <div class="tech2">
              <img src="asset/react.png" alt="">
              <h3>React js</h3>
          </div>
            </div>

          <div class="right">
            <div class="tech3">
              <img src="asset/nextjs.png" alt="">
              <h3>React js</h3>
          </div>

          <div class="tech4">
            <img src="asset/typescript.png" alt="">
            <h3>React js</h3>
        </div>

          </div>
          </div>
          </div>

      </div>
    <p>
    ${blogs[i].desc}
    </p>`;
  // }
}

function deletePost() {
  for (let i = 0; i < blogs.length; i++) {
    blogs.splice(i, 1);
  }
  renderBlog();
}

// function editPost() {
//   let title = document.getElementById("project-name").value;
//   let startDate = document.getElementById("start-date").value;
//   let endDate = document.getElementById("end-date").value;
//   let desc = document.getElementById("desc-area").value;
//   // let checkbox = document.getElementById(
//   //   "tech1",
//   //   "tech2",
//   //   "tech3",
//   //   "tech4"
//   // ).value;
//   let image = document.getElementById("input-image").files[0];

//   image = URL.createObjectURL(image);

//   let blog = {
//     title: title,
//     startDate: startDate,
//     endDate: endDate,
//     desc: desc,
//     image: image,
//     // checkbox: checkbox,
//     author: "boys",
//     postedAt: new Date(),
//   };

//   blogs.push(blog);
//   for (let i = 0; i < blogs.length; i++) {
//     let startDate = new Date(blogs[i].startDate);
//     let endDate = new Date(blogs[i].endDate);

//     let difference = endDate - startDate;
//     let days = difference / (1000 * 60 * 60 * 24);
//     // let month = Math.round(difference / (1000 * 60 * 60 * 24 * 30));

//     let month = 0,
//       years = 0,
//       weeks = 0,
//       day = 0;
//     while (days) {
//       if (days >= 365) {
//         years++;
//         days -= 365;
//       } else if (days >= 30) {
//         month++;
//         days -= 30;
//       } else if (days >= 7) {
//         weeks++;
//         days -= 7;
//       } else {
//         day++;
//         days--;
//       }
//     }

//     blogContainer.innerHTML += `<div class="content-list-item" >
//     <div class="foto">
//       <img src="${blogs[i].image}" alt="samsung" />
//     </div>

//     <div class="blog-content">
//     <div class="title">
//       <h1 onclick="renderBlogDetail()"><a href="my-project-detail.html" target="_blank" >${blogs[i].title}</a></h1>
//       <h3>durasi: ${years} years ${month} month ${weeks} weeks ${day} day</h3>
//     </div>
//     <p>
//     ${blogs[i].desc}
//     </p>
//     <div class="logo-js">
//       <img src="asset/playstore.png" alt="">
//       <img src="asset/android1.jpg" alt="">
//       <img src="asset/java.png" alt="">
//     </div>
//     <div class="btn-group">
//       <a href="#" class="btn-edit" onclick="editPost()">Edit post</a>
//       <a href="#" class="btn-delete" onclick="deletePost()" >Delete Post</a>
//     </div>
//   </div>
// </div>`;
//   }
// }
