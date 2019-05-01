---
layout: post
title: SSH Basics
tags: [engineering]
---

# Definitions

remote 

- something elsewhere (eg. a remote server you want to access)

local

- where you are working from (eg. a desktop)

# Problem

1. You want to access your **remote server** from your **local machine** while keeping others out.
2. You want to **encrypt** the communication to and from your server.
3. You don't want to keep typing in your password.

# Solution

SSH works by generating a pair of keys. 

- A *private* key, which identifies **you**
- A *public* key which you store on the remote server you want to connect to.

The magic here is that, you **cannot generate the private key from the public key**, however, **ONLY** the private key can unlock the public key.

This means that you can pass your **public key** around freely, without worrying that anyone can unlock it, because only you have the correct **private key** to unlock it.

# Setting up

On your local machine, generate a pair of keys, a private key that identifies you, and a public key that you can pass around (to the server that you want to access).

```shell
ssh-keygen -t rsa
```

At this point, it would prompt you for a **passphrase**. This is an **additional layer of security** which is **optional**, if you choose not to use it just leave it empty. Setting a passphrase will configure your keys such that you would have to enter a passphrase to use it. In the event that someone steals your **private key**, he would have access to all your servers. Adding this additional layer means that he would not only need your private key, but your passphrase as well.

```shell
# on your local machine
~/
  .ssh/
    id_rsa      # your private key, don't give this out!
    id_rsa.pub  # public key for handing out to remote server
```

Now, access your remote server and create the *~/.ssh directory* if it does not already exist. Copy the contents inside *ida_rsa.pub* into the file *~/.ssh/authorized_keys* (make it if it does not exist). 

```shell
# on your remove server
~/
  .ssh/
    authorized_keys
```

the **authorized_keys** file would contain more than one public keys depending on how many users negotiate access to it.

Now, when you SSH into your server, your would not need a password and the channel would be secure

```shell
ssh user@172.164.120.133
```

# Permission keys

There can be another case in which the server generates and stores the **public key**, and then gives you the **private key**. This is typical when you sign up for a AWS server with Amazon. in this case, you should not use the id_rsa key that you generated yourself, but the private key that was given to you. To SSH using a custom private key:

```shell
shh -i ./path/to/private/key.pem user@172.164.120.133
```
