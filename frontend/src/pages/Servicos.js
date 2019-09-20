import React from 'react'
import Main from '../template/Main'

import './Servicos.css'

import Img1 from '../assets/aeromoca.jpg'
import Img2 from '../assets/aeroporto.jpg'
import Img3 from '../assets/bora.jpg'

export default props =>
    <Main titulo="Servicos" subtitulo="Conheça alguns dos nossos serviços ..">
        
    <div className="container">
    
    <div className="item-1 row">

        <div className="col-12 col-sm-4  my-5">
        <img className="img-fluid rounded " src={Img1} />
        </div>

    <div className="col-12 col-sm-8 my-5">
        <h3>Passagens</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum blanditiis corporis accusamus ullam, laborum, placeat possimus autem delectus, dolore ut vitae et officiis velit expedita veniam voluptatum quo Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio at nulla unde soluta ex aut fuga, sunt quasi aliquid! Vitae voluptates nulla, et temporibus dignissimos iusto. Ipsum, debitis Lorem ipsum dodi!</p>
    </div>
    </div>


    <div className="item-2 row">

        <div className=" col-12 col-sm-8 mb-5">
            <h3>Aeroporto</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quo sapiente mollitia doloremque quos, dolor consectetur minus necessitatibus, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eaque exercitationem sunt assumenda neque nesciunt aliquid odio esse nisi placeat? Id sequi ratione dignissimos in consectetur laborum sapiente adipisci expedita. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sint expedita laudantium possimus. Sunt, itaque ullam quaerat ad, similique laboriosam dolor quasi deserunt fugiat impedit qui alias dolorem. Eaque, dicta.  debitis magnam id, in aperiam. Voluptatem ea dolor modi quis, neque deserunt.</p>
        </div>

        <div className="col-12 col-sm-4 mb-5">
            <img className="img-fluid rounded" src={Img2} />
        </div>

    </div>

    <div className="item-3 row">

        <div className="col-12 col-sm-8 mt-sm-4">

            <img className="img-fluid rounded" src={Img3} alt="" />

        </div>

        <div className=" col-12 col-sm-4 my-2 my-sm-4">
            <h3>Realize sua viagem</h3>
            <p>Lorem ipsum dolor, sit amet consectetur met consectetur adipisic met consectetur adipisic met consectetur adipisic met consectetur adipisic adipisicing elit. Magni veritatis, blanditiis fuga mollitia?</p>
        </div>

    </div>

</div>
    </Main>