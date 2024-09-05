---
layout: default.liquid
title: Blog
permalink: /blog
pagination:
  include: All
  per_page: 5
  permalink_suffix: "./{{num}}/"
  order: Desc
  sort_by: ["published_date"]
---
# Blog
Here I will share my useful posts

## posts
{%for post in paginator.pages%}
{%assign posttitle=post.title%}
{%if post.description and post.description!=""%}
{%assign posttitle=posttitle | append: " (" | append: post.description | append: ")"%}
{%endif%}
### [{{posttitle}}](/{{post.permalink}})
Author: {{post.data.author}}

Published on: {{post.published_date | date: "%A, %B %d %Y at %r"}}, GMT+6:30

{{post.excerpt | strip_html}}

{%endfor%}

{%if paginator.previous_index or paginator.next_index%}
## Pagination
{{paginator.index}} / {{paginator.total_indexes}}

{%if paginator.previous_index%}
[Previous page](/{{paginator.previous_index_permalink}})
{%endif%}

{%if paginator.next_index%}
[Next page](/{{paginator.next_index_permalink}})
{%endif%}

{%if paginator.previous_index%}
[First page](/{{paginator.first_index_permalink}})
{%endif%}

{%if paginator.next_index%}
[Last page](/{{paginator.last_index_permalink}})
{%endif%}
{%endif%}