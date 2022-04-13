const macObj = {
  name: "Mac Book Air 13-inch",
  ram: [
    {
      ramSize: 8,
      active: true,
      memory: [
        {
          active: true,
          size: 256,
          price: 12000000,
        },
        {
          active: false,
          size: 512,
          price: 15000000,
        },
      ],
    },
    {
      ramSize: 16,
      active: false,
      memory: [
        {
          active: true,
          size: 256,
          price: 17000000,
        },
        {
          active: false,
          size: 512,
          price: 20000000,
        },
        {
          active: false,
          size: 1024,
          price: 21000000,
        },
      ],
    },
  ],
  colors: [
    {
      name: "Gold",
      img: "",
    },
    {
      name: "Silver",
      img: "",
    },
    {
      name: "SpaceGrey",
      img: "",
    },
  ],
};

let arr = [
  {
    id:1,
    title: 'MacBook Air 13-inch',
    color: 'gold',
    ram: {
     GB8:[{
       memory:'256GB',
       price: 12497000
     },
     {
      memory:'512GB',
      price: 15066000
    }],
     GB16: [{
      memory:'256GB',
      price: 16935000
    },
    {
     memory:'512GB',
     price: 19270500
   },
   {
    memory:'1TB',
    price: 20438500
  }]
    },
    imgs: ['images/mac-pink.webp','images/mac-pink2.webp','images/mac-pink3.webp','images/mac-pink4.webp','images/mac-pink5.webp']
  },
  {
    id:2,
    title: 'MacBook Air 13-inch',
    color: 'silver',
    ram: {
     GB8:[{
       memory:'256GB',
       price: 12497000
     },
     {
      memory:'512GB',
      price: 15066000
    }],
     GB16: [{
      memory:'256GB',
      price: 16935000
    },
    {
     memory:'512GB',
     price: 19270500
   },
   {
    memory:'1TB',
    price: 21606500
  }]
    },
    imgs: ['images/mac-silver.webp','images/mac-silver2.webp','images/mac-silver3.webp','images/mac-silver4.webp','images/mac-silver5.webp']
  },
  {
    id:3,
    title: 'MacBook Air 13-inch',
    color: 'space grey',
    ram: {
     GB8:[{
       memory:'256GB',
       price: 12497000
     },
     {
      memory:'512GB',
      price: 15066000
    }],
     GB16: [{
      memory:'256GB',
      price: 16935000
    },
    {
     memory:'512GB',
     price: 19270500
   },
   {
    memory:'1TB',
    price: 21606500
  }]
    },
    imgs: ['images/mac-grey.webp','images/mac-grey2.webp','images/mac-grey3.webp','images/mac-grey4.webp','images/mac-grey5.webp']
  }
]