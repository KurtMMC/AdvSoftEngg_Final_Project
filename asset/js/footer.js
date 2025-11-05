(function () {
  function buildFooterHtml() {
    var year = new Date().getFullYear();
    var brand = 'Telemedicine Online';
    return (
      '<strong>&copy; ' + year + ' ' + brand + '.</strong> ' +
      'All rights reserved.' +
      '<div class="float-right d-none d-sm-inline-block">' +
      '<a href="#" class="mr-3">Privacy</a>' +
      '<a href="#" class="mr-3">Terms</a>' +
      '<a href="#" class="mr-2" aria-label="Email"><i class="fas fa-envelope"></i></a>' +
      '<a href="#" class="mr-2" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
      '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
      '</div>'
    );
  }

  function ensureFooter() {
    var $footer = $('.main-footer');
    if ($footer.length === 0) {
      $footer = $('<footer class="main-footer"></footer>');
      var $contentWrapper = $('.content-wrapper');
      if ($contentWrapper.length > 0) {
        $footer.insertAfter($contentWrapper.first());
      } else if ($('.wrapper').length > 0) {
        $('.wrapper').append($footer);
      } else {
        $('body').append($footer);
      }
    }
    return $footer;
  }

  $(function () {
    try {
      var $footer = ensureFooter();
      $footer.html(buildFooterHtml());
    } catch (e) {
      // no-op
      console && console.warn && console.warn('Footer init failed', e);
    }
  });
})();
