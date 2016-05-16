var portfolioApp = angular.module('portfolioApp', []);
portfolioApp.controller('PortfolioListController', function( $scope ) {

    $scope.portfolios = [
    {name: 'vessel1309', title: 'Call of Booty', date: '2013-09-01', description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', imageurl: 'drunkenPirate_thumb3.png' },
    {name: 'innocents1404', title: 'The Sack of the Innocents', date: '2014-04-15', description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', imageurl: 'drunkenPirate_thumb2.png' },
    {name: 'firstmate1210', title: 'Pipe and First Mate', date: '2012-10-01', description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', imageurl: 'drunkenPirate_thumb1.png' }
    ]

    $scope.addPortfolio = function (new_portfolio) {
        $scope.add_portfolio_error = "";
        if (!new_portfolio.title ) {
            $scope.add_portfolio_error = "Please provide a title.";
        } else if (!new_portfolio.date || new_portfolio.date.length <10) {
            $scope.add_portfolio_error = "Please provide a date in yyyy-mm-dd format.";
        } else {
            // massage the date
            new_portfolio.date = new_portfolio.date.toISOString().substring(0, 10);
            $scope.portfolios.unshift(new_portfolio);
            $scope.adding_portfolio = { imageurl: 'drunkenPirate_thumb1.png' };
        }
    };

});