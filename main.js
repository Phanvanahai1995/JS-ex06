// Bài 1

const assignAr = function (arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
};

console.log(assignAr([1, 4, 3, 2], [5, 2, 6, 7, 1]));

// Bài 2

let arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// Hàm làm phẳng mảng
const flat2 = function (arr, newArr) {
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log(flat2(flat2(flat2(arr, []), []), []));

// // Bài 3

//Xây dựng hàm reduce2
Array.prototype.reduce2 = function (fn, initialValue) {
  if (arguments.length < 2) {
    initialValue = this[0];
    return initialValue;
  }

  for (let i = 0; i < this.length; i++) {
    initialValue = fn(initialValue, this[i], i, this);
  }

  return initialValue;
};

let arr1 = [
  ["a", 1, true],
  ["b", 2, false],
];

arr1 = arr1.flat();

const result = arr1.reduce2(
  (init, arr) => {
    if (typeof arr === "string") init[0].push(arr);
    if (typeof arr === "number") init[1].push(arr);
    if (typeof arr === "boolean") init[2].push(arr);
    return init;
  },
  [[], [], []]
);

console.log(result);

// Bài 4

var posts = [
  {
    title: "Tiêu đề bài viết 1",
    thumbnail: "./neom-3DPaL6XDcZE-unsplash.jpg",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        delectus temporibus eligendi aliquid recusandae error facilis
        perferendis quidem. Accusantium iure laudantium numquam ut neque
        voluptatibus hic asperiores natus velit ipsam!`,
  },
  {
    title: "Tiêu đề bài viết 2",
    thumbnail: "./neom-3DPaL6XDcZE-unsplash.jpg",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        delectus temporibus eligendi aliquid recusandae error facilis
        perferendis quidem. Accusantium iure laudantium numquam ut neque
        voluptatibus hic asperiores natus velit ipsam!`,
  },
  {
    title: "Tiều đề bài viết 3",
    thumbnail: "./neom-3DPaL6XDcZE-unsplash.jpg",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        delectus temporibus eligendi aliquid recusandae error facilis
        perferendis quidem. Accusantium iure laudantium numquam ut neque
        voluptatibus hic asperiores natus velit ipsam!`,
  },
  {
    title: "Tiều đề bài viết 4",
    thumbnail: "./neom-3DPaL6XDcZE-unsplash.jpg",
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        delectus temporibus eligendi aliquid recusandae error facilis
        perferendis quidem. Accusantium iure laudantium numquam ut neque
        voluptatibus hic asperiores natus velit ipsam!`,
  },
];

var html = `<div class="container">
    ${posts
      .map(function (post, index) {
        return `<div class="item ${index % 2 !== 0 ? "right" : ""}">
        <img src=${post.thumbnail} alt=""/>
        <div>
          <h2>${post.title}</h2>
          <p>
            ${post.excerpt}
          </p>
        </div>
      </div>`;
      })
      .join("")}
</div>`;

document.write(html);
