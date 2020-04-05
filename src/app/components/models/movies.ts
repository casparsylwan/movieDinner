

export class movies{


    public movies:{ img:string, name:string, trailer:string, price:number, date?:string[]}[] = [
        {
            img : "https://m.media-amazon.com/images/M/MV5BOGYyNWQ1MDItYzFjNC00NmVjLTlkZDQtNDg0YmI1YzAzYjVkXkEyXkFqcGdeQXVyMTMwOTMzNzU@._V1_.jpg",
            name : "Alfons Åberg",
            trailer : "https://www.youtube.com/embed/46KAmd6MEDI",
            price : 65,
            date: ["13","15","19"]
        },
            
        {
            img : "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
            name: "Avatar",
            trailer :"https://www.youtube.com/embed/6ziBFh3V1aM",
            price : 85,
            date: ["19","21"] 
        },
        {
            img:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            name: "Foret Gump",
            trailer : "https://www.youtube.com/embed/uPIEn0M8su0",
            price : 65,
            date: ["19","21"]
        },
        {
            img : "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg",
            name : "Harry Potter",
            trailer: "https://www.youtube.com/embed/VyHV0BRtdxo",
            price : 105,
            date: ["19","23"]
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
            name : "Matrix",
            trailer: "https://www.youtube.com/embed/m8e-FF8MsqU",
            price : 85,
            date: [ "13" ,"19","21"]
        },
        {
            img: "https://m.media-amazon.com/images/M/MV5BYWY2ZTcxY2QtOGNjMS00ZGI5LTliOTYtNDU3ZTcxMzVjYzU2XkEyXkFqcGdeQXVyNjA3NjE4OTc@._V1_.jpg",
            name: "Zoo",
            trailer: "https://www.youtube.com/embed/7VWcfaoGBGo",
            price : 95,
            date: ["19","23"]
        }
    ]


    imges:string[][] = [["https://m.media-amazon.com/images/M/MV5BOGYyNWQ1MDItYzFjNC00NmVjLTlkZDQtNDg0YmI1YzAzYjVkXkEyXkFqcGdeQXVyMTMwOTMzNzU@._V1_.jpg", "Alfons Åberg"],
    ["https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg","Avatar"],
    ["https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", "Foret Gump"],
    ["https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg","Harry Potter"],
    ["https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg","Matrix"],
    ["https://m.media-amazon.com/images/M/MV5BYWY2ZTcxY2QtOGNjMS00ZGI5LTliOTYtNDU3ZTcxMzVjYzU2XkEyXkFqcGdeQXVyNjA3NjE4OTc@._V1_.jpg","Zoo"]]

}

