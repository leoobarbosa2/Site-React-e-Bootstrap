import React from 'react'
import Main from '../template/Main'

import './Contato.css'

export default props =>
    <Main titulo="Contato" subtitulo="Entre em contato conosco através do preenchimento do formulário">
        

    <div className="container">
    
    <div className="row justify-content-center mb-5">

        <div className="col-sm-12 col-md-10 col-lg-8">

            <form id="formulario" method="GET" action="mailto:leonardo_p.b@hotmail.com">

                <div className="form-row">

                    <div className="form-group col-sm-6">

                        <label for="inputNome">Nome:</label>
                        <input type="text" className="form-control" id="inputNome" placeholder="Digite seu nome ..." />

                    </div>

                    <div className="form-group col-sm-6">

                        <label for="inputSobreNome">Sobrenome:</label>
                        <input type="text" className="form-control" id="inputSobreNome" placeholder="Seu sobrenome ..." />

                    </div>
                </div>

                <div className="form-row">

                    <div className="form-group col-sm-12">

                        <label for="inputEnd">Endereco:</label>
                        <input type="text" className="form-control" id="inputEnd" placeholder="Informe seu endereço" />

                    </div>
                </div>

                <div className="form-row">

                    <div className="form-group col-sm-6">

                        <label for="inputCidade">Cidade:</label>
                        <input type="text" className="form-control" id="inputCidade" placeholder="Sua cidade ..." />

                    </div>

                    <div className="form-group col-sm-4">

                        <label for="inputEstado">Estado:</label>
                        <select className="form-control"  id="inputEstado">
                            <option selected>Escolha..</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </select>
                    </div>

                    <div className="form-group col-sm-2">

                        <label for="inputCep">CEP:</label>
                        <input type="text" id="inputCed" className="form-control" placeholder="CEP" />

                    </div>

                    <div className="form-group col-sm-12">
    
                        <label for="inputArea">Mensagem:</label>
                        <textarea className="form-control" id="inputArea" placeholder="Deixe sua mensagem"></textarea>
    
                    </div>
                </div>

                    <div className="form-row">

                        <button className="d-block m-auto btn btn-primary " type="submit" id="btn">Enviar</button>

                    </div>

            </form>
        </div>
        </div>
    </div>
    </Main>