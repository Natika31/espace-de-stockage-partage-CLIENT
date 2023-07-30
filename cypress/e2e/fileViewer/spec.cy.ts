const tab = '#mat-tab-label-0-0';
const title = '[data-cy="AffichageTitle"]';
describe('nominal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get(tab).contains('Affichage');
  });
  it('Displays empty file viewer', () => {
    cy.get(title).contains('Titre');
    cy.intercept('http://localhost:8080/api/file?file_id=1', (req) => {
      req.reply({
        file_id: 1,
        file_name: 'starter',
        file_destination_path: '/starter/',
      });
    }).as('getFileByName');
  });
  it('Displays received file title', () => {
    // cy.intercept('http://localhost:8080/api/file?file_id=1', (req) => {
    //   req.reply({
    //     file_id: 1,
    //     file_name: 'Mon fichier stocké',
    //     file_destination_path: '/home/',
    //   });
    // }).as('getStoredFileTitle');
    cy.intercept('GET', '/api/file*', (req) => {
      req.reply({
        file_id: 1,
        file_name: 'Mon fichier stocké',
        file_destination_path: '/home/',
      });
    }).as('getStoredFileTitle');
    cy.get(title).contains('Mon fichier stocké');
  });
});
