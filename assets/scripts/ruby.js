$(function () {
  $('.main-section').each(function () {
    $(this).html(
      $(this).html()
        .replace(/[\|｜](.+?)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
        .replace(/《《(.+?)》》/g, function (match, p1, offset, string) {
          var boten = "﹅".repeat(p1.length);
          return "<ruby>" +p1+ "<rt>" + boten + "</rt></ruby>";
        })
    );
  });
});