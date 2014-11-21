'use strict';

process.env.DB   = 'mongodb://localhost/misceo-test';
process.env.PORT = 0;

var expect  = require('chai').expect,
    cp      = require('child_process'),
    app     = require('../../server/index'),
    Img     = require('../../server/models/image'),
    Crawler = require('../../server/models/crawler');

describe('crawlers', function(){
    beforeEach(function(done){
        cp.execFile(__dirname + '/../scripts/clean-db.sh', ['misceo-test'], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
            done();
        });
    });

    describe('post /crawls', function(){
        it('should return a new crawlId', function(done){
            var options = {
                method: 'POST',
                url: '/crawls',
                credentials: {
                    _id: '000000000000000000000001'
                },
                payload: {
                    name: 'Test Crawl',
                    baseUrl: 'https://www.google.com',
                    depth: 1
                }
            };
            app.inject(options, function(res){
                expect(res.statusCode).to.equal(200);
                expect(JSON.parse(res.payload).crawlId).to.have.length(24);
                done();
            });
        });
    });

    describe('get /crawls', function(){
        it('should return all crawls for a user', function(done){
            var options = {
                method: 'GET',
                url: '/crawls',
                credentials: {
                    _id: '000000000000000000000001'
                }
            };
            app.inject(options, function(res){
                expect(res.statusCode).to.equal(200);
                expect(JSON.parse(res.payload).crawls).to.have.length(1);
                done();
            });
        });
    });

    describe('get /crawls/{id}', function(){
        it('should return a specific crawl for a user, including it\'s image objects', function(done){
            var options = {
                method: 'GET',
                url: '/crawls/100000000000000000000001',
                credentials: {
                    _id: '000000000000000000000001'
                }
            };
            app.inject(options, function(res){
                expect(res.statusCode).to.equal(200);
                var crawl = JSON.parse(res.payload).crawl;
                expect(crawl.name).to.equal('Test Crawl 1');
                expect(crawl.images).to.have.length(2);
                done();
            });
        });
    });

    describe('delete /crawls/{id}', function(){
        it('should delete a specific crawl, including it\'s image objects', function(done){
            var options = {
                method: 'DELETE',
                url: '/crawls/100000000000000000000001',
                credentials: {
                    _id: '000000000000000000000001'
                }
            };
            app.inject(options, function(res){
                expect(res.statusCode).to.equal(200);
                var crawlId = JSON.parse(res.payload).crawlId;
                expect(crawlId).to.equal('100000000000000000000001');
                Crawler.find({_id: crawlId}, function(err, crawls){
                    Img.find({crawlId: crawlId}, function(err, images){
                        expect(crawls).to.have.length(0);
                        expect(images).to.have.length(0);
                        done();
                    });
                });
            });
        });
    });

});

