import Ajv from "ajv"
const ajv = new Ajv({allErros: true, verbose: true})

function schema(schema,body){
    cy.fixture(schema).then((nameSchema)=>{
        const validate = ajv.compile(nameSchema)
        const valid = validate(body)
        if (!valid) cy.log(validate.errors).then(()=>{
            throw new Error("Falha de contrato")
        })
            
    })
}export{schema}