---
layout: default.liquid
title: Categories
permalink: /categories
pagination:
  include: Categories
  per_page: 5
  permalink_suffix: "./{{num}}/"
  order: Desc
  sort_by: ["published_date"]
---
{%if paginator.index_title%}# Category: {{paginator.index_title}}{%endif%}
{% if paginator.indexes %}
# {%if paginator.index_title%}Subc{%else%}C{%endif%}ategories, {{paginator.indexes | size}} items
{% for ptag in paginator.indexes %}
<a href="/{{ ptag.index_permalink }}/">{{ ptag.index_title | last}} ({{ ptag.total_pages }} posts)</a>
{% endfor %}
{%endif%}

{%if paginator.pages%}
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
{%endif%}

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