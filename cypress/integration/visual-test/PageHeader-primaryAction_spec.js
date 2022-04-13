describe('PageHeader visual regression check', () => {
  beforeEach(() => {
    cy.visit('/visual-test/PageHeader-primaryAction');
  });

  const BREAKPOINTS = { xs: 360, sm: 576, md: 768, lg: 1312 };

  Object.keys(BREAKPOINTS).forEach((size) => {
    it(`Compares snapshots on ${size}:${BREAKPOINTS[size]}px breakpoint`, () => {
      cy.viewport(BREAKPOINTS[size], 1080);

      if (['xs', 'sm'].includes(size)) {
        cy.get('[data-test-id="visual-test"]').find('button').eq(1).click();
      }

      cy.get('[data-test-id="visual-test"]').toMatchImageSnapshot({
        name: `PageHeader-primaryAction-${size}`,
        imageConfig: {
          threshold: 0.001,
          thresholdType: 'percent',
        },
      });
    });
  });
});