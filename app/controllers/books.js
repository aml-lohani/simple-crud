import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteBook: function(id) {
			this.store.findRecord('book', id).then(function(book){
				book.deleteRecord();

				book.save();
			});
		}
	}
});
