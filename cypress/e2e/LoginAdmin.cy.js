 beforeEach(() => {  // Clear cookies and local storage before each test
    cy.clearCookies(); // Clear cookies
    cy.clearLocalStorage();}) // Clear local storage

    it.only('Login Admin', function(){  // Test case for logging in as an admin
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Visit the login page
    cy.get('[name="username"]').type('Admin')  // Enter the username
    cy.get('[name="password"]').type('admin123')  // Enter the password
    cy.get('[type="submit"]').click()   // Click the submit button
   

    //add employee


    cy.get(':nth-child(1) > .oxd-main-menu-item').click()  // Click on the first item in the main menu
    cy.get('.orangehrm-header-container > .oxd-button').click()  // Click the button to add an employee
   cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()  // Click on the first input group to select a value
   cy.get('.oxd-select-dropdown > :nth-child(2)').click()  // Select the second option from the dropdown
   cy.get('.oxd-autocomplete-text-input').type('a')  // Enter a value in the autocomplete input
   cy.get('.oxd-autocomplete-dropdown > :nth-child(3)').click()  // Select the first option from the autocomplete dropdown
   cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ahmed')  // Enter a value in the fourth input group
   cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ahmed123')  // Enter a password
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ahmed123')  // Confirm the password
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()  // Click on the third input group to select a value
   cy.get('.oxd-select-dropdown > :nth-child(2)').click()  // Select the second option from the dropdown
   cy.get('.oxd-button--secondary').click()  // Click the secondary button to save the employee


   // delete employee
   // cy.get(':nth-child(1) > .oxd-main-menu-item').click()  // Click on the first item in the main menu again
   // cy.get(':nth-child(2) > .oxd-input').type('Ahmed')  // Enter the employee name in the search input
   // cy.get   ('.oxd-form-actions > .oxd-button--secondary').click()  // Click the secondary button to search for the employee
   // cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()  // Click the checkbox to select the employee
   // cy.get('.orangehrm-horizontal-padding > div > .oxd-button > .oxd-icon').click()  // Click the button to delete the employee
   // cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()  // Click the danger button to confirm deletion


   // assertion
// assertion
        cy.get('.oxd-table-body').should('contain', 'Ahmed').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Ahmed')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete

})