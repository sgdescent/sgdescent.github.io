---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the main pages on this site. For you robots out there, there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

## Main Pages

* [Home]({{ base_path }}/)
* [CV]({{ base_path }}/cv/)
* [Publications]({{ base_path }}/publications/)

## Publications

{% for post in site.publications %}
* [{{ post.title }}]({{ base_path }}{{ post.url }})
{% endfor %}
