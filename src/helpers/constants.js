import csharp from "../assets/images/skills/csharp.png"
import firebase from "../assets/images/skills/firebase.png"
import mongodb from "../assets/images/skills/mongodb.png"
import mysql from "../assets/images/skills/mysql.png"
import php from "../assets/images/skills/php.png"
import react from "../assets/images/skills/react.png"

const appName = "PORTFOLIO"

const localStorageConstants = {
    theme: `${appName}-THEME`
}

const cartoons = [
    {
        Id: "1",
        Name: "Courage the Cowardly Dog",
        Src: require("../assets/images/cartoons/1.jpg")
    },
    {
        Id: "2",
        Name: "Ed, Edd n Eddy",
        Src: require("../assets/images/cartoons/2.jpg")
    },
    {
        Id: "3",
        Name: "Dexter's Laboratory",
        Src: require("../assets/images/cartoons/3.jpg")
    },
    {
        Id: "4",
        Name: "Johnny Bravo",
        Src: require("../assets/images/cartoons/4.jpg")
    },
    {
        Id: "5",
        Name: "Ну, погоди!",
        Src: require("../assets/images/cartoons/5.jpg")
    },
    {
        Id: "6",
        Name: "The Grim Adventures of Billy & Mandy",
        Src: require("../assets/images/cartoons/6.jpg")
    },
    {
        Id: "7",
        Name: "Samurai Jack",
        Src: require("../assets/images/cartoons/7.jpg")
    },
    {
        Id: "8",
        Name: "Camp Lazlo",
        Src: require("../assets/images/cartoons/8.jpg")
    },
    {
        Id: "9",
        Name: "The Marvelous Misadventures of Flapjack",
        Src: require("../assets/images/cartoons/9.jpg")
    },
    {
        Id: "10",
        Name: "Biker Mice from Mars",
        Src: require("../assets/images/cartoons/10.jpg")
    },
    {
        Id: "11",
        Name: "Foster's Home for Imaginary Friends",
        Src: require("../assets/images/cartoons/11.jpg")
    },
    {
        Id: "12",
        Name: "SpongeBob SquarePants",
        Src: require("../assets/images/cartoons/12.jpg")
    },
    {
        Id: "13",
        Name: "Scooby-Doo!",
        Src: require("../assets/images/cartoons/13.jpg")
    },
    {
        Id: "14",
        Name: "Mr. Bean",
        Src: require("../assets/images/cartoons/14.jpg")
    },
    {
        Id: "15",
        Name: "Avatar the Last Airbender",
        Src: require("../assets/images/cartoons/15.jpg")
    },
    {
        Id: "16",
        Name: "The Flintstones",
        Src: require("../assets/images/cartoons/16.jpg")
    },
    {
        Id: "17",
        Name: "The Fairly OddParents",
        Src: require("../assets/images/cartoons/17.jpg")
    },
    {
        Id: "18",
        Name: "Justice League",
        Src: require("../assets/images/cartoons/18.jpg")
    },
    {
        Id: "19",
        Name: "Danny Phantom",
        Src: require("../assets/images/cartoons/19.jpg")
    },
    {
        Id: "20",
        Name: "Phineas and Ferb",
        Src: require("../assets/images/cartoons/20.jpg")
    },
    {
        Id: "21",
        Name: "My Gym Partner's a Monkey",
        Src: require("../assets/images/cartoons/21.jpg")
    },
    {
        Id: "22",
        Name: "Krypto the Superdog",
        Src: require("../assets/images/cartoons/22.jpg")
    },
    {
        Id: "23",
        Name: "The Powerpuff Girls",
        Src: require("../assets/images/cartoons/23.jpg")
    },
    {
        Id: "24",
        Name: "The Simpsons",
        Src: require("../assets/images/cartoons/24.jpg")
    },
]

const skills = [
    {
        Id: "1",
        Src: react
    },
    {
        Id: "2",
        Src: csharp
    },
    {
        Id: "3",
        Src: firebase
    },
    {
        Id: "4",
        Src: mongodb
    },
    {
        Id: "5",
        Src: mysql
    },
    {
        Id: "6",
        Src: php
    }
]

export {
    localStorageConstants,
    cartoons,
    skills
}