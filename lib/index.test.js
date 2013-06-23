var should = require('should'),
    glia = require('./'),
    fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn;

suite('Glia', function () {
    suite('db', function () {
        var db = glia.db('./case'); 

        test('instance', function ( done ) {
            db.connected().should.be.true;
            done();
        });    

        test('insert', function ( done ) {
            db.insert({ a: 1 });

            data._data.should.have.lengthOf( 1 );
            done();
        });

        test('save', function ( done ) {
            db.save(function ( err, status ) {
                status.should.be.true;
                done();
            });
        });
    });
});
