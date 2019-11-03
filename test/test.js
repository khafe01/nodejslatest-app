var request = require('supertest');
var app = require('../index.js');
var mocha = require('mocha')
var assert = require('assert');
var before = require ('mocha').before;
var expect = require('chai').expect;
describe('GET /', function() {
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello csp world new updates 3', done);
 });
});