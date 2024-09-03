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
### [{{post.title}}](/{{post.permalink}})
Author: {{post.data.author}}

Published on: {{post.published_date | date: "%A, %B %d %Y at %r"}}, GMT+6:30

{{post.excerpt | strip_html}}

{%endfor%}

{%if paginator.previous_index or paginator.next_index%}
## Pagination
{{paginator.index}} / {{paginator.total_indexes}}

{%if paginator.previous_index%}
<a href="/{{paginator.previous_index_permalink}}">Previous</a>
{%endif%}
{%if paginator.next_index%}
<a href="/{{paginator.next_index_permalink}}">Next</a>
{%endif%}
{%if paginator.previous_index%}

<a href="/{{paginator.first_index_permalink}}">First</a>

{%endif%}
{%if paginator.next_index%}

<a href="/{{paginator.last_index_permalink}}">Last</a>

{%endif%}
{%endif%}