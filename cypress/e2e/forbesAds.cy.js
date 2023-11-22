import mainPage, { ads_url } from "../pages/mainPage";
import Data from "../fixtures/data";

describe('Check google ads', () => {
    it('Should have expected data', () => {
        cy.visit('/');
        cy.scrollTo('bottom', { duration: 6000, easing: 'linear' });

        cy.window().then((win) => {
            if (win.fbsads) {
                const adSlots = win.fbsads.adSlots.keys();
                const slotsArray = Array.from(adSlots);
                const sizesObject = {};

                expect(slotsArray).to.deep.equal(Data.slots);

                slotsArray.forEach((slotId) => {
                    const sizes = win.fbsads.adSlots.get(slotId);
                    const pos = sizes.getTargetingMap()['pos'][0];
                    const sizesArray = win.fbsads.getSizes(pos);
                    sizesObject[pos] = sizesArray;
                });

                expect(sizesObject).to.deep.equal(Data.sizes);

                expect(win.fbsads.getZone()).to.equal('home');
                expect(win.fbsads.getSite()).to.equal('fdc.forbes');
            } else {
                cy.log('Slots not found');
            }
        });
    });
});

  

          
    

    