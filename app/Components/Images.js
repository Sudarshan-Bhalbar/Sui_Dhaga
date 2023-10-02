const Items = [
  {
    
    Id: 1,
    ItemName: "Jersey trousers",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "Upper",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 1,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe1%2F51%2Fe151f22058e91ac8f21d1f0236eb21cc9c431290.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F46%2F3e%2F463ed34cd306eb5825208ad2b24ad4f6b5681c61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 2,
    ItemName: "V-neck blouse",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 1,599.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdd%2Fd6%2Fddd64901b905c93761d653bcd7ee224135c8f7be.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2F0b%2Fb10b2bd6b78369d1d3c0be004e9ce4801a52304b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    ],
  },
  {
    Id: 3,
    ItemName: "Rib-knit jumper",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 2,999.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff6%2F85%2Ff68534609bb31f508d6c968ae3bd7ac2d03dee98.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe0%2F16%2Fe01616ab34aff41888f58ae2a6aea837011f1567.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 4,
    ItemName: "Slim Mom High Ankle Jeans",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 3,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fac%2F33%2Fac33c033d44e6e37aabfa44cf7d06bfc5545b8ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbc%2F84%2Fbc8490c84b8d9f88ff539b28ce503a54c3c5bc79.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 5,
    ItemName: "Pendant earrings",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 5,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F25%2F72%2F2572da567009c0b550805cfb62aab91698c0a72c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd6%2F66%2Fd6669aed5000d99a007a826949edcfacf4646580.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 6,
    ItemName: "Oversized printed T-shirt",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 1,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2Fab%2Fc6ab5b0f42b01b7d7470e1046e3c2163038b1a8b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F49%2Fc9%2F49c9883c6a307e945c3adebad7d3708a784505d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 7,
    ItemName: "Jersey trousers",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 1,499.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe1%2F51%2Fe151f22058e91ac8f21d1f0236eb21cc9c431290.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F46%2F3e%2F463ed34cd306eb5825208ad2b24ad4f6b5681c61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
  {
    Id: 8,
    ItemName: "V-neck blouse",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 1,599.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fdd%2Fd6%2Fddd64901b905c93761d653bcd7ee224135c8f7be.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb1%2F0b%2Fb10b2bd6b78369d1d3c0be004e9ce4801a52304b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
    ],
  },
  {
    Id: 9,
    ItemName: "Rib-knit jumper",
    ItemDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    Itemtype: "",
    ItemSize: ["SM","M","L","XL","XXL","XXXL"],
    ItemPrice: "Rs. 2,999.00",
    ItemImageSrc: [
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff6%2F85%2Ff68534609bb31f508d6c968ae3bd7ac2d03dee98.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe0%2F16%2Fe01616ab34aff41888f58ae2a6aea837011f1567.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    ],
  },
];



export default Items;
