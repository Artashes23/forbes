import mainPage, { ads_url } from "../pages/mainPage";
import Data, { slots } from "../fixtures/data";

describe('Check google ads', () => { 
    it('Should have expected data', () => {
        cy.visit('/');
        cy.scrollTo('bottom', { duration: 6000, easing: 'linear' });

        cy.window().then((win) => {
            if (win.fbsads) {
                const adSlots = win.fbsads.adSlots.keys();
                const slotsArray = Array.from(adSlots);
                let sizes = [];

                expect(slotsArray).to.deep.equal(Data.slots);

                for (let slotPos in slotsArray) {
                    sizes.push(win.fbsads.getSizes(slotPos));
                }

                
                // expect(sizes).to.deep.equal(Data.sizes);

                expect(win.fbsads.getZone()).to.equal('home');
            } else {
                cy.log('Slots not found');
            }
        });
    });
});

  

          
    

    