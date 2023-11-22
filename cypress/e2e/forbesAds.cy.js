import mainPage, { ads_url } from "../pages/mainPage";
import Data  from "../fixtures/data";

describe('Check google ads', () => { 
    it('Should have expected data', () => {
        cy.visit('/');
        cy.scrollTo('bottom', { duration: 6000, easing: 'linear' });
        cy.pause()
        cy.window().then((win) => {
            if (win.fbsads) {
                const adSlots = win.fbsads.adSlots.keys();
                const slotsArray = Array.from(adSlots);
                expect(slotsArray).to.deep.equal(Data.slots)

                let sizes = win.fbsads.getSizes('top')
                expect(sizes).to.deep.equal(Data.sizes);

                expect(win.fbsads.getZone()).to.equal('home');
                expect(win.fbsads.getSite()).to.equal('fdc.forbes')
            } else {
                cy.log('Slots not found');
            }
        });
    });
});

  

          
    

    