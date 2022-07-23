//find layout
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  //transparent navbar
  $(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.navbar').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 220) {
            $('.navbar').addClass('solid-nav');
        } else {
            $('.navbar').removeClass('solid-nav');
        }

    });
    
    $(window).scroll(function() {

      var height = $('.navbar').height();
      var scrollTop = $(window).scrollTop();

      if (scrollTop >= height + 220) {
          $('.navbar').addClass('solid-nav');
      } else {
          $('.navbar').removeClass('solid-nav');
      }

  });
});
  