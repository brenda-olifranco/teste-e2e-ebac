///<reference types = "cypress"/>

import produtosPage from "../support/page_objects/produtos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      produtosPage.visitarUrl()
  });

  it('Deve buscar produto da lista', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('.product_title').should('exist')
      
  });

  it('Deve buscar um produto com sucesso', () => {
    produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
    cy.get('.product_title').should('exist')
  });

  it('Deve visitar a pag do produto', () => {
    produtosPage.visitarProduto('Abominable-Hoodie')
    cy.get('.product_title').should('exist')
  });

  it('Deve selecionar produto ao carrinho', () => {
    produtosPage.buscarProduto('Abominable Hoodie')
    produtosPage.adicionarCarrinho('L', 'Green', 4)

    cy.get('.woocommerce-message').should('exist')
    
  });

})