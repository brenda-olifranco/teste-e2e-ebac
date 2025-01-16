class ProdutosPage {

    visitarUrl(parametros ){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.product-block')
        .contains(nomeProduto)
        .click()
        
    }

    visitarProduto(nomeProduto){
        cy.visit(`produtos/${nomeProduto}` )
    }

    adicionarCarrinho(tamanho, cor, qnt){
        cy.get('.button-variable-item-'+ tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(qnt)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()