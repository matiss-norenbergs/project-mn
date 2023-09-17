import {
    Image,
    Typography
} from "antd"

import PageLayout from "../../components/pageLayout"
import Section from "../../components/section"

import titan from "../../assets/images/titan.png"
import csharp from "../../assets/images/skills/csharp.png"
import firebase from "../../assets/images/skills/firebase.png"
import mongodb from "../../assets/images/skills/mongodb.png"
import mysql from "../../assets/images/skills/mysql.png"
import php from "../../assets/images/skills/php.png"
import react from "../../assets/images/skills/react.png"

import styles from "./Home.module.css"

const { Title, Paragraph } = Typography

const Home = () => {
    return (
        <PageLayout>
            <Section id="about">
                <Section.Child>
                    <Image
                        src={titan}
                        preview={false}
                    />
                </Section.Child>
                <Section.Child
                    title="My portfolio"
                    titleLevel={2}
                >
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores atque debitis placeat magnam commodi asperiores quos est illum quibusdam enim dolorum, quod consequatur, natus amet rem animi, voluptate explicabo. Ad eaque inventore labore corrupti quod at repellat provident ducimus, optio, quisquam beatae consequatur debitis sit! Delectus cumque non veniam suscipit repellat laudantium soluta, distinctio recusandae eveniet, quam dignissimos minima iste. Officia eos exercitationem reiciendis rem fugit quod quasi deserunt debitis, cum iste temporibus sint cupiditate, eveniet consequuntur sunt officiis fugiat quis! Ipsam qui commodi, labore nisi laboriosam laudantium est aperiam quis praesentium error assumenda ducimus saepe ex accusamus enim iste? Unde ut blanditiis placeat nisi exercitationem aperiam, quasi repudiandae? Culpa officiis aliquam ut sint inventore quidem possimus odio et unde voluptas ab ex eum deserunt suscipit atque molestias nam ipsa, qui quas vitae quasi recusandae autem laboriosam quos. Eaque corporis velit adipisci natus et. Ullam fugit architecto libero ab omnis suscipit reiciendis! Odit necessitatibus impedit at dolore itaque harum eveniet, maiores provident doloremque laborum dolor aliquam earum expedita delectus saepe, officiis est commodi sint rerum! Facere cumque rerum pariatur temporibus deleniti perferendis vel aliquam. Dolorum reiciendis voluptate saepe quis, omnis harum. Nobis sint voluptates ducimus deserunt ex tempora fugit.
                    </Paragraph>
                </Section.Child>
            </Section>
            <Section id="cards">
                <Section.Child>
                    <h1>1st card</h1>
                </Section.Child>
                <Section.Child>
                    <h1>2nd card</h1>
                </Section.Child>
                <Section.Child>
                    <h1>3rd card</h1>
                </Section.Child>
            </Section>
            <Section
                id="skills"
                title="Skills"
            >
                <Section.Child>
                    <Image
                        src={react}
                        preview={false}
                    />
                </Section.Child>
                <Section.Child>
                    <Image
                        src={csharp}
                        preview={false}
                    />
                </Section.Child>
                <Section.Child>
                    <Image
                        src={firebase}
                        preview={false}
                    />
                </Section.Child>
                <Section.Child>
                    <Image
                        src={mongodb}
                        preview={false}
                    />
                </Section.Child>
                <Section.Child>
                    <Image
                        src={mysql}
                        preview={false}
                    />
                </Section.Child>
                <Section.Child>
                    <Image
                        src={php}
                        preview={false}
                    />
                </Section.Child>
            </Section>
            <Section id="projects">
                <Section.Child>
                    <Title level={2}>
                        Projects
                    </Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis reiciendis veniam alias veritatis, tenetur molestiae nam dignissimos neque laudantium harum nesciunt excepturi suscipit odit odio mollitia fuga, deleniti ea nulla quos optio architecto? Laudantium corrupti placeat voluptatum alias eius asperiores totam sunt distinctio voluptatibus, sequi cupiditate, ut adipisci omnis facere aliquam beatae! Commodi soluta repudiandae exercitationem quis illum harum voluptatibus ipsam dignissimos sapiente iure reprehenderit sed voluptas amet ad rerum voluptatum, delectus assumenda omnis, veniam culpa et dolore. Aliquam molestiae quas repellendus, quisquam voluptatibus vel sapiente laudantium voluptatem maxime aperiam optio, commodi earum aspernatur expedita accusamus itaque? Exercitationem voluptatem eos enim quis deleniti obcaecati, perspiciatis hic accusamus quae illum repellendus. Facere architecto consequatur nostrum dignissimos quae mollitia ex omnis, quasi fuga minima quas! Nam, exercitationem? Expedita assumenda vel ullam autem dolorem illum dicta nemo enim, repudiandae velit repellat cumque minima quia architecto voluptatibus corporis excepturi doloribus. Autem a mollitia repudiandae quaerat numquam. Atque odit illo exercitationem, fugit architecto tempora ipsa esse optio doloribus eius temporibus blanditiis quis laborum aliquam rerum possimus consequuntur eos unde facilis maxime, dolore inventore dolorem at. Non nulla maiores quisquam natus, doloremque nihil libero inventore velit? A facere ad dicta, placeat repellat quaerat molestiae repudiandae obcaecati ratione asperiores, sit error mollitia? Soluta quibusdam deleniti ex asperiores, quos doloribus dignissimos molestias dicta nisi atque quaerat repellat iure esse pariatur consequatur amet? Molestias ullam quae id, adipisci dignissimos quibusdam sapiente, libero optio, ea enim eius maxime maiores beatae soluta! Quibusdam nulla voluptatibus cumque ratione cupiditate dolorum atque iure eos ducimus inventore, in dicta, doloremque consequuntur soluta officiis nesciunt. Sed non dignissimos, quae iure sequi harum soluta ab doloremque facilis alias ea quod nostrum explicabo odit praesentium aut facere quis architecto reprehenderit ex. Aut voluptatibus, doloribus temporibus sint deserunt et iure tempora, facere quia, illum fuga enim. Dignissimos eos architecto temporibus nostrum ipsum? Incidunt necessitatibus nam, totam quidem velit impedit quod cupiditate, molestiae iste ea eius? Iste dolores reiciendis reprehenderit ratione culpa ipsam exercitationem vitae nemo similique quod. Dolor explicabo numquam unde vel odit iste temporibus quo laboriosam minus consequuntur, provident suscipit deleniti quae id nostrum blanditiis praesentium, animi at ab. Autem delectus sint inventore vitae soluta rerum voluptates deleniti aut, eum minima magni officia! Magnam praesentium nesciunt consectetur ut quos? Ullam atque, debitis maiores asperiores reprehenderit dignissimos nulla eligendi culpa. Deserunt, at numquam necessitatibus optio eius saepe, esse, odit maiores vitae exercitationem officiis expedita. Illo optio error vero iusto ducimus neque necessitatibus incidunt mollitia libero vitae dolor eius quisquam recusandae id reiciendis voluptatem rem odio omnis autem repudiandae, earum molestias. Aspernatur aliquid totam atque! Nobis quidem soluta, saepe, sit cupiditate distinctio repellendus molestiae eveniet repudiandae illum magnam laborum quae veniam explicabo autem molestias vitae aperiam quod beatae minima est deserunt. Commodi voluptas numquam dolorem sequi error cum voluptatum voluptatem nesciunt officiis minus cupiditate magni accusamus, tempora nostrum quae optio, cumque, explicabo unde alias aliquid quis ad nisi. Vitae ut, cum dolore adipisci, alias fugiat, reiciendis doloribus optio necessitatibus temporibus assumenda dignissimos. Quibusdam voluptatem iusto minus illum incidunt?
                    </Paragraph>
                </Section.Child>
            </Section>
        </PageLayout>
    )
}

export default Home