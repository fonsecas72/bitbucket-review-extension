$(document).ready(function () {

    var r = $('<input id="hide-top" type="button" value="Toggle This" style="margin: 4px 2em;"/>');
    $('div.aui-item.section-title').css("display", " -webkit-inline-box");
    $('div.aui-item.section-title').append(r);

    $("#hide-top").on("click", function () {
        $("h1.filename").on("click", function () {
            var filename = $(this).text().replace('File', '').trim();
            $("section[data-identifier='" + filename + "'] > div > div.diff-content-container.refract-container.word-diff").toggle();
        });
        $("#pull-request-header").toggle();

        $("ul.commit-files-summary").toggle();
        $('div.diff-content-container.refract-container.word-diff').toggle();

        $("h1.filename").each(function () {
            $(this).css("color", "black");
            $(this).css("font-weight", "bold");
        });
        $("#diff-tab-preload").toggle();

        $("section").each(function () {
            $(this).css("margin-top", "0px");
            $(this).css("min-height", "0px");
        });
    });

});
