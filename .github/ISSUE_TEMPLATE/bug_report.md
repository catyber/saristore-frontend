Cover image for A Look into How I Manage My Personal Projects (My Git/GitHub Workflow)
A Look into How I Manage My Personal Projects (My Git/GitHub Workflow)
#productivity #github
jorenrui profile image
Joeylene Rivera
May 15 ・14 min read
I'll discuss how I create and manage my projects using Git/GitHub. Also, I'll be tackling how I use GitHub's project boards, issues, and pull requests.

Note: This is NOT a comprehensive tutorial about Git/GitHub so I won't dive deep into those topics.

Photo by Yancy Min

Like anyone who first started using Git, when I start working on a project, I just create a GitHub repository then commit directly to the master branch. I don't branch out from master whenever I'm working on a feature or a bug fix.

Tho as I started growing, meeting new devs, and gain experience in working as a developer, I started to rethink my way of creating projects. Since most of my commits are "Fix typo", "Refactor code", and commits like "Welp" lol, my git logs ended up kinda messy. So with that, I decided to re-work my workflow 😉

PS: Although this is my GitHub workflow, you can also do it on GitLab or other git hosting providers.

Table of Contents
Project Overview
Setting up
Project Boards
Issues and Milestones
Milestones
Issues
Task Issue
Epic Issue
Bug Report
GitHub Templates
Branching out
Templates
Task Issue Template
Epic Issue Template
Bug Report Template
Pull Request Template
Commiting
Pull Request
Merging Branches
1. Project Overview
For this post, I'm gonna create the frontend of a book database app wherein I can store books that I've read and books I'm planning to read.

Why create a specific app?

I just prefer explaining my workflow using an existing app, rather than an app called "my-awesome-project" as I did in the past. Tho I'm not gonna finish it hahaha or will I? I'll just use it for explanations. I'll also be using VS Code.

2. Setting Up
a. To get started, let's create a folder for the repository and set up the initial files.

In this case, I named the folder hondana-app and worked on a NextJS-Styletron-Baseweb initial setup.

Visual Studio Code with a Google Chrome browser on top that says "Hello World"

b. Then initialize the project as a git repository using either the "Initialize Repository" button found in VS Code or by running git init in a terminal.

c. Afterward, let's do an Initial Commit like so:

VS Code with the version control sidebar opened

d. After that, it's time to use GitHub 😁 Btw I just google translate "bookshelf" to Japanese, in case you're curious about the name, hondana app.

Creating a GitHub repository

A new GitHub repository that doesn't have files yet

e. Then let's push the initial commit. But first gotta add the remote origin:
git remote add origin https://github.com/jorenrui/hondana-app.git
git push -u origin master
f. Now we are all done setting up!

A GitHub repostiory that has an initial commit

3. Project Boards
In GitHub, you can create project boards to manage your repository. With this, you can put all your notes and tasks (issues and pull requests) in a single place.

Empty Project Tab of a GitHub Repository

To create a project board, go to your repository. After that, go to the Projects Tab then click Create a project like how it is shown above.

For now, I'm going to name it as Hondana App. This project board is gonna be a roadmap for the app. Tho you can create multiple project boards for a single repository. For example, you may create a project board for your app's documentation, frontend, backend, etc.

Creating a new GitHub project board

GitHub also has a project template in which you can use. A Kanban Board has a Todo, In Progress, and Done column. As for me, I prefer using an automated kanban with reviews. With this, when issues and pull requests are automatically moved from To Do, In progress, Reviews and Done. Tho if you're the only one on a project then I suggest the automated kanban since there will be no code reviews.

Seleting a GitHub's Project Template

This board has five columns: Todo, in progress, review in progress, reviewer approved, and done. When you create a pull request, it will be added into the In progress column. When a code review is being done, it will move to Review in progress, if the reviewer has accepted your Pull Request, it will then be moved to Reviewer approved. Lastly, when you merge the pull request into the "master" branch it will be then be moved to Done.

An automated GitHub Project Board

Since this board is an automated one, we don't necessarily need to touch it. We just need to links our issues and pull requests to this board. I'll show you how to do it in the next part.

4. Issues and Milestones
Since the project board is all set up, let's now move on to creating some issues. Issues can either be tasks that you need to do or bugs that your application has.

Milestones
Tho before creating issues, first we need to create Milestones. These can be the goals you have for your app. It can also be the versions of your app. As for me, I use milestones in versioning my app.

For example, for the initial version of the hondana app, I plan to finish the following features:

User Authentication
View a list of books that I plan to read, currently reading, and have read
Add books wherein I can put status like to read, reading, and done
Delete the books in the app
For the second version of the app, I plan to finish the following features:

Add notes to books I have read
Add reviews and give a 5-star rating to the books that I have read
Add search functionalities
With this, all the issues and pull requests related to that version can be organized into a single milestone.

a. To start, go to the Issues Tab of the repository, then click Milestones.

A GitHub repo's Issue Tab that has no content yet.

b. After that, click Create a Milestone to create one.

A GitHub repo's milestone tab content

c. Then input the title of your milestone. Here, I put v1 as the milestone's title. You can also add a deadline in you want.

Creating a new milestone in GitHub

d. With this, you can now view your created milestones under Issues tab > Milestones.

A GitHub repo's milestone tab that has a v1 milestone

e. By clicking the milestone, you can easily see all the issues that are linked to it.

v1 milestone that doesn't have any issues yet

Issues
In creating you can either create it by going to the Issues Tab of your repository, like the image shown below, or by going into a specific milestone.

A GitHub's repo Issue Tab wherein the "New Issue" button is shown

In creating issues, a friend of mine taught me how I can categorize them:

