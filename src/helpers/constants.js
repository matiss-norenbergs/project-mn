import Sections from "components/sections"

import titan from "assets/images/titan.png"
import csharp from "assets/images/skills/csharp.png"
import firebase from "assets/images/skills/firebase.png"
import mongodb from "assets/images/skills/mongodb.png"
import mysql from "assets/images/skills/mysql.png"
import php from "assets/images/skills/php.png"
import react from "assets/images/skills/react.png"

const {
    contentSizeTypes,
    contentTypes
} = Sections

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

const homeSections = [
    {
        id: "about",
        title: "About",
        showTitle: false,
        contentProps: {},
        children: [
            {
                center: true,
                contentType: contentTypes.img,
                contentProps: {
                    src: titan,
                    preview: false
                }
            },
            {
                center: true,
                title: "Lorem, ipsum dolor",
                titleLevel: 2,
                contentType: contentTypes.text,
                contentProps: {
                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores atque debitis placeat magnam commodi asperiores quos est illum quibusdam enim dolorum, quod consequatur, natus amet rem animi, voluptate explicabo. Ad eaque inventore labore corrupti quod at repellat provident ducimus, optio, quisquam beatae consequatur debitis sit! Delectus cumque non veniam suscipit repellat laudantium soluta, distinctio recusandae eveniet, quam dignissimos minima iste. Officia eos exercitationem reiciendis rem fugit quod quasi deserunt debitis, cum iste temporibus sint cupiditate, eveniet consequuntur sunt officiis fugiat quis! Ipsam qui commodi, labore nisi laboriosam laudantium est aperiam quis praesentium error assumenda ducimus saepe ex accusamus enim iste? Unde ut blanditiis placeat nisi exercitationem aperiam, quasi repudiandae?"
                }
            },
        ]
    },
    {
        id: "cards",
        title: "Cards",
        contentSize: contentSizeTypes.large,
        children: [
            {
                center: false,
                title: "Title 1",
                titleLevel: 4,
                contentType: contentTypes.text,
                contentProps: {
                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, minus porro. Commodi nam, nobis aliquid unde, natus ratione repudiandae ipsam earum sit dolores, fuga at!"
                }
            },
            {
                center: false,
                title: "Title 2",
                titleLevel: 4,
                contentType: contentTypes.text,
                contentProps: {
                    children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatem atque veritatis exercitationem veniam. Ullam earum sequi nobis rerum quos porro molestias, accusantium incidunt quas voluptatem corporis."
                }
            },
            {
                center: false,
                title: "Title 3",
                titleLevel: 4,
                contentType: contentTypes.text,
                contentProps: {
                    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quidem debitis deserunt consectetur iste amet perspiciatis sequi ad ullam exercitationem, ducimus eligendi quam magni. Perferendis exercitationem doloremque ullam harum dolor?"
                }
            }
        ]
    },
    {
        id: "cartoons",
        title: "Cartoons",
        contentSize: contentSizeTypes.small,
        children: cartoons.map(({ Id, Name, Src }) => ({
            key: Id,
            center: true,
            title: Name,
            titleLevel: 6,
            contentType: contentTypes.img,
            contentProps: {
                src: Src,
                height: "100%"
            }
        }))
    },
    {
        id: "skills",
        title: "Skills",
        contentSize: contentSizeTypes.small,
        children: skills.map(({ Id, Src }) => ({
            key: Id,
            center: true,
            contentType: contentTypes.img,
            contentProps: {
                src: Src,
                preview: false
            }
        }))
    },
    {
        id: "projects",
        title: "Projects",
        showTitle: false,
        children: [
            {
                center: true,
                title: "Projects",
                titleLevel: 2,
                contentType: contentTypes.text,
                contentProps: {
                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis reiciendis veniam alias veritatis, tenetur molestiae nam dignissimos neque laudantium harum nesciunt excepturi suscipit odit odio mollitia fuga, deleniti ea nulla quos optio architecto? Laudantium corrupti placeat voluptatum alias eius asperiores totam sunt distinctio voluptatibus, sequi cupiditate, ut adipisci omnis facere aliquam beatae! Commodi soluta repudiandae exercitationem quis illum harum voluptatibus ipsam dignissimos sapiente iure reprehenderit sed voluptas amet ad rerum voluptatum, delectus assumenda omnis, veniam culpa et dolore. Aliquam molestiae quas repellendus, quisquam voluptatibus vel sapiente laudantium voluptatem maxime aperiam optio, commodi earum aspernatur expedita accusamus itaque? Exercitationem voluptatem eos enim quis deleniti obcaecati, perspiciatis hic accusamus quae illum repellendus. Facere architecto consequatur nostrum dignissimos quae mollitia ex omnis, quasi fuga minima quas! Nam, exercitationem? Expedita assumenda vel ullam autem dolorem illum dicta nemo enim, repudiandae velit repellat cumque minima quia architecto voluptatibus corporis excepturi doloribus. Autem a mollitia repudiandae quaerat numquam. Atque odit illo exercitationem, fugit architecto tempora ipsa esse optio doloribus eius temporibus blanditiis quis laborum aliquam rerum possimus consequuntur eos unde facilis maxime, dolore inventore dolorem at. Non nulla maiores quisquam natus, doloremque nihil libero inventore velit? A facere ad dicta, placeat repellat quaerat molestiae repudiandae obcaecati ratione asperiores, sit error mollitia? Soluta quibusdam deleniti ex asperiores, quos doloribus dignissimos molestias dicta nisi atque quaerat repellat iure esse pariatur consequatur amet? Molestias ullam quae id, adipisci dignissimos quibusdam sapiente, libero optio, ea enim eius maxime maiores beatae soluta! Quibusdam nulla voluptatibus cumque ratione cupiditate dolorum atque iure eos ducimus inventore, in dicta, doloremque consequuntur soluta officiis nesciunt. Sed non dignissimos, quae iure sequi harum soluta ab doloremque facilis alias ea quod nostrum explicabo odit praesentium aut facere quis architecto reprehenderit ex."
                }
            }
        ]
    }
]

export {
    localStorageConstants,
    cartoons,
    skills,
    homeSections
}