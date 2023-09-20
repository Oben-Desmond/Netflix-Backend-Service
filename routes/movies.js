var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({ data: netflixMovies, success: true, })
});

router.get('/trending', function (req, res, next) {
    res.json({ data: trendingMovies, success: true, })
});

module.exports = router;

const netflixMovies = [
    {
        posterURL: "https://www.liverpoolfilmoffice.tv/wp-content/uploads/2021/03/The-Irregulars-Netflix-Key-Art-Landscape-1024x629.jpg",
        movieURL: "https://www.youtube.com/embed/lTE5MAGpflw?si=PDwEQ2e0lpdWixUf",
        title: "The Irregulars",
        category: "Super Hero",
        year: 2019
    },
    {
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarp8CCDBNdUJeydcpv7cqucDxXCj9u-CodV4tmwBKT4o3p2YhN3Eu5a5eTcAv13eLVqQ&usqp=CAU",
        movieURL: "https://www.youtube.com/embed/tqVVrTvrI8U?si=GjSa6u5J50yimviO",
        title: "The Glory",
        category: "Christian",
        year: 2021
    },
    {
        posterURL: "https://www.bt.com/content/dam/bt/portal/images/articles/tv/tv-film-netflix-grey-man-new-keyart.jpg/jcr:content/renditions/landscape-desktop.764.430.jpg",
        movieURL: "",
        title: "Gray Man",
        category: "Science Fiction",
        year: 2022
    },
    {
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Duo0ktYYwZHHlPgOzq31rHsR3-MOPjWnEDmsZ48-nHEYN4Mpr8VpAN1jUWzpiE56WGY&usqp=CAU",
        movieURL: "https://www.youtube.com/embed/BmllggGO4pM?si=DrLtG-WuWtuBKr60",
        title: "Dark",
        category: "Horror",
        year: 2020
    },
    {
        posterURL: "https://i.ytimg.com/vi/5oFOGQJ_91c/maxresdefault.jpg",
        movieURL: "https://www.youtube.com/embed/IE8HIsIrq4o?si=mKFGQaO9zYcs-lK6",
        title: "The Adam Project",
        category: "Horror",
        year: 2021
    },
    {
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmuhfXZKo1_dtYT6AjGlNRjRatoR9zaTnSw&usqp=CAU",
        movieURL: "https://www.youtube.com/embed/OgW7L2uq2VM?si=16zjL8YnMxUWXfxB",
        title: "Sanctum",
        category: "fiction",
        year: 2023
    }
];



const trendingMovies = [
    {
        posterURL: "https://wallpapercave.com/wp/wp7630987.jpg",
        movieURL: "https://www.youtube.com/embed/jAy6NJ_D5vU?si=ZiFvjY6r8FljfREa",
        title: "Dare Devil",
        category: "Action",
        year: 2021
    },
    {
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLTl62LPXQyjcIw9HpMfCY7fbv2QpjM_9Y7MWeNVnXUIdyPILiovjNIa2a6t0d2DGRkk&usqp=CAU",
        movieURL: "https://www.youtube.com/embed/mmnQzRP-NZ4?si=p6vA_kTJ3xunjm-x",
        title: "Scoop",
        category: "Action",
        year: 2021
    }, {
        posterURL: "https://vmagazine.com/wp-content/uploads/2022/04/0ce99b5b45381be1362b9f9de9bf1033.jpg",
        movieURL: "https://www.youtube.com/embed/-voLo_TIWf4?si=wUdH2rHYbAqc45V1",
        title: "Half Time",
        category: "Action",
        year: 2021
    }, {
        posterURL: "https://i.ytimg.com/vi/6oUgmSS0aZA/maxresdefault.jpg",
        movieURL: "https://www.youtube.com/embed/1d0Zf9sXlHk?si=KqqnwFmoj_wW6DtP",
        title: "Enola Homes",
        category: "Action",
        year: 2021,
    },
    {
        posterURL: "https://www.coherentcinema.com/wp-content/uploads/2020/03/Pursuit-of-Happyness.jpg",
        movieURL: "https://www.youtube.com/embed/DMOBlEcRuw8?si=JYEb3KUHhpBsVDir",
        title: "The Pursuit of Happiness",
        category: "Action",
        year: 2021
    },
    {
        posterURL: "https://external-preview.redd.it/your-thoughts-on-netflixs-new-action-movie-the-mother-v0-HBGMEQWdkCiFE9nygpzzHmiBcU0XroX_GlyAQ5G4YUA.jpg?auto=webp&s=13ece7d0f1e53ce43220b854d1e15d792d1c71b4",
        movieURL: "https://www.youtube.com/embed/8BFdFeOS3oM?si=KwYeIQoW3FjB8WgK",
        title: "The Mother",
        category: "Action",
        year: 2023
    }

]


