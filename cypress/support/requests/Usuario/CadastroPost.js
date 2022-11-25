///<reference types="cypress"/>

function cadastro(name, gender, email, status, token){
    return cy.api({
        url: "/public/v2/users",
        method: "POST",
        failOnStatusCode: false,
        body: {
            name: name,
            gender: gender,
            email:email,
            status: status
        },
        headers:{
            Authorization: token
        }

    })
}
export {cadastro}