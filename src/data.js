// data.js

const showsData = [
    {
      id: 1, // Unique identifier for the show
      title: "Breaking Point",
      description: "A gripping drama about a family's struggle to survive in a dystopian world to the world of many world multiverse universe comedy animals mountains.",
      genre: ["Drama", "Thriller"],
      rating: 4.8, // Out of 5
      views: "3.7k",
      plays: "12.6M",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/show_assets/media_1a453d93e765fdb599a53da1ce65c3b32dc0f7ef.webp",
      releaseYear: 2023,
      duration: "45 mins", 
      author: "sunshine",// Episode or movie duration
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13" },
        { title: "Ep 2 - Another Title", duration: "10:23" },
        // More episodes
      ],
      cast: ["John Doe", "Jane Smith"], // List of main actors
    },
    {
      id: 2,
      title: "Comedy Central Nights",
      description: "A hilarious collection of stand-up comedy specials.",
      genre: ["Comedy"],
      rating: 4.5,
      views: "4.5k",
      plays: "16.6M",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/show_assets/media_1c4dc8413bc23b11429e63515983433050372585.webp",
      releaseYear: 2022,
      duration: "30 mins",
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13" },
        { title: "Ep 2 - Another Title", duration: "10:23" },
        // More episodes
      ],

      reviews: [
        { user: "John Doe", comment: "Amazing show! Loved it." },
        { user: "Jane Smith", comment: "Highly recommend this one." },
      ],
      moreLikeThis: [
        {
          title: "Similar Show 1",
          image: "https://d2wxtuh5s9v3ty.cloudfront.net/show_assets/media_1a453d93e765fdb599a53da1ce65c3b32dc0f7ef.webp",
        },
        {
          title: "Similar Show 2",
          image: "https://d2wxtuh5s9v3ty.cloudfront.net/6ce698dff63849ebcb71ab40ad87e3fe3eb6007b_320.webp",
        },
      ],
      cast: ["Emily Blake", "Chris Evans"],
    },
    {
      id: 3,
      title: "The Science Chronicles",
      description: "Explore groundbreaking discoveries and scientific adventures.",
      genre: ["Documentary", "Science"],
      rating: 4.7,
      views: "1.5k",
      plays: "10k",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/6ce698dff63849ebcb71ab40ad87e3fe3eb6007b_320.webp",
      releaseYear: 2021,
      duration: "1 hr",
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13" },
        { title: "Ep 2 - Another Title", duration: "10:23" },
        // More episodes
      ],
      cast: ["Dr. Alan Grant", "Prof. Ellie Sattler"],
    },
    // Add more shows as needed

    {
      id: 4, // Unique identifier for the show
      title: "Breaking Point",
      description: "A gripping drama about a family's struggle to survive in a dystopian world.",
      genre: ["Drama", "Thriller"],
      rating: 4.8, // Out of 5
      views: "3.8k",
      plays: "5.5M",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/2224d477b6702eb175946364cf86176154012478_320.webp",
      releaseYear: 2023,
      duration: "45 mins", // Episode or movie duration
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13" },
        { title: "Ep 2 - Another Title", duration: "10:23" },
        // More episodes
      ],
      cast: ["John Doe", "Jane Smith"], // List of main actors
    },

    {
      id: 5, // Unique identifier for the show
      title: "Breaking Point",
      description: "A gripping drama about a family's struggle to survive in a dystopian world.",
      genre: ["Drama", "Thriller"],
      rating: 4.8, // Out of 5
      views: "5k",
      plays: "3M",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/a805f4406019cfdf617aa223e416bee66bd9b3c0_320.webp",
      releaseYear: 2023,
      duration: "45 mins", // Episode or movie duration
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13", audioUrl: "/birds-and-waterfall-250309.mp3"},
        { title: "Ep 2 - Another Title", duration: "10:23", audioUrl: "/birds-and-waterfall-250309.mp3"},
        // More episodes
      ],
      cast: ["John Doe", "Jane Smith"], // List of main actors
    },

    {
      id: 6, // Unique identifier for the show
      title: "Breaking Point",
      description: "A gripping drama about a family's struggle to survive in a dystopian world.",
      genre: ["Drama", "Thriller"],
      rating: 4.8, // Out of 5
      views: "19k",
      plays: "17.8M",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/show_assets/media_4c9f87bc7177062b11a25cf9ea6e9d27644c893f.webp",
      releaseYear: 2023,
      duration: "45 mins", // Episode or movie duration
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13", audioUrl: "/birds-and-waterfall-250309.mp3"},
        { title: "Ep 2 - Another Title", duration: "10:23", audioUrl: "/birds-and-waterfall-250309.mp3"},
        // More episodes
      ],
      cast: ["John Doe", "Jane Smith"], // List of main actors
    },

    {
      id: 7, // Unique identifier for the show
      title: "Tere Aane Se | तेरे आने से",
      description: "A gripping drama about a family's struggle to survive in a dystopian world.",
      genre: ["Drama", "Thriller"],
      rating: 4.8, // Out of 5
      views: "7.9k",
      plays: "20k",
      image: "https://d2wxtuh5s9v3ty.cloudfront.net/cc7801ad907b8510b122ab238b5352889340efdf_320.webp",
      releaseYear: 2023,
      duration: "45 mins", // Episode or movie duration
      episodes: [
        { title: "Ep 1 - Some Title", duration: "11:13" , audioUrl: "/birds-and-waterfall-250309.mp3"},
        { title: "Ep 2 - Another Title", duration: "10:23", audioUrl: "/birds-and-waterfall-250309.mp3"},
        // More episodes
      ],
      cast: ["John Doe", "Jane Smith"], // List of main actors
    },

  ];
  
  export default showsData;
  