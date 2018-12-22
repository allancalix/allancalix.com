describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h2>', () => {
		cy.contains('h2', 'Allan Calix')
	});
});
