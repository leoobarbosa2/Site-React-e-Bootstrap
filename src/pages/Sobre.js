import React from 'react'
import Main from '../template/Main'

import './Sobre.css'

export default props =>
    <Main titulo="Um pouco Sobre nós" subtitulo="Nossa historia e nossos princípios">
        
    <div className="container my-4">
        
        <div className="row">

            <div className="col-12  mb-5">

                <h3>AeroDream</h3>
                <p>if you are going to use a passage of Lorem Ipsum, you need to be sur</p>

            </div>

        </div>

        <div className="row mb-5">

            <div className="d-none d-sm-block col-sm-3">
                <nav id="navbarVertical" className="navbar navbar-light bg-light">

                    <nav className="nav nav-pills flex-column">
                        <a href="#item-1" className="nav-link">1</a>

                        <nav className="nav nav-pills flex-column">
                            <a href="#item-1-1" className="nav-link ml-3">1-2</a>
                            <a href="#item-1-2" className="nav-link ml-3">1-3</a>
                        </nav>

                        <a href="#item-2" className="nav-link mt-2">2</a>

                        <a href="#item-3" className="nav-link mt-2">3</a>
                            
                        <nav className="nav nav-pills flex-column">
                            <a href="#item-3-2" className="nav-link ml-3">3-1</a>
                        </nav>
                    </nav>

                </nav>
            </div>

            <div className="col-12 col-sm-9">
                <div data-spy="scroll" data-target="#navbarVertical" data-offset="0" className="scrollspySite">

                    <h4 id="item-1">Historia</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum unde numquam, perferendis, ut placeat pariatur quis soluta beatae, tempore error labore deleniti? Doloremque ex, sed tempora dolores consequatur necessitatibus quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex alias perspiciatis laborum maiores, modi eius, corporis placeat ipsa eum aperiam, neque commodi reprehenderit nostrum autem voluptatem itaque? Est, sint? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate eius sunt eveniet exercitationem, assumenda voluptas reprehenderit eos voluptatem suscipit cumque blanditiis distinctio aspernatur ullam neque consequuntur pariatur dolores dolore.</p>

                    <h5 id="item-1-1">Origem</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea temporibus quo dolorum, ratione tenetur eligendi officia, commodi vitae nesciunt nisi a saepe quia explicabo molestiae quis doloremque delectus laboriosam. Voluptatibus.</p>

                    <h5 id="item-1-2">Objetivo</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius laudantium labore alias? Consequuntur ut quaerat necessitatibus, quos repudiandae sit possimus atque asperiores illo quia dolor iusto temporibus perspiciatis. Aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates esse dolor voluptatum! Quo doloremque ab sapiente sint eligendi error, velit asperiores? Quisquam ea odit vitae ab architecto. Consectetur, dolor?</p>

                    <h4 id="item-2">O que fazemos</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum unde numquam, perferendis, ut placeat pariatur quis soluta beatae, tempore error labore deleniti? Doloremque ex, sed tempora dolores consequatur necessitatibus quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex alias perspiciatis laborum maiores, modi eius, corporis placeat ipsa eum aperiam, neque commodi reprehenderit nostrum autem voluptatem itaque? Est, sint? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate eius sunt eveniet exercitationem, assumenda voluptas reprehenderit eos voluptatem suscipit cumque blanditiis distinctio aspernatur ullam neque consequuntur pariatur dolores dolore.</p>

                    <h4 id="item-3">Nossos profissionais</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum unde numquam, perferendis, ut placeat pariatur quis soluta beatae, tempore error labore deleniti? Doloremque ex, sed tempora dolores consequatur necessitatibus quis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ex alias perspiciatis laborum maiores, modi eius, corporis placeat ipsa eum aperiam, neque commodi reprehenderit nostrum autem voluptatem itaque? Est, sint? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate eius sunt eveniet exercitationem, assumenda voluptas reprehenderit eos voluptatem suscipit cumque blanditiis distinctio aspernatur ullam neque consequuntur pariatur dolores dolore.</p>

                   

                    <h5 id="item-3-2">Metas</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius laudantium labore alias? Consequuntur ut quaerat necessitatibus, quos repudiandae sit possimus atque asperiores illo quia dolor iusto temporibus perspiciatis. Aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates esse dolor voluptatum! Quo doloremque ab sapiente sint eligendi error, velit asperiores? Quisquam ea odit vitae ab architecto. Consectetur, diores, modi eius, corporis placeat ipsa eum aperiam, neque commodi reprehenderit nostrum autem voluptatem itaque? Est, sint? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo cupiditate eius sunt eveniet exercitationem, assumenda voluptas reprehenderit eos voluptatem susciolor?</p>

                </div>
            </div>

        </div>

    </div>
    </Main>