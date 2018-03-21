
class Parallel{
	constructor({ parallelJobs } = {}){
		this.parallelJobs = parallelJobs;
		this.callQueue = new Map();
		this.pool = new Map();
		this.poolKeys = this.pool.keys();
		this.result = [];
		this.poolEnd;
	}

	startQueue(id) {
		this.callQueue.get(id).then((value) => {
			this.clearItem(id);
			this.result.push(value);
			this.work(this.getNextKey(this.pool));
		});

	}
	addToQueue(id) {
		if(this.callQueue.size < this.parallelJobs) {
			if(!this.callQueue.has(id) && this.pool.has(id)) {
				this.callQueue.set(id, this.pool.get(id)());
				this.startQueue(id);
			}
		}
		return this;
	}
	clearItem(id) {
		this.callQueue.delete(id);
		this.pool.delete(id);
	}
	clearAll() {
		this.callQueue.clear();
		this.pool.clear();
	}
	poolEnd() {}
	done(func) {
		this.poolEnd = func;

		return this;
	}
	getNextKey() {
		return this.poolKeys.next().value;
	}
	getId() {
		return '_' + Math.random().toString(36).substr(2, 9);
	}
	jobsPool(func) {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => func(resolve), 0);
		});

		return promise;

	}
	work(id) {
		if(this.pool.size > 0) {
			this.addToQueue(id);
		} else {
			this.poolEnd(this.result);
			this.clearAll();
		}
		
	}
	job(func) {
		const id = this.getId();
		this.pool.set(id, this.jobsPool.bind(this, func));
		this.work(id);

		return this;
	}
}


const runner = new Parallel({
	parallelJobs: 2
});

let result = 'before/';

runner
	.job(step0)
	.job(step1)
	.job(step2)
	.job(step3)
	.job(step4)
	.done(onDone);


result += 'after/';

function step0(done) {
	console.log('step0');

	result += 'step0/';
	
	done('step0');
}

function step1(done) {
	console.log('step1');
	
	result += 'step1/';
	
	setTimeout(done, 3000, 'step1');
}

function step2(done) {
	console.log('step2');

	result += 'step2/';

	setTimeout(done, 1500, 'step2');
}

function step3(done) {
	console.log('step3');

	result += 'step3/';

	setTimeout(done, 2000, 'step3');
}

function step4(done) {
	console.log('step4');
	
	result += 'step4/';
	
	setTimeout(done, 500, 'step4');
}

let isPassed = false;
function onDone(results) {
	console.log('onDone', results, result);

	console.assert(Array.isArray(results), 'expect result to be array');
	console.assert(results.length === 5, 'the results length must be 5');
	console.assert(results[0] === 'step0', 'Wrong answer 1');
	console.assert(results[1] === 'step1', 'Wrong answer 2');
	console.assert(results[2] === 'step2', 'Wrong answer 2');
	console.assert(results[3] === 'step3', 'Wrong answer 3');
	console.assert(results[4] === 'step4', 'Wrong answer 4');
	console.assert(result === 'before/after/step0/step1/step2/step3/step4/', 'Wrong steps');
	console.log('Thanks, all works fine');
	
	isPassed = true;
}

setTimeout(() => {
	if(isPassed) return;

	console.error('Test is not done.');
}, 10000);