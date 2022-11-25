import * as cadastroPost from '../../../support/requests/Usuario/CadastroPost'

import { faker } from '@faker-js/faker';
import {schema} from '../../../support/validateSchema'

const payloadCadastro = require ("../../../support/payloads/Usuario/cadastro.json")

describe('Cadastro de usuário', () =>{
    it('Realizar cadastro', ()=>{
        cadastroPost.cadastro(faker.name.firstName(),faker.name.gender(true),faker.internet.email(), payloadCadastro.status, payloadCadastro.token).should((response)=>{
            expect(response.status).to.eql(201)

            schema("cadastroSchema", response.body)
        })
    })
})