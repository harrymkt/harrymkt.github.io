+++
date = 2024-09-06T22:03:00+06:30
description = "A static site generator written in Rust"
title = "All About Cobalt"
keywords = ["Cobalt", "web", "generator"]
+++
[Cobalt](https://cobalt-org.github.io "Official website") is a static site generator written in Rust language powered by [Liquid](https://shopify.github.io/liquid) as its templating engine.
<!--more-->

It is one of the well-known static site generators available today, designed to be easy, flexible, and lightweight. You write your site's content in Markdown, and Cobalt will build the site for you as HTML files, ready to be served on your server. While other static site generators are available, they are not as simple as Cobalt, which requires no additional libraries to install. This makes it a perfect, time-saving solution for speed, stability, clean layouts, and ease of use.

## Features
- Simple: Cobalt will help you get up and running quickly but scales to handle your more complex cases.
- Easy: Cobalt tries to be no-hassle, from being easy to install, a workflow-centric command line, to a familiar template language.
- Fast: Written in Rust, Cobalt is blazing fast and allows you to quickly see the results of your work.
- Custom data: Use custom data files to efficiently represent your site, making it faster and easier to maintain data across the site. For example, you can manage page navigation, authors, and other essential data that may change over time.
- Open source: [Contribute](https://github.com/cobalt-org/cobalt.rs) to Cobalt in any way you like if it doesn't contain the features you need or if you found a bug. Make sure to review their [contribution guidelines](https://github.com/cobalt-org/cobalt.rs/blob/master/CONTRIBUTING.md) first before you interact with any contribution methods so you will have information on how you can contribute to it.

## Installation
Cobalt doesn't need to be installed. Just download an [available release](https://github.com/cobalt-org/cobalt.rs/releases) and extract the zip.
Make sure to create a folder named **cobalt** in a suitable location on your disk, typically where you plan to store the Cobalt executable. Place all files in this folder; only **cobalt.exe** is required, while other files and folders are optional.

On Windows, it is recommended to add the cobalt executable to the environment variable.

1. Search for "Environment" in the Start menu and click on **Edit the system environment variables**.
2. In the System Properties window, click **Environment Variables**, then click **New**.
3. In the Variable name field, type `cobalt` or any name you prefer. This will be used to interact with Cobalt.
4. Click **Browse File**, and select the Cobalt executable file.
5. Save all the changes you made to the environment variables.

To interact with cobalt, you can use `%your_cobalt_var_name`, for example, `%cobalt%`.

## Usage
Navigate to the directory where you want Cobalt to build your site.

Next, press **F4** to open the address bar, select all the text, and delete it. Then, type `cmd` and press Enter.

You are now in the Command Prompt window. We will refer to this as the Command Prompt window, so make sure to remember how to access it as described in the steps above.

### init
Type the following command in your Command Promt window.
```bash
%cobalt% init
```
Output:

Created new project at ./                                                                                               

For more information on its usage, please visit the official website above.