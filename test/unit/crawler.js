/* jshint expr:true */

'use strict';

var expect    = require('chai').expect,
    Crawler   = require('../../server/models/Crawler'),
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
            var c = new Crawler({name: 'Test Crawl', baseUrl: 'https://www.google.com', depth: 1});
            expect(c._id).to.be.ok;
        });
    });
});
