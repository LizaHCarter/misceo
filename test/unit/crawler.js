/* jshint expr:true */

'use strict';

var expect    = require('chai').expect,
    Crawler   = require('../../server/models/crawler'),
    mongoose  = require('mongoose'),
    cp        = require('child_process'),
    dbName    = 'misceo-test',
    db        = 'mongodb://localhost/' + dbName;

describe('Crawler', function(){
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
            var c = new Crawler({name: 'Test Crawl', baseUrl: 'https://www.google.com', userId: '000000000000000000000001', depth: 1});
            expect(c._id).to.be.ok;
        });
    });

    describe('#crawl', function(){
        it('should crawl a website and download all images', function(done){
            var c = new Crawler({name: 'Test Crawl', baseUrl: 'https://www.google.com', userId: '000000000000000000000001', depth: 1});
            c.crawl(function(err, crawlId){
                expect(typeof crawlId).to.equal('object');
                done();
            });
        });
    });

});
