var request = require('supertest'),
	should = require('should-http');
	
describe('student', function(){
	var url = 'localhost:5000';
	describe('find()', function(){
		it('should retrieve all student record', function(done){
			request(url)
				.get('/students')
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);
					done();
				});
		});
	});
	
	describe('insert()', function(){
		it('should return a newly created student record', function(done){
			request(url)
				.post('/students')
				.send({
					'studNo': '2000-00000',
					'name': 'HUHUHU',
					'bdate': '1111-11-11'
					})
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.should('studNo'== '2000-00000');
					res.should.have.properties({
						studNo: '2000-0000',
						name: 'HUHUHU',
						bdate: '1111-11-11'
					});
					done();
				});
		});
	});
	
	describe('findOne()', function(){
		it('should retrieve an existing student record', function(done){
			request(url)
				.get('/students/2013-09758')
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					done();
				});
		});
	});
	
	describe('update()', function(){
		
	});
	
	describe('remove()', function(){
		
	});
});