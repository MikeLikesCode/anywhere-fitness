import React from 'react';
import { Link } from 'react-router-dom';
import Workout1 from '../assets/workout1.jpg'
import styled from 'styled-components';
import Workout2 from'../assets/workout2.jpg'

const Home = () =>{

    const FirstDiv= styled.div`
    display:flex;
    justify-content: space-between;
    `

    const FirstP= styled.p`
    width:40%;
    margin-left:5rem;
    font-size: large;
    `

    const FirstImg= styled.img`
    height:50vh;
    margin-right:5rem;
    border-radius: 25%;
    `

    const SecondDiv = styled.div`
    display:flex;
    justify-content: space-between;
    `
    const SecondP= styled.p`
    width:40%;
    margin-right:5rem;
    font-size: large;
    `
    const SecondImg = styled.img`
    height:50vh;
    margin-left:5rem;
    border-radius: 25%;
    `


    return(
        <div className='home'>
            <h1>Anywhere Fitness, at Anytime</h1>
            <FirstDiv>
                <FirstP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ac ante et faucibus. Nam urna sapien, fermentum vitae aliquet luctus, scelerisque sed dolor. Cras lacinia eros in turpis mattis, a posuere metus viverra. Etiam tempor diam felis, quis fermentum nunc hendrerit et. Phasellus blandit urna non semper ullamcorper. Vivamus fringilla cursus ex, at vulputate diam elementum sed. Maecenas commodo fringilla orci. Nam nec tristique urna. Aliquam rutrum viverra diam nec feugiat. Donec ultricies mauris eu placerat rutrum. Donec ac elementum nibh. Morbi commodo sit amet orci id dictum. Ut maximus turpis a efficitur rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer in suscipit nunc. Ut felis quam, vehicula sed dolor in, egestas varius metus.
                    <br/>
                Duis nec turpis sodales, rhoncus nisl nec, accumsan urna. Suspendisse potenti. Fusce nunc tellus, pretium vel erat in, viverra euismod elit. Sed congue consequat dictum. Vestibulum non mauris volutpat, volutpat est et, tincidunt leo. In tincidunt lacus sit amet risus semper dictum. Praesent maximus, urna et tincidunt consectetur, eros diam egestas enim, eu aliquet justo lorem nec tortor. Sed eu purus quam. Duis in metus commodo, mollis sapien id, dapibus magna. Ut sed venenatis metus. Proin sodales metus vitae convallis convallis. Nullam vestibulum, elit nec pretium iaculis, sem lectus dapibus magna, ut tempus augue nisl et neque. Cras ac posuere turpis, in gravida velit.</FirstP>
                
                <FirstImg src={Workout1} alt='Four friends in a park promoting being healthy.'/>
            </FirstDiv>
            <h2>About Anywhere Fitness</h2>
            <SecondDiv>
                
                <SecondImg src={Workout2} alt='Old people getting a workout in at a park.' />
                <SecondP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mollis est, id mollis lorem. Ut dui urna, venenatis sit amet molestie in, volutpat a nulla. Etiam pulvinar nisl at orci cursus suscipit. Etiam pharetra sollicitudin feugiat. Donec ultricies pellentesque ante nec pharetra. Duis et libero eu augue posuere accumsan. Nam et efficitur sapien.
                    <br/>
                Nullam lacinia ante non volutpat viverra. Aenean laoreet pellentesque tellus sed fringilla. Morbi eu vulputate felis. Etiam nisi mi, laoreet sit amet diam a, sagittis faucibus nisl. Phasellus eget molestie purus, bibendum molestie nisl. Proin malesuada efficitur varius. Nullam mattis nisi vitae purus hendrerit sagittis. Suspendisse potenti. Curabitur faucibus purus sed nulla posuere molestie.
                    <br/>
                Duis iaculis mattis diam, eu efficitur ligula posuere a. Ut at leo in dolor fermentum tempus. Nam pretium mi vel erat feugiat, vitae interdum justo lobortis. Mauris gravida eu mauris at commodo. Phasellus dignissim quis metus quis tristique. Nulla eget gravida est. Praesent suscipit luctus nisi iaculis semper.</SecondP>
                
            </SecondDiv>
        </div>
        
    )
}

export default Home;