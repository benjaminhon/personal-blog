---
layout: post
title: Git Cheat Sheet
tags: [engineering]
---

# Initializations


```shell
# Initialize Repository
git init

# Show Remotes
git remote -v

# Add Remote
git remote add origin git@github.com:username/repo.git

# Change Remote
git remote set-url origin git@github.com:username/repo.git
```

# Pull / Fetch / Merge


```shell
# Pull - Fetch + Merge
git pull origin <branch>

# Hard Reset
git fetch --all
git reset --hard origin/<branch>

# Fetch and Merge Selected File/Folder
git fetch origin master
git checkout FETCH_HEAD path/to/file/or/folder
```

# Add / Commit / Push


```shell
# Add All Files
git add -A

# Commit
git commit -m "message for commit"

# Push
git push origin <branch>

# Push Folder to Subtree
git subtree push --prefix <folder> origin <branch>
```

# Delete History


```shell
git filter-branch --tree-filter 'rm -rf <folder>' --prune-empty HEAD
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
git commit -m '<message>'
git gc
git push origin master --force
```

# Special Functions


```shell
# Create Bare Repository
mkdir repository.git
cd repository.git
git init --bare
```

# Notes


**Bare repositories** don't have a working tree (no history of modifications and changes), so you can't add files to them using *git add* or *git commit*. Instead you commit a bare repository by **pushing** to it from your local clone. To have central repository the only way it is to have a bare repository.