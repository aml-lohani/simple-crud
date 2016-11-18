import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editBook: function(id) {
			var self = this;
			var title = this.get('model.title');
			var author = this.get('model.author');
			var description = this.get('model.description');

			//update book
			this.store.findRecord('book', id).then(function(book){
				book.set('title', title);
				book.set('author', author);
				book.set('description', description);

				//update to firebase database
				book.save();

				//redirect
				self.transitionToRoute﻿('books');
			});
		}
	}
});