Task Issue - a small task that can be part of an Epic Issue. This can be labeled as a "good first issue".
Epic Issue - a large task that is divided into small issues.
Bug Report - it contains information that is needed to fix a bug that the user has encountered.
To understand them a bit more, let's create our first issue.

Task Issue
A sample task issue

In this part, I'll show you how to create GitHub templates, but first, let's create those issues.

Issue Title. As you can see, I named the issue title as Task: Add Github Templates since this is a task issue.
Description. There's a format I follow in creating issues wherein I write the following:
Task Title
Description
Linked Epic Issue (optional)
In this case, there's no linked epic issue yet. I'll show you the format in a bit.
Assignees. I assigned it to myself since I'm the only one working on this project.
Labels. GitHub has default labels in which you can use. Tho you may customize it and add some new ones if you want. Anyways, Tasks/Epics are commonly labeled as "enhancement" or "documentation". Tho in this case, I decided to add "enhancement" as its label since I think of templates as features.
GitHub's list of labels

Projects. By adding the project board that we've made earlier, we may now see the issues' progress. As you can see, linking the issue will automatically put it to the Todo column of the board. Since this is an automated project board, you don't need to move this card by yourself.
A Project Board that contains a single task issue

Milestones. After linking the issue to the v1 milestone of the app. You can now see the issue under it.
A v1 milestone that contains single issue

Since the task issue is done, we can now move on to the Epic Issue.

A GitHub task issue

Epic Issue
Now, let's create an epic issue regarding the library page of the application.

A sample epic issue

Issue Title. As you can see, I named the issue title as "Feature: Library Page" since this is an epic issue.
Description. There's a format I follow in creating epic issues wherein I write the following:
Epic Title
Description
List of Tasks
In this case, the task issues aren't linked yet since those issues haven't been created yet.
Assignees. I assigned it to myself since I'm the only one working on this project.
Labels. I added the enhancement label. Since this is a feature request.
Projects. Adding it will automatically put the issue card into the To Do column of the project board:
A project board that contains two issues

Milestones. Linking it to the v1 milestone will make it appear under it. Also since the epic issue is composed of tasks, you'll see the progress of the issue based on the checklist like shown below:
A v1 milestone that contains two issues

Since the epic issue is created, let's now create those tasks.

In these tasks, we can now link its epic parent which is Feature: Library Page #2.

A task issue with the title of "Task: Done Reading Tab Panel #6"

Issues tab that contains a lot of issues

After creating all the tasks, we can now update the epic issue and link the tasks.

An epic issue highlighting the linked tasks

After that, you're all done.

Bug Report
Since the Hondana App has no bugs yet, let me show a sample bug in my create-project repo.

A sample bug report

Issue Title. As you can see, I named the issue title as "Bug: Fix broken links in npm" since this is a bug report.
Description. There's a format I follow in creating bugs wherein I write the following:
Title
Description
Steps to reproduce the bug (optional)
Expected result (optional)
Actual result (optional)
Assignees. I assigned it to myself since I'm the only one working on this project.
Labels. I added the bug label. Since this is a bug report.
Projects. Adding it will automatically put the issue card into the To Do column of the project board.
5. GitHub Templates
Now it's time to show you how to create GitHub templates! So in this part we'll be working on this issue: Task: Add GitHub Templates #1.

Branching Out
Whenever I'm working on a feature request or bug fix. I first create a branch from the master branch (sometimes it can be the develop branch).

For naming the branch I follow this format:

Bug Fix: hotfix-issue-name
Feature Request: feature-issue-name
So in this example, I'll create feature-github-templates from the master branch:
# Create a branch named `feature-github-templates` from the current branch
git checkout -b feature-github-templates
Then you'll automatically be switch to your newly created branch. After that let's create the template files.

Templates
To create some GitHub templates, create a folder named .github in the root directory of your app name. That's where your templates will reside.
# Create a directory/folder named `.github`
mkdir .github
Then create a folder named ISSUE_TEMPLATE. This is where the templates for the task, epic, and bug issue will reside.
# Create a directory/folder named 'ISSUE_TEMPLATE' under `.github`
mkdir .github/ISSUE_TEMPLATE
Then create the files for the issue templates and the pull request template.
# Create the markdown files
touch .github/ISSUE_TEMPLATE/bug_report.md
touch .github/ISSUE_TEMPLATE/epic_issue.md
touch .github/ISSUE_TEMPLATE/small_issue.md
touch .github/PULL_REQUEST_TEMPLATE.md
The created files will be like this:

The root directory of the app shown in tree view

Task Issue Template
The small_issue.md will contain the following:
---
name: Task
about: A small task that is, most likely, part of an Epic. It will usually be labeled as `good first issue`.
---

<!-- Issue title should mirror the Task Title. -->

# Task Title

Task: Awesome Task Title

## Task Description

This Task will...

## Epic Parent

<!-- The link below should link to its Epic Parent. -->

[Feature: Awesome Feature Title](https://github.com/username/repository-name/issues/1)
Epic Issue Template
The epic_issue.md will contain the following:
---
name: Epic
about: A task large enough that it needs to be divided into smaller tasks. It will usually be labeled as `enhancement`.
---

<!-- Issue title should mirror the Epic Title. -->

# Epic Title

Feature: Awesome Feature Title

## Epic Description

This Feature will...

## List of Tasks (Complete in order)

1. [ ] [Task 1: Awesome Task Title](https://github.com/username/repository-name/issues/1)
2. [ ] [Task 2: Awesome Task Title](https://github.com/username/repository-name/issues/2)
Bug Report Template
The bug_report.md will contain the following:
