'use strict';

(function($) {
  $(document).ready(function() {
      // Add your jQuery code here
        $("input.datepicker").datepicker({ 
          dateFormat:' d/mm/yy',
          showOtherMonths: true,
          selectOtherMonths: true,


          beforeShowDay: function(date) {
            var day = date.getDay();
           return [(day != 1 && day != 2 && day != 3 && day != 4 && day != 5)];
          
            }

      });

  			 $('#test').click(function() {
        	var end = $('#endDate').datepicker('getDate');

       	  var start = $('#startDate').datepicker('getDate');

        	var $weekDiff = Math.ceil((end - start + 1) / (1000 * 60 * 60 * 24))/7;
         
          $('#totalWeeks').append ($weekDiff);
     		 
            })
      		 });
})(jQuery);
