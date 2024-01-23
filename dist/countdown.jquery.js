(function ($) {
   $.fn.azeeraCountdown = (options) => {
      debugger;
      var settings = { 'date': null };
      if (options) {
         $.extend(settings, { 'date': options });
      }

      var date_val = settings['date'].split('-');
      const d = new Date(date_val[2], date_val[1] - 1, date_val[0]);
      function count_exec() {

         eventDate = Date.parse(d) / 1000;
         currentDate = Math.floor($.now() / 1000);

         seconds = eventDate - currentDate;
         days = Math.floor(seconds / (60 * 60 * 24));

         seconds -= days * 60 * 60 * 24;

         hours = Math.floor(seconds / (60 * 60));
         seconds -= hours * 60 * 60;

         minutes = Math.floor(seconds / 60);
         seconds -= minutes * 60;

         days = (String(days).length !== 2) ? '0' + days : days;
         hours = (String(hours).length !== 2) ? '0' + hours : hours;
         minutes = (String(minutes).length !== 2) ? '0' + minutes : minutes;
         seconds = (String(seconds).length !== 2) ? '0' + seconds : seconds;

         $(".days").text(days);
         $(".hours").text(hours);
         $(".minutes").text(minutes);
         $(".seconds").text(seconds);
      }

      count_exec();
      interval = setInterval(count_exec, 1000);
   }
})($);