+++
title="All About Zola"
updated=2024-10-03T10:39:00+06:30
date=2024-10-02T22:00:00+06:30
description="A static site generator written in Rust"
+++
[Zola](https://getzola.org/ "Official website") is a static site generator written in Rust language powered by [Tera](https://keats.github.io/tera/) as its templating engine.
<!--more-->
It is one of the well-known static site generators available today, designed to be easy, flexible, and lightweight. You write your site's content in Markdown, and Zola will build the site for you as HTML files, ready to be served on your server. While other static site generators are available, they are not as simple as Zola, which requires no additional libraries to install. This makes it a perfect, time-saving solution for speed, stability, clean layouts, and ease of use.

## Features
* No dependencies; Zola comes as a single executable with Sass compilation, syntax highlighting, table of contents and many other features that traditionally require setting up a dev environment or adding some JavaScript libraries to your site.
* Blazing fast; The average site will be generated in less than a second, including Sass compilation and syntax highlighting.
* Scalable; Zola renders your whole site as static files, making it trivial to handle any kind of traffic you will throw at it at no cost without having to worry about managing a server or a database.
* Easy to use; From the CLI to the template engine, everything is designed to be intuitive. Don't take my word for it though, look at the [documentation](https://getzola.org/documentation) and see for yourself.
* Flexible; Zola gets out of your way so you can focus on your content, be it a blog, a knowledge base, a landing page or a combination of them.
* Augmented Markdown; Zola comes with [shortcodes](https://getzola.org/documentation/content/shortcodes) and [internal links](https://getzola.org/documentation/content/linking) to make it easier to write your content.
* Theme; Zola's build-in provided [theme](https://getzola.org/documentation/themes/overview) feature allows you to create your own custom themes, whether to publish on the official themes page, or to share with other users. Along with it, the [template](https://getzola.org/documentation/templates/overview) feature allows your theme to let users customize easily using blocks and the ability to extend the templates by having a base template, from which the child templates can be easily extended.

## Installation
Zola doesn't need to be installed. Just download an [available release](https://github.com/getzola/zola/releases) and extract the zip.
Make sure to create a folder named **zola** in a suitable location on your disk, typically where you plan to store the Zola executable. Place all files in this folder; only **zola.exe** is required, while other files and folders are optional.

On Windows, it is recommended to add the zola executable to the environment variable.

1. Search for "Environment" in the Start menu and click on **Edit the system environment variables**.
2. In the System Properties window, click **Environment Variables**, then click **New**.
3. In the Variable name field, type `zola` or any name you prefer. This will be used to interact with Zola.
4. Click **Browse File**, and select the Zola executable file.
5. Save all the changes you made to the environment variables.

To interact with zola, you can use `%your_zola_var_name`, for example, `%zola%`.

## Usage
Navigate to the directory where you want Zola to build your site.

Next, press **F4** to open the address bar, select all the text, and delete it. Then, type `cmd` and press Enter.

You are now in the Command Prompt window. We will refer to this as the Command Prompt window, so make sure to remember how to access it as described in the steps above.

### init
Type the following command in your Command Promt window.
```bash
%zola% init mysite
```
Replace mysite with your site name

You will be asked a few questions.
* What is the URL of your site? (https://example.com):
* Do you want to enable Sass compilation? [Y/n]:
* Do you want to enable syntax highlighting? [y/N]:
* Do you want to build a search index of the content? [y/N]:

For more information on its usage, please visit the official website above.

## Themes
Well well well, here is the theme I created if you want to use it for accessibility. [Zluinav](https://github.com/harrymkt/zluinav)