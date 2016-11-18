import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addBook: function() {
			var title = this.get('title');
			var author = this.get('author');
			var description = this.get('description');

			//create new book
			var newBook	= this.store.createRecord('book', {
				title: title,
				author: author,
				description: description
			});

			//add to firebase database
			newBook.save();

			//clear form
			this.setProperties({
				title: '',
				author: '',
				description: ''
			})
		}
	}
});
