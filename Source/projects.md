---
layout: default.liquid
title: Projects
permalink: /projects
data:
  projects:
    - name: "Endless Battle"
      type: "Game"
      url: "https://harrymkt.github.io/endless-battle"
      description: "A 3D offline shooting game for visually impaired"
---

# Projects
These projects are owned by <b id="ownername"></b>

{%if page.data.projects-%}
{%-for p in page.data.projects%}
## [{{p.name}}]({{p.url}})
Type: {{p.type}}.

{%if p.description -%}
<br>

{{p.description}}

{%- endif-%}
{%-endfor-%}
{%-else-%}
There are currently no projects available to show up.
{%-endif-%}