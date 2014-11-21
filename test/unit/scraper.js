/* jshint expr:true */

'use strict';

var expect    = require('chai').expect,
    Scraper   = require('../../server/models/scraper'),
    mongoose  = require('mongoose'),
    cp        = require('child_process'),
    dbName    = 'misceo-test',
    db        = 'mongodb://localhost/' + dbName;

describe('Scraper', function(){
    before(function(done){
        mongoose.connect(db);
        mongoose.connection.once('open', function(){
            done();
        });
    });

    beforeEach(function(done){
        cp.execFile(__dirname + '/../scripts/clean-db.sh', [dbName], {cwd: __dirname + '/../scripts'}, function(err, stdout, stderr){
            done();
        });
    });

    describe('constructor', function(){
        it('should create a new instance of Crawler', function(){
            var s = new Scraper({name: 'Test Crawl', baseUrl: 'https://www.google.com', depth: 1});
            // console.log(s);
            expect(s._id).to.be.ok;
        });
    });

    describe('#scrape', function(){
        it('should crawl a website and download all images', function(done){
            var s = new Scraper({name: 'Test Crawl', baseUrl: 'https://www.google.com', depth: 1});
            s.scrape(function(err, scrapeId){
                console.log(err, scrapeId);
                done();
            });
        });
    });
});
