
Dell@SUHANI MINGW64 ~
$ git --version
git version 2.47.0.windows.1

Dell@SUHANI MINGW64 ~
$ git config --global user.name "Suhani"

Dell@SUHANI MINGW64 ~
$ git config --global user.email "ssuhani2909@gmail.com"

Dell@SUHANI MINGW64 ~
$ git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.email=ssuhani2909@gmail.com
user.name=Suhani

Dell@SUHANI MINGW64 ~
$ git config --global core.editor "\"/c/Program Files/Notepad++/notepad++.exe\" -multiInst -nosession"

Dell@SUHANI MINGW64 ~
$ git config --global -e

Dell@SUHANI MINGW64 ~
$

Dell@SUHANI MINGW64 ~
$ mkdir GitDemo

Dell@SUHANI MINGW64 ~
$ cd GitDemo

Dell@SUHANI MINGW64 ~/GitDemo
$ git init
Initialized empty Git repository in C:/Users/Dell/GitDemo/.git/

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ ls -a
./  ../  .git/

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ echo "Welcome to Git Demo" > welcome.txt

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ ls
welcome.txt

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git add welcome.txt
warning: in the working copy of 'welcome.txt', LF will be replaced by CRLF the next time Git touches it

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git commit
[master (root-commit) 10ae128] Added welcome.txt file
 1 file changed, 1 insertion(+)
 create mode 100644 welcome.txt

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git remote add origin https://gitlab.com/ssuhani2909-group/GitDemo.git

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git pull origin master --allow-unrelated-histories
info: please complete authentication in your browser...
fatal: couldn't find remote ref master

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git pull origin master --allow-unrelated-histories
fatal: couldn't find remote ref master

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ ^C

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git pull origin main --allow-unrelated-histories
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (3/3), 2.74 KiB | 400.00 KiB/s, done.
From https://gitlab.com/ssuhani2909-group/GitDemo
 * branch            main       -> FETCH_HEAD
 * [new branch]      main       -> origin/main
Merge made by the 'ort' strategy.
 README.md | 93 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 93 insertions(+)
 create mode 100644 README.md

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git push origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 545 bytes | 545.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote:
remote: To create a merge request for master, visit:
remote:   https://gitlab.com/ssuhani2909-group/GitDemo/-/merge_requests/new?merge_request%5Bsource_branch%5D=master
remote:
To https://gitlab.com/ssuhani2909-group/GitDemo.git
 * [new branch]      master -> master

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git push origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://gitlab.com/ssuhani2909-group/GitDemo.git'

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://gitlab.com/ssuhani2909-group/GitDemo.git'

Dell@SUHANI MINGW64 ~/GitDemo (master)
$ git status
On branch master
nothing to commit, working tree clean