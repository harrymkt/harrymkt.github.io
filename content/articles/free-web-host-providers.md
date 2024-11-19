---
type: blog
title: "Free web hosting providers"
date: 2024-09-04T22:30:00+06:30
description: "Best free hosting providers at all times!"
categories: [web development]
authors: [Harry Min Khant]
---
Do you want to get your website up and running but can't find free hosting services and don’t want to spend a lot of money? Look no further!
<!--more-->

Here is a list of two free hosting providers that might meet your needs. Please note that you should review the privacy section of each provider before use. These hosting providers are consistently regarded as the best, and I have personally tested all of them. Warning: None of these providers allow the use of their services for file sharing or promoting illegal content. Please refer to their documentation for more information about these limitations and to understand what is allowed on the platform, so you can make an informed decision about which provider to use for your site.

## GitHub
[GitHub](https://github.com) is a place to collaborate on open source projects. However, it provides what it calls Github Pages which allows you to host your websites through various means. You can host under the domain github.io or a custom domain if you have one. Hosts directly from your GitHub repository. Just edit, push, and your changes are live.

Warning! All contents hosted on GitHub are publically available. You may want to remove private contents before you publish.

If you don't have a domain, GitHub has its subdomain, **username.github.io**, where username is your GitHub username.
* GitHub gives you one main site under your account and unlimited project sites. A project site is a separate website associated with a repository, distinct from folders on the main site. This effectively means that each project site functions as an add-on domain.
* GitHub provides limited storage of 1 GB for all your sites combined. For example, if you have a main site as well as project sites A, B, and C, and you use 250 MB on the main site, 250 MB on project A, 400 MB on project B, and 100 MB on project C, you would have reached the storage limit. However, don't worry—1 GB is plenty of space for static files. It's a good idea to avoid using large files directly on your site. Instead, you can use external services to host them and include links to those files in your web scripts.
* GitHub provides limited bandwidth of 100 GB per month.
* GitHub provides limited 10 builds per hour. This does not apply if you deploy your site through GitHub actions.
* GitHub forces SSL if you use the subdomain **github.io**, meaning your site will only serve over HTTPS. Great, you don't have to manually set CNAME records.
* You can create actions on GitHub to deploy your sites.
* Write in simple markdown files, and deploy through site generators automatically with GitHub actions.
* GitHub is considered faster than the other web host and full uptime.
* You cannot use server side on GitHub, eg PHP, Python.
* GitHub does not display ads.

GitHub page host documentation is available [here](https://pages.github.com/).

Do you love my website? That's it then! It is hosted on GitHub.

## InfinityFree
[InfinityFree](https://infinityfree.com/) is another alternative free web hosting provider.
* No ads on your site, but it may display ads on their website and control panel.
* 99.9% Uptime.
* You can get 3 websites for free accounts.
* Bring your own domain name or pick a free subdomain from 25+ extensions.
* 5 GB Disk Space.
* Unlimited Bandwidth.
* PHP 8.2.
* MySQL 8.0 / MariaDB 10.6.
* 400 MySQL Databases.
* Free DNS Service.
* Free SSL Certificates, you will need to renew before it expires.
* Full .htaccess Support.
* Use CMS systems like WordPress.
* Contents you publish are private, only you can access via FTP.

## Conclusion
Choosing the best provider will depend entirely on your specific requirements and needs. Here are some thoughts on which provider to choose for what:
* Choose GitHub if you want a reliable uptime experience, faster web load times, and are comfortable with your content being visible to the public.
* Choose GitHub if you want to automate your builds, write in Markdown files for deployment, and don’t require a database. You can utilize static site generators to build and deploy your site automatically.
* Choose InfinityFree if you want to keep your content hidden from the public, utilize CMS software, work with databases, and use server-side languages like PHP. It offers 5 GB of storage space for free, with the option to upgrade to premium plans for additional features.
	
	You can also use GitHub to build your website through a static site generator, and then have the FTP GitHub action uploaded to the server using FTP, with addition of GitHub's secrets feature to securely store usernames and passwords.