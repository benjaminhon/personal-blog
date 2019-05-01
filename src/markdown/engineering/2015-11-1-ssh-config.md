---
layout: post
title: SSH Config
tags: [engineering]
---

# Why

Setting up a SSH config file provides a convenient way to:

- connect to the host/remote via SSH
- upload files via SCP
- push a git repository to the host
- etc ...

# Setting up a config file

Create the config file *~/.ssh/config* if it does not already exist

```shell
~/
  .ssh/
    config
```

Add an entry to the config file, for example

```shell
Host                circuitmonk
  HostName          www.circuitmonk.com
  User              ec2-user
  IdentityFile      /Path/to/your/ssh/private/key.pem
  IdentitiesOnly    yes
```

Now, we can ssh into the host more conveniently

```shell
# more convenient
ssh circuitmonk

# instead of
ssh -i path/to/ssh/private/key ec2-user@www.circuitmonk.com
```

# SCP

We can copy files from our local machine to the host

```shell
scp /local/file circuitmonk:/path/on/host

# instead of
scp -i path/to/ssh/private/key /local/file ec2-user@www.circuitmonk.com:/path/on/host
```

# Git push

Pushing to a remote git repository on the host is also easy

```shell
git remote add circuitmonk circuitmonk:/path/to/git/repository/on/host
git push circuitmonk +master:refs/heads/master
```
