const data = [
    {
        country: "Japan",
        place: "Fuji Mount",
        describe: "Fuji Mount is famous for being the highest point in Japan, and also for the beautiful five lakes.Most tourists go here during cherry blossom or autumn season, but it's a great destination in the summertime as well. ",
        img: "/img/Mount-Fuji.jpg",
    },
    {
        country: "Switzerland",
        place: "The Matterhorn",
        describe: "A glacier paradise, the Matterhorn is among the most spectacular things to see in Switzerland. This is an iconic landmark that is defining every spectacle of nature. Marked as one of the highest ranges of mountains, located in the Alps, Matterhorn is one of the reasons why Switzerland is the best honeymoon destination in the world.",
        img: "img/TheMatterhorn.jpg",
    },
    {
        country: "Vietnam",
        place: "Golden Bridge",
        describe: "The Golden Bridge in Da Nang, Vietnam, features giant stone hands that support the structure, providing breathtaking views of the surrounding landscapes. Its unique design and scenic location make it a must-visit attraction for tourists.",
        img: "img/Golden-Bridge.jpg",
    },
    {
        country: "Vietnam",
        place: "Ban Gioc Waterfall",
        describe: "The Golden Bridge in Da Nang, Vietnam, features giant stone hands that support the structure, providing breathtaking views of the surrounding landscapes. Its unique design and scenic location make it a must-visit attraction for tourists.",
        img: "img/BanGioc.jpg",
    },
    {
        country: "Vietnam",
        place: "Golden Bridge",
        describe: "The Golden Bridge in Da Nang, Vietnam, features giant stone hands that support the structure, providing breathtaking views of the surrounding landscapes. Its unique design and scenic location make it a must-visit attraction for tourists.",
        img: "img/Golden-Bridge.jpg",
    },
    {
        country: "Vietnam",
        place: "Golden Bridge",
        describe: "The Golden Bridge in Da Nang, Vietnam, features giant stone hands that support the structure, providing breathtaking views of the surrounding landscapes. Its unique design and scenic location make it a must-visit attraction for tourists.",
        img: "img/Golden-Bridge.jpg",
    },
    {
        country: "Vietnam",
        place: "Golden Bridge",
        describe: "The Golden Bridge in Da Nang, Vietnam, features giant stone hands that support the structure, providing breathtaking views of the surrounding landscapes. Its unique design and scenic location make it a must-visit attraction for tourists.",
        img: "img/Golden-Bridge.jpg",
    },
];







const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="country" style="--idx: 0">${data[i].country}</h5>
            </span>
            <span>
                <h1 class="place" style="--idx: 1">${data[i].place}</h1>
            </span>
            <span>
                <p class="describe" style="--idx: 2">${data[i].describe}</p>
            </span>
            <span>
                <button class="discover-button" style="--idx: 3">
                    Discover Now
                </button>
            </span>
        </div>
    
    `;

    ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");

thumbnailListWrapper.innerHTML += `
        <div class="thumbnail zoom">
            <img src="${data[0].img}" alt="">
        </div>
        `;

for (let i = 1; i < data.length; i++) {
    thumbnailListWrapper.innerHTML += `
        <div class="thumbnail" style="--idx: ${i - 1}">
            <img src="${data[i].img}" alt="">
        </div>
        `;
}


const nextBtn = document.querySelector(".navigation .next-button");
  
var currentIndex = 0;

nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }

    if (currentIndex < data.length - 1) {
        currentIndex++;
    } else currentIndex = 0;
    
    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`
})
