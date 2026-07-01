 beforeEach(() => {  // Clear cookies and local storage before each test
    cy.clearCookies(); // Clear cookies
    cy.clearLocalStorage();}) // Clear local storage

    it.only('Login Admin', function(){  // Test case for logging in as an admin
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Visit the login page
    cy.get('[name="username"]').type('Admin', { delay: 100 })  // Enter the username
    cy.get('[name="password"]').type('admin123', { delay: 100 })  // Enter the password
    cy.get('[type="submit"]').click()   // Click the submit button
    cy.wait(3000);  // Wait for 3 seconds

   

//     //add employee


//     cy.get(':nth-child(1) > .oxd-main-menu-item').click()  // Click on the first item in the main menu
//     cy.get('.orangehrm-header-container > .oxd-button').click()  // Click the button to add an employee
//    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()  // Click on the first input group to select a value
//    cy.get('.oxd-select-dropdown > :nth-child(2)').click()  // Select the second option from the dropdown
//    cy.get('.oxd-autocomplete-text-input').type('a', { delay: 100 })  // Enter a value in the autocomplete input
//    cy.get('.oxd-autocomplete-dropdown > :nth-child(3)').click()  // Select the first option from the autocomplete dropdown
//    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ahmed', { delay: 100 })  // Enter a value in the fourth input group
//    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ahmed123', { delay: 100 })  // Enter a password
//    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Ahmed123', { delay: 100 })  // Confirm the password
// cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()  // Click on the third input group to select a value
//    cy.get('.oxd-select-dropdown > :nth-child(2)').click()  // Select the second option from the dropdown
//    cy.get('.oxd-button--secondary').click()  // Click the secondary button to save the employee
//    cy.wait(3000);  // Wait for 3 seconds

//    // delete employee
//    // cy.get(':nth-child(1) > .oxd-main-menu-item').click()  // Click on the first item in the main menu again
//    // cy.get(':nth-child(2) > .oxd-input').type('Ahmed')  // Enter the employee name in the search input
//    // cy.get   ('.oxd-form-actions > .oxd-button--secondary').click()  // Click the secondary button to search for the employee
//    // cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()  // Click the checkbox to select the employee
//    // cy.get('.orangehrm-horizontal-padding > div > .oxd-button > .oxd-icon').click()  // Click the button to delete the employee
//    // cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()  // Click the danger button to confirm deletion


// // assertion
//         cy.get('.oxd-table-body').should('contain', 'Ahmed').then(() => cy.log('Job title verified')); // Assert that the table body contains the employee name and log a message
//         cy.wait(4000);
//         // First find the exact row containing your job title and scrollview
//         cy.contains('.oxd-table-row', 'Ahmed', { delay: 100 })
//             .scrollIntoView({ duration: 300 })
//             .should('exist')
//             .within(() => {
//                 // checkbox click
//                 cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
//                     .click({ force: true });
//                 // click trash
//                 cy.get(':nth-child(1) > .oxd-icon')
//                     .should('be.visible')
//                     .click({ force: true, multiple: true });
//             });
//         cy.wait(1000);
//         cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete

//job title
// cy.get(':nth-child(1) > .oxd-main-menu-item').click()  // Click on the first item in the main menu
// cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()  // Click on the second item in the top bar navigation
// cy.get('.oxd-dropdown-menu > :nth-child(1)').click()  // Click on the first item in the dropdown menu
// cy.get('.oxd-button').click()  // Click the button to add a job title
// cy.get(':nth-child(2) > .oxd-input').type('Software Engineer1', { delay: 100 })  // Enter the job title
// cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Software Engineer1 description', { delay: 100 })  // Enter the job description

// //add a picture
// cy.get('input[type="file"]').selectFile('cypress/fixtures/logo-h.png', { force: true });  // Attach a file to the file input
// cy.get('.oxd-button--secondary').click()  // Click the secondary button to save the job title
// cy.wait(3000);  // Wait for 3 seconds


// //delete job title 
// cy.get('.oxd-table-body').should('contain', 'Software Engineer1').then(() => cy.log('Job title verified')); // Assert that the table body contains the job title and log a message
// cy.wait(4000);  // Wait for 4 seconds
// // First find the exact row containing your job title and scrollview
// cy.contains('.oxd-table-row', 'Software Engineer1', { delay: 100 }) // Find the row containing the job title
//     .scrollIntoView({ duration: 300 }) // Scroll to the row
//     .should('exist') // Assert that the row exists
//     .within(() => { // Within the row
//         cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon') // Get the checkbox in the first cell
//             .click({ force: true }); // Click the checkbox
//         cy.get(':nth-child(1) > .oxd-icon') // Get the trash icon in the first cell
//             .should('be.visible') // Assert that the trash icon is visible
//             .click({ force: true, multiple: true }); // Click the trash icon
//       });
// cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').should('be.visible').click(); // Click the danger button to confirm deletion


//change the picture
cy.get(':nth-child(6) > .oxd-main-menu-item').click()  // Click on the sixth item in the main menu
cy.wait(2000)
cy.get('.employee-image').should('be.visible')  // Assert that the employee image is visible
cy.get('.employee-image').click()  // Click on the employee image
cy.wait(1000)
cy.get('input[type="file"]').selectFile('cypress/fixtures/logo-h.png', { force: true }); // Attach a new file to the file input
cy.get('.oxd-button').should('be.visible').click()  // Click the button to save the new picture
cy.wait(2000)


//change the Date of Birth
cy.get(':nth-child(1) > .orangehrm-tabs-item').click()  // Click on the first tab item
cy.wait(1000)
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input') // Get the date input field
.clear()  // Clear the existing date
.type('2002-08-13', { delay: 100 })  // Enter a new date of birth

//change the name
 cy.get('[name="firstName"]').clear()  // Clear the existing first name
 .type('Ahmed', { delay: 100 })  // Enter a new first name
 cy.get('[name="middleName"]').clear()  // Clear the existing middle name
 .type('Abdulrahman', { delay: 100 })  // Enter a new middle name
 cy.get('[name="lastName"]').clear()  // Clear the existing last name
 .type('Alzanbaqi', { delay: 100 })  // Enter a new last name

 //employee ID
 cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').first()
   .clear()  // Clear the existing employee ID
   .type('123456', { delay: 100 })  // Enter a new employee ID

 //driver license number
cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').last()
   .clear()  // Clear the existing driver license number
   .type('123456789', { delay: 100 })  // Enter a new driver license number

 //driver license expiry date
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
.clear()  // Clear the existing date
.type('2002-08-13', { delay: 100 })  // Enter a new driver license expiry date
cy.get('.--close').click()  // Click to close the date picker
cy.wait(500)

 //nationality
 cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()  // Click on the nationality
 cy.wait(500)
 cy.get(':nth-child(153)').click()  // Select the 153rd option from the dropdown
 cy.wait(500)

 //marital status
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()  // Click on the marital status
cy.wait(500)
cy.get('.oxd-select-dropdown > :nth-child(3)').click()  // Select the third option from the dropdown
cy.wait(500)

 //gender
 cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click()  // Click on the gender radio button
 cy.wait(500)

 //save
 cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()  // Click the button to save the changes
 cy.wait(3000)















})

