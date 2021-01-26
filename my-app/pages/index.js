import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'

const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: 'cover';
    background-position: 'center';
`

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    color: ${({ theme }) => theme.colors.contrastText};

    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`

export default function Home() {
    return (
        <BackgroundImage>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>The Legend of Zelda</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Voluptatibus, quod suscipit consequuntur nam nesciunt sequi quidem,
                            incidunt sunt sint adipisci culpa explicabo,
                            rem sed reiciendis quisquam inventore et enim modi.
                        </p>
                    </Widget.Content>
                </Widget>

                <Widget>
                    <Widget.Content>
                        <h1>Quizes da galera</h1>
                        
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Voluptatibus, quod suscipit consequuntur nam nesciunt sequi quidem,
                            incidunt sunt sint adipisci culpa explicabo,
                            rem sed reiciendis quisquam inventore et enim modi.
                        </p>
                    </Widget.Content>
                </Widget>

            </QuizContainer>
        </BackgroundImage>
    )
}
