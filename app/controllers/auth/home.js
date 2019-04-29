import Controller from '@ember/controller';

export default Controller.extend({
	objects: [
		'Paper',
		'Scissor',
		'Rock'
	],

	init () {
		this.set('name', this.objects[0])
		this.set('numRandom', Math.floor(Math.random() * (4 - 1) + 1));
	},

	actions: {
		select(name) {
			this.set('name', name);
			if (name == 'Paper') {
				this.set('key', 1);
			} else if (name == 'Scissor') {
				this.set('key', 2);
			} else if (name == 'Rock') {
				this.set('key', 3);
			}
		},
		cueck () {
			this.set('numRandom', Math.floor(Math.random() * (4 - 1) + 1));
			if (this.key == this.numRandom) {
				this.set('text', 'Draw game')
			} else if (this.key == 1 && this.numRandom == 3) {
				this.set('text', 'You Win')
			} else if (this.key == 2 && this.numRandom == 1) {
				this.set('text', 'You Win')
			} else if (this.key == 3 && this.numRandom == 2) {
				this.set('text', 'You Win')
			} else {
				this.set('text', 'You Lose')
			}
		}
	}
});
