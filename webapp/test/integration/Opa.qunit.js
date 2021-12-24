sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ekansh/travellist/test/integration/pages/MainListReport' ,
        'com/ekansh/travellist/test/integration/pages/MainObjectPage',
        'com/ekansh/travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ekansh/travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);