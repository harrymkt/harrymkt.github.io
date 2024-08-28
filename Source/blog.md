---
layout: default.liquid
title: Blog
permalink: /blog
---

# {{ collections.posts.title }}
{{ collections.posts.description }}

## posts
{% for post in collections.posts.pages %}
### [{{ post.title }}](/{{ post.permalink }})
Published on: {{ post.published_date | date: "%A, %B %d %Y at %r" }}, GMT+6:30

{{ post.excerpt | strip_html }}

{% endfor %}