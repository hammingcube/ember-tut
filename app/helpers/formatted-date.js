import Ember from 'ember';

import { formatDate } from '../utils/date-helpers';

export default Ember.Handlebars.makeBoundHelper(function(date, format) {
	return formatDate(date, format);
});

//export function formattedDate(params/*, hash*/) {
//  return params;
//}

//export default Ember.Helper.helper(formattedDate);
