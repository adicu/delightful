// Should probably use a templating engine here, or server-side includes, or $.load()
// But this is easier to read, and should only ever get called once per page load
const load_navbar = function() {
    var nav_people = ['Will', 'Chris', 'Erinn', 'Isaiah', 'Kendal', 'James', 'Lalitha', 'Iliana', 'Alice', 'Yefri', 'Amy'];
    var nav_contents = '<div class="row">';
    var post_html = '</a></div>';

    for(var i=0; i<nav_people.length; i++) {
        var pre_html = '<div class="column"><a href="#' + nav_people[i] + '">';
        nav_contents = nav_contents + pre_html + nav_people[i] + post_html;
    }

    nav_contents = nav_contents + '</div>';
    $('#nav-target').html(nav_contents);
};

$(document).ready(function() {
    load_navbar();
});
