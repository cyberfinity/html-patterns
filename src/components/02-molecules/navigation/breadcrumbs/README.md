## Usage

A breadcrumb trail on a page indicates the page's position in the site hierarchy. A user can navigate all the way up in the site hierarchy, one level at a time, by starting from the last breadcrumb in the breadcrumb trail.

## Implementation details

As per the [HTML5 spec's recommendation](https://html.spec.whatwg.org/multipage/scripting.html#rel-up), the basic structure of breadcrumbs component is a series of links in a paragraph, wrapped in a `<nav>` element. This has the benefit of rendering the links on one line without the need for any CSS.

However, this component's markup is further enhanced with some ARIA attributes, as per ["Accessible Breadcrumbs" Gist by Jonathan Neal](https://gist.github.com/jonathantneal/4037764). Finally, following [Google's documentation](https://developers.google.com/search/docs/data-types/breadcrumbs), RDFa properties using the schema.org vocabulary have been added to help search engines recognise these links as a breadcrumb trail. Note that Google suggests using `<ol>` instead of a paragraph, but from an meta data perspective this should not matter - this component yields equivalent RDF triples.

## See also

* [Exploring Markup for Breadcrumbs](https://css-tricks.com/markup-for-breadcrumbs/) on CSS Tricks compares various methods, including "links in a paragraph" as used here.
