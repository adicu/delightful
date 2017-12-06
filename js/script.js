$(function() {

    var context = {
        people: [
            { name: "foo" },
            { name: "bar" },
            { name: "baz" }
        ]
    };

    var template_script = $("#template-script").html();
    var template = Handlebars.compile(template_script);
    var compiled_html = template(context);
    $("#navbar-script").html(compiled_html);

});
