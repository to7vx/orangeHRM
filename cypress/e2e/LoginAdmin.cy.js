beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();})

    it.only('Login Admin', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()   
    })